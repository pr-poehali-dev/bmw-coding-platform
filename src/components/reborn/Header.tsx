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
            <img 
              src="https://cdn.poehali.dev/projects/1fa99a0f-d8eb-4e10-869c-960e6cf163ad/files/91428c7a-b168-42f7-82ab-d62d59c49cb7.jpg"
              alt="Reborn Tech Logo"
              className="w-10 h-10 rounded-xl object-cover"
            />
            <div className="font-serif text-2xl font-bold text-foreground tracking-tight">
              Reborn<span className="text-primary">Tech</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('science')}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              Наука
            </button>
            <button 
              onClick={() => scrollToSection('technology')}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              Технологии
            </button>
            <button 
              onClick={() => scrollToSection('applications')}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              Применение
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              Команда
            </button>
          </nav>

          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 text-white font-semibold shadow-lg"
            >
              Связаться
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
              onClick={() => scrollToSection('science')}
              className="block text-sm font-medium text-foreground/70 hover:text-primary transition-colors py-2 w-full text-left"
            >
              Наука
            </button>
            <button 
              onClick={() => scrollToSection('technology')}
              className="block text-sm font-medium text-foreground/70 hover:text-primary transition-colors py-2 w-full text-left"
            >
              Технологии
            </button>
            <button 
              onClick={() => scrollToSection('applications')}
              className="block text-sm font-medium text-foreground/70 hover:text-primary transition-colors py-2 w-full text-left"
            >
              Применение
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="block text-sm font-medium text-foreground/70 hover:text-primary transition-colors py-2 w-full text-left"
            >
              Команда
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="w-full bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 text-white font-semibold mt-4"
            >
              Связаться
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
