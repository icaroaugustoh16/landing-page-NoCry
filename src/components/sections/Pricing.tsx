"use client";

import { motion } from "framer-motion";
import { Check, Zap, Star } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfeito para servidores pequenos",
      features: [
        "Até 100 jogadores simultâneos",
        "1 servidor protegido",
        "Detecção básica de cheats",
        "Dashboard básico",
        "Suporte por email",
        "99.5% uptime SLA",
      ],
      popular: false,
      gradient: "from-gray-500 to-gray-700",
    },
    {
      name: "Professional",
      price: "$99",
      description: "Para servidores em crescimento",
      features: [
        "Até 1.000 jogadores simultâneos",
        "5 servidores protegidos",
        "Detecção avançada com IA",
        "Dashboard completo + Analytics",
        "Suporte prioritário 24/7",
        "99.9% uptime SLA",
        "API de integração",
        "Webhooks personalizados",
      ],
      popular: true,
      gradient: "from-nocry-500 to-purple-600",
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Para grandes organizações",
      features: [
        "Jogadores ilimitados",
        "Servidores ilimitados",
        "IA personalizada + Machine Learning",
        "Dashboard white-label",
        "Suporte dedicado + SLA customizado",
        "99.99% uptime garantido",
        "Infraestrutura dedicada",
        "Consultoria técnica",
        "Integração on-premise",
      ],
      popular: false,
      gradient: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <section id="pricing" className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid-bg opacity-5" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-nocry-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-semibold mb-6"
          >
            💰 Pricing Plans
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Escolha seu <span className="gradient-text">Plano</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Proteção escalável para servidores de todos os tamanhos
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative glass rounded-2xl p-8 ${
                plan.popular ? "ring-2 ring-nocry-500 shadow-2xl shadow-nocry-500/20" : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-gradient-to-r from-nocry-500 to-purple-600 flex items-center gap-2"
                >
                  <Star className="w-4 h-4" />
                  <span className="text-sm font-bold">Mais Popular</span>
                </motion.div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className={`text-5xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-gray-400 text-lg">/mês</span>
                  )}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-nocry-500 to-purple-600 hover:shadow-lg hover:shadow-nocry-500/50"
                      : "bg-white/5 hover:bg-white/10 border border-white/10"
                  }`}
                >
                  {plan.price === "Custom" ? "Fale Conosco" : "Começar Agora"}
                </motion.button>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + featureIndex * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className={`p-1 rounded-full bg-gradient-to-br ${plan.gradient} flex-shrink-0 mt-0.5`}>
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Glow Effect */}
              {plan.popular && (
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-nocry-500/20 to-purple-600/20 -z-10 blur-xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Enterprise Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">
            Precisa de mais de 10 servidores ou recursos customizados?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 glass rounded-lg font-semibold hover:bg-white/5 transition-all inline-flex items-center gap-2"
          >
            <Zap className="w-5 h-5 text-nocry-400" />
            Fale com nossa equipe Enterprise
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
