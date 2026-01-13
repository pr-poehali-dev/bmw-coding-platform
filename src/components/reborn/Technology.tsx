import Icon from '@/components/ui/icon';

const technologies = [
  {
    icon: 'Dna',
    title: 'Стволовые клетки',
    description: 'Индуцированные плюрипотентные стволовые клетки (iPSC) для регенерации любых тканей организма',
    details: ['Безопасность', 'Персонализация', 'Универсальность']
  },
  {
    icon: 'Component',
    title: 'Биоинженерия тканей',
    description: '3D-биопечать органов и тканей с использованием биосовместимых материалов',
    details: ['Биопечать', 'Скаффолды', 'Васкуляризация']
  },
  {
    icon: 'Zap',
    title: 'Генная терапия',
    description: 'CRISPR/Cas9 редактирование генома для коррекции генетических нарушений',
    details: ['Точность', 'Безопасность', 'Эффективность']
  },
  {
    icon: 'Activity',
    title: 'Клеточное программирование',
    description: 'Перепрограммирование соматических клеток в специализированные клеточные типы',
    details: ['Трансдифференциация', 'Омоложение', 'Регенерация']
  }
];

export default function Technology() {
  return (
    <section id="technology" className="py-32 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 glass-card-subtle px-6 py-3 rounded-full border border-primary/20 mb-6">
            <Icon name="Cpu" size={18} className="text-primary" />
            <span className="text-sm font-medium text-primary">Технологии</span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Передовые
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> биотехнологии</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Мы используем самые современные методы регенеративной медицины 
            для достижения максимальных результатов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="glass-card rounded-3xl p-10 border border-border/30 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                <Icon name={tech.icon} size={32} className="text-white" />
              </div>
              
              <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">
                {tech.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {tech.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {tech.details.map((detail, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-5xl mx-auto">
          <div className="glass-card rounded-3xl p-12 border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="text-center mb-12">
              <h3 className="font-serif text-3xl font-bold mb-4">Наш научный процесс</h3>
              <p className="text-muted-foreground">
                От фундаментальных исследований до клинического применения
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Icon name="FlaskConical" size={28} className="text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Исследования</h4>
                <p className="text-sm text-muted-foreground">Фундаментальная наука</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <Icon name="TestTube" size={28} className="text-accent" />
                </div>
                <h4 className="font-semibold mb-2">Разработка</h4>
                <p className="text-sm text-muted-foreground">Доклинические испытания</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={28} className="text-secondary" />
                </div>
                <h4 className="font-semibold mb-2">Клиника</h4>
                <p className="text-sm text-muted-foreground">Клинические испытания</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Rocket" size={28} className="text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Внедрение</h4>
                <p className="text-sm text-muted-foreground">Коммерциализация</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
