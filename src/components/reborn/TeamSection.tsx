import Icon from '@/components/ui/icon';

const team = [
  {
    name: 'Др. Анна Соколова',
    role: 'Генеральный директор и основатель',
    bio: 'PhD в молекулярной биологии, 20 лет опыта в регенеративной медицине',
    icon: 'UserCircle'
  },
  {
    name: 'Др. Михаил Петров',
    role: 'Директор по науке',
    bio: 'Ведущий специалист в области стволовых клеток и тканевой инженерии',
    icon: 'UserCircle'
  },
  {
    name: 'Др. Елена Волкова',
    role: 'Руководитель клинических исследований',
    bio: 'Более 100 успешных клинических испытаний в области биотехнологий',
    icon: 'UserCircle'
  },
  {
    name: 'Др. Сергей Иванов',
    role: 'Главный инженер',
    bio: 'Эксперт в биоинженерии и разработке медицинских устройств',
    icon: 'UserCircle'
  }
];

const advisors = [
  'Др. Джон Смит — Нобелевский лауреат в области физиологии',
  'Др. Мария Гарсия — Профессор Стэнфордского университета',
  'Др. Хироси Танака — Пионер в области регенеративной медицины'
];

export default function TeamSection() {
  return (
    <section id="team" className="py-32 px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">
            Наша <span className="gradient-text">команда</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ведущие специалисты в области регенеративной медицины, биоинженерии и клинических исследований
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
          {team.map((member, index) => (
            <div 
              key={index}
              className="glass-card rounded-[2rem] p-8 soft-shadow hover:ios-shadow transition-all duration-300 group"
            >
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={member.icon as any} size={40} className="text-accent" />
                </div>
                
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <div className="text-accent font-medium mb-3">{member.role}</div>
                  <p className="text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-[3rem] p-12 max-w-4xl mx-auto ios-shadow">
          <h3 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">
            Научные консультанты
          </h3>
          <div className="space-y-4">
            {advisors.map((advisor, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 rounded-2xl hover:bg-muted/30 transition-colors"
              >
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent flex-shrink-0"></div>
                <p className="text-foreground text-lg">{advisor}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
