import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

export default function LeadMagnet() {
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 border-2 border-accent shadow-2xl">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
          <Icon name="Gift" size={24} className="text-white" />
        </div>
        <div>
          <h3 className="font-serif text-2xl font-bold text-white mb-2">
            Бесплатная консультация косметолога
          </h3>
          <p className="text-white/90 text-sm">
            Оставьте номер — мы подберём идеальные процедуры для вашей кожи и рассчитаем точную стоимость
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="tel"
          placeholder="+7 (___) ___-__-__"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="bg-white/95 border-0 text-lg py-6 text-foreground placeholder:text-muted-foreground"
          required
        />
        
        <Button 
          type="submit"
          size="lg"
          className="w-full bg-accent hover:bg-accent/90 text-white font-semibold text-lg py-6 shadow-xl"
          disabled={submitted}
        >
          {submitted ? (
            <>
              <Icon name="Check" className="mr-2" size={20} />
              Отправлено!
            </>
          ) : (
            <>
              <Icon name="Sparkles" className="mr-2" size={20} />
              Получить консультацию
            </>
          )}
        </Button>

        <p className="text-white/70 text-xs text-center">
          Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
        </p>
      </form>

      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/20">
        <div className="text-center">
          <div className="text-2xl font-bold text-white mb-1">15 мин</div>
          <div className="text-xs text-white/70">Длительность</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-white mb-1">0 ₽</div>
          <div className="text-xs text-white/70">Стоимость</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-white mb-1">100%</div>
          <div className="text-xs text-white/70">Конфиденциально</div>
        </div>
      </div>
    </div>
  );
}
