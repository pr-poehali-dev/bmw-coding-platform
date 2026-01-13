import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 pb-16 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="inline-flex items-center gap-2 glass-card-subtle px-6 py-3 rounded-full">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
            <span className="text-sm font-medium text-muted-foreground">Запуск в 2026</span>
          </div>

          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]">
            <span className="text-foreground">Будущее </span>
            <span className="gradient-text">автомобилей</span>
            <br />
            <span className="text-foreground">уже здесь</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Революционная платформа для управления автопарком нового поколения
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold px-10 py-7 text-lg ios-shadow hover:shadow-2xl transition-all duration-300"
            >
              Узнать больше
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="glass-card-subtle border-2 font-semibold px-10 py-7 text-lg hover:bg-white/80 transition-all duration-300"
            >
              Смотреть демо
              <Icon name="Play" className="ml-2" size={18} />
            </Button>
          </div>

          <div className="pt-16">
            <div className="glass-card rounded-[3rem] p-3 ios-shadow max-w-5xl mx-auto">
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-video bg-gradient-to-br from-muted to-background">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <Icon name="Car" size={48} className="text-accent" />
                    </div>
                    <p className="text-muted-foreground font-medium">Интерфейс в разработке</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-muted-foreground" />
      </div>
    </section>
  );
}
