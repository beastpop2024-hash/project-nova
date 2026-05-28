'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export function LandingPage() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      title: 'Bitcoin-style Mining',
      description: 'Passive mining with dynamic difficulty and scarcity-based rewards',
      icon: '⛏️',
    },
    {
      title: 'Social Ecosystem',
      description: '3-level referral system with clan wars and global leaderboards',
      icon: '👥',
    },
    {
      title: 'Premium UX',
      description: 'Enterprise-grade design with 3D Reactor visualization',
      icon: '✨',
    },
    {
      title: 'Web3 Integration',
      description: 'Wallet support, NFT identity, and onchain rewards',
      icon: '🔗',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg border-b border-nova-blue/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold gradient-nova bg-clip-text text-transparent">
            PROJECT NOVA
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2 text-sm font-medium text-nova-gray hover:text-white transition">
              About
            </button>
            <button className="px-6 py-2 bg-nova-blue text-black rounded-lg font-medium hover:bg-nova-electric transition">
              Launch App
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(0deg, transparent 24%, rgba(0, 132, 255, .05) 25%, rgba(0, 132, 255, .05) 26%, transparent 27%, transparent 74%, rgba(0, 132, 255, .05) 75%, rgba(0, 132, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 132, 255, .05) 25%, rgba(0, 132, 255, .05) 26%, transparent 27%, transparent 74%, rgba(0, 132, 255, .05) 75%, rgba(0, 132, 255, .05) 76%, transparent 77%, transparent)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            The Operating System of
            <span className="gradient-nova bg-clip-text text-transparent"> Web3 Civilization</span>
          </h1>
          <p className="text-xl text-nova-gray mb-12 max-w-2xl mx-auto">
            PROJECT NOVA is the first luxury Web3 mining super-app on Telegram. Join 1M+ users in
            the next global phenomenon.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-nova text-black text-lg font-bold rounded-lg hover:shadow-lg hover:shadow-nova-blue/50 transition"
          >
            Launch App
          </motion.button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Core Features
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="glass p-6 rounded-xl cursor-pointer transition"
                onHoverStart={() => setHoveredFeature(idx)}
                onHoverEnd={() => setHoveredFeature(null)}
                whileHover={{ y: -10 }}
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-nova-gray">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 border-t border-nova-blue/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Total Supply', value: '696M NOVA' },
              { label: 'Daily Emission', value: '1.52M NOVA' },
              { label: 'Target Users Y1', value: '1M Users' },
              { label: 'Distribution', value: '365 Days' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-3xl font-bold gradient-nova bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <p className="text-nova-gray text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-nova-blue/10 py-8 px-4 text-center text-nova-gray">
        <p>&copy; 2024 PROJECT NOVA. All rights reserved.</p>
      </footer>
    </div>
  );
}
