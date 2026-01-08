import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const courses = [
  {
    title: 'Базовый курс косметологии',
    duration: '3 месяца',
    price: '120 000 ₽',
    level: 'Для начинающих',
    description: 'Полный курс от основ анатомии до самостоятельной работы с первыми клиентами',
    includes: [
      'Анатомия и физиология кожи',
      'Техники инъекций и филлеров',
      'Работа с препаратами',
      'Практика на моделях',
      'Диплом государственного образца'
    ]
  },
  {
    title: 'Продвинутая контурная пластика',
    duration: '1 месяц',
    price: '85 000 ₽',
    level: 'Для практикующих',
    description: 'Авторские техники и сложные зоны коррекции для опытных косметологов',
    includes: [
      'Работа со сложными зонами',
      'Коррекция осложнений',
      'Авторские протоколы',
      '20+ часов практики',
      'Сертификат специализации'
    ]
  },
  {
    title: 'Мастер ботулинотерапии',
    duration: '2 недели',
    price: '45 000 ₽',
    level: 'Специализация',
    description: 'Экспертный уровень владения ботулинотерапией для всех зон лица',
    includes: [
      'Все зоны применения ботокса',
      'Безопасные дозировки',
      'Работа с мимикой',
      'Практика на 10+ моделях',
      'Сертификат мастера'
    ]
  }
];

const advantages = [
  {
    icon: 'Award',
    title: 'Лицензированное обучение',
    description: 'Диплом гос. образца с правом ведения медицинской деятельности'
  },
  {
    icon: 'Users',
    title: 'Практикующие преподаватели',
    description: 'Обучение от врачей с опытом 10+ лет и тысячами процедур'
  },
  {
    icon: 'Microscope',
    title: 'Практика 80%',
    description: 'Максимум отработки на реальных моделях под присмотром'
  },
  {
    icon: 'Briefcase',
    title: 'Помощь в трудоустройстве',
    description: 'Содействие в поиске работы в лучших клиниках Москвы'
  }
];

export default function AcademySection() {
  return (
    <section id="academy" className="py-20 px-6 bg-gradient-to-b from-white to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full text-sm font-medium text-secondary mb-4">
            <Icon name="GraduationCap" size={16} />
            Академия косметологии
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Школа инъекционной косметологии
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Профессиональное обучение с государственной лицензией. Старт карьеры за 3 месяца.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h3 className="font-serif text-3xl font-bold mb-6 text-foreground">
              Станьте востребованным специалистом
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="TrendingUp" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Высокий доход</h4>
                  <p className="text-sm text-muted-foreground">
                    Средний доход косметолога в Москве — от 150 000 ₽/месяц
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Гибкий график</h4>
                  <p className="text-sm text-muted-foreground">
                    Работайте в клинике или создайте свой кабинет
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Sparkles" size={24} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Творческая профессия</h4>
                  <p className="text-sm text-muted-foreground">
                    Помогайте людям чувствовать себя увереннее и красивее
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-xs text-muted-foreground">выпускников</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-1">95%</div>
                <div className="text-xs text-muted-foreground">трудоустроены</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">4.9/5</div>
                <div className="text-xs text-muted-foreground">рейтинг школы</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/projects/1fa99a0f-d8eb-4e10-869c-960e6cf163ad/files/a1d02dea-e3b3-4c19-8ea7-4ea9ca451e7e.jpg"
                alt="Обучение косметологии"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {advantages.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 border border-border hover:border-primary hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4">
                <Icon name={item.icon as any} size={24} className="text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h3 className="font-serif text-3xl font-bold text-center mb-8 text-foreground">
            Программы обучения
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div 
                key={index}
                className={`bg-white rounded-3xl p-8 border-2 hover:shadow-xl transition-all ${
                  index === 0 ? 'border-primary lg:scale-105' : 'border-border'
                }`}
              >
                {index === 0 && (
                  <div className="inline-block px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full mb-4">
                    Самый популярный
                  </div>
                )}
                
                <div className="text-sm font-medium text-secondary mb-2">{course.level}</div>
                <h4 className="font-serif text-2xl font-bold text-foreground mb-2">
                  {course.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4">{course.description}</p>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Clock" size={16} className="text-primary" />
                    {course.duration}
                  </div>
                  <div className="text-2xl font-bold text-foreground">{course.price}</div>
                </div>

                <div className="space-y-2 mb-6">
                  {course.includes.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full ${
                    index === 0 
                      ? 'bg-primary hover:bg-primary/90 text-white' 
                      : 'bg-secondary hover:bg-secondary/90 text-white'
                  }`}
                >
                  Узнать подробнее
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl p-8 lg:p-12 text-center text-white shadow-2xl">
          <Icon name="Gift" size={48} className="mx-auto mb-4" />
          <h3 className="font-serif text-3xl font-bold mb-4">
            Бесплатный пробный урок
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
            Посетите наш мастер-класс, познакомьтесь с преподавателями и узнайте, 
            подходит ли вам профессия косметолога
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white hover:bg-white/90 text-primary font-semibold"
            >
              <Icon name="Calendar" className="mr-2" size={20} />
              Записаться на мастер-класс
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10"
            >
              <Icon name="Phone" className="mr-2" size={20} />
              Задать вопрос
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
