import Icon from '@/components/ui/icon';

const technologies = [
  {
    icon: 'Dna',
    title: 'Стволовые клетки',
    description: 'Использование плюрипотентных стволовых клеток для восстановления повреждённых тканей и органов'
  },
  {
    icon: 'Atom',
    title: 'Биоинженерия тканей',
    description: 'Создание функциональных тканевых конструкций с использованием биосовместимых материалов'
  },
  {
    icon: 'Microscope',
    title: 'Генная терапия',
    description: 'Целенаправленное редактирование генома для коррекции генетических нарушений'
  },
  {
    icon: 'Zap',
    title: 'Клеточное программирование',
    description: 'Перепрограммирование клеток для регенерации специфических типов тканей'
  }
];

export default function TechnologySection() {
  return (
    <section id="technology" className="py-32 px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">
            Наши <span className="gradient-text">технологии</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Мы объединяем передовые достижения в области биологии, генетики и медицины 
            для создания революционных методов лечения
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-20">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="glass-card rounded-[2rem] p-10 soft-shadow hover:ios-shadow transition-all duration-300 group"
            >
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon name={tech.icon as any} size={36} className="text-accent" />
              </div>
              
              <h3 className="font-serif text-3xl font-semibold text-foreground mb-4">
                {tech.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                {tech.description}
              </p>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-[3rem] p-12 max-w-4xl mx-auto text-center ios-shadow">
          <div className="w-24 h-24 mx-auto mb-6 rounded-[2rem] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <Icon name="Sparkles" size={48} className="text-accent" />
          </div>
          <h3 className="font-serif text-3xl font-bold text-foreground mb-4">
            Персонализированный подход
          </h3>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Каждая терапия разрабатывается индивидуально на основе генетического профиля пациента, 
            что обеспечивает максимальную эффективность и безопасность лечения
          </p>
        </div>
      </div>
    </section>
  );
}
