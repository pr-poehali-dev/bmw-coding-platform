import Icon from '@/components/ui/icon';

const team = [
  {
    name: 'Др. Елена Соколова',
    role: 'Главный научный директор',
    bio: 'PhD в молекулярной биологии, 20+ лет в регенеративной медицине',
    icon: 'User'
  },
  {
    name: 'Др. Михаил Петров',
    role: 'Руководитель отдела клеточной терапии',
    bio: 'Специалист по стволовым клеткам, автор 150+ научных работ',
    icon: 'User'
  },
  {
    name: 'Др. Анна Иванова',
    role: 'Директор по клиническим исследованиям',
    bio: 'Опыт проведения 30+ клинических испытаний',
    icon: 'User'
  },
  {
    name: 'Др. Дмитрий Волков',
    role: 'Руководитель лаборатории биоинженерии',
    bio: 'Эксперт по 3D-биопечати и тканевой инженерии',
    icon: 'User'
  }
];

const advisors = [
  'Нобелевский лауреат по физиологии и медицине',
  'Профессор Гарвардской медицинской школы',
  'Директор института регенеративной медицины MIT',
  'Главный научный советник FDA по клеточной терапии'
];

export default function Team() {
  return (
    <section id="team" className="py-32 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 glass-card-subtle px-6 py-3 rounded-full border border-primary/20 mb-6">
            <Icon name="Users" size={18} className="text-primary" />
            <span className="text-sm font-medium text-primary">Команда</span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Мировые
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> эксперты</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Наша команда объединяет ведущих ученых в области 
            регенеративной медицины и биотехнологий
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20">
          {team.map((member, index) => (
            <div 
              key={index}
              className="glass-card rounded-3xl p-8 border border-border/30 hover:border-primary/30 transition-all duration-300 text-center group"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                <Icon name={member.icon} size={40} className="text-white" />
              </div>
              
              <h3 className="font-serif text-xl font-bold mb-2 text-foreground">
                {member.name}
              </h3>
              
              <p className="text-sm text-primary font-medium mb-4">
                {member.role}
              </p>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="glass-card rounded-3xl p-12 border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="text-center mb-10">
              <h3 className="font-serif text-3xl font-bold mb-4">Научный совет</h3>
              <p className="text-muted-foreground">
                Мы сотрудничаем с лучшими учеными мира
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {advisors.map((advisor, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-white/50 border border-primary/10"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" size={20} className="text-primary" />
                  </div>
                  <p className="text-sm text-foreground font-medium">
                    {advisor}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-10 border-t border-border/30 text-center">
              <p className="text-muted-foreground mb-6">
                Присоединяйтесь к команде мирового уровня
              </p>
              <div className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all cursor-pointer">
                <span>Открытые вакансии</span>
                <Icon name="ArrowRight" size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
