import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import LeadMagnet from './LeadMagnet';

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8 animate-fade-in">
            <div className="glass-card-subtle inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-foreground">
              <Icon name="Award" size={16} className="text-accent" />
              Сертифицированные врачи с опытом 10+ лет
            </div>
            
            <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-foreground tracking-tight">
              Ваша естественная красота,{' '}
              <span className="gradient-text">усиленная наукой</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Безопасные инъекционные процедуры от врачей-косметологов с медицинским образованием. 
              Деликатная работа, естественный результат.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white text-base font-semibold px-8 py-6 ios-shadow hover:shadow-2xl transition-all duration-300"
              >
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться на консультацию
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="glass-card-subtle text-base font-semibold px-8 py-6 border-2 hover:bg-white/80 transition-all duration-300"
              >
                <Icon name="Phone" className="mr-2" size={20} />
                Позвонить
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">2500+</div>
                <div className="text-sm text-muted-foreground font-medium">довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">10+</div>
                <div className="text-sm text-muted-foreground font-medium">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">100%</div>
                <div className="text-sm text-muted-foreground font-medium">безопасность</div>
              </div>
            </div>

            <div className="glass-card flex items-start gap-4 p-5 rounded-2xl border-l-4 border-accent ios-shadow">
              <Icon name="ShieldCheck" size={24} className="text-accent flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-foreground mb-1.5 text-base">Гарантия безопасности</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Используем только FDA-одобренные препараты. Стерильные условия. 
                  Индивидуальный подход к каждому клиенту.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8 lg:pt-0 pt-8">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/30 blur-3xl rounded-full opacity-30"></div>
              <div className="relative rounded-[2rem] overflow-hidden ios-shadow">
                <img 
                  src="https://cdn.poehali.dev/projects/1fa99a0f-d8eb-4e10-869c-960e6cf163ad/files/e34925ea-de48-4c7f-a581-9dabfb44940b.jpg"
                  alt="Здоровая сияющая кожа"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-8 -left-8 glass-card rounded-3xl p-6 ios-shadow max-w-xs animate-slide-in">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Icon name="Sparkles" size={24} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-base">Естественный результат</div>
                    <div className="text-sm text-muted-foreground">Никаких масок и искажений</div>
                  </div>
                </div>
              </div>
            </div>

            <LeadMagnet />
          </div>
        </div>
      </div>
    </section>
  );
}