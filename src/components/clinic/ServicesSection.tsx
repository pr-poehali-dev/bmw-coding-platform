import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import CTABanner from './CTABanner';

const services = [
  {
    icon: 'Sparkles',
    title: 'Биоревитализация',
    description: 'Глубокое увлажнение и омоложение кожи с помощью гиалуроновой кислоты',
    price: 'от 8 000 ₽',
    benefits: ['Устраняет сухость', 'Улучшает тон кожи', 'Разглаживает морщины']
  },
  {
    icon: 'Smile',
    title: 'Увеличение губ',
    description: 'Создание естественного объёма и идеальной формы губ премиальными филлерами',
    price: 'от 15 000 ₽',
    benefits: ['Естественный результат', 'Без отёков', 'Долгий эффект до 12 мес']
  },
  {
    icon: 'Zap',
    title: 'Ботулинотерапия',
    description: 'Разглаживание мимических морщин и профилактика старения',
    price: 'от 5 000 ₽',
    benefits: ['Быстрый эффект', 'Без реабилитации', 'Естественная мимика']
  },
  {
    icon: 'Droplets',
    title: 'Мезотерапия',
    description: 'Витаминные коктейли для восстановления и питания кожи',
    price: 'от 6 000 ₽',
    benefits: ['Лифтинг-эффект', 'Здоровое сияние', 'Укрепление кожи']
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-5 text-foreground tracking-tight">
            Наши услуги
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Современные инъекционные процедуры с использованием премиальных препаратов
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-card rounded-[2rem] p-8 soft-shadow hover:ios-shadow transition-all duration-300 group"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={service.icon as any} size={28} className="text-accent" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-serif text-2xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold gradient-text">{service.price}</div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                          <Icon name="Check" size={14} className="text-accent" />
                        </div>
                        <span className="text-foreground font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3">
                    <Button 
                      className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold"
                    >
                      Записаться
                    </Button>
                    <Button 
                      variant="outline"
                      className="glass-card-subtle border-2 hover:bg-white/80"
                    >
                      <Icon name="Info" size={18} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <div className="glass-card rounded-3xl p-8 max-w-2xl mx-auto soft-shadow">
            <p className="text-muted-foreground mb-5 text-base">
              Не нашли нужную процедуру? Мы проводим комплексные консультации
            </p>
            <Button 
              size="lg" 
              variant="outline"
              className="glass-card-subtle border-2 font-semibold hover:bg-white/80"
            >
              <Icon name="MessageCircle" className="mr-2" size={18} />
              Получить консультацию
            </Button>
          </div>
        </div>

        <div className="mt-16">
          <CTABanner
            title="Сомневаетесь, какая процедура подойдёт?"
            description="Запишитесь на бесплатную консультацию — наш косметолог подберёт индивидуальную программу и рассчитает стоимость"
            buttonText="Записаться на консультацию"
            variant="primary"
          />
        </div>
      </div>
    </section>
  );
}