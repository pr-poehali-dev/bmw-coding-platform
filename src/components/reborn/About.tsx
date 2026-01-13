import Icon from '@/components/ui/icon';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Чип-тюнинг двигателя
          </h2>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Компания Reborn Technologies предлагает уникальные решения по увеличению мощности 
              и других параметров автомобилей путем чип-тюнинга двигателя с применением 
              оригинального оборудования и программаторов.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8">Что такое чип-тюнинг?</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Большинство современных систем впрыска автомобилей оборудуются электронным блоком 
              управления, который хранит в себе информацию обо всех основных технических данных 
              авто. Специальная программа следит за временем подачи топлива, изменением длины 
              впускного коллектора, углом опережения зажигания и другими характеристиками. Однако 
              на заводе устанавливается стандартная прошивка, не учитывающая особенностей стиля 
              вождения каждого человека, дорожных и климатических условий, других нюансов. С 
              помощью чип-тюнинга можно корректировать эти настройки, значительно меняя ходовые 
              качества авто.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-8">Зачем это нужно?</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Чип-тюнинг двигателя в Москве от нашей компании, как правило, делают с целью:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Gauge" size={24} className="text-primary" />
                </div>
                <p className="text-base text-foreground leading-relaxed">
                  увеличения тяговых характеристик и эластичности двигателя
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Fuel" size={24} className="text-primary" />
                </div>
                <p className="text-base text-foreground leading-relaxed">
                  повышения отзывчивости педали газ, удаления «подвисаний» мотора
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Settings" size={24} className="text-primary" />
                </div>
                <p className="text-base text-foreground leading-relaxed">
                  снятия заводских программных ограничений
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
