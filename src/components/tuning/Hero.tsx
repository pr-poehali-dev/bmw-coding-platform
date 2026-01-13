import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-10 mb-16">
            <div className="inline-flex items-center gap-2 glass-card-subtle px-6 py-3 rounded-full border border-primary/20">
              <Icon name="Award" size={18} className="text-primary" />
              <span className="text-sm font-medium text-primary">Профессиональный чип-тюнинг с 2010 года</span>
            </div>

            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]">
              Раскройте потенциал
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                вашего автомобиля
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Увеличиваем мощность до 40%, снижаем расход топлива до 20%. 
              Безопасно, легально, с гарантией качества
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button 
                size="lg"
                onClick={() => scrollToSection('services')}
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold px-10 py-7 text-lg shadow-xl shadow-primary/20 hover:shadow-2xl transition-all duration-300"
              >
                Наши услуги
                <Icon name="Gauge" className="ml-2" size={20} />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="glass-card-subtle border-2 border-primary/30 font-semibold px-10 py-7 text-lg hover:bg-primary/5 transition-all duration-300"
              >
                Записаться на тюнинг
                <Icon name="Calendar" className="ml-2" size={18} />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-card rounded-3xl p-8 text-center border border-primary/10 hover:border-primary/30 transition-all">
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                +40%
              </div>
              <div className="text-sm text-muted-foreground font-medium">Прирост мощности</div>
            </div>
            <div className="glass-card rounded-3xl p-8 text-center border border-accent/10 hover:border-accent/30 transition-all">
              <div className="text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">
                -20%
              </div>
              <div className="text-sm text-muted-foreground font-medium">Экономия топлива</div>
            </div>
            <div className="glass-card rounded-3xl p-8 text-center border border-primary/10 hover:border-primary/30 transition-all">
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                5000+
              </div>
              <div className="text-sm text-muted-foreground font-medium">Довольных клиентов</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-muted-foreground/50" />
      </div>
    </section>
  );
}
