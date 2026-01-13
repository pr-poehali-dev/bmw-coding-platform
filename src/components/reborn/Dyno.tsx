import Icon from '@/components/ui/icon';

export default function Dyno() {
  return (
    <section id="dyno" className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Диностенд
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Точная диагностика и замеры мощности автомобиля
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-video bg-muted rounded-2xl overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80"
                  alt="Диностенд"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Gauge" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Замер мощности</h3>
                  <p className="text-muted-foreground">
                    Профессиональный замер мощности и крутящего момента на современном оборудовании
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Activity" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">До и после</h3>
                  <p className="text-muted-foreground">
                    Наглядные графики показывают реальный результат чип-тюнинга вашего автомобиля
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="FileText" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Протокол замеров</h3>
                  <p className="text-muted-foreground">
                    Каждый клиент получает детальный протокол всех замеров с графиками и данными
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Shield" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Безопасность</h3>
                  <p className="text-muted-foreground">
                    Все замеры проводятся с соблюдением режимов работы двигателя и трансмиссии
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
