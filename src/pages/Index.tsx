import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import LiquidBackground from '@/components/LiquidBackground';
import GlassCard from '@/components/GlassCard';

export default function Index() {
  const [formData, setFormData] = useState({ name: '', phone: '', car: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', car: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <LiquidBackground />
      
      <div className="relative z-10">
        <header className="fixed top-0 w-full z-50 glass backdrop-blur-xl border-b border-white/10">
          <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="text-2xl font-bold gradient-text">REBORN TECH</div>
            <div className="hidden md:flex gap-8">
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#benefits" className="hover:text-primary transition-colors">Преимущества</a>
              <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="hidden md:flex bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Записаться
            </Button>
          </nav>
        </header>

        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="gradient-text text-glow">Чип-тюнинг</span>
                  <br />
                  <span className="text-foreground">нового уровня</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Увеличиваем мощность и крутящий момент вашего автомобиля до 40%. 
                  Безопасно. Профессионально. С гарантией.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white text-lg px-8">
                    <Icon name="Zap" className="mr-2" size={20} />
                    Узнать мощность
                  </Button>
                  <Button size="lg" variant="outline" className="glass text-lg px-8">
                    <Icon name="Phone" className="mr-2" size={20} />
                    Консультация
                  </Button>
                </div>
                <div className="flex gap-8 pt-4">
                  <div>
                    <div className="text-4xl font-bold gradient-text">1500+</div>
                    <div className="text-muted-foreground">автомобилей</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold gradient-text">7 лет</div>
                    <div className="text-muted-foreground">на рынке</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold gradient-text">100%</div>
                    <div className="text-muted-foreground">гарантия</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 blur-3xl rounded-full"></div>
                <img 
                  src="https://cdn.poehali.dev/projects/1fa99a0f-d8eb-4e10-869c-960e6cf163ad/files/ec7489a3-a760-46f4-b3ac-aa4022c2a00f.jpg"
                  alt="Чип-тюнинг двигателя"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4">
                <span className="gradient-text">Наши услуги</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Полный спектр услуг по повышению производительности вашего автомобиля
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <GlassCard hover className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="Cpu" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">Stage 1</h3>
                <p className="text-muted-foreground">
                  Оптимизация программного обеспечения ECU для улучшения характеристик без изменения железа
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>+20-30% мощности</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>+25-35% крутящего момента</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Улучшенная отзывчивость</span>
                  </li>
                </ul>
              </GlassCard>

              <GlassCard hover className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                  <Icon name="Gauge" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">Stage 2</h3>
                <p className="text-muted-foreground">
                  Программная прошивка + аппаратные модификации для максимальной отдачи
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-secondary" />
                    <span>+30-40% мощности</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-secondary" />
                    <span>Улучшенный впуск/выпуск</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-secondary" />
                    <span>Оптимизация турбины</span>
                  </li>
                </ul>
              </GlassCard>

              <GlassCard hover className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                  <Icon name="Activity" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">Диагностика</h3>
                <p className="text-muted-foreground">
                  Полная компьютерная диагностика и проверка всех систем автомобиля
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    <span>Считывание ошибок</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    <span>Анализ параметров</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    <span>Подбор решения</span>
                  </li>
                </ul>
              </GlassCard>

              <GlassCard hover className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Icon name="Wrench" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">Удаление систем</h3>
                <p className="text-muted-foreground">
                  Отключение систем экологии для спортивного использования
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>EGR, DPF, AdBlue</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Лямбда-зонды</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Клапан EGR</span>
                  </li>
                </ul>
              </GlassCard>

              <GlassCard hover className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                  <Icon name="Settings" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">Custom прошивки</h3>
                <p className="text-muted-foreground">
                  Индивидуальная калибровка под ваши задачи и стиль вождения
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-secondary" />
                    <span>Спорт / Эко режимы</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-secondary" />
                    <span>Драг / Дрифт настройка</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-secondary" />
                    <span>Экономия топлива</span>
                  </li>
                </ul>
              </GlassCard>

              <GlassCard hover className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                  <Icon name="Shield" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">Гарантия</h3>
                <p className="text-muted-foreground">
                  Полная гарантия на все виды работ и возможность отката
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    <span>Гарантия 1 год</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    <span>Откат на сток</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    <span>Бесплатная коррекция</span>
                  </li>
                </ul>
              </GlassCard>
            </div>
          </div>
        </section>

        <section id="benefits" className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4">
                <span className="gradient-text">Почему мы?</span>
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://cdn.poehali.dev/projects/1fa99a0f-d8eb-4e10-869c-960e6cf163ad/files/73dccd00-d6c5-48c9-8fb3-1cf4b1046d0d.jpg"
                  alt="Диагностика автомобиля"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              
              <div className="space-y-6">
                <GlassCard className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Профессиональное оборудование</h3>
                    <p className="text-muted-foreground">
                      Работаем на лицензионном ПО и современных стендах
                    </p>
                  </div>
                </GlassCard>

                <GlassCard className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Опытные специалисты</h3>
                    <p className="text-muted-foreground">
                      Наша команда имеет более 7 лет опыта в чип-тюнинге
                    </p>
                  </div>
                </GlassCard>

                <GlassCard className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                    <Icon name="TrendingUp" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Доказанные результаты</h3>
                    <p className="text-muted-foreground">
                      Все замеры на стенде до и после прошивки
                    </p>
                  </div>
                </GlassCard>

                <GlassCard className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <Icon name="Lock" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Безопасность</h3>
                    <p className="text-muted-foreground">
                      Все прошивки тестируются и соответствуют нормам безопасности
                    </p>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4">
                <span className="gradient-text">Наши работы</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Примеры успешно выполненных проектов
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <GlassCard hover className="space-y-4">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/1fa99a0f-d8eb-4e10-869c-960e6cf163ad/files/83d34c91-1236-4c40-bed5-4dce46273430.jpg"
                    alt="Проект 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">BMW M3 F80</h3>
                <div className="flex justify-between text-sm">
                  <div>
                    <div className="text-muted-foreground">Было</div>
                    <div className="font-bold">431 л.с.</div>
                  </div>
                  <div className="text-primary text-2xl">→</div>
                  <div>
                    <div className="text-muted-foreground">Стало</div>
                    <div className="font-bold text-primary">510 л.с.</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Stage 2 + даунпайп</p>
              </GlassCard>

              <GlassCard hover className="space-y-4">
                <div className="aspect-video bg-gradient-to-br from-secondary/20 to-accent/20 rounded-xl overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/1fa99a0f-d8eb-4e10-869c-960e6cf163ad/files/ec7489a3-a760-46f4-b3ac-aa4022c2a00f.jpg"
                    alt="Проект 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Audi RS6 C8</h3>
                <div className="flex justify-between text-sm">
                  <div>
                    <div className="text-muted-foreground">Было</div>
                    <div className="font-bold">600 л.с.</div>
                  </div>
                  <div className="text-secondary text-2xl">→</div>
                  <div>
                    <div className="text-muted-foreground">Стало</div>
                    <div className="font-bold text-secondary">750 л.с.</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Stage 1 + E85</p>
              </GlassCard>

              <GlassCard hover className="space-y-4">
                <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/1fa99a0f-d8eb-4e10-869c-960e6cf163ad/files/73dccd00-d6c5-48c9-8fb3-1cf4b1046d0d.jpg"
                    alt="Проект 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Porsche 911 Turbo S</h3>
                <div className="flex justify-between text-sm">
                  <div>
                    <div className="text-muted-foreground">Было</div>
                    <div className="font-bold">650 л.с.</div>
                  </div>
                  <div className="text-accent text-2xl">→</div>
                  <div>
                    <div className="text-muted-foreground">Стало</div>
                    <div className="font-bold text-accent">780 л.с.</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Custom map</p>
              </GlassCard>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <GlassCard variant="strong">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-4">
                  <span className="gradient-text">Запишитесь на чип-тюнинг</span>
                </h2>
                <p className="text-muted-foreground">
                  Оставьте заявку и получите бесплатную консультацию
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input
                      placeholder="Иван"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="glass"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="glass"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Марка и модель авто</label>
                  <Input
                    placeholder="BMW M3 F80"
                    value={formData.car}
                    onChange={(e) => setFormData({ ...formData, car: e.target.value })}
                    required
                    className="glass"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Комментарий</label>
                  <Textarea
                    placeholder="Расскажите о ваших пожеланиях..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="glass"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white text-lg"
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="space-y-2">
                    <Icon name="Phone" size={24} className="mx-auto text-primary" />
                    <div className="text-sm text-muted-foreground">Телефон</div>
                    <div className="font-semibold">+7 (999) 123-45-67</div>
                  </div>
                  <div className="space-y-2">
                    <Icon name="Mail" size={24} className="mx-auto text-secondary" />
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-semibold">info@reborn.tech</div>
                  </div>
                  <div className="space-y-2">
                    <Icon name="MapPin" size={24} className="mx-auto text-accent" />
                    <div className="text-sm text-muted-foreground">Адрес</div>
                    <div className="font-semibold">г. Москва, ул. Примерная 1</div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        <footer className="py-12 px-6 border-t border-white/10 glass">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-2xl font-bold gradient-text mb-4">REBORN TECH</div>
                <p className="text-sm text-muted-foreground">
                  Профессиональный чип-тюнинг автомобилей с гарантией качества
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Навигация</h4>
                <div className="space-y-2">
                  <a href="#services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Услуги</a>
                  <a href="#benefits" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Преимущества</a>
                  <a href="#portfolio" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Портфолио</a>
                  <a href="#contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Контакты</a>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Соцсети</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Icon name="Instagram" size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Icon name="Youtube" size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Icon name="MessageCircle" size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-muted-foreground">
              <p>&copy; 2024 REBORN TECH. Все права защищены.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
