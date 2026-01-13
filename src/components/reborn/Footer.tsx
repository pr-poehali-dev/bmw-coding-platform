import Icon from '@/components/ui/icon';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">REBORN TECHNOLOGIES</h3>
              <p className="text-white/70 text-sm">
                Профессиональный чип-тюнинг автомобилей в Москве и регионах
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <nav className="space-y-2">
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="block text-white/70 hover:text-primary transition-colors text-sm"
                >
                  Главная
                </button>
                <button 
                  onClick={() => scrollToSection('dyno')}
                  className="block text-white/70 hover:text-primary transition-colors text-sm"
                >
                  Диностенд
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block text-white/70 hover:text-primary transition-colors text-sm"
                >
                  О нас
                </button>
                <button 
                  onClick={() => scrollToSection('catalog')}
                  className="block text-white/70 hover:text-primary transition-colors text-sm"
                >
                  Каталог
                </button>
              </nav>
            </div>

            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm">
                <a href="tel:+74951337477" className="flex items-center gap-2 text-white/70 hover:text-primary transition-colors">
                  <Icon name="Phone" size={16} />
                  +7 495 133 7477
                </a>
                <a href="mailto:info@reborn.tech" className="flex items-center gap-2 text-white/70 hover:text-primary transition-colors">
                  <Icon name="Mail" size={16} />
                  info@reborn.tech
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary transition-colors flex items-center justify-center">
                  <Icon name="MessageCircle" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary transition-colors flex items-center justify-center">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary transition-colors flex items-center justify-center">
                  <Icon name="Youtube" size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/50 text-sm">
              © 2024 Reborn Technologies. Все права защищены
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
