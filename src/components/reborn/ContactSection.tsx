import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-32 px-6 bg-background">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">
              <span className="gradient-text">Свяжитесь</span> с нами
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Готовы обсудить, как наши технологии могут помочь вам? 
              Заполните форму, и наша команда свяжется с вами в ближайшее время
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="glass-card rounded-[2rem] p-10 soft-shadow">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Ваше имя
                  </label>
                  <Input
                    type="text"
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-muted/50 border-0 text-base py-6"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-muted/50 border-0 text-base py-6"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Сообщение
                  </label>
                  <textarea
                    placeholder="Расскажите о вашем случае или задайте вопрос..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full bg-muted/50 border-0 rounded-2xl px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold py-7 text-lg ios-shadow"
                  disabled={submitted}
                >
                  {submitted ? (
                    <>
                      <Icon name="Check" className="mr-2" size={20} />
                      Отправлено!
                    </>
                  ) : (
                    <>
                      <Icon name="Send" className="mr-2" size={20} />
                      Отправить
                    </>
                  )}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </div>

            <div className="space-y-6">
              <div className="glass-card rounded-[2rem] p-8 soft-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-2">Адрес</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Москва, Сколково<br />
                      Инновационный центр<br />
                      Здание R&D, офис 401
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-[2rem] p-8 soft-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-2">Email</h3>
                    <a href="mailto:info@reborn.tech" className="text-accent hover:text-primary transition-colors">
                      info@reborn.tech
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-[2rem] p-8 soft-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-2">Телефон</h3>
                    <a href="tel:+74951234567" className="text-accent hover:text-primary transition-colors">
                      +7 (495) 123-45-67
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
