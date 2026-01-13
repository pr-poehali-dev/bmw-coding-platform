import Icon from '@/components/ui/icon';

const applications = [
  {
    emoji: '🧠',
    title: 'Неврология',
    description: 'Лечение болезни Паркинсона, Альцгеймера, травм спинного мозга',
    impact: 'Восстановление нервной ткани'
  },
  {
    emoji: '❤️',
    title: 'Кардиология',
    description: 'Регенерация миокарда после инфаркта, сердечная недостаточность',
    impact: 'Восстановление сердца'
  },
  {
    emoji: '🦴',
    title: 'Ортопедия',
    description: 'Восстановление костей, хрящей, лечение артритов и артрозов',
    impact: 'Регенерация суставов'
  },
  {
    emoji: '👁️',
    title: 'Офтальмология',
    description: 'Лечение дегенерации сетчатки, восстановление зрительного нерва',
    impact: 'Возвращение зрения'
  },
  {
    emoji: '🩸',
    title: 'Гематология',
    description: 'Лечение лейкемии, анемии, нарушений кроветворения',
    impact: 'Обновление крови'
  },
  {
    emoji: '🫁',
    title: 'Пульмонология',
    description: 'Восстановление легочной ткани, лечение фиброза легких',
    impact: 'Регенерация легких'
  }
];

export default function Applications() {
  return (
    <section id="applications" className="py-32 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 glass-card-subtle px-6 py-3 rounded-full border border-primary/20 mb-6">
            <Icon name="Stethoscope" size={18} className="text-primary" />
            <span className="text-sm font-medium text-primary">Применение</span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Области
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> применения</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Наши технологии помогают пациентам с самыми сложными 
            заболеваниями в различных областях медицины
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {applications.map((app, index) => (
            <div 
              key={index}
              className="glass-card rounded-3xl p-8 border border-border/30 hover:border-primary/30 transition-all duration-300 group hover:shadow-xl"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
                {app.emoji}
              </div>
              
              <h3 className="font-serif text-2xl font-bold mb-3 text-foreground">
                {app.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {app.description}
              </p>

              <div className="pt-4 border-t border-border/30">
                <div className="flex items-center gap-2">
                  <Icon name="Target" size={16} className="text-primary" />
                  <span className="text-sm font-medium text-primary">{app.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-5xl mx-auto">
          <div className="glass-card rounded-3xl p-12 border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
                  250+
                </div>
                <p className="text-sm text-muted-foreground font-medium">Заболеваний в фокусе</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent mb-3">
                  50+
                </div>
                <p className="text-sm text-muted-foreground font-medium">Клинических испытаний</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent mb-3">
                  15
                </div>
                <p className="text-sm text-muted-foreground font-medium">Стран-партнеров</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
