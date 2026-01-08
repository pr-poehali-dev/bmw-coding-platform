import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function UrgencyTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 max-w-sm">
      <div className="bg-white rounded-3xl shadow-2xl border-2 border-accent overflow-hidden animate-slide-in">
        <div className="bg-gradient-to-r from-accent to-accent/80 p-4">
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={20} />
              <span className="font-semibold">Акция заканчивается через:</span>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="bg-gradient-to-br from-primary to-accent rounded-xl p-4 mb-2">
                <div className="text-3xl font-bold text-white">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
              </div>
              <div className="text-xs text-muted-foreground font-medium">Часов</div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-primary to-accent rounded-xl p-4 mb-2">
                <div className="text-3xl font-bold text-white">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
              </div>
              <div className="text-xs text-muted-foreground font-medium">Минут</div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-primary to-accent rounded-xl p-4 mb-2">
                <div className="text-3xl font-bold text-white">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
              </div>
              <div className="text-xs text-muted-foreground font-medium">Секунд</div>
            </div>
          </div>

          <div className="bg-accent/10 rounded-2xl p-4 mb-4 border border-accent/30">
            <div className="flex items-start gap-3">
              <Icon name="Gift" size={24} className="text-accent flex-shrink-0 mt-1" />
              <div>
                <div className="font-bold text-foreground mb-1">Скидка -30%</div>
                <div className="text-sm text-muted-foreground">
                  На биоревитализацию при записи сегодня
                </div>
              </div>
            </div>
          </div>

          <Button 
            size="lg"
            className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold shadow-lg"
          >
            <Icon name="Sparkles" className="mr-2" size={18} />
            Успеть со скидкой
          </Button>
        </div>
      </div>
    </div>
  );
}
