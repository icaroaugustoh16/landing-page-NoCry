"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Lock, ArrowRight, ChevronDown } from "lucide-react";
import { fadeInUp, scaleIn, staggerContainer, staggerItem } from "@/lib/animation-variants";
import { memo } from "react";

// Memoize floating icons para evitar re-renders desnecessários
const FloatingIcon = memo(({ Icon, delay, className }: { Icon: any; delay: number; className: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: 1,
      scale: 1,
      y: [0, -20, 0],
      rotate: [0, 10, -10, 0],
    }}
    transition={{
      opacity: { duration: 0.5, delay },
      scale: { duration: 0.5, delay },
      y: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      },
      rotate: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      },
    }}
    className={className}
    data-animate
  >
    <Icon className="w-8 h-8" />
  </motion.div>
));

FloatingIcon.displayName = "FloatingIcon";

export default function Hero() {
  const stats = [
    { value: "99.9%", label: "Uptime" },
    { value: "10M+", label: "Active Sessions" },
    { value: "<5ms", label: "Detection Time" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated Background Orbs - Otimizado com GPU acceleration - Bem atrás */}
      <div className="absolute inset-0 -z-20">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-nocry-500/20 rounded-full blur-3xl"
          data-animate
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          data-animate
        />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Floating Icons - Memoized para performance - Com z-index menor para não sobrepor texto */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <FloatingIcon
            Icon={Shield}
            delay={0}
            className="absolute -top-10 left-0 md:left-10 w-16 h-16 bg-gradient-to-br from-nocry-500 to-nocry-700 rounded-xl flex items-center justify-center shadow-lg shadow-nocry-500/50"
          />
          <FloatingIcon
            Icon={Zap}
            delay={0.3}
            className="absolute top-32 right-0 md:right-32 lg:right-40 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/50"
          />
          <FloatingIcon
            Icon={Lock}
            delay={0.6}
            className="absolute top-[420px] left-4 md:left-16 lg:left-32 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/50"
          />
        </div>

        {/* Main Content - Otimizado com variantes */}
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="relative z-20">
          <motion.div variants={scaleIn} className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-nocry-500/10 border border-nocry-500/20 text-nocry-400 text-sm font-semibold">
              🛡️ Next-Gen Anti-Cheat Platform
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight"
          >
            Proteja Seu Servidor <br />
            <span className="gradient-text">Sem Limites</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
          >
            Detecção de cheats com IA, monitoramento em tempo real e latência ultra-baixa
            para manter sua comunidade segura e justa.
          </motion.p>

          {/* CTA Buttons - Com hover otimizados */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(14, 165, 233, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-nocry-500 to-nocry-700 rounded-lg font-semibold text-lg flex items-center gap-2 shadow-lg shadow-nocry-500/30 hover-lift"
              data-animate
            >
              Começar Gratuitamente
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass rounded-lg font-semibold text-lg border border-white/10 hover:bg-white/10 transition-all hover-lift"
              data-animate
            >
              Ver Demonstração
            </motion.button>
          </motion.div>

          {/* Stats Grid - Otimizado com stagger */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass rounded-xl p-6 hover-lift"
                data-animate
              >
                <div className="text-3xl md:text-4xl font-bold text-nocry-400 mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Centralizado na parte inferior da viewport */}
      </div>
      
      {/* Scroll Indicator fora do container para ficar na parte inferior da tela */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-gray-400 cursor-pointer hover:text-nocry-400 transition-colors"
        >
          <span className="text-sm">Scroll para explorar</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
