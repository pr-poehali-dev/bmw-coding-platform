import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/lib/auth-context';

export default function Header() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="Heart" className="text-primary" size={32} />
          <span className="text-2xl font-bold text-foreground">МамаПомощь</span>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
          <a href="#plans" className="text-foreground hover:text-primary transition-colors">Тарифы</a>
          <a href="#blog" className="text-foreground hover:text-primary transition-colors">Блог</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white"
            onClick={() => navigate(isAuthenticated ? '/dashboard' : '/login')}
          >
            {isAuthenticated ? 'Личный кабинет' : 'Попробовать бесплатно'}
          </Button>
        </div>
      </nav>
    </header>
  );
}
