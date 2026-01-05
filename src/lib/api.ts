const API_BASE = {
  auth: 'https://functions.poehali.dev/eba3a427-1c5c-4886-9250-c5cea32e2155',
  chat: 'https://functions.poehali.dev/aa46ea50-7d57-4340-afd0-678480f9cd39',
  payments: 'https://functions.poehali.dev/99b715d5-21e2-44e9-8875-27cd59383f53',
};

export interface User {
  id: number;
  email: string;
  name: string;
  phone?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  created_at?: string;
}

export interface PaymentResponse {
  payment_url: string;
  payment_id: string;
  amount: number;
  demo_mode?: boolean;
}

class ApiClient {
  private getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  private setToken(token: string): void {
    localStorage.setItem('auth_token', token);
  }

  private removeToken(): void {
    localStorage.removeItem('auth_token');
  }

  async register(email: string, password: string, name: string, phone?: string): Promise<AuthResponse> {
    const response = await fetch(`${API_BASE.auth}?action=register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, name, phone }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Ошибка регистрации');
    }

    const data: AuthResponse = await response.json();
    this.setToken(data.token);
    return data;
  }

  async login(email: string, password: string): Promise<AuthResponse> {
    const response = await fetch(`${API_BASE.auth}?action=login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Ошибка входа');
    }

    const data: AuthResponse = await response.json();
    this.setToken(data.token);
    return data;
  }

  async getMe(): Promise<User | null> {
    const token = this.getToken();
    if (!token) return null;

    const response = await fetch(`${API_BASE.auth}?action=me`, {
      headers: { 'Authorization': `Bearer ${token}` },
    });

    if (!response.ok) {
      this.removeToken();
      return null;
    }

    const data = await response.json();
    return data.user;
  }

  logout(): void {
    this.removeToken();
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  async sendMessage(userId: number, message: string): Promise<{ response: string; timestamp: string }> {
    const response = await fetch(API_BASE.chat, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: userId, message }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Ошибка отправки сообщения');
    }

    return response.json();
  }

  async getChatHistory(userId: number): Promise<ChatMessage[]> {
    const response = await fetch(`${API_BASE.chat}?user_id=${userId}`);

    if (!response.ok) {
      throw new Error('Ошибка загрузки истории');
    }

    const data = await response.json();
    return data.history;
  }

  async createPayment(userId: number, planType: string, returnUrl: string): Promise<PaymentResponse> {
    const response = await fetch(`${API_BASE.payments}?action=create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: userId, plan_type: planType, return_url: returnUrl }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Ошибка создания платежа');
    }

    return response.json();
  }

  async getPaymentStatus(paymentId: string): Promise<{ status: string; paid?: boolean }> {
    const response = await fetch(`${API_BASE.payments}?action=status&payment_id=${paymentId}`);

    if (!response.ok) {
      throw new Error('Ошибка проверки статуса');
    }

    return response.json();
  }
}

export const api = new ApiClient();
