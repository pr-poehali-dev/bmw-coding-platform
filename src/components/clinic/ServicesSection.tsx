import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

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
    <section id="services" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Наши услуги
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Современные инъекционные процедуры с использованием премиальных препаратов
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-background/50 rounded-3xl p-8 border border-border hover:border-accent hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                  <Icon name={service.icon as any} size={32} className="text-accent" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-serif text-2xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-accent">{service.price}</div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-accent flex-shrink-0" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3">
                    <Button 
                      className="flex-1 bg-accent hover:bg-accent/90 text-foreground"
                    >
                      Записаться
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent/10"
                    >
                      <Icon name="Info" size={18} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Не нашли нужную процедуру? Мы проводим комплексные консультации
          </p>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-accent text-accent hover:bg-accent/10"
          >
            <Icon name="MessageCircle" className="mr-2" size={18} />
            Получить консультацию
          </Button>
        </div>
      </div>
    </section>
  );
}
