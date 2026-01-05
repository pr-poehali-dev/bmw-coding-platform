-- Создание таблиц для полноценной платформы МамаПомощь

-- Таблица пользователей
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица подписок
CREATE TABLE IF NOT EXISTS subscriptions (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id),
  plan_type VARCHAR(50) NOT NULL CHECK (plan_type IN ('before_birth', 'after_birth', 'growth')),
  status VARCHAR(50) NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'cancelled', 'expired')),
  started_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  expires_at TIMESTAMP NOT NULL,
  payment_id VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица истории чата с ИИ
CREATE TABLE IF NOT EXISTS chat_history (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id),
  role VARCHAR(50) NOT NULL CHECK (role IN ('user', 'assistant')),
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица сгенерированных планов
CREATE TABLE IF NOT EXISTS generated_plans (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id),
  plan_type VARCHAR(100) NOT NULL,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица сообщений форума
CREATE TABLE IF NOT EXISTS forum_posts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id),
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  category VARCHAR(100),
  is_moderated BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица комментариев к постам форума
CREATE TABLE IF NOT EXISTS forum_comments (
  id SERIAL PRIMARY KEY,
  post_id INTEGER NOT NULL REFERENCES forum_posts(id),
  user_id INTEGER NOT NULL REFERENCES users(id),
  content TEXT NOT NULL,
  is_moderated BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица статей блога
CREATE TABLE IF NOT EXISTS blog_articles (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  image_url VARCHAR(500),
  author VARCHAR(255),
  published_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  views INTEGER DEFAULT 0
);

-- Индексы для оптимизации запросов
CREATE INDEX IF NOT EXISTS idx_subscriptions_user_id ON subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_status ON subscriptions(status);
CREATE INDEX IF NOT EXISTS idx_chat_history_user_id ON chat_history(user_id);
CREATE INDEX IF NOT EXISTS idx_generated_plans_user_id ON generated_plans(user_id);
CREATE INDEX IF NOT EXISTS idx_forum_posts_user_id ON forum_posts(user_id);
CREATE INDEX IF NOT EXISTS idx_forum_posts_category ON forum_posts(category);
CREATE INDEX IF NOT EXISTS idx_forum_comments_post_id ON forum_comments(post_id);
CREATE INDEX IF NOT EXISTS idx_blog_articles_slug ON blog_articles(slug);

-- Вставка тестовых статей блога
INSERT INTO blog_articles (slug, title, category, excerpt, content, image_url, author) VALUES
('first-steps-newborn', 'Первые шаги в уходе за новорожденным', 'ПЕРВЫЕ ДНИ', 'Основные правила ухода за малышом в первые недели жизни', 'Полное руководство по уходу за новорожденным: купание, кормление, сон, гигиена. Советы от педиатров с многолетним опытом.', 'https://cdn.poehali.dev/projects/1fa99a0f-d8eb-4e10-869c-960e6cf163ad/files/fbdcc39b-d4df-4b89-8648-69de6bc84bf0.jpg', 'Доктор Анна Петрова'),
('breastfeeding-nutrition', 'Правильное питание при грудном вскармливании', 'ПИТАНИЕ', 'Что можно и нельзя есть кормящей маме', 'Подробный гид по питанию для кормящих мам: разрешённые и запрещённые продукты, примеры меню, советы по введению новых продуктов.', 'https://cdn.poehali.dev/projects/1fa99a0f-d8eb-4e10-869c-960e6cf163ad/files/34df24f7-08ab-4ba8-9de6-165c6e70114b.jpg', 'Нутрициолог Елена Смирнова'),
('first-year-development', 'Развитие ребёнка в первый год', 'РАЗВИТИЕ', 'Ключевые этапы развития и как их поддержать', 'Что должен уметь ребёнок в каждый месяц первого года жизни. Упражнения и игры для стимулирования развития малыша.', 'https://cdn.poehali.dev/projects/1fa99a0f-d8eb-4e10-869c-960e6cf163ad/files/ae1f794b-7d35-42d5-86c0-329cdcc9d3f8.jpg', 'Педагог раннего развития Ольга Иванова')
ON CONFLICT (slug) DO NOTHING;
