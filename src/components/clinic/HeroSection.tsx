import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-background to-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full text-sm font-medium text-foreground">
              <Icon name="Award" size={16} className="text-accent" />
              Сертифицированные врачи с опытом 10+ лет
            </div>
            
            <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-foreground">
              Ваша естественная красота,{' '}
              <span className="text-accent">усиленная наукой</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Безопасные инъекционные процедуры от врачей-косметологов с медицинским образованием. 
              Деликатная работа, естественный результат.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-foreground text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              >
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться на консультацию
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 border-2 border-accent text-accent hover:bg-accent/10"
              >
                <Icon name="Phone" className="mr-2" size={20} />
                Позвонить
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">2500+</div>
                <div className="text-sm text-muted-foreground">довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">10+</div>
                <div className="text-sm text-muted-foreground">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">100%</div>
                <div className="text-sm text-muted-foreground">безопасность</div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl border-l-4 border-accent">
              <Icon name="ShieldCheck" size={24} className="text-accent flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-foreground mb-1">Гарантия безопасности</div>
                <p className="text-sm text-muted-foreground">
                  Используем только FDA-одобренные препараты. Стерильные условия. 
                  Индивидуальный подход к каждому клиенту.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/20 blur-3xl rounded-full"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/projects/1fa99a0f-d8eb-4e10-869c-960e6cf163ad/files/e34925ea-de48-4c7f-a581-9dabfb44940b.jpg"
                alt="Здоровая сияющая кожа"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-border max-w-xs animate-slide-in">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Icon name="Sparkles" size={24} className="text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Естественный результат</div>
                  <div className="text-sm text-muted-foreground">Никаких масок и искажений</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
