'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Lock, ChevronDown, Play } from 'lucide-react';
import { TextEffect } from '../core/text-effect';
import { AnimatedNumber } from '../core/animated-number';
import { useInView } from 'react-intersection-observer';

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-nocry-900/50 to-black"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 cyber-grid-bg opacity-20" />

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-nocry-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-cyber-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-nocry-500/30 backdrop-blur-sm mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nocry-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-nocry-500"></span>
            </span>
            <span className="text-sm text-nocry-100">Sistema Anti-Cheat de Nova Geração</span>
          </motion.div>

          {/* Main Heading with Text Effect */}
          <div className="mb-6">
            <TextEffect
              preset="blur-slide"
              per="word"
              as="h1"
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4"
              trigger={inView}
            >
              Proteção Invisível.
            </TextEffect>
            <TextEffect
              preset="blur-slide"
              per="word"
              as="h1"
              className="text-6xl md:text-7xl lg:text-8xl font-bold gradient-text"
              delay={0.3}
              trigger={inView}
            >
              Segurança Absoluta.
            </TextEffect>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Proxy UDP com autenticação <span className="text-nocry-400 font-semibold">Challenge-Response</span>,
            detecção de cheats em tempo real e monitoramento inteligente para seus servidores de jogos.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-nocry-500 to-nocry-600 text-white font-semibold rounded-xl overflow-hidden shadow-2xl shadow-nocry-500/50"
              style={{
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            >
              <span className="relative z-10 flex items-center gap-2 transform-gpu">
                Começar Agora
                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-nocry-600 to-nocry-700"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2 transform-gpu"
              style={{
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            >
              <Play className="w-5 h-5" />
              Ver Demo
            </motion.button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { icon: Shield, value: 2547, label: 'Servidores Protegidos', suffix: '+' },
              { icon: Zap, value: 10.23, label: 'Milhões de Jogadores', suffix: 'M' },
              { icon: Lock, value: 48932, label: 'Detecções em 24h', suffix: '' },
              { icon: Shield, value: 99.94, label: 'Uptime Garantido', suffix: '%' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="glass p-6 rounded-2xl border border-white/10 hover:border-nocry-500/50 transition-colors"
              >
                <stat.icon className="w-8 h-8 text-nocry-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  <AnimatedNumber value={stat.value} />
                  {stat.suffix}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-sm">Role para descobrir</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* Floating Icons */}
      <motion.div
        className="absolute top-32 right-32 lg:right-40 text-nocry-400"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Zap className="w-16 h-16 opacity-20" />
      </motion.div>
      <motion.div
        className="absolute top-1/2 left-16 lg:left-32 text-cyber-400"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Lock className="w-20 h-20 opacity-20" />
      </motion.div>
    </section>
  );
}
