import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 glass-card-subtle px-6 py-3 rounded-full mb-4">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
            <span className="text-sm font-medium text-muted-foreground">Регенеративная медицина будущего</span>
          </div>

          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]">
            <span className="text-foreground">Восстановление </span>
            <span className="gradient-text">на клеточном уровне</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Reborn разрабатывает прорывные биотехнологии для регенерации тканей и органов, 
            открывая новую эру персонализированной медицины
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
              Наша технология
              <Icon name="Microscope" className="ml-2" size={18} />
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">98%</div>
              <div className="text-sm text-muted-foreground font-medium">Успешность терапии</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">15+</div>
              <div className="text-sm text-muted-foreground font-medium">Лет исследований</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">5000+</div>
              <div className="text-sm text-muted-foreground font-medium">Пациентов</div>
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
