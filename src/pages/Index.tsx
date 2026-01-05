import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import PlansSection from '@/components/landing/PlansSection';
import Footer from '@/components/landing/Footer';

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
      <Header />
      
      <HeroSection />

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

      <PlansSection />

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

      <Footer />
    </div>
  );
}
