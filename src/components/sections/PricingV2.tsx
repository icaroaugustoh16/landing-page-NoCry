'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles, Crown, Rocket, ArrowRight } from 'lucide-react';
import { AnimatedGroup } from '../core/animated-group';
import { TextEffect } from '../core/text-effect';
import { useInView } from 'react-intersection-observer';

const pricingPlans = [
  {
    name: 'Starter',
    icon: Rocket,
    price: { monthly: 29, annual: 290 },
    description: 'Perfeito para servidores pequenos e comunidades iniciantes',
    features: [
      'Até 100 jogadores simultâneos',
      'Detecção básica de cheats',
      'Challenge-Response RSA-2048',
      'Dashboard básico',
      'Suporte por email',
      '99.9% SLA',
    ],
    gradient: 'from-blue-500 to-cyan-500',
    popular: false,
  },
  {
    name: 'Professional',
    icon: Crown,
    price: { monthly: 99, annual: 990 },
    description: 'Para servidores médios com necessidades avançadas',
    features: [
      'Até 1.000 jogadores simultâneos',
      'Detecção com IA avançada',
      'Challenge-Response RSA-2048',
      'Dashboard completo + API',
      'Suporte prioritário 24/7',
      '99.95% SLA',
      'Webhooks personalizados',
      'Análise comportamental',
    ],
    gradient: 'from-purple-500 to-pink-500',
    popular: true,
  },
  {
    name: 'Enterprise',
    icon: Sparkles,
    price: { monthly: null, annual: null },
    description: 'Soluções customizadas para grandes operações',
    features: [
      'Jogadores ilimitados',
      'IA customizada por servidor',
      'Criptografia personalizada',
      'Dashboard white-label',
      'Suporte dedicado 24/7',
      '99.99% SLA',
      'Infraestrutura dedicada',
      'Consultoria especializada',
      'Onboarding personalizado',
    ],
    gradient: 'from-orange-500 to-red-500',
    popular: false,
  },
];

export default function PricingV2() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section ref={ref} className="relative py-32 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-nocry-900/30 via-black to-black" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <TextEffect
            preset="blur-slide"
            per="word"
            as="h2"
            className="text-5xl md:text-6xl font-bold mb-6"
            trigger={inView}
          >
            Escolha Seu Plano
          </TextEffect>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
          >
            Proteção flexível que cresce com seu servidor. Sem taxas ocultas.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-4 p-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
          >
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                billingPeriod === 'monthly'
                  ? 'bg-gradient-to-r from-nocry-500 to-nocry-600 text-white shadow-lg shadow-nocry-500/50'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                billingPeriod === 'annual'
                  ? 'bg-gradient-to-r from-nocry-500 to-nocry-600 text-white shadow-lg shadow-nocry-500/50'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Anual
              <span className="ml-2 px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full">-17%</span>
            </button>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <AnimatedGroup preset="blur-slide" className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative p-8 rounded-3xl border ${
                plan.popular
                  ? 'border-nocry-500 bg-gradient-to-b from-nocry-500/10 to-black scale-105'
                  : 'border-white/10 bg-white/5'
              } backdrop-blur-sm hover:border-nocry-500/50 transition-all duration-300`}
              whileHover={{ y: -10, scale: plan.popular ? 1.07 : 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                perspective: 1000,
                WebkitPerspective: 1000,
              }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-nocry-500 to-nocry-600 rounded-full text-sm font-bold text-white shadow-lg shadow-nocry-500/50"
                >
                  ⭐ Mais Popular
                </motion.div>
              )}

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                <plan.icon className="w-8 h-8 text-white" />
              </div>

              {/* Plan Name */}
              <h3 className="text-3xl font-bold text-white mb-2 transform-gpu">{plan.name}</h3>

              {/* Description */}
              <p className="text-gray-400 mb-6 transform-gpu">{plan.description}</p>

              {/* Price */}
              <div className="mb-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={billingPeriod}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {plan.price[billingPeriod] !== null ? (
                      <>
                        <div className="flex items-baseline gap-2">
                          <span className="text-5xl font-bold text-white">
                            R${billingPeriod === 'monthly' ? plan.price.monthly : Math.round((plan.price.annual || 0) / 12)}
                          </span>
                          <span className="text-gray-400">/mês</span>
                        </div>
                        {billingPeriod === 'annual' && plan.price.annual && (
                          <p className="text-sm text-gray-500 mt-2">R${plan.price.annual} cobrado anualmente</p>
                        )}
                      </>
                    ) : (
                      <div className="text-3xl font-bold text-white">Sob Consulta</div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 rounded-xl font-semibold mb-8 flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-nocry-500 to-nocry-600 text-white shadow-lg shadow-nocry-500/50'
                    : 'bg-white/10 text-white hover:bg-white/20'
                } transition-all duration-300`}
              >
                {plan.price[billingPeriod] !== null ? 'Começar Agora' : 'Falar com Vendas'}
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              {/* Features List */}
              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: featureIndex * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatedGroup>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 mb-8">Plataformas e comunidades que confiam no NoCry</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
            {['Minecraft', 'CS:GO', 'Rust', 'Valorant', 'GTA V'].map((game, index) => (
              <div key={index} className="px-6 py-3 bg-white/5 rounded-lg text-gray-400 font-semibold">
                {game}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
