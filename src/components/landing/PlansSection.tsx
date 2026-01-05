import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

export default function PlansSection() {
  const navigate = useNavigate();

  return (
    <section id="plans" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Выберите свой этап
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Каждая подписка адаптирована под конкретный период материнства
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-border hover:border-primary transition-all">
            <div className="text-center mb-6">
              <div className="inline-block p-3 bg-primary/10 rounded-2xl mb-4">
                <Icon name="Baby" size={40} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">Перед родами</h3>
              <p className="text-muted-foreground">Подготовка к рождению малыша</p>
            </div>
            <div className="mb-6">
              <div className="text-4xl font-bold text-foreground">500₽</div>
              <div className="text-muted-foreground">в месяц</div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Подготовка к родам</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Питание для беременных</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Безлимитный ИИ-чат</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Доступ к форуму</span>
              </li>
            </ul>
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-white"
              onClick={() => navigate('/login')}
            >
              Начать подготовку
            </Button>
          </div>

          <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 shadow-2xl border-2 border-primary transform scale-105 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                Популярный
              </span>
            </div>
            <div className="text-center mb-6">
              <div className="inline-block p-3 bg-white/20 rounded-2xl mb-4">
                <Icon name="Heart" size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">После родов</h3>
              <p className="text-white/90">Восстановление и уход за малышом</p>
            </div>
            <div className="mb-6">
              <div className="text-4xl font-bold text-white">500₽</div>
              <div className="text-white/90">в месяц</div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <Icon name="Check" size={20} className="text-white mt-0.5 flex-shrink-0" />
                <span className="text-white">Постродовое восстановление</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={20} className="text-white mt-0.5 flex-shrink-0" />
                <span className="text-white">Уход за новорожденным</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={20} className="text-white mt-0.5 flex-shrink-0" />
                <span className="text-white">Фитнес после родов</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={20} className="text-white mt-0.5 flex-shrink-0" />
                <span className="text-white">Эмоциональная поддержка</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={20} className="text-white mt-0.5 flex-shrink-0" />
                <span className="text-white">Безлимитный ИИ-чат</span>
              </li>
            </ul>
            <Button 
              className="w-full bg-white text-primary hover:bg-white/90"
              onClick={() => navigate('/login')}
            >
              Начать восстановление
            </Button>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-border hover:border-secondary transition-all">
            <div className="text-center mb-6">
              <div className="inline-block p-3 bg-secondary/10 rounded-2xl mb-4">
                <Icon name="Sparkles" size={40} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">Время взращивания</h3>
              <p className="text-muted-foreground">Развитие ребёнка до 5 лет</p>
            </div>
            <div className="mb-6">
              <div className="text-4xl font-bold text-foreground">500₽</div>
              <div className="text-muted-foreground">в месяц</div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <Icon name="Check" size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Развитие ребёнка</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Питание и здоровье</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Советы по воспитанию</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Безлимитный ИИ-чат</span>
              </li>
            </ul>
            <Button 
              className="w-full bg-secondary hover:bg-secondary/90 text-white"
              onClick={() => navigate('/login')}
            >
              Начать развитие
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
