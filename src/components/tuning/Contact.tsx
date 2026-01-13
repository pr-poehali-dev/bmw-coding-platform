import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    car: '',
    service: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-32 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 glass-card-subtle px-6 py-3 rounded-full border border-primary/20 mb-6">
            <Icon name="MapPin" size={18} className="text-primary" />
            <span className="text-sm font-medium text-primary">Контакты</span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Запишитесь на
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> чип-тюнинг</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Оставьте заявку, и мы перезвоним в течение 15 минут
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-card rounded-3xl p-10 border border-border/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Иван Петров"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="+7 (999) 123-45-67"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Марка и модель автомобиля
                </label>
                <input
                  type="text"
                  value={formData.car}
                  onChange={(e) => setFormData({ ...formData, car: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="BMW X5 3.0d"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Интересующая услуга
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  required
                >
                  <option value="">Выберите услугу</option>
                  <option value="stage1">Stage 1</option>
                  <option value="stage2">Stage 2</option>
                  <option value="stage3">Stage 3</option>
                  <option value="custom">Индивидуальная настройка</option>
                  <option value="delete">Удаление систем</option>
                  <option value="diagnostics">Диагностика</option>
                </select>
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold py-6 text-lg shadow-xl shadow-primary/20"
              >
                Отправить заявку
                <Icon name="Send" className="ml-2" size={18} />
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>

          <div className="space-y-8">
            <div className="glass-card rounded-3xl p-8 border border-border/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Адрес</h3>
                  <p className="text-muted-foreground">
                    г. Москва, ул. Автомобильная, д. 15<br />
                    БЦ "Мотор", офис 301
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
                    +7 (999) 888-77-66
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-8 border border-border/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Режим работы</h3>
                  <p className="text-muted-foreground">
                    Пн-Пт: 9:00 - 20:00<br />
                    Сб-Вс: 10:00 - 18:00
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
                    info@chiptuning.pro<br />
                    support@chiptuning.pro
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
