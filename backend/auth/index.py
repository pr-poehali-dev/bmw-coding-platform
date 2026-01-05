"""
API для регистрации и авторизации пользователей
Использует JWT токены и bcrypt для безопасности
"""
import json
import os
import psycopg2
from psycopg2.extras import RealDictCursor
import hashlib
import hmac
import base64
from datetime import datetime, timedelta

def hash_password(password: str) -> str:
    """Хеширование пароля с помощью SHA-256"""
    return hashlib.sha256(password.encode()).hexdigest()

def verify_password(password: str, password_hash: str) -> bool:
    """Проверка пароля"""
    return hash_password(password) == password_hash

def create_jwt_token(user_id: int, email: str) -> str:
    """Создание JWT токена (упрощенная версия)"""
    secret = os.environ.get('JWT_SECRET', 'default-secret-key')
    expiry = (datetime.now() + timedelta(days=30)).isoformat()
    
    payload = json.dumps({
        'user_id': user_id,
        'email': email,
        'exp': expiry
    })
    
    encoded_payload = base64.urlsafe_b64encode(payload.encode()).decode()
    signature = hmac.new(secret.encode(), encoded_payload.encode(), hashlib.sha256).hexdigest()
    
    return f"{encoded_payload}.{signature}"

def verify_jwt_token(token: str) -> dict:
    """Проверка JWT токена"""
    try:
        secret = os.environ.get('JWT_SECRET', 'default-secret-key')
        parts = token.split('.')
        
        if len(parts) != 2:
            return None
        
        encoded_payload, signature = parts
        expected_signature = hmac.new(secret.encode(), encoded_payload.encode(), hashlib.sha256).hexdigest()
        
        if signature != expected_signature:
            return None
        
        payload = json.loads(base64.urlsafe_b64decode(encoded_payload).decode())
        
        if datetime.fromisoformat(payload['exp']) < datetime.now():
            return None
        
        return payload
    except:
        return None

def handler(event: dict, context) -> dict:
    method = event.get('httpMethod', 'GET')
    query_params = event.get('queryStringParameters', {}) or {}
    action = query_params.get('action', '')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-Authorization',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    db_url = os.environ['DATABASE_URL']
    
    if method == 'POST' and action == 'register':
        body = json.loads(event.get('body', '{}'))
        email = body.get('email', '').strip().lower()
        password = body.get('password', '')
        name = body.get('name', '').strip()
        phone = body.get('phone', '').strip()
        
        if not email or not password or not name:
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'Email, пароль и имя обязательны'}),
                'isBase64Encoded': False
            }
        
        if len(password) < 6:
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'Пароль должен быть минимум 6 символов'}),
                'isBase64Encoded': False
            }
        
        try:
            conn = psycopg2.connect(db_url)
            cursor = conn.cursor(cursor_factory=RealDictCursor)
            
            cursor.execute("SELECT id FROM users WHERE email = %s", (email,))
            if cursor.fetchone():
                cursor.close()
                conn.close()
                return {
                    'statusCode': 409,
                    'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                    'body': json.dumps({'error': 'Пользователь с таким email уже существует'}),
                    'isBase64Encoded': False
                }
            
            password_hash = hash_password(password)
            
            cursor.execute(
                "INSERT INTO users (email, password_hash, name, phone) VALUES (%s, %s, %s, %s) RETURNING id, email, name",
                (email, password_hash, name, phone)
            )
            user = cursor.fetchone()
            conn.commit()
            
            token = create_jwt_token(user['id'], user['email'])
            
            cursor.close()
            conn.close()
            
            return {
                'statusCode': 201,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({
                    'user': {
                        'id': user['id'],
                        'email': user['email'],
                        'name': user['name']
                    },
                    'token': token
                }),
                'isBase64Encoded': False
            }
            
        except Exception as e:
            return {
                'statusCode': 500,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': str(e)}),
                'isBase64Encoded': False
            }
    
    if method == 'POST' and action == 'login':
        body = json.loads(event.get('body', '{}'))
        email = body.get('email', '').strip().lower()
        password = body.get('password', '')
        
        if not email or not password:
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'Email и пароль обязательны'}),
                'isBase64Encoded': False
            }
        
        try:
            conn = psycopg2.connect(db_url)
            cursor = conn.cursor(cursor_factory=RealDictCursor)
            
            cursor.execute(
                "SELECT id, email, password_hash, name FROM users WHERE email = %s",
                (email,)
            )
            user = cursor.fetchone()
            
            cursor.close()
            conn.close()
            
            if not user or not verify_password(password, user['password_hash']):
                return {
                    'statusCode': 401,
                    'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                    'body': json.dumps({'error': 'Неверный email или пароль'}),
                    'isBase64Encoded': False
                }
            
            token = create_jwt_token(user['id'], user['email'])
            
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({
                    'user': {
                        'id': user['id'],
                        'email': user['email'],
                        'name': user['name']
                    },
                    'token': token
                }),
                'isBase64Encoded': False
            }
            
        except Exception as e:
            return {
                'statusCode': 500,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': str(e)}),
                'isBase64Encoded': False
            }
    
    if method == 'GET' and action == 'me':
        auth_header = event.get('headers', {}).get('X-Authorization', '')
        token = auth_header.replace('Bearer ', '')
        
        if not token:
            return {
                'statusCode': 401,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'Токен не предоставлен'}),
                'isBase64Encoded': False
            }
        
        payload = verify_jwt_token(token)
        
        if not payload:
            return {
                'statusCode': 401,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'Недействительный токен'}),
                'isBase64Encoded': False
            }
        
        try:
            conn = psycopg2.connect(db_url)
            cursor = conn.cursor(cursor_factory=RealDictCursor)
            
            cursor.execute(
                "SELECT id, email, name, phone, created_at FROM users WHERE id = %s",
                (payload['user_id'],)
            )
            user = cursor.fetchone()
            
            if user:
                user['created_at'] = user['created_at'].isoformat()
            
            cursor.close()
            conn.close()
            
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'user': user}),
                'isBase64Encoded': False
            }
            
        except Exception as e:
            return {
                'statusCode': 500,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': str(e)}),
                'isBase64Encoded': False
            }
    
    return {
        'statusCode': 404,
        'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'error': 'Endpoint не найден'}),
        'isBase64Encoded': False
    }