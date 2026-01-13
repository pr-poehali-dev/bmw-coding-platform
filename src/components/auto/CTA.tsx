import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function CTA() {
  return (
    <section className="py-32 px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-[3rem] p-12 md:p-16 text-center ios-shadow">
            <div className="w-20 h-20 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <Icon name="Sparkles" size={40} className="text-accent" />
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground tracking-tight">
              Готовы к будущему?
            </h2>

            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Присоединяйтесь к ранним пользователям и получите эксклюзивный доступ к платформе
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold px-10 py-7 text-lg ios-shadow"
              >
                Оставить заявку
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="glass-card-subtle border-2 font-semibold px-10 py-7 text-lg hover:bg-white/80"
              >
                Связаться с нами
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-border/50">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">2026</div>
                <div className="text-sm text-muted-foreground font-medium">Запуск</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-sm text-muted-foreground font-medium">Поддержка</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">∞</div>
                <div className="text-sm text-muted-foreground font-medium">Возможности</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
