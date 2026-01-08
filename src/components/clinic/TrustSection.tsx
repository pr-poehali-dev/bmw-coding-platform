import Icon from '@/components/ui/icon';

const trustItems = [
  {
    icon: 'ShieldCheck',
    title: 'FDA-одобренные препараты',
    description: 'Используем только сертифицированные филлеры и ботокс мировых брендов'
  },
  {
    icon: 'Sparkles',
    title: 'Стерильная среда',
    description: 'Процедурный кабинет соответствует всем медицинским стандартам'
  },
  {
    icon: 'User',
    title: 'Индивидуальный подход',
    description: 'Разрабатываем персональный план с учётом особенностей вашей кожи'
  },
  {
    icon: 'Heart',
    title: 'Минимум дискомфорта',
    description: 'Используем анестезию и современные техники для безболезненных процедур'
  },
  {
    icon: 'Clock',
    title: 'Быстрая реабилитация',
    description: 'Возвращайтесь к обычной жизни сразу после процедуры'
  },
  {
    icon: 'Award',
    title: 'Гарантия результата',
    description: 'Бесплатная коррекция в течение 14 дней при необходимости'
  }
];

export default function TrustSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Почему нам доверяют
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ваша безопасность и комфорт — наш главный приоритет
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 border border-border hover:border-accent hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Icon name={item.icon as any} size={28} className="text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-3xl p-8 lg:p-12 border border-border shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif text-3xl font-bold mb-4 text-foreground">
                Медицинская лицензия и сертификаты
              </h3>
              <p className="text-muted-foreground mb-6">
                Наша клиника работает на основании лицензии на осуществление медицинской деятельности. 
                Все врачи имеют профильное медицинское образование и регулярно проходят повышение квалификации.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Icon name="FileCheck" size={20} className="text-accent" />
                  <span className="text-foreground">Лицензия № ЛО-77-01-020123 от 15.03.2020</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Award" size={20} className="text-accent" />
                  <span className="text-foreground">Сертификаты европейских производителей</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Users" size={20} className="text-accent" />
                  <span className="text-foreground">Член Ассоциации косметологов России</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background rounded-xl p-6 text-center">
                <Icon name="Award" size={32} className="text-accent mx-auto mb-2" />
                <div className="text-sm text-muted-foreground">Сертификат качества</div>
              </div>
              <div className="bg-background rounded-xl p-6 text-center">
                <Icon name="FileCheck" size={32} className="text-accent mx-auto mb-2" />
                <div className="text-sm text-muted-foreground">Медицинская лицензия</div>
              </div>
              <div className="bg-background rounded-xl p-6 text-center">
                <Icon name="ShieldCheck" size={32} className="text-accent mx-auto mb-2" />
                <div className="text-sm text-muted-foreground">FDA одобрение</div>
              </div>
              <div className="bg-background rounded-xl p-6 text-center">
                <Icon name="Heart" size={32} className="text-accent mx-auto mb-2" />
                <div className="text-sm text-muted-foreground">Страхование</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
