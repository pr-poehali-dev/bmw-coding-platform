import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="relative z-50">
      <div className="bg-secondary/95 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="https://cdn.poehali.dev/files/reb1111orn.jpg"
                alt="Reborn Technologies"
                className="h-16 w-auto object-contain"
              />
            </div>

            <div className="hidden md:flex items-center gap-2">
              <Icon name="Phone" size={20} className="text-primary" />
              <a href="tel:+74951337477" className="text-white text-xl font-bold hover:text-primary transition-colors">
                +7 495 133 7477
              </a>
            </div>

            <button 
              className="md:hidden p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>
      </div>

      <nav className="bg-primary">
        <div className="container mx-auto px-6">
          <div className="hidden md:flex items-center justify-center gap-8 py-4">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-sm font-bold text-white hover:text-secondary transition-colors uppercase tracking-wide"
            >
              ГЛАВНАЯ
            </button>
            <button 
              onClick={() => scrollToSection('dyno')}
              className="text-sm font-bold text-white hover:text-secondary transition-colors uppercase tracking-wide"
            >
              ДИНОСТЕНД
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm font-bold text-white hover:text-secondary transition-colors uppercase tracking-wide"
            >
              О НАС
            </button>
            <button 
              onClick={() => scrollToSection('catalog')}
              className="text-sm font-bold text-white hover:text-secondary transition-colors uppercase tracking-wide"
            >
              КАТАЛОГ
            </button>
            <button 
              onClick={() => scrollToSection('news')}
              className="text-sm font-bold text-white hover:text-secondary transition-colors uppercase tracking-wide"
            >
              НОВОСТИ
            </button>
            <button 
              onClick={() => scrollToSection('contacts')}
              className="text-sm font-bold text-white hover:text-secondary transition-colors uppercase tracking-wide"
            >
              КОНТАКТЫ
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block text-sm font-bold text-white hover:text-secondary transition-colors uppercase tracking-wide py-2 w-full text-left"
              >
                ГЛАВНАЯ
              </button>
              <button 
                onClick={() => scrollToSection('dyno')}
                className="block text-sm font-bold text-white hover:text-secondary transition-colors uppercase tracking-wide py-2 w-full text-left"
              >
                ДИНОСТЕНД
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-sm font-bold text-white hover:text-secondary transition-colors uppercase tracking-wide py-2 w-full text-left"
              >
                О НАС
              </button>
              <button 
                onClick={() => scrollToSection('catalog')}
                className="block text-sm font-bold text-white hover:text-secondary transition-colors uppercase tracking-wide py-2 w-full text-left"
              >
                КАТАЛОГ
              </button>
              <button 
                onClick={() => scrollToSection('news')}
                className="block text-sm font-bold text-white hover:text-secondary transition-colors uppercase tracking-wide py-2 w-full text-left"
              >
                НОВОСТИ
              </button>
              <button 
                onClick={() => scrollToSection('contacts')}
                className="block text-sm font-bold text-white hover:text-secondary transition-colors uppercase tracking-wide py-2 w-full text-left"
              >
                КОНТАКТЫ
              </button>
              <div className="flex items-center gap-2 pt-4 border-t border-white/20">
                <Icon name="Phone" size={18} className="text-primary" />
                <a href="tel:+74951337477" className="text-white font-bold hover:text-primary transition-colors">
                  +7 495 133 7477
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
