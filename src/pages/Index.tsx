import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
      title: "Сообщение отправлено!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">BMW Code</div>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#projects" className="hover:text-primary transition-colors">Проекты</a>
            <a href="#blog" className="hover:text-primary transition-colors">Блог</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button variant="outline" className="neon-border border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Icon name="Mail" size={16} className="mr-2" />
            Связаться
          </Button>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text text-glow">
              BMW Coding Lab
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
              Инновационные решения в автомобильном программировании
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
                <Icon name="Rocket" size={20} className="mr-2" />
                Начать проект
              </Button>
              <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-lg px-8 py-6">
                <Icon name="PlayCircle" size={20} className="mr-2" />
                Смотреть демо
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-20">
            {[
              { icon: 'Code2', title: 'Программирование ECU', desc: 'Настройка блоков управления двигателем' },
              { icon: 'Cpu', title: 'Диагностика систем', desc: 'Глубокая диагностика всех систем автомобиля' },
              { icon: 'Zap', title: 'Чип-тюнинг', desc: 'Увеличение мощности и оптимизация' },
            ].map((item, i) => (
              <Card key={i} className="bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 gradient-text">Наши проекты</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Реализованные решения для BMW</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'BMW M3 Stage 2', power: '+120 HP', time: '2024', icon: 'Gauge' },
              { title: 'X5 Hybrid Coding', power: 'EV Mode', time: '2024', icon: 'Battery' },
              { title: 'M5 Competition', power: '+180 HP', time: '2024', icon: 'Flame' },
              { title: '330i Daily Driver', power: '+85 HP', time: '2024', icon: 'Car' },
              { title: 'M4 Track Setup', power: 'Race Mode', time: '2023', icon: 'Flag' },
              { title: 'iX Electric Tuning', power: 'Efficiency+', time: '2023', icon: 'Zap' },
            ].map((project, i) => (
              <Card key={i} className="bg-card border-border hover:border-secondary transition-all duration-300 group cursor-pointer overflow-hidden">
                <CardHeader className="relative">
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={project.icon as any} size={24} className="text-secondary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                  <div className="flex gap-4 text-sm">
                    <span className="text-primary font-semibold">{project.power}</span>
                    <span className="text-muted-foreground">{project.time}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 gradient-text">Блог</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Статьи о технологиях и тюнинге</p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { 
                title: 'Что такое Stage 1, 2, 3 в чип-тюнинге?', 
                date: '15 дек 2024',
                category: 'Обучение',
                icon: 'BookOpen'
              },
              { 
                title: 'Безопасность программирования BMW', 
                date: '10 дек 2024',
                category: 'Безопасность',
                icon: 'Shield'
              },
              { 
                title: 'Новые возможности кодирования G-серии', 
                date: '5 дек 2024',
                category: 'Новости',
                icon: 'Newspaper'
              },
              { 
                title: 'Гибридные системы: тюнинг и оптимизация', 
                date: '1 дек 2024',
                category: 'Технологии',
                icon: 'Lightbulb'
              },
            ].map((post, i) => (
              <Card key={i} className="bg-card border-border hover:border-accent transition-all duration-300 cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-accent font-semibold">{post.category}</span>
                    <Icon name={post.icon as any} size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-2">
                    <Icon name="Calendar" size={14} />
                    {post.date}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-5xl font-bold text-center mb-4 gradient-text">Свяжитесь с нами</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Обсудим ваш проект</p>
          
          <Card className="bg-card border-border">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input 
                    placeholder="Ваше имя" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-background border-border focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email"
                    placeholder="your@email.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-background border-border focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем проекте..." 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-background border-border focus:border-primary min-h-32"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex flex-wrap gap-6 justify-center">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Phone" size={18} className="text-primary" />
                    <span>+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Mail" size={18} className="text-secondary" />
                    <span>info@bmwcode.ru</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="MapPin" size={18} className="text-accent" />
                    <span>Москва, Россия</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="mb-4">© 2024 BMW Coding Lab. Все права защищены.</p>
          <div className="flex gap-6 justify-center">
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Github" size={24} />
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              <Icon name="Linkedin" size={24} />
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              <Icon name="Twitter" size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
