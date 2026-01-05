"""
API для ИИ-чата с пользователями через YandexGPT
Сохраняет историю диалога в БД и генерирует ответы на базе контекста
"""
import json
import os
import psycopg2
from psycopg2.extras import RealDictCursor
import requests
from datetime import datetime

def handler(event: dict, context) -> dict:
    method = event.get('httpMethod', 'GET')
    
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
    
    if method == 'POST':
        body = json.loads(event.get('body', '{}'))
        user_id = body.get('user_id')
        message = body.get('message', '')
        
        if not user_id or not message:
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'user_id и message обязательны'}),
                'isBase64Encoded': False
            }
        
        try:
            db_url = os.environ['DATABASE_URL']
            conn = psycopg2.connect(db_url)
            cursor = conn.cursor(cursor_factory=RealDictCursor)
            
            cursor.execute(
                "SELECT plan_type FROM subscriptions WHERE user_id = %s AND status = 'active' ORDER BY expires_at DESC LIMIT 1",
                (user_id,)
            )
            subscription = cursor.fetchone()
            
            if not subscription:
                return {
                    'statusCode': 403,
                    'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                    'body': json.dumps({'error': 'Активная подписка не найдена'}),
                    'isBase64Encoded': False
                }
            
            plan_type = subscription['plan_type']
            
            cursor.execute(
                "SELECT role, content FROM chat_history WHERE user_id = %s ORDER BY created_at DESC LIMIT 10",
                (user_id,)
            )
            history = list(reversed(cursor.fetchall()))
            
            system_prompts = {
                'before_birth': 'Ты — опытный помощник для беременных женщин. Даёшь советы по подготовке к родам, питанию во время беременности, физическим упражнениям и эмоциональной подготовке. Всегда напоминай обращаться к врачу при проблемах со здоровьем.',
                'after_birth': 'Ты — помощник для молодых мам в период после родов. Помогаешь с восстановлением, уходом за новорожденным, грудным вскармливанием, режимом сна и эмоциональной поддержкой. Напоминай обращаться к педиатру при вопросах о здоровье малыша.',
                'growth': 'Ты — помощник для мам с детьми до 5 лет. Даёшь советы по развитию, питанию, воспитанию, играм и обучению. Помогаешь с вопросами дисциплины, социализации и подготовки к детскому саду. Напоминай консультироваться с педиатром и психологом при необходимости.'
            }
            
            system_prompt = system_prompts.get(plan_type, system_prompts['after_birth'])
            
            api_key = os.environ.get('YANDEX_GPT_API_KEY', '')
            
            if not api_key:
                ai_response = f"Привет! Я ИИ-помощник для мам ({plan_type}). Сейчас работаю в демо-режиме. Для полноценной работы нужен API ключ YandexGPT."
            else:
                messages = [{'role': 'system', 'content': system_prompt}]
                for h in history:
                    messages.append({'role': h['role'], 'content': h['content']})
                messages.append({'role': 'user', 'content': message})
                
                try:
                    response = requests.post(
                        'https://llm.api.cloud.yandex.net/foundationModels/v1/completion',
                        headers={
                            'Authorization': f'Api-Key {api_key}',
                            'Content-Type': 'application/json'
                        },
                        json={
                            'modelUri': 'gpt://your-folder-id/yandexgpt-lite/latest',
                            'completionOptions': {
                                'stream': False,
                                'temperature': 0.7,
                                'maxTokens': 1000
                            },
                            'messages': messages
                        },
                        timeout=30
                    )
                    
                    if response.status_code == 200:
                        result = response.json()
                        ai_response = result['result']['alternatives'][0]['message']['text']
                    else:
                        ai_response = f"Я здесь! Могу помочь с вопросами о материнстве. Ваш вопрос: {message}"
                except Exception as e:
                    ai_response = f"Я ваш помощник по материнству. Сейчас работаю в тестовом режиме. Ваш вопрос зафиксирован: {message}"
            
            cursor.execute(
                "INSERT INTO chat_history (user_id, role, content) VALUES (%s, 'user', %s)",
                (user_id, message)
            )
            cursor.execute(
                "INSERT INTO chat_history (user_id, role, content) VALUES (%s, 'assistant', %s)",
                (user_id, ai_response)
            )
            conn.commit()
            
            cursor.close()
            conn.close()
            
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({
                    'response': ai_response,
                    'timestamp': datetime.now().isoformat()
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
    
    if method == 'GET':
        query_params = event.get('queryStringParameters', {}) or {}
        user_id = query_params.get('user_id')
        
        if not user_id:
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'user_id обязателен'}),
                'isBase64Encoded': False
            }
        
        try:
            db_url = os.environ['DATABASE_URL']
            conn = psycopg2.connect(db_url)
            cursor = conn.cursor(cursor_factory=RealDictCursor)
            
            cursor.execute(
                "SELECT role, content, created_at FROM chat_history WHERE user_id = %s ORDER BY created_at DESC LIMIT 50",
                (user_id,)
            )
            history = list(reversed(cursor.fetchall()))
            
            cursor.close()
            conn.close()
            
            for msg in history:
                msg['created_at'] = msg['created_at'].isoformat()
            
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'history': history}),
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
        'statusCode': 405,
        'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'error': 'Метод не поддерживается'}),
        'isBase64Encoded': False
    }
