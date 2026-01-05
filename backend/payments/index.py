"""
API для работы с платежами через ЮKassa
Создание платежей, проверка статуса и обработка webhook'ов
"""
import json
import os
import psycopg2
from psycopg2.extras import RealDictCursor
import requests
from datetime import datetime, timedelta
import base64

def handler(event: dict, context) -> dict:
    method = event.get('httpMethod', 'GET')
    path = event.get('requestContext', {}).get('http', {}).get('path', event.get('path', '/'))
    
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
    
    shop_id = os.environ.get('YUKASSA_SHOP_ID', '')
    secret_key = os.environ.get('YUKASSA_SECRET_KEY', '')
    
    if method == 'POST' and '/create' in path:
        body = json.loads(event.get('body', '{}'))
        user_id = body.get('user_id')
        plan_type = body.get('plan_type')
        return_url = body.get('return_url', 'https://mamapomosh.ru/success')
        
        if not user_id or not plan_type:
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'user_id и plan_type обязательны'}),
                'isBase64Encoded': False
            }
        
        if plan_type not in ['before_birth', 'after_birth', 'growth']:
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'Недопустимый тип подписки'}),
                'isBase64Encoded': False
            }
        
        plan_names = {
            'before_birth': 'Перед родами',
            'after_birth': 'После родов',
            'growth': 'Время взращивания'
        }
        
        amount = 500.0
        
        if not shop_id or not secret_key:
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({
                    'payment_url': 'https://demo-payment.ru',
                    'payment_id': 'demo-payment-id',
                    'amount': amount,
                    'demo_mode': True,
                    'message': 'Платёжная система в демо-режиме. Для работы добавьте ключи ЮKassa.'
                }),
                'isBase64Encoded': False
            }
        
        try:
            auth_string = f"{shop_id}:{secret_key}"
            auth_header = base64.b64encode(auth_string.encode()).decode()
            
            payment_data = {
                'amount': {
                    'value': str(amount),
                    'currency': 'RUB'
                },
                'confirmation': {
                    'type': 'redirect',
                    'return_url': return_url
                },
                'capture': True,
                'description': f'Подписка "{plan_names[plan_type]}" на МамаПомощь',
                'metadata': {
                    'user_id': str(user_id),
                    'plan_type': plan_type
                }
            }
            
            response = requests.post(
                'https://api.yookassa.ru/v3/payments',
                headers={
                    'Authorization': f'Basic {auth_header}',
                    'Content-Type': 'application/json',
                    'Idempotence-Key': f'{user_id}-{plan_type}-{int(datetime.now().timestamp())}'
                },
                json=payment_data,
                timeout=30
            )
            
            if response.status_code in [200, 201]:
                payment = response.json()
                
                return {
                    'statusCode': 200,
                    'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                    'body': json.dumps({
                        'payment_url': payment['confirmation']['confirmation_url'],
                        'payment_id': payment['id'],
                        'amount': amount,
                        'demo_mode': False
                    }),
                    'isBase64Encoded': False
                }
            else:
                return {
                    'statusCode': 500,
                    'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                    'body': json.dumps({'error': f'Ошибка создания платежа: {response.text}'}),
                    'isBase64Encoded': False
                }
                
        except Exception as e:
            return {
                'statusCode': 500,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': str(e)}),
                'isBase64Encoded': False
            }
    
    if method == 'POST' and '/webhook' in path:
        body = json.loads(event.get('body', '{}'))
        
        if body.get('event') == 'payment.succeeded':
            payment_obj = body.get('object', {})
            payment_id = payment_obj.get('id')
            metadata = payment_obj.get('metadata', {})
            user_id = metadata.get('user_id')
            plan_type = metadata.get('plan_type')
            
            if user_id and plan_type:
                try:
                    db_url = os.environ['DATABASE_URL']
                    conn = psycopg2.connect(db_url)
                    cursor = conn.cursor()
                    
                    expires_at = datetime.now() + timedelta(days=30)
                    
                    cursor.execute(
                        "INSERT INTO subscriptions (user_id, plan_type, status, expires_at, payment_id) VALUES (%s, %s, 'active', %s, %s)",
                        (int(user_id), plan_type, expires_at, payment_id)
                    )
                    conn.commit()
                    
                    cursor.close()
                    conn.close()
                    
                except Exception as e:
                    print(f"Ошибка сохранения подписки: {e}")
        
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'status': 'ok'}),
            'isBase64Encoded': False
        }
    
    if method == 'GET' and '/status' in path:
        query_params = event.get('queryStringParameters', {}) or {}
        payment_id = query_params.get('payment_id')
        
        if not payment_id:
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'payment_id обязателен'}),
                'isBase64Encoded': False
            }
        
        if not shop_id or not secret_key:
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({
                    'status': 'succeeded',
                    'demo_mode': True
                }),
                'isBase64Encoded': False
            }
        
        try:
            auth_string = f"{shop_id}:{secret_key}"
            auth_header = base64.b64encode(auth_string.encode()).decode()
            
            response = requests.get(
                f'https://api.yookassa.ru/v3/payments/{payment_id}',
                headers={
                    'Authorization': f'Basic {auth_header}',
                    'Content-Type': 'application/json'
                },
                timeout=30
            )
            
            if response.status_code == 200:
                payment = response.json()
                return {
                    'statusCode': 200,
                    'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                    'body': json.dumps({
                        'status': payment['status'],
                        'paid': payment['paid']
                    }),
                    'isBase64Encoded': False
                }
            else:
                return {
                    'statusCode': 500,
                    'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                    'body': json.dumps({'error': 'Не удалось получить статус платежа'}),
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
