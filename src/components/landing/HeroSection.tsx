import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="pt-20 pb-24 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-accent/30 rounded-full text-sm font-semibold text-accent-foreground">
              🤖 ИИ-помощник для молодых мам
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Всё для счастливого материнства в одном месте
            </h1>
            <p className="text-xl text-muted-foreground">
              Персонализированные планы по уходу за ребёнком, питанию, развитию и восстановлению после родов. 
              С поддержкой ИИ-ассистента и сообществом мам.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white text-lg px-8"
                onClick={() => navigate('/login')}
              >
                <Icon name="Sparkles" className="mr-2" size={20} />
                Начать бесплатно
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-2">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть демо
              </Button>
            </div>
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">5000+</div>
                <div className="text-muted-foreground">довольных мам</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">24/7</div>
                <div className="text-muted-foreground">поддержка ИИ</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">100%</div>
                <div className="text-muted-foreground">персонально</div>
              </div>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-primary">
              <p className="text-sm text-muted-foreground">
                <Icon name="AlertCircle" className="inline mr-2" size={16} />
                <strong>Важно:</strong> Наш сервис не заменяет медицинскую консультацию. При любых проблемах со здоровьем обращайтесь к врачу.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
            <img 
              src="https://cdn.poehali.dev/projects/1fa99a0f-d8eb-4e10-869c-960e6cf163ad/files/ae1f794b-7d35-42d5-86c0-329cdcc9d3f8.jpg"
              alt="Счастливая мама с малышом"
              className="relative rounded-3xl shadow-2xl soft-shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
