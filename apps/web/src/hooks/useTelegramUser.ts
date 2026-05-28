import { useEffect, useState } from 'react';

interface TelegramUser {
  id: number;
  is_bot: boolean;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  is_premium?: boolean;
  photo_url?: string;
}

export function useTelegramUser() {
  const [user, setUser] = useState<TelegramUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if we're in Telegram environment
    if (typeof window !== 'undefined' && (window as any).Telegram?.WebApp) {
      const tg = (window as any).Telegram.WebApp;
      tg.ready();

      if (tg.initDataUnsafe?.user) {
        setUser(tg.initDataUnsafe.user);
        // Store user in localStorage
        localStorage.setItem('telegram_user', JSON.stringify(tg.initDataUnsafe.user));
      } else {
        // Fallback: Try to get from localStorage
        const stored = localStorage.getItem('telegram_user');
        if (stored) {
          setUser(JSON.parse(stored));
        } else {
          // Mock user for development
          const mockUser = {
            id: 123456789,
            is_bot: false,
            first_name: 'User',
            username: 'nova_user',
          };
          setUser(mockUser);
        }
      }
    } else {
      // Development mode - mock user
      const mockUser = {
        id: 123456789,
        is_bot: false,
        first_name: 'NOVA',
        username: 'nova_user',
      };
      setUser(mockUser);
    }

    setLoading(false);
  }, []);

  return { user, loading, error };
}
