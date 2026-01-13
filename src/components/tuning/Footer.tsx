import Icon from '@/components/ui/icon';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-16 px-6 bg-secondary text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Icon name="Zap" size={24} className="text-white" />
              </div>
              <div className="font-serif text-2xl font-bold">
                ChipTuning<span className="text-primary">Pro</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Профессиональный чип-тюнинг автомобилей с 2010 года. 
              Качество, безопасность, результат.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Услуги</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-white/70 hover:text-primary transition-colors text-sm"
                >
                  Stage 1
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-white/70 hover:text-primary transition-colors text-sm"
                >
                  Stage 2
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-white/70 hover:text-primary transition-colors text-sm"
                >
                  Stage 3
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-white/70 hover:text-primary transition-colors text-sm"
                >
                  Удаление систем
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Информация</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('benefits')}
                  className="text-white/70 hover:text-primary transition-colors text-sm"
                >
                  О компании
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('benefits')}
                  className="text-white/70 hover:text-primary transition-colors text-sm"
                >
                  Гарантии
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-white/70 hover:text-primary transition-colors text-sm"
                >
                  Контакты
                </button>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-primary transition-colors text-sm">
                  Отзывы
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Icon name="Phone" size={16} className="text-primary" />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Icon name="Mail" size={16} className="text-primary" />
                <span>info@chiptuning.pro</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <Icon name="MapPin" size={16} className="text-primary flex-shrink-0 mt-1" />
                <span>г. Москва, ул. Автомобильная, 15</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>© 2024 ChipTuningPro. Все права защищены</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Договор оферты
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
