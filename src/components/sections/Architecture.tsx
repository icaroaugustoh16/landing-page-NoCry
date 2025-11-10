"use client";

import { motion } from "framer-motion";
import { Server, Shield, Database, Network, Globe, Cpu, Lock, Activity, Eye, AlertTriangle, Zap } from "lucide-react";
import { fadeInUp, scaleIn, staggerContainer, staggerItem } from "@/lib/animation-variants";
import { memo } from "react";

// Componente de nó otimizado e memoizado
const ArchNode = memo(({ Icon, name, description, color, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.05, y: -5 }}
    className="glass rounded-xl p-4 cursor-pointer group hover-lift relative"
    data-animate
  >
    <div className="flex items-center gap-3 mb-2">
      <div className={`p-2 rounded-lg bg-gradient-to-br ${color} group-hover:shadow-lg transition-all`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <h4 className="font-bold text-sm text-white">{name}</h4>
    </div>
    <p className="text-xs text-gray-400 leading-relaxed">{description}</p>
    <motion.div
      animate={{ opacity: [0, 0.5, 0] }}
      transition={{ duration: 2, repeat: Infinity, delay }}
      className="absolute inset-0 rounded-xl bg-gradient-to-br opacity-0 -z-10"
      style={{ backgroundImage: `linear-gradient(135deg, ${color.split(' ').join(', ')})` }}
    />
  </motion.div>
));

ArchNode.displayName = "ArchNode";

// Linha de conexão animada
const ConnectionLine = memo(({ delay }: { delay: number }) => (
  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className="h-0.5 bg-gradient-to-r from-nocry-500/50 via-purple-500/50 to-nocry-500/50 origin-left"
  >
    <motion.div
      animate={{ x: ['-100%', '200%'] }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear", delay }}
      className="h-full w-1/3 bg-gradient-to-r from-transparent via-nocry-400 to-transparent"
    />
  </motion.div>
));

ConnectionLine.displayName = "ConnectionLine";

export default function Architecture() {
  const layers = [
    {
      title: "🎮 Client Layer",
      description: "Anti-cheat client with cryptographic validation",
      items: [
        {
          Icon: Globe,
          name: "Player Client",
          description: "C++ anti-cheat with HWID detection & memory scanning",
          color: "from-cyan-500 to-blue-600",
        },
        {
          Icon: Lock,
          name: "Challenge-Response",
          description: "RSA signature with private key authentication",
          color: "from-green-500 to-emerald-600",
        },
        {
          Icon: Eye,
          name: "Integrity Check",
          description: "SHA256 hash validation against patched clients",
          color: "from-purple-500 to-pink-600",
        },
      ]
    },
    {
      title: "🌐 Proxy Layer",
      description: "High-performance UDP/TCP routing infrastructure",
      items: [
        {
          Icon: Network,
          name: "Proxy Manager",
          description: "xpto:6500-6504 port mapping with load balancing",
          color: "from-nocry-500 to-nocry-700",
        },
        {
          Icon: Shield,
          name: "Session Validator",
          description: "Token + signature verification with replay protection",
          color: "from-orange-500 to-red-600",
        },
        {
          Icon: Activity,
          name: "Heartbeat Monitor",
          description: "Timestamp-based nonce validation (<10s tolerance)",
          color: "from-yellow-500 to-orange-600",
        },
      ]
    },
    {
      title: "⚙️ Backend Services",
      description: "Spring Boot REST API with multi-tenancy support",
      items: [
        {
          Icon: Server,
          name: "REST API",
          description: "Organization, Server, Player & Session management",
          color: "from-blue-500 to-indigo-600",
        },
        {
          Icon: Database,
          name: "PostgreSQL",
          description: "GameSession, Infraction, DetectionEvent & Payments",
          color: "from-indigo-500 to-purple-600",
        },
        {
          Icon: Zap,
          name: "Redis Cache",
          description: "Available proxies, user sessions & subscription limits",
          color: "from-red-500 to-pink-600",
        },
      ]
    },
    {
      title: "📊 Monitoring Layer",
      description: "Real-time metrics and AI-powered detection",
      items: [
        {
          Icon: Activity,
          name: "Prometheus",
          description: "Metrics: packets/s, ping, CPU, connected players",
          color: "from-orange-500 to-yellow-600",
        },
        {
          Icon: Eye,
          name: "Grafana",
          description: "Real-time dashboards for organizations & admins",
          color: "from-pink-500 to-rose-600",
        },
        {
          Icon: AlertTriangle,
          name: "AI Detection",
          description: "Severity-based auto-ban (Aimbot, Wallhack, Speed)",
          color: "from-red-500 to-orange-600",
        },
      ]
    }
  ];

  const flowSteps = [
    "1. Player connects → HWID/IP extracted",
    "2. Challenge sent → Client signs with private key",
    "3. Signature verified → GameSession PENDING",
    "4. Client hash validated → Session ACTIVE",
    "5. Heartbeat loop → Timestamp-signed payloads",
    "6. Detection event → Auto-ban or manual review"
  ];

  return (
    <section id="architecture" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            variants={scaleIn}
            className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-semibold mb-6"
          >
            ⚡ Enterprise Architecture
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Arquitetura de <span className="gradient-text">Alta Performance</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-400 max-w-3xl mx-auto">
            Sistema distribuído com validação criptográfica, proteção anti-replay e monitoramento em tempo real
          </motion.p>
        </motion.div>

        {/* Architecture Layers */}
        <div className="space-y-16">
          {layers.map((layer, layerIndex) => (
            <motion.div
              key={layerIndex}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: layerIndex * 0.15 }}
            >
              {/* Layer Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">{layer.title}</h3>
                <p className="text-gray-400">{layer.description}</p>
              </div>

              {/* Layer Nodes */}
              <div className="grid md:grid-cols-3 gap-6">
                {layer.items.map((item, itemIndex) => (
                  <ArchNode
                    key={itemIndex}
                    Icon={item.Icon}
                    name={item.name}
                    description={item.description}
                    color={item.color}
                    delay={layerIndex * 0.1 + itemIndex * 0.1}
                  />
                ))}
              </div>

              {/* Connection Line between layers */}
              {layerIndex < layers.length - 1 && (
                <div className="mt-8 flex items-center justify-center">
                  <div className="w-full max-w-md">
                    <ConnectionLine delay={layerIndex * 0.2} />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Security Flow */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="glass rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-8 text-center">
              🔐 Fluxo de Segurança (Challenge-Response + Anti-Replay)
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {flowSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all cursor-pointer hover-lift"
                  data-animate
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-nocry-500 to-purple-600 flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">{step.split('→')[1] || step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm mb-6 uppercase tracking-wider">Powered By</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {["Spring Boot", "PostgreSQL", "Redis", "Prometheus", "Grafana", "Docker", "C++", "RSA-2048"].map(
              (tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-6 py-3 glass rounded-lg font-semibold text-gray-300 hover:text-nocry-400 transition-colors cursor-pointer hover-lift"
                  data-animate
                >
                  {tech}
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
