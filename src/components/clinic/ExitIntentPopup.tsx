import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem('exitIntentShown')) {
        setIsVisible(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 2 && !sessionStorage.getItem('exitIntentShown')) {
        setIsVisible(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-white rounded-3xl p-8 max-w-lg mx-4 shadow-2xl animate-slide-in">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
        >
          <Icon name="X" size={18} className="text-foreground" />
        </button>

        {!submitted ? (
          <>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 mx-auto">
              <Icon name="Sparkles" size={32} className="text-white" />
            </div>

            <h3 className="font-serif text-3xl font-bold text-center mb-4 text-foreground">
              Подождите! 🎁
            </h3>
            
            <p className="text-center text-muted-foreground mb-2">
              Специальное предложение для новых клиентов:
            </p>
            
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 mb-6 border-2 border-accent">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">-30%</div>
                <p className="text-foreground font-semibold mb-1">
                  На первую процедуру биоревитализации
                </p>
                <p className="text-sm text-muted-foreground">
                  Оставьте номер — позвоним через 5 минут
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="tel"
                placeholder="+7 (___) ___-__-__"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="text-lg py-6"
                required
              />
              
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold text-lg py-6"
              >
                <Icon name="Gift" className="mr-2" size={20} />
                Получить скидку 30%
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Предложение действует только сегодня
              </p>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-6 mx-auto">
              <Icon name="Check" size={40} className="text-accent" />
            </div>
            <h3 className="font-serif text-3xl font-bold mb-4 text-foreground">
              Спасибо!
            </h3>
            <p className="text-muted-foreground mb-6">
              Мы перезвоним вам в течение 5 минут и расскажем о специальном предложении
            </p>
            <Button 
              onClick={() => setIsVisible(false)}
              variant="outline"
              className="border-accent text-accent"
            >
              Закрыть
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
