import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Contact() {
  return (
    <section id="contacts" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Контакты
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь с нами для консультации
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Телефон</div>
                    <a href="tel:+74951337477" className="text-lg font-bold hover:text-primary transition-colors">
                      +7 495 133 7477
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Email</div>
                    <a href="mailto:info@reborn.tech" className="text-lg font-bold hover:text-primary transition-colors">
                      info@reborn.tech
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Адрес</div>
                    <p className="text-lg font-bold">
                      Москва и регионы
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Время работы</div>
                    <p className="text-lg font-bold">
                      Пн-Пт: 9:00 - 20:00<br />
                      Сб-Вс: 10:00 - 18:00
                    </p>
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