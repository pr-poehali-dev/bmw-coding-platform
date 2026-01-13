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
              <img 
                src="https://cdn.poehali.dev/projects/1fa99a0f-d8eb-4e10-869c-960e6cf163ad/files/91428c7a-b168-42f7-82ab-d62d59c49cb7.jpg"
                alt="Reborn Tech Logo"
                className="w-10 h-10 rounded-xl object-cover"
              />
              <div className="font-serif text-2xl font-bold">
                Reborn<span className="text-primary">Tech</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Революционные биотехнологии для регенерации 
              тканей и органов человека
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Компания</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('science')}
                  className="text-white/70 hover:text-primary transition-colors text-sm"
                >
                  Наука
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('technology')}
                  className="text-white/70 hover:text-primary transition-colors text-sm"
                >
                  Технологии
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('applications')}
                  className="text-white/70 hover:text-primary transition-colors text-sm"
                >
                  Применение
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('team')}
                  className="text-white/70 hover:text-primary transition-colors text-sm"
                >
                  Команда
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Для партнеров</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-primary transition-colors text-sm">
                  Клинические испытания
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-primary transition-colors text-sm">
                  Инвесторам
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-primary transition-colors text-sm">
                  Лицензирование
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-primary transition-colors text-sm">
                  Публикации
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Icon name="Mail" size={16} className="text-primary" />
                <span>info@reborn.tech</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Icon name="Phone" size={16} className="text-primary" />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <Icon name="MapPin" size={16} className="text-primary flex-shrink-0 mt-1" />
                <span>Москва, НТП МГУ</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>© 2024 Reborn Technologies. Все права защищены</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
