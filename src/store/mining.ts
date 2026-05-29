import { create } from 'zustand';
import type { MiningStats, Mining } from '@types/index';

interface MiningStore {
  stats: MiningStats;
  mining: Mining;
  updateStats: (stats: Partial<MiningStats>) => void;
  updateMining: (mining: Partial<Mining>) => void;
  calculateFinalHash: () => number;
}

export const useMiningStore = create<MiningStore>((set, get) => ({
  stats: {
    hashrate: 3256,
    efficiency: 98.7,
    energyMinutes: 85,
    totalMined: 12450.75,
    minerRate: 3256,
    rewardsClaimed: 42560,
  },
  mining: {
    baseHash: 1,
    taskBoost: 0,
    referralBoost: 0,
    nftBoost: 0,
    streakBoost: 0,
    clanBoost: 0,
    onchainBoost: 0,
    eventBoost: 0,
    aiReputationScore: 0,
    finalHash: 1,
  },
  updateStats: (newStats) =>
    set((state) => ({
      stats: { ...state.stats, ...newStats },
    })),
  updateMining: (newMining) =>
    set((state) => ({
      mining: { ...state.mining, ...newMining },
    })),
  calculateFinalHash: () => {
    const { mining } = get();
    const finalHash =
      mining.baseHash +
      mining.taskBoost +
      mining.referralBoost +
      mining.nftBoost +
      mining.streakBoost +
      mining.clanBoost +
      mining.onchainBoost +
      mining.eventBoost +
      mining.aiReputationScore;
    return finalHash;
  },
}));
