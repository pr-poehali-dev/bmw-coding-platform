import Icon from '@/components/ui/icon';

const features = [
  {
    icon: 'Zap',
    title: 'Мгновенная синхронизация',
    description: 'Все данные обновляются в реальном времени на всех устройствах'
  },
  {
    icon: 'Shield',
    title: 'Максимальная безопасность',
    description: 'Шифрование данных и защита на уровне банковских систем'
  },
  {
    icon: 'Smartphone',
    title: 'Управление со смартфона',
    description: 'Полный контроль над автопарком из любой точки мира'
  },
  {
    icon: 'LineChart',
    title: 'Аналитика и отчёты',
    description: 'Подробная статистика и прогнозы для оптимизации расходов'
  },
  {
    icon: 'Wifi',
    title: 'Облачная платформа',
    description: 'Никаких установок — работает в браузере на любом устройстве'
  },
  {
    icon: 'Users',
    title: 'Командная работа',
    description: 'Совместный доступ и гибкая система ролей для вашей команды'
  }
];

export default function Features() {
  return (
    <section className="py-32 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">
            Всё что нужно. <span className="gradient-text">Ничего лишнего</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Современная платформа с интуитивным интерфейсом и мощными функциями
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card rounded-[2rem] p-8 soft-shadow hover:ios-shadow transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon name={feature.icon as any} size={28} className="text-accent" />
              </div>
              
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
