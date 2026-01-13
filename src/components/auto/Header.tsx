import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Icon name="Car" size={20} className="text-white" />
            </div>
            <div className="font-serif text-2xl font-bold text-foreground tracking-tight">
              AutoFleet
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Возможности
            </a>
            <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              О платформе
            </a>
            <a href="#pricing" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Цены
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Контакты
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="ghost"
              className="font-medium"
            >
              Войти
            </Button>
            <Button 
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold"
            >
              Начать
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
          <nav className="md:hidden mt-6 pt-6 border-t border-border/50 space-y-4">
            <a href="#features" className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2">
              Возможности
            </a>
            <a href="#about" className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2">
              О платформе
            </a>
            <a href="#pricing" className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2">
              Цены
            </a>
            <a href="#contact" className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2">
              Контакты
            </a>
            <div className="flex flex-col gap-3 pt-4">
              <Button 
                variant="outline"
                className="w-full font-medium"
              >
                Войти
              </Button>
              <Button 
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold"
              >
                Начать
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
