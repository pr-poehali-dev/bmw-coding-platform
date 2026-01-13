import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export default function Services() {
  const services = [
    {
      icon: 'Zap',
      title: 'Stage 1',
      description: 'Базовая настройка для прироста мощности до 30%',
      features: ['Увеличение мощности', 'Снижение расхода', 'Безопасно для двигателя'],
    },
    {
      icon: 'Rocket',
      title: 'Stage 2',
      description: 'Продвинутая настройка с модификацией впуска и выпуска',
      features: ['Прирост до 50%', 'Улучшенная динамика', 'Спортивный выхлоп'],
    },
    {
      icon: 'Flame',
      title: 'Stage 3',
      description: 'Максимальная производительность с турбо апгрейдом',
      features: ['Прирост до 100%', 'Гоночные настройки', 'Максимальная мощность'],
    },
    {
      icon: 'Wrench',
      title: 'Удаление систем',
      description: 'EGR, DPF, AdBlue, катализатора',
      features: ['Снижение расхода', 'Больше мощности', 'Меньше поломок'],
    },
  ];

  return (
    <section id="catalog" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Наши услуги
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Профессиональный чип-тюнинг для любых марок автомобилей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all hover:shadow-xl"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <Icon name="CheckCircle2" size={16} className="text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-bold px-10 py-6 text-lg uppercase tracking-wider"
            >
              Записаться на чип-тюнинг
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
