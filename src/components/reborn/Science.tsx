import Icon from '@/components/ui/icon';

export default function Science() {
  return (
    <section id="science" className="py-32 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 glass-card-subtle px-6 py-3 rounded-full border border-primary/20 mb-6">
              <Icon name="Microscope" size={18} className="text-primary" />
              <span className="text-sm font-medium text-primary">Научный подход</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Наука о
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> возрождении</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Регенеративная медицина — это междисциплинарная область науки, 
              направленная на восстановление, замену или регенерацию поврежденных 
              клеток, тканей и органов
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="glass-card rounded-3xl p-8 border border-primary/10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6">
                  <Icon name="Dna" size={28} className="text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Клеточная терапия</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Использование стволовых клеток и специализированных клеточных линий 
                  для восстановления поврежденных тканей и лечения дегенеративных заболеваний
                </p>
              </div>

              <div className="glass-card rounded-3xl p-8 border border-accent/10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/10 to-secondary/10 flex items-center justify-center mb-6">
                  <Icon name="Activity" size={28} className="text-accent" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Тканевая инженерия</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Создание биоискусственных органов и тканей с использованием 
                  биоматериалов и методов 3D-биопечати для трансплантации
                </p>
              </div>

              <div className="glass-card rounded-3xl p-8 border border-secondary/10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/10 to-primary/10 flex items-center justify-center mb-6">
                  <Icon name="Sparkles" size={28} className="text-secondary" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Генная терапия</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Коррекция генетических дефектов и активация естественных механизмов 
                  регенерации организма на молекулярном уровне
                </p>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-12 border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-3xl font-bold mb-6">Наши достижения</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    За годы исследований мы достигли выдающихся результатов 
                    в области регенеративной медицины
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="CheckCircle2" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Клинические испытания</h4>
                      <p className="text-sm text-muted-foreground">
                        Успешное завершение 3-й фазы клинических испытаний терапии 
                        повреждений спинного мозга
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="CheckCircle2" size={24} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Биопечать органов</h4>
                      <p className="text-sm text-muted-foreground">
                        Разработка технологии 3D-биопечати функциональных 
                        органов для трансплантации
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="CheckCircle2" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Персонализированная медицина</h4>
                      <p className="text-sm text-muted-foreground">
                        Создание индивидуальных клеточных терапий на основе 
                        генетического профиля пациента
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
