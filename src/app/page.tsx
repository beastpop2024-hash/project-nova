'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-gradient-to-br from-nova-dark via-black to-nova-dark">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-nova-blue-electric to-nova-blue-coinbase bg-clip-text text-transparent">
            NOVA
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2 rounded-lg hover:bg-white/10 transition">
              Dashboard
            </button>
            <button className="px-6 py-2 rounded-lg bg-nova-blue-coinbase text-white hover:bg-nova-blue-electric transition">
              Launch App
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-nova-gray-soft bg-clip-text text-transparent">
            The Operating System of Web3 Civilization
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            PROJECT NOVA transforms you into a Web3 citizen through luxury fintech,
            Bitcoin-style mining, and an ecosystem designed for the next billion users.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {[
            {
              title: 'Bitcoin-Style Mining',
              description: 'Dynamic difficulty, passive rewards, competitive scarcity',
              icon: '⛏️',
            },
            {
              title: 'Luxury UX',
              description: 'Coinbase simplicity meets Apple design excellence',
              icon: '✨',
            },
            {
              title: 'Web3 Identity',
              description: 'NFT avatars, dynamic evolution, digital citizenship',
              icon: '🎭',
            },
            {
              title: 'Clan Economy',
              description: 'Join digital civilizations with shared mining power',
              icon: '👥',
            },
            {
              title: 'AI Protection',
              description: 'Advanced anti-sybil system keeps ecosystem pure',
              icon: '🛡️',
            },
            {
              title: 'Onchain Rewards',
              description: 'Earn rewards for real Web3 activity and transactions',
              icon: '⛓️',
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition"
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-8">Ready to Join the Future?</h2>
          <button className="px-8 py-4 bg-gradient-to-r from-nova-blue-coinbase to-nova-blue-electric rounded-lg text-white font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition">
            Launch PROJECT NOVA
          </button>
        </motion.div>
      </section>
    </main>
  );
}
