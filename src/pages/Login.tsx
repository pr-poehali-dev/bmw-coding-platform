import { useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
  });
  const [loading, setLoading] = useState(false);
  const { login, register } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        await login(formData.email, formData.password);
        toast({
          title: 'Добро пожаловать!',
          description: 'Вы успешно вошли в систему',
        });
      } else {
        await register(formData.email, formData.password, formData.name, formData.phone);
        toast({
          title: 'Регистрация успешна!',
          description: 'Ваш аккаунт создан',
        });
      }
      navigate('/dashboard');
    } catch (error: any) {
      toast({
        title: 'Ошибка',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Heart" className="text-primary" size={48} />
            <span className="text-3xl font-bold text-foreground">МамаПомощь</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            {isLogin ? 'Вход в аккаунт' : 'Создать аккаунт'}
          </h1>
          <p className="text-muted-foreground">
            {isLogin
              ? 'Войдите, чтобы получить доступ к ИИ-помощнику'
              : 'Зарегистрируйтесь и начните пользоваться сервисом'}
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl border border-border">
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">Ваше имя</label>
                <Input
                  placeholder="Анна"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required={!isLogin}
                  className="border-2"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold mb-2 text-foreground">Email</label>
              <Input
                type="email"
                placeholder="anna@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="border-2"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-foreground">Пароль</label>
              <Input
                type="password"
                placeholder="Минимум 6 символов"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                minLength={6}
                className="border-2"
              />
            </div>

            {!isLogin && (
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">
                  Телефон <span className="text-muted-foreground">(необязательно)</span>
                </label>
                <Input
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="border-2"
                />
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white text-lg"
              size="lg"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Icon name="Loader2" className="mr-2 animate-spin" size={20} />
                  Загрузка...
                </>
              ) : (
                <>
                  {isLogin ? 'Войти' : 'Зарегистрироваться'}
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-primary hover:underline"
            >
              {isLogin ? 'Нет аккаунта? Зарегистрироваться' : 'Уже есть аккаунт? Войти'}
            </button>
          </div>

          <div className="mt-6 pt-6 border-t border-border text-center">
            <button
              onClick={() => navigate('/')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon name="ArrowLeft" className="inline mr-1" size={16} />
              Вернуться на главную
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
