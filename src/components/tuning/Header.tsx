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
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Icon name="Zap" size={24} className="text-white" />
            </div>
            <div className="font-serif text-2xl font-bold text-foreground tracking-tight">
              ChipTuning<span className="text-primary">Pro</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              Услуги
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              Преимущества
            </button>
            <button 
              onClick={() => scrollToSection('prices')}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              Цены
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              Контакты
            </button>
          </nav>

          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold shadow-lg"
            >
              Записаться
              <Icon name="ArrowRight" className="ml-2" size={16} />
            </Button>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-6 pt-6 border-t border-border/30 space-y-4">
            <button 
              onClick={() => scrollToSection('services')}
              className="block text-sm font-medium text-foreground/70 hover:text-primary transition-colors py-2 w-full text-left"
            >
              Услуги
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="block text-sm font-medium text-foreground/70 hover:text-primary transition-colors py-2 w-full text-left"
            >
              Преимущества
            </button>
            <button 
              onClick={() => scrollToSection('prices')}
              className="block text-sm font-medium text-foreground/70 hover:text-primary transition-colors py-2 w-full text-left"
            >
              Цены
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block text-sm font-medium text-foreground/70 hover:text-primary transition-colors py-2 w-full text-left"
            >
              Контакты
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold mt-4"
            >
              Записаться
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
