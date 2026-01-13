import Icon from '@/components/ui/icon';

const applications = [
  {
    icon: 'Heart',
    title: 'Кардиология',
    description: 'Регенерация сердечной мышцы после инфаркта',
    image: '💗'
  },
  {
    icon: 'Brain',
    title: 'Неврология',
    description: 'Восстановление нервных тканей при травмах и заболеваниях',
    image: '🧠'
  },
  {
    icon: 'Activity',
    title: 'Ортопедия',
    description: 'Регенерация костной и хрящевой ткани',
    image: '🦴'
  },
  {
    icon: 'Eye',
    title: 'Офтальмология',
    description: 'Восстановление зрения при дегенеративных заболеваниях',
    image: '👁️'
  },
  {
    icon: 'Accessibility',
    title: 'Дерматология',
    description: 'Лечение ожогов и восстановление кожных покровов',
    image: '✨'
  },
  {
    icon: 'Wind',
    title: 'Пульмонология',
    description: 'Регенерация лёгочной ткани',
    image: '🫁'
  }
];

export default function ApplicationsSection() {
  return (
    <section id="applications" className="py-32 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">
            Области <span className="gradient-text">применения</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Наши технологии применяются в различных областях медицины, 
            помогая пациентам восстановить здоровье и качество жизни
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {applications.map((app, index) => (
            <div 
              key={index}
              className="glass-card rounded-[2rem] p-8 soft-shadow hover:ios-shadow transition-all duration-300 group text-center"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {app.image}
              </div>
              
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Icon name={app.icon as any} size={24} className="text-accent" />
                </div>
              </div>
              
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                {app.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {app.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="glass-card rounded-3xl p-10 max-w-3xl mx-auto soft-shadow">
            <p className="text-lg text-muted-foreground mb-6">
              Хотите узнать, как наши технологии могут помочь в вашем случае?
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 text-accent hover:text-primary font-semibold text-lg transition-colors"
            >
              Свяжитесь с нами
              <Icon name="ArrowRight" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
