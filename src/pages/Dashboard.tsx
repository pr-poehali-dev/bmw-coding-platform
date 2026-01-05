import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/auth-context';
import { api, ChatMessage } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'chat' | 'plans' | 'settings'>('chat');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  useEffect(() => {
    if (user && activeTab === 'chat') {
      loadChatHistory();
    }
  }, [user, activeTab]);

  const loadChatHistory = async () => {
    if (!user) return;
    try {
      const history = await api.getChatHistory(user.id);
      setChatHistory(history);
    } catch (error) {
      console.error('Ошибка загрузки истории:', error);
    }
  };

  const handleSendMessage = async () => {
    if (!message.trim() || !user) return;

    setLoading(true);
    const userMessage = message;
    setMessage('');

    try {
      const response = await api.sendMessage(user.id, userMessage);
      
      setChatHistory([
        ...chatHistory,
        { role: 'user', content: userMessage },
        { role: 'assistant', content: response.response },
      ]);

      toast({
        title: 'Сообщение отправлено',
        description: 'ИИ-помощник ответил',
      });
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

  const handleSubscribe = async (planType: string) => {
    if (!user) return;

    try {
      const returnUrl = `${window.location.origin}/dashboard?payment_success=true`;
      const payment = await api.createPayment(user.id, planType, returnUrl);

      if (payment.demo_mode) {
        toast({
          title: 'Демо-режим',
          description: payment.payment_url,
        });
      } else {
        window.location.href = payment.payment_url;
      }
    } catch (error: any) {
      toast({
        title: 'Ошибка',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Icon name="Loader2" className="animate-spin mx-auto mb-4" size={48} />
          <p className="text-muted-foreground">Загрузка...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Heart" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-foreground">МамаПомощь</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Привет, {user.name}!</span>
            <Button variant="outline" onClick={handleLogout}>
              <Icon name="LogOut" className="mr-2" size={16} />
              Выйти
            </Button>
          </div>
        </nav>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="flex gap-8">
          <aside className="w-64 flex-shrink-0">
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('chat')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  activeTab === 'chat'
                    ? 'bg-primary text-white'
                    : 'bg-white hover:bg-muted text-foreground'
                }`}
              >
                <Icon name="MessageCircle" size={20} />
                <span className="font-medium">ИИ-чат</span>
              </button>

              <button
                onClick={() => setActiveTab('plans')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  activeTab === 'plans'
                    ? 'bg-primary text-white'
                    : 'bg-white hover:bg-muted text-foreground'
                }`}
              >
                <Icon name="CreditCard" size={20} />
                <span className="font-medium">Подписки</span>
              </button>

              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  activeTab === 'settings'
                    ? 'bg-primary text-white'
                    : 'bg-white hover:bg-muted text-foreground'
                }`}
              >
                <Icon name="Settings" size={20} />
                <span className="font-medium">Настройки</span>
              </button>
            </nav>
          </aside>

          <main className="flex-1">
            {activeTab === 'chat' && (
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-border">
                <h2 className="text-3xl font-bold mb-6 text-foreground">ИИ-помощник</h2>

                <div className="mb-6 space-y-4 max-h-96 overflow-y-auto">
                  {chatHistory.length === 0 ? (
                    <div className="text-center py-12">
                      <Icon name="MessageCircle" size={48} className="mx-auto text-muted-foreground mb-4" />
                      <p className="text-muted-foreground">
                        Начните диалог с ИИ-помощником! Задайте любой вопрос о материнстве.
                      </p>
                    </div>
                  ) : (
                    chatHistory.map((msg, idx) => (
                      <div
                        key={idx}
                        className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        {msg.role === 'assistant' && (
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon name="Bot" size={20} className="text-primary" />
                          </div>
                        )}
                        <div
                          className={`max-w-xl p-4 rounded-2xl ${
                            msg.role === 'user'
                              ? 'bg-primary text-white'
                              : 'bg-muted text-foreground'
                          }`}
                        >
                          <p>{msg.content}</p>
                        </div>
                        {msg.role === 'user' && (
                          <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                            <Icon name="User" size={20} className="text-secondary" />
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>

                <div className="flex gap-3">
                  <Textarea
                    placeholder="Напишите ваш вопрос..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    className="flex-1"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={loading || !message.trim()}
                    className="bg-primary hover:bg-primary/90 text-white self-end"
                  >
                    {loading ? (
                      <Icon name="Loader2" className="animate-spin" size={20} />
                    ) : (
                      <Icon name="Send" size={20} />
                    )}
                  </Button>
                </div>
              </div>
            )}

            {activeTab === 'plans' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Управление подписками</h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-3xl p-6 shadow-sm border-2 border-border hover:border-primary transition-all">
                    <div className="text-center mb-4">
                      <div className="inline-block p-3 bg-primary/10 rounded-2xl mb-4">
                        <Icon name="Baby" size={32} className="text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">Перед родами</h3>
                    </div>
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-foreground">500₽</div>
                      <div className="text-muted-foreground">в месяц</div>
                    </div>
                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-white"
                      onClick={() => handleSubscribe('before_birth')}
                    >
                      Подписаться
                    </Button>
                  </div>

                  <div className="bg-white rounded-3xl p-6 shadow-sm border-2 border-border hover:border-secondary transition-all">
                    <div className="text-center mb-4">
                      <div className="inline-block p-3 bg-secondary/10 rounded-2xl mb-4">
                        <Icon name="Heart" size={32} className="text-secondary" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">После родов</h3>
                    </div>
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-foreground">500₽</div>
                      <div className="text-muted-foreground">в месяц</div>
                    </div>
                    <Button
                      className="w-full bg-secondary hover:bg-secondary/90 text-white"
                      onClick={() => handleSubscribe('after_birth')}
                    >
                      Подписаться
                    </Button>
                  </div>

                  <div className="bg-white rounded-3xl p-6 shadow-sm border-2 border-border hover:border-accent transition-all">
                    <div className="text-center mb-4">
                      <div className="inline-block p-3 bg-accent/10 rounded-2xl mb-4">
                        <Icon name="Sparkles" size={32} className="text-accent" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">Время взращивания</h3>
                    </div>
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-foreground">500₽</div>
                      <div className="text-muted-foreground">в месяц</div>
                    </div>
                    <Button
                      className="w-full bg-accent hover:bg-accent/90 text-white"
                      onClick={() => handleSubscribe('growth')}
                    >
                      Подписаться
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-border">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Настройки профиля</h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">Email</label>
                    <Input value={user.email} disabled className="bg-muted" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">Имя</label>
                    <Input value={user.name} disabled className="bg-muted" />
                  </div>

                  {user.phone && (
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-foreground">Телефон</label>
                      <Input value={user.phone} disabled className="bg-muted" />
                    </div>
                  )}

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4">
                      ID пользователя: {user.id}
                    </p>
                    <Button variant="outline" onClick={handleLogout}>
                      <Icon name="LogOut" className="mr-2" size={16} />
                      Выйти из аккаунта
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
