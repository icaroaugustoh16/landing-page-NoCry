'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { InfiniteSlider } from '../core/infinite-slider';
import { useInView } from 'react-intersection-observer';

const games = [
  {
    name: 'Minecraft',
    logoUrl: 'https://logos-world.net/wp-content/uploads/2020/04/Minecraft-Logo.png',
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    name: 'Counter-Strike 2',
    logoUrl: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/730/logo.png',
    gradient: 'from-orange-500 to-yellow-600',
  },
  {
    name: 'Rust',
    logoUrl: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/252490/logo.png',
    gradient: 'from-red-500 to-orange-600',
  },
  {
    name: 'Valorant',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Valorant_logo.svg',
    gradient: 'from-red-600 to-pink-600',
  },
  {
    name: 'FiveM',
    logoUrl: 'https://raw.githubusercontent.com/citizenfx/fivem/master/ext/ui-build/data/images/fxlogo_white.png',
    gradient: 'from-orange-500 to-red-600',
  },
  {
    name: 'Fortnite',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/FortniteLogo.svg',
    gradient: 'from-blue-500 to-purple-600',
  },
  {
    name: 'Apex Legends',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Apex_legends_alt_logo.svg',
    gradient: 'from-red-500 to-orange-500',
  },
  {
    name: 'DayZ',
    logoUrl: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/221100/logo.png',
    gradient: 'from-gray-500 to-red-600',
  },
  {
    name: 'League of Legends',
    logoUrl: 'https://logos-world.net/wp-content/uploads/2020/11/League-of-Legends-Logo.png',
    gradient: 'from-yellow-500 to-orange-600',
  },
];

export default function TrustedPlatforms() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="relative pt-40 pb-32 bg-gradient-to-b from-black via-nocry-900/10 to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[length:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nocry-500/10 border border-nocry-500/30 mb-6">
            <Shield className="w-4 h-4 text-nocry-400" />
            <span className="text-sm text-nocry-100">Confiança Global</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Plataformas e Comunidades que Confiam no NoCry
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Milhões de jogadores protegidos em tempo real
          </p>
        </motion.div>

        {/* Infinite Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <InfiniteSlider gap={24} speed={50}>
            {games.map((game, index) => (
              <motion.div
                key={index}
                className="group relative w-72 h-40 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm cursor-pointer"
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={{
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  perspective: 1000,
                  WebkitPerspective: 1000,
                  overflow: 'hidden',
                }}
              >
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${game.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                {/* Logo Container */}
                <div className="relative h-full flex items-center justify-center p-8">
                  <img
                    src={game.logoUrl}
                    alt={`${game.name} logo`}
                    className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0 brightness-90 group-hover:brightness-110 transform-gpu"
                    onError={(e) => {
                      // Fallback para texto se a imagem não carregar
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('.fallback-text')) {
                        const fallback = document.createElement('div');
                        fallback.className = 'fallback-text text-3xl font-bold text-white/60 group-hover:text-white transition-colors';
                        fallback.textContent = game.name;
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </div>

                {/* Game Name - Always Visible with Better Styling */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none">
                  <p className="text-sm font-bold text-white text-center tracking-wide transform-gpu">{game.name}</p>
                </div>
              </motion.div>
            ))}
          </InfiniteSlider>
        </motion.div>

        {/* Removed Bottom Note */}
      </div>
    </section>
  );
}
