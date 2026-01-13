import Icon from '@/components/ui/icon';

const benefits = [
  {
    icon: 'Shield',
    title: 'Безопасность',
    description: 'Все изменения в пределах запаса прочности двигателя. Работаем только с проверенными картами от ведущих разработчиков'
  },
  {
    icon: 'Award',
    title: 'Гарантия качества',
    description: 'Предоставляем гарантию на все виды работ. В случае проблем - бесплатный возврат к стоковым настройкам'
  },
  {
    icon: 'Clock',
    title: 'Быстро',
    description: 'Большинство работ выполняем за 1-2 часа. Запись онлайн, без очередей. Работаем без выходных'
  },
  {
    icon: 'TrendingUp',
    title: 'Результат',
    description: 'Измеримое улучшение характеристик: мощность, крутящий момент, расход топлива. Все замеры на стенде'
  },
  {
    icon: 'FileCheck',
    title: 'Легально',
    description: 'Все работы соответствуют законодательству. Предоставляем полный пакет документов для страховой'
  },
  {
    icon: 'HeadphonesIcon',
    title: 'Поддержка 24/7',
    description: 'Консультации после чип-тюнинга. Помощь в настройке и адаптации. Всегда на связи для вас'
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-32 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 glass-card-subtle px-6 py-3 rounded-full border border-primary/20 mb-6">
            <Icon name="Star" size={18} className="text-primary" />
            <span className="text-sm font-medium text-primary">Почему мы</span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Профессионально
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> и надежно</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            14 лет опыта, более 5000 успешно настроенных автомобилей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="glass-card rounded-3xl p-8 border border-border/30 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                <Icon name={benefit.icon} size={32} className="text-white" />
              </div>
              
              <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-5xl mx-auto">
          <div className="glass-card rounded-3xl p-12 border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  14+
                </div>
                <div className="text-sm text-muted-foreground font-medium">Лет на рынке</div>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  5000+
                </div>
                <div className="text-sm text-muted-foreground font-medium">Настроенных авто</div>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  98%
                </div>
                <div className="text-sm text-muted-foreground font-medium">Довольных клиентов</div>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  150+
                </div>
                <div className="text-sm text-muted-foreground font-medium">Марок автомобилей</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
