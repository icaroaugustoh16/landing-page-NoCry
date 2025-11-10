'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Zap,
  Scale,
  Activity,
  Lock,
  HeartPulse,
  Shield,
  Sparkles,
  Gauge,
} from 'lucide-react';
import { AnimatedGroup } from '../core/animated-group';
import { TextEffect } from '../core/text-effect';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: Brain,
    title: 'Detecção com IA',
    description:
      'Sistema de machine learning identifica padrões anômalos de comportamento em tempo real com precisão de 99.7%',
    gradient: 'from-purple-500 to-pink-500',
    iconColor: 'text-purple-400',
    borderColor: 'border-purple-500/30',
    glowColor: 'shadow-purple-500/50',
  },
  {
    icon: Zap,
    title: 'Ultra Baixa Latência',
    description:
      'Proxy UDP otimizado com latência média de 2.3ms. Não afeta a experiência do jogador.',
    gradient: 'from-yellow-500 to-orange-500',
    iconColor: 'text-yellow-400',
    borderColor: 'border-yellow-500/30',
    glowColor: 'shadow-yellow-500/50',
  },
  {
    icon: Scale,
    title: 'Balanceamento de Carga',
    description:
      'Distribuição automática de tráfego entre múltiplos servidores. Suporta até 10M requisições/segundo.',
    gradient: 'from-blue-500 to-cyan-500',
    iconColor: 'text-blue-400',
    borderColor: 'border-blue-500/30',
    glowColor: 'shadow-blue-500/50',
  },
  {
    icon: Activity,
    title: 'Monitoramento Real-Time',
    description:
      'Dashboard com métricas em tempo real: detecções, latência, throughput e health dos servidores.',
    gradient: 'from-green-500 to-emerald-500',
    iconColor: 'text-green-400',
    borderColor: 'border-green-500/30',
    glowColor: 'shadow-green-500/50',
  },
  {
    icon: Lock,
    title: 'Autenticação RSA-2048',
    description:
      'Challenge-Response com criptografia de nível militar. Impossível de falsificar ou interceptar.',
    gradient: 'from-red-500 to-rose-500',
    iconColor: 'text-red-400',
    borderColor: 'border-red-500/30',
    glowColor: 'shadow-red-500/50',
  },
  {
    icon: HeartPulse,
    title: 'Health Checks Inteligentes',
    description:
      'Heartbeat a cada 30s com detecção de desconexão. Reconexão automática sem perda de dados.',
    gradient: 'from-teal-500 to-cyan-500',
    iconColor: 'text-teal-400',
    borderColor: 'border-teal-500/30',
    glowColor: 'shadow-teal-500/50',
  },
];

export default function FeaturesV2() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-b from-black via-nocry-900/20 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-nocry-900/20 via-black to-black" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <TextEffect
            preset="blur-slide"
            per="word"
            as="h2"
            className="text-5xl md:text-6xl font-bold mb-6"
            trigger={inView}
          >
            Tecnologia de Ponta
          </TextEffect>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Combinamos inteligência artificial, criptografia avançada e infraestrutura de alta performance
          </motion.p>
        </div>

        {/* Features Grid */}
        <AnimatedGroup preset="blur-slide" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`group relative p-8 rounded-2xl border bg-white/5 backdrop-blur-sm ${feature.borderColor} hover:bg-white/10 transition-all duration-300`}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                perspective: 1000,
                WebkitPerspective: 1000,
              }}
            >
              {/* Glow Effect on Hover */}
              <motion.div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl ${feature.glowColor}`}
                style={{
                  background: `linear-gradient(135deg, ${feature.gradient})`,
                }}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg ${feature.glowColor} group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 transform-gpu">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 transform-gpu">
                  {feature.description}
                </p>

                {/* Hover Line */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-full`}
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </AnimatedGroup>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-nocry-500/10 via-purple-500/10 to-cyber-500/10 border border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Gauge className="w-5 h-5 text-nocry-400" />
                <div className="text-3xl font-bold text-white">99.7%</div>
              </div>
              <div className="text-sm text-gray-400">Precisão de Detecção</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                <div className="text-3xl font-bold text-white">2.3ms</div>
              </div>
              <div className="text-sm text-gray-400">Latência Média</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Scale className="w-5 h-5 text-blue-400" />
                <div className="text-3xl font-bold text-white">10M</div>
              </div>
              <div className="text-sm text-gray-400">Req/segundo</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-green-400" />
                <div className="text-3xl font-bold text-white">99.94%</div>
              </div>
              <div className="text-sm text-gray-400">Uptime SLA</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
