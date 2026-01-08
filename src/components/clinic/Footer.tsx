import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Icon name="Sparkles" size={20} className="text-white" />
              </div>
              <div>
                <div className="font-serif text-xl font-semibold text-foreground">Glow Clinic</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Клиника инъекционной косметологии с медицинской лицензией
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors text-accent"
              >
                <Icon name="Instagram" size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors text-accent"
              >
                <Icon name="Send" size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors text-accent"
              >
                <Icon name="MessageCircle" size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Биоревитализация
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Увеличение губ
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Ботулинотерапия
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Мезотерапия
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Информация</h4>
            <ul className="space-y-2">
              <li>
                <a href="#expert" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  О враче
                </a>
              </li>
              <li>
                <a href="#results" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Результаты
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Частые вопросы
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Отзывы
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={16} className="text-accent mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  г. Москва, Кутузовский пр-т, 12
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Phone" size={16} className="text-accent mt-1 flex-shrink-0" />
                <a href="tel:+74951234567" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Mail" size={16} className="text-accent mt-1 flex-shrink-0" />
                <a href="mailto:info@glowclinic.ru" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  info@glowclinic.ru
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Clock" size={16} className="text-accent mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Пн-Сб: 9:00 - 21:00<br/>Вс: 10:00 - 18:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-border">
          <div className="bg-accent/10 rounded-2xl p-6 mb-6">
            <div className="flex items-start gap-3">
              <Icon name="FileCheck" size={24} className="text-accent flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Лицензия на медицинскую деятельность</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Лицензия № ЛО-77-01-020123 от 15 марта 2020 г.</p>
                  <p>Выдана Департаментом здравоохранения г. Москвы</p>
                  <p>ООО "Glow Clinic" | ИНН 7701234567 | ОГРН 1027700123456</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>
              © 2024 Glow Clinic. Все права защищены.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-40">
        <Button 
          size="lg"
          className="bg-accent hover:bg-accent/90 text-foreground font-medium shadow-2xl rounded-full px-6"
        >
          <Icon name="Calendar" className="mr-2" size={20} />
          Записаться
        </Button>
      </div>
    </footer>
  );
}
