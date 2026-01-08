import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function ExpertSection() {
  return (
    <section id="expert" className="py-20 px-6 bg-gradient-to-b from-background to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Наш ведущий специалист
          </h2>
          <p className="text-xl text-muted-foreground">
            Опыт и профессионализм на страже вашей красоты
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden border border-border shadow-xl">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative aspect-[4/5] lg:aspect-auto">
              <img 
                src="https://cdn.poehali.dev/projects/1fa99a0f-d8eb-4e10-869c-960e6cf163ad/files/f2041004-c655-4b05-8178-9cff9458cae1.jpg"
                alt="Доктор Екатерина Волкова"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 bg-accent/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-foreground">
                Ведущий врач-косметолог
              </div>
            </div>

            <div className="p-8 lg:p-12">
              <h3 className="font-serif text-3xl font-bold mb-2 text-foreground">
                Екатерина Волкова
              </h3>
              <p className="text-accent font-medium mb-6">
                Врач-косметолог высшей категории
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Icon name="GraduationCap" size={20} className="text-accent" />
                    Образование и квалификация
                  </h4>
                  <ul className="space-y-2 text-muted-foreground ml-7">
                    <li>• Первый МГМУ им. И.М. Сеченова, лечебное дело (2008)</li>
                    <li>• Ординатура по дерматовенерологии (2010)</li>
                    <li>• Профессиональная переподготовка по косметологии (2011)</li>
                    <li>• Сертификат European Academy of Dermatology (2020)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Icon name="Award" size={20} className="text-accent" />
                    Достижения
                  </h4>
                  <ul className="space-y-2 text-muted-foreground ml-7">
                    <li>• 12+ лет практического опыта в эстетической медицине</li>
                    <li>• Более 3000 успешно проведенных процедур</li>
                    <li>• Спикер международных конференций по косметологии</li>
                    <li>• Регулярное участие в мастер-классах ведущих брендов</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Icon name="Sparkles" size={20} className="text-accent" />
                    Специализация
                  </h4>
                  <div className="flex flex-wrap gap-2 ml-7">
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                      Контурная пластика
                    </span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                      Ботулинотерапия
                    </span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                      Биоревитализация
                    </span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                      Anti-age терапия
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-background/50 rounded-2xl p-6 mb-6">
                <p className="text-foreground italic">
                  "Моя философия — натуральная красота без искажений. Я помогаю подчеркнуть 
                  естественные черты и вернуть коже здоровое сияние, а не создавать искусственные формы."
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="flex-1 bg-accent hover:bg-accent/90 text-foreground"
                  size="lg"
                >
                  <Icon name="Calendar" className="mr-2" size={18} />
                  Записаться на приём
                </Button>
                <Button 
                  variant="outline"
                  className="flex-1 border-accent text-accent hover:bg-accent/10"
                  size="lg"
                >
                  <Icon name="MessageCircle" className="mr-2" size={18} />
                  Задать вопрос
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-2xl border border-border">
            <div className="text-4xl font-bold text-accent mb-2">12+</div>
            <div className="text-sm text-muted-foreground">лет опыта</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl border border-border">
            <div className="text-4xl font-bold text-accent mb-2">3000+</div>
            <div className="text-sm text-muted-foreground">довольных клиентов</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl border border-border">
            <div className="text-4xl font-bold text-accent mb-2">98%</div>
            <div className="text-sm text-muted-foreground">рекомендуют друзьям</div>
          </div>
        </div>
      </div>
    </section>
  );
}
