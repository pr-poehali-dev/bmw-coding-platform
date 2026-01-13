import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Cpu',
    title: 'Stage 1',
    description: 'Оптимизация заводских параметров ECU',
    features: ['+20% мощности', '-15% расход', 'Без доработок'],
    price: 'от 15 000 ₽'
  },
  {
    icon: 'Zap',
    title: 'Stage 2',
    description: 'Глубокая прошивка с доработками',
    features: ['+35% мощности', '-20% расход', 'Выхлоп + фильтр'],
    price: 'от 25 000 ₽'
  },
  {
    icon: 'Flame',
    title: 'Stage 3',
    description: 'Максимальная производительность',
    features: ['+40% мощности', 'Турбина', 'Интеркулер'],
    price: 'от 50 000 ₽'
  },
  {
    icon: 'Settings',
    title: 'Индивидуальная настройка',
    description: 'Кастомная прошивка под ваши цели',
    features: ['Дино-стенд', 'Уникальная карта', 'Full контроль'],
    price: 'от 35 000 ₽'
  },
  {
    icon: 'Trash2',
    title: 'Удаление систем',
    description: 'EGR, DPF, AdBlue, катализатор',
    features: ['Легально', 'Без ошибок', 'Стабильная работа'],
    price: 'от 10 000 ₽'
  },
  {
    icon: 'Gauge',
    title: 'Диагностика',
    description: 'Комплексная проверка авто',
    features: ['Чтение ошибок', 'Параметры ECU', 'Рекомендации'],
    price: 'Бесплатно'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 glass-card-subtle px-6 py-3 rounded-full border border-primary/20 mb-6">
            <Icon name="Wrench" size={18} className="text-primary" />
            <span className="text-sm font-medium text-primary">Наши услуги</span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Выберите свой
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> уровень</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            От базовой оптимизации до полного раскрытия потенциала двигателя
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-card rounded-3xl p-8 border border-border/30 hover:border-primary/30 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon name={service.icon} size={28} className="text-primary" />
              </div>
              
              <h3 className="font-serif text-2xl font-bold mb-3 text-foreground">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-border/30">
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {service.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
