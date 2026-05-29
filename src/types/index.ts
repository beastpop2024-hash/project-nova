// User Types
export interface User {
  id: string;
  telegramId: string;
  username: string;
  avatar: string;
  walletAddress?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Mining Types
export interface MiningStats {
  hashrate: number;
  efficiency: number;
  energyMinutes: number;
  totalMined: number;
  minerRate: number;
  rewardsClaimed: number;
}

export interface Mining {
  baseHash: number;
  taskBoost: number;
  referralBoost: number;
  nftBoost: number;
  streakBoost: number;
  clanBoost: number;
  onchainBoost: number;
  eventBoost: number;
  aiReputationScore: number;
  finalHash: number;
}

// Task Types
export interface Task {
  id: string;
  type: 'telegram' | 'twitter' | 'youtube' | 'community';
  title: string;
  description: string;
  icon: string;
  reward: TaskReward;
  completed: boolean;
  completedAt?: Date;
}

export interface TaskReward {
  hashrate: number;
  xp: number;
  energy: number;
  lootKeys: number;
}

// Clan Types
export interface Clan {
  id: string;
  name: string;
  description: string;
  logo: string;
  leader: string;
  members: string[];
  totalPower: number;
  treasury: number;
  level: number;
  createdAt: Date;
}

// NFT Types
export interface NFTIdentity {
  id: string;
  userId: string;
  avatar: string;
  reactorSkin: string;
  prestigeFrame: string;
  aura: string;
  badge: string;
  level: number;
  evolution: number;
}

// Referral Types
export interface Referral {
  id: string;
  referrerId: string;
  refereeId: string;
  level: number;
  hashrateBenefit: number;
  commissionBenefit: number;
  xpBenefit: number;
  active: boolean;
  createdAt: Date;
}

// Leaderboard Types
export interface LeaderboardEntry {
  rank: number;
  userId: string;
  username: string;
  avatar: string;
  value: number;
  badge?: string;
}

export type LeaderboardType = 'miners' | 'referrals' | 'clans' | 'xp' | 'wallets' | 'nft';

// Crate Types
export interface Crate {
  id: string;
  userId: string;
  type: 'common' | 'rare' | 'legendary' | 'mythic';
  reward: CrateReward;
  openedAt?: Date;
}

export interface CrateReward {
  xp?: number;
  energy?: number;
  hashBoost?: number;
  nftBadge?: string;
  miningMultiplier?: number;
  reactorUpgrade?: string;
}

// Wallet Types
export interface WalletConnection {
  userId: string;
  walletAddress: string;
  walletType: 'ton' | 'metamask' | 'trust' | 'phantom' | 'coinbase' | 'walletconnect';
  reputation: number;
  connected: boolean;
  connectedAt: Date;
}

// Event Types
export interface Event {
  id: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  rewards: EventReward;
  participants: number;
}

export interface EventReward {
  xp: number;
  nftReward?: string;
  multiplier: number;
}