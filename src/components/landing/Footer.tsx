import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-card border-t border-border">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Heart" className="text-primary" size={28} />
              <span className="text-xl font-bold text-foreground">МамаПомощь</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Умный ИИ-помощник для молодых мам в России
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Продукт</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">О нас</a>
              <a href="#plans" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Тарифы</a>
              <a href="#blog" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Блог</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Форум</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Поддержка</h4>
            <div className="space-y-2">
              <a href="#contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Контакты</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Пользовательское соглашение</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Соцсети</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-primary">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors text-secondary">
                <Icon name="MessageCircle" size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors text-accent">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            &copy; 2024 МамаПомощь. Все права защищены. Соответствует ФЗ-152 о персональных данных.
          </p>
        </div>
      </div>
    </footer>
  );
}
