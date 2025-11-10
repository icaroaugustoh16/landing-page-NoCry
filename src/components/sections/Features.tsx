"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Network, Eye, Lock, Activity } from "lucide-react";

const features = [
  {
    Icon: Shield,
    title: "AI-Powered Detection",
    description: "Machine learning algorithms detect and prevent cheating patterns in real-time with 99.7% accuracy.",
    color: "from-nocry-500 to-nocry-600",
  },
  {
    Icon: Zap,
    title: "Ultra-Low Latency",
    description: "Intelligent proxy infrastructure with <5ms detection time and zero impact on player experience.",
    color: "from-cyber-purple to-pink-500",
  },
  {
    Icon: Network,
    title: "Load Balancing",
    description: "Automatic server selection based on region, load, and health metrics for optimal performance.",
    color: "from-blue-500 to-nocry-500",
  },
  {
    Icon: Eye,
    title: "Real-time Monitoring",
    description: "Live session tracking, heartbeat validation, and comprehensive analytics dashboard.",
    color: "from-green-500 to-emerald-600",
  },
  {
    Icon: Lock,
    title: "Challenge-Response Auth",
    description: "Cryptographic validation ensures only legitimate clients can connect to your servers.",
    color: "from-purple-500 to-cyber-purple",
  },
  {
    Icon: Activity,
    title: "Health Checks",
    description: "Automated proxy health monitoring with failover support and 99.9% uptime guarantee.",
    color: "from-orange-500 to-red-500",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-nocry-500/10 border border-nocry-500/20 text-nocry-400 text-sm font-semibold mb-6"
          >
            🔒 Enterprise-Grade Security
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Recursos <span className="gradient-text">Poderosos</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Proteja seus servidores com tecnologia de ponta e infraestrutura escalável
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="glass glass-hover rounded-2xl p-8 h-full cyber-border">
                {/* Icon */}
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color}`}
                  >
                    <feature.Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature.color} opacity-0 blur-xl group-hover:opacity-30 transition-opacity duration-300`}
                  />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-nocry-500/0 via-nocry-500/0 to-nocry-500/0 group-hover:from-nocry-500/10 group-hover:via-nocry-500/5 group-hover:to-transparent transition-all duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass glass-hover px-8 py-4 rounded-xl font-semibold text-lg border border-nocry-500/30 hover:border-nocry-500/60 transition-colors"
          >
            Explore All Features →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
