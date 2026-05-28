'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ReactorCore } from '@/components/reactor/ReactorCore';
import { TopBar } from '@/components/dashboard/TopBar';
import { BottomNav } from '@/components/dashboard/BottomNav';
import { MiningPanel } from '@/components/dashboard/MiningPanel';
import { TasksPanel } from '@/components/dashboard/TasksPanel';
import { ClansPanel } from '@/components/dashboard/ClansPanel';
import { NFTPanel } from '@/components/dashboard/NFTPanel';

type View = 'mining' | 'tasks' | 'clans' | 'nft';

interface DashboardPageProps {
  user: any;
}

export function DashboardPage({ user }: DashboardPageProps) {
  const [activeView, setActiveView] = useState<View>('mining');
  const [balance, setBalance] = useState(42.5);
  const [xp, setXp] = useState(1250);
  const [mining, setMining] = useState({
    hashrate: 2.5,
    dailyReward: 4.16,
    totalMined: 125.75,
  });

  useEffect(() => {
    // Simulate mining
    const interval = setInterval(() => {
      setBalance((prev) => prev + 0.001);
      setMining((prev) => ({
        ...prev,
        totalMined: prev.totalMined + 0.001,
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const renderPanel = () => {
    switch (activeView) {
      case 'tasks':
        return <TasksPanel />;
      case 'clans':
        return <ClansPanel />;
      case 'nft':
        return <NFTPanel />;
      default:
        return <MiningPanel mining={mining} />;
    }
  };

  return (
    <div className="fixed inset-0 bg-black text-white overflow-hidden flex flex-col">
      {/* Top Bar */}
      <TopBar balance={balance} xp={xp} user={user} />

      {/* Main Content */}
      <div className="relative flex-1 overflow-y-auto">
        {/* 3D Reactor Background */}
        <div className="absolute inset-0 z-0 opacity-30">
          <ReactorCore hashrate={mining.hashrate} />
        </div>

        {/* Content Layer */}
        <motion.div
          className="relative z-10 p-4 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {renderPanel()}
        </motion.div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeView={activeView} onViewChange={setActiveView} />
    </div>
  );
}
