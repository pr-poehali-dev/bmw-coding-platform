import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо за обращение!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Heart" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-foreground">МамаПомощь</span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#plans" className="text-foreground hover:text-primary transition-colors">Тарифы</a>
            <a href="#blog" className="text-foreground hover:text-primary transition-colors">Блог</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Попробовать бесплатно
            </Button>
          </div>
        </nav>
      </header>

      <section className="pt-20 pb-24 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-accent/30 rounded-full text-sm font-semibold text-accent-foreground">
                🤖 ИИ-помощник для молодых мам
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Всё для счастливого материнства в одном месте
              </h1>
              <p className="text-xl text-muted-foreground">
                Персонализированные планы по уходу за ребёнком, питанию, развитию и восстановлению после родов. 
                С поддержкой ИИ-ассистента и сообществом мам.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8">
                  <Icon name="Sparkles" className="mr-2" size={20} />
                  Начать бесплатно
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-2">
                  <Icon name="Play" className="mr-2" size={20} />
                  Смотреть демо
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">5000+</div>
                  <div className="text-muted-foreground">довольных мам</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">24/7</div>
                  <div className="text-muted-foreground">поддержка ИИ</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">100%</div>
                  <div className="text-muted-foreground">персонально</div>
                </div>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-primary">
                <p className="text-sm text-muted-foreground">
                  <Icon name="AlertCircle" className="inline mr-2" size={16} />
                  <strong>Важно:</strong> Наш сервис не заменяет медицинскую консультацию. При любых проблемах со здоровьем обращайтесь к врачу.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
              <img 
                src="https://cdn.poehali.dev/projects/1fa99a0f-d8eb-4e10-869c-960e6cf163ad/files/ae1f794b-7d35-42d5-86c0-329cdcc9d3f8.jpg"
                alt="Счастливая мама с малышом"
                className="relative rounded-3xl shadow-2xl soft-shadow"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Почему <span className="gradient-text">МамаПомощь?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Современная технология для поддержки материнства на базе искусственного интеллекта
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg transition-all">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="Brain" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">ИИ-ассистент</h3>
              <p className="text-muted-foreground">
                Умный помощник на базе YandexGPT ответит на любые вопросы о материнстве в любое время
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg transition-all">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-4">
                <Icon name="CalendarCheck" size={32} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Персональные планы</h3>
              <p className="text-muted-foreground">
                Индивидуальные планы питания, развития и восстановления под ваши нужды и этап материнства
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg transition-all">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
                <Icon name="Users" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Сообщество</h3>
              <p className="text-muted-foreground">
                Общайтесь с другими мамами, делитесь опытом и получайте поддержку в модерируемом форуме
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg transition-all">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="Shield" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Безопасность</h3>
              <p className="text-muted-foreground">
                Полное соответствие ФЗ-152 о персональных данных. Ваша информация под надёжной защитой
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="plans" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Выберите свой этап
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Каждая подписка адаптирована под конкретный период материнства
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-border hover:border-primary transition-all">
              <div className="text-center mb-6">
                <div className="inline-block p-3 bg-primary/10 rounded-2xl mb-4">
                  <Icon name="Baby" size={40} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">Перед родами</h3>
                <p className="text-muted-foreground">Подготовка к рождению малыша</p>
              </div>
              <div className="mb-6">
                <div className="text-4xl font-bold text-foreground">500₽</div>
                <div className="text-muted-foreground">в месяц</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Подготовка к родам</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Питание для беременных</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Безлимитный ИИ-чат</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Доступ к форуму</span>
                </li>
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Начать подготовку
              </Button>
            </div>

            <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 shadow-2xl border-2 border-primary transform scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Популярный
                </span>
              </div>
              <div className="text-center mb-6">
                <div className="inline-block p-3 bg-white/20 rounded-2xl mb-4">
                  <Icon name="Heart" size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">После родов</h3>
                <p className="text-white/90">Восстановление и уход за малышом</p>
              </div>
              <div className="mb-6">
                <div className="text-4xl font-bold text-white">500₽</div>
                <div className="text-white/90">в месяц</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white">Постродовое восстановление</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white">Уход за новорожденным</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white">Фитнес после родов</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white">Эмоциональная поддержка</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white">Безлимитный ИИ-чат</span>
                </li>
              </ul>
              <Button className="w-full bg-white text-primary hover:bg-white/90">
                Начать восстановление
              </Button>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-border hover:border-secondary transition-all">
              <div className="text-center mb-6">
                <div className="inline-block p-3 bg-secondary/10 rounded-2xl mb-4">
                  <Icon name="Sparkles" size={40} className="text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">Время взращивания</h3>
                <p className="text-muted-foreground">Развитие ребёнка до 5 лет</p>
              </div>
              <div className="mb-6">
                <div className="text-4xl font-bold text-foreground">500₽</div>
                <div className="text-muted-foreground">в месяц</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Развитие ребёнка</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Питание и здоровье</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Советы по воспитанию</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Безлимитный ИИ-чат</span>
                </li>
              </ul>
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                Начать развитие
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-6 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Полезные статьи
            </h2>
            <p className="text-xl text-muted-foreground">
              Бесплатные материалы о материнстве от экспертов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/1fa99a0f-d8eb-4e10-869c-960e6cf163ad/files/fbdcc39b-d4df-4b89-8648-69de6bc84bf0.jpg"
                  alt="Уход за новорожденным"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <div className="text-xs text-primary font-semibold mb-2">ПЕРВЫЕ ДНИ</div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Первые шаги в уходе за новорожденным</h3>
                <p className="text-muted-foreground mb-4">Основные правила ухода за малышом в первые недели жизни</p>
                <Button variant="ghost" className="text-primary p-0 hover:bg-transparent">
                  Читать далее <Icon name="ArrowRight" size={16} className="ml-1" />
                </Button>
              </div>
            </article>

            <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-secondary/20 to-accent/20 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/1fa99a0f-d8eb-4e10-869c-960e6cf163ad/files/34df24f7-08ab-4ba8-9de6-165c6e70114b.jpg"
                  alt="Питание мамы"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <div className="text-xs text-secondary font-semibold mb-2">ПИТАНИЕ</div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Правильное питание при грудном вскармливании</h3>
                <p className="text-muted-foreground mb-4">Что можно и нельзя есть кормящей маме</p>
                <Button variant="ghost" className="text-secondary p-0 hover:bg-transparent">
                  Читать далее <Icon name="ArrowRight" size={16} className="ml-1" />
                </Button>
              </div>
            </article>

            <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/1fa99a0f-d8eb-4e10-869c-960e6cf163ad/files/ae1f794b-7d35-42d5-86c0-329cdcc9d3f8.jpg"
                  alt="Развитие ребёнка"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <div className="text-xs text-accent font-semibold mb-2">РАЗВИТИЕ</div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Развитие ребёнка в первый год</h3>
                <p className="text-muted-foreground mb-4">Ключевые этапы развития и как их поддержать</p>
                <Button variant="ghost" className="text-accent p-0 hover:bg-transparent">
                  Читать далее <Icon name="ArrowRight" size={16} className="ml-1" />
                </Button>
              </div>
            </article>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-2">
              Все статьи блога <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-border">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 text-foreground">
                Остались вопросы?
              </h2>
              <p className="text-xl text-muted-foreground">
                Напишите нам, и мы обязательно ответим
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">Ваше имя</label>
                  <Input
                    placeholder="Анна"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">Email</label>
                  <Input
                    type="email"
                    placeholder="anna@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">Сообщение</label>
                <Textarea
                  placeholder="Расскажите, чем мы можем помочь..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  required
                  className="border-2"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-white text-lg"
              >
                <Icon name="Send" className="mr-2" size={20} />
                Отправить сообщение
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-border">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <Icon name="Mail" size={24} className="mx-auto text-primary" />
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-semibold text-foreground">info@mamapomosh.ru</div>
                </div>
                <div className="space-y-2">
                  <Icon name="MessageCircle" size={24} className="mx-auto text-secondary" />
                  <div className="text-sm text-muted-foreground">Telegram</div>
                  <div className="font-semibold text-foreground">@mamapomosh</div>
                </div>
                <div className="space-y-2">
                  <Icon name="Phone" size={24} className="mx-auto text-accent" />
                  <div className="text-sm text-muted-foreground">Телефон</div>
                  <div className="font-semibold text-foreground">8 (800) 555-35-35</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-card border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Heart" className="text-primary" size={28} />
                <span className="text-xl font-bold text-foreground">МамаПомощь</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Умный ИИ-помощник для молодых мам в России
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Продукт</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">О нас</a>
                <a href="#plans" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Тарифы</a>
                <a href="#blog" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Блог</a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Форум</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Поддержка</h4>
              <div className="space-y-2">
                <a href="#contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Контакты</a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Политика конфиденциальности</a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Пользовательское соглашение</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Соцсети</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-primary">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors text-secondary">
                  <Icon name="MessageCircle" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors text-accent">
                  <Icon name="Youtube" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              &copy; 2024 МамаПомощь. Все права защищены. Соответствует ФЗ-152 о персональных данных.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
