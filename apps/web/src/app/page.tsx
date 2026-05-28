'use client';

import { useEffect, useState } from 'react';
import { LandingPage } from '@/components/pages/LandingPage';
import { DashboardPage } from '@/components/pages/DashboardPage';
import { useTelegramUser } from '@/hooks/useTelegramUser';

export default function Home() {
  const { user, loading } = useTelegramUser();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-nova-blue border-t-nova-electric rounded-full animate-spin"></div>
          <p className="text-nova-gray text-sm">Loading PROJECT NOVA...</p>
        </div>
      </div>
    );
  }

  return user ? <DashboardPage user={user} /> : <LandingPage />;
}