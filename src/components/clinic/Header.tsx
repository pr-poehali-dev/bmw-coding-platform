import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Icon name="Sparkles" size={20} className="text-white" />
            </div>
            <div>
              <div className="font-serif text-xl font-semibold text-foreground">Glow Clinic</div>
              <div className="text-xs text-muted-foreground">Инъекционная косметология</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Услуги
            </a>
            <a href="#academy" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
              Обучение
            </a>
            <a href="#results" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Результаты
            </a>
            <a href="#expert" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Врач
            </a>
            <a href="#faq" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              FAQ
            </a>
            <a href="tel:+74951234567" className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors">
              <Icon name="Phone" size={16} />
              +7 (495) 123-45-67
            </a>
          </nav>

          <Button 
            className="hidden md:flex bg-accent hover:bg-accent/90 text-white font-medium sticky-cta"
            size="lg"
          >
            <Icon name="Calendar" className="mr-2" size={18} />
            Записаться
          </Button>

          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-border space-y-4">
            <a href="#services" className="block text-sm font-medium text-foreground hover:text-primary transition-colors">
              Услуги
            </a>
            <a href="#academy" className="block text-sm font-medium text-foreground hover:text-secondary transition-colors">
              Обучение
            </a>
            <a href="#results" className="block text-sm font-medium text-foreground hover:text-primary transition-colors">
              Результаты
            </a>
            <a href="#expert" className="block text-sm font-medium text-foreground hover:text-primary transition-colors">
              Врач
            </a>
            <a href="#faq" className="block text-sm font-medium text-foreground hover:text-primary transition-colors">
              FAQ
            </a>
            <a href="tel:+74951234567" className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors">
              <Icon name="Phone" size={16} />
              +7 (495) 123-45-67
            </a>
            <Button 
              className="w-full bg-accent hover:bg-accent/90 text-white font-medium"
              size="lg"
            >
              <Icon name="Calendar" className="mr-2" size={18} />
              Записаться
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}