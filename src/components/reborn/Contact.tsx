import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-32 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 glass-card-subtle px-6 py-3 rounded-full border border-primary/20 mb-6">
            <Icon name="Mail" size={18} className="text-primary" />
            <span className="text-sm font-medium text-primary">Контакты</span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Свяжитесь
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> с нами</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Готовы обсудить сотрудничество или узнать больше о наших исследованиях?
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-card rounded-3xl p-10 border border-border/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Имя и фамилия
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Иван Иванов"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="ivan@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Организация
                </label>
                <input
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Название организации"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Сообщение
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Расскажите о вашем интересе к нашим технологиям..."
                  required
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 text-white font-semibold py-6 text-lg shadow-xl shadow-primary/20"
              >
                Отправить сообщение
                <Icon name="Send" className="ml-2" size={18} />
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Мы ответим на ваше сообщение в течение 24 часов
              </p>
            </form>
          </div>

          <div className="space-y-8">
            <div className="glass-card rounded-3xl p-8 border border-border/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Building2" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Офис</h3>
                  <p className="text-muted-foreground">
                    Научно-технологический парк МГУ «Воробьевы горы»<br />
                    Москва, Россия, 119234
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-8 border border-border/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="text-muted-foreground">
                    info@reborn.tech<br />
                    research@reborn.tech
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-8 border border-border/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Телефон</h3>
                  <p className="text-muted-foreground">
                    +7 (495) 123-45-67<br />
                    +7 (800) 555-35-35 (бесплатно)
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-8 border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <h3 className="font-semibold text-lg mb-4">Партнерство</h3>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                Мы открыты к сотрудничеству с медицинскими учреждениями, 
                исследовательскими центрами и инвестиционными фондами
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-xl bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                  <Icon name="Linkedin" size={20} className="text-primary" />
                </a>
                <a href="#" className="w-10 h-10 rounded-xl bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                  <Icon name="Twitter" size={20} className="text-primary" />
                </a>
                <a href="#" className="w-10 h-10 rounded-xl bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                  <Icon name="Youtube" size={20} className="text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
