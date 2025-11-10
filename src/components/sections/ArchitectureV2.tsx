'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  Zap,
  Database,
  Activity,
  Lock,
  Key,
  Clock,
  Server,
  Cpu,
  Eye,
} from 'lucide-react';
import { AnimatedGroup } from '../core/animated-group';
import { TextEffect } from '../core/text-effect';
import { useInView } from 'react-intersection-observer';

const architectureLayers = [
  {
    id: 'client',
    title: 'Camada Cliente',
    icon: Shield,
    color: 'nocry',
    nodes: [
      { name: 'Player Client', desc: 'Cliente do jogo', icon: Cpu },
      { name: 'Challenge-Response', desc: 'Handshake RSA-2048', icon: Key },
      { name: 'Memory Check', desc: 'Integridade SHA256', icon: Eye },
    ],
  },
  {
    id: 'proxy',
    title: 'Camada Proxy UDP',
    icon: Zap,
    color: 'cyber',
    nodes: [
      { name: 'UDP Proxy', desc: 'Encaminhamento de pacotes', icon: Zap },
      { name: 'Session Validator', desc: 'Validação de sessão', icon: Lock },
      { name: 'Timestamp Check', desc: 'Anti-replay (<10s)', icon: Clock },
    ],
  },
  {
    id: 'backend',
    title: 'Serviços Backend',
    icon: Server,
    color: 'purple',
    nodes: [
      { name: 'REST API', desc: 'Spring Boot 3.5', icon: Server },
      { name: 'PostgreSQL', desc: 'Banco de dados', icon: Database },
      { name: 'Redis Cache', desc: 'Cache em memória', icon: Activity },
    ],
  },
  {
    id: 'monitoring',
    title: 'Monitoramento',
    icon: Activity,
    color: 'green',
    nodes: [
      { name: 'Prometheus', desc: 'Métricas', icon: Activity },
      { name: 'Grafana', desc: 'Dashboards', icon: Eye },
      { name: 'AI Detection', desc: 'Detecção IA', icon: Shield },
    ],
  },
];

const securityFlow = [
  {
    step: 1,
    title: 'Challenge Request',
    description: 'Servidor envia desafio criptografado RSA-2048',
    color: 'nocry',
  },
  {
    step: 2,
    title: 'Client Response',
    description: 'Cliente assina resposta com chave privada',
    color: 'cyber',
  },
  {
    step: 3,
    title: 'Timestamp Validation',
    description: 'Valida timestamp com tolerância de 10 segundos',
    color: 'purple',
  },
  {
    step: 4,
    title: 'Session Active',
    description: 'Sessão autenticada e pacotes fluem pelo proxy',
    color: 'green',
  },
];

export default function ArchitectureVisualization() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const [selectedFlow, setSelectedFlow] = useState(0);

  return (
    <section ref={ref} className="relative py-32 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid-bg opacity-10" />

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
            Sistema de 4 Camadas
          </TextEffect>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Arquitetura distribuída com autenticação Challenge-Response, anti-replay e monitoramento em tempo real
          </motion.p>
        </div>

        {/* Architecture Layers */}
        <AnimatedGroup preset="blur-slide" className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-20">
          {architectureLayers.map((layer, index) => (
            <motion.div
              key={layer.id}
              className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                activeLayer === layer.id
                  ? `border-${layer.color}-500 bg-${layer.color}-500/10`
                  : 'border-white/10 bg-white/5 hover:border-white/20'
              }`}
              onHoverStart={() => setActiveLayer(layer.id)}
              onHoverEnd={() => setActiveLayer(null)}
              whileHover={{ scale: 1.02 }}
              style={{
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            >
              {/* Layer Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br from-${layer.color}-500 to-${layer.color}-600 flex items-center justify-center mb-4 shadow-lg shadow-${layer.color}-500/50`}
              >
                <layer.icon className="w-7 h-7 text-white" />
              </div>

              {/* Layer Title */}
              <h3 className="text-xl font-bold text-white mb-4 transform-gpu">{layer.title}</h3>

              {/* Nodes */}
              <div className="space-y-3">
                {layer.nodes.map((node, nodeIndex) => (
                  <motion.div
                    key={nodeIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                      opacity: activeLayer === layer.id ? 1 : 0.6,
                      x: activeLayer === layer.id ? 0 : -10,
                    }}
                    transition={{ delay: nodeIndex * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className={`w-8 h-8 rounded-lg bg-${layer.color}-500/20 flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <node.icon className={`w-4 h-4 text-${layer.color}-400`} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white transform-gpu">{node.name}</div>
                      <div className="text-xs text-gray-400 transform-gpu">{node.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Connection Arrow */}
              {index < architectureLayers.length - 1 && (
                <motion.div
                  className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-white/50 to-transparent"
                  animate={{
                    scaleX: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                >
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </AnimatedGroup>

        {/* Security Flow Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Fluxo de Autenticação Challenge-Response</h3>
            <p className="text-gray-400">Processo de autenticação em 4 etapas com criptografia RSA-2048</p>
          </div>

          {/* Flow Steps */}
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-12 left-0 right-0 h-1 bg-white/10 rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-nocry-500 to-green-500 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${((selectedFlow + 1) / securityFlow.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Steps */}
            <div className="grid grid-cols-4 gap-4 relative">
              {securityFlow.map((flow, index) => (
                <motion.div
                  key={index}
                  className="text-center cursor-pointer"
                  onClick={() => setSelectedFlow(index)}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Step Circle */}
                  <motion.div
                    className={`w-24 h-24 mx-auto rounded-full border-4 flex items-center justify-center mb-4 transition-all ${
                      index <= selectedFlow
                        ? `border-${flow.color}-500 bg-${flow.color}-500/20 shadow-lg shadow-${flow.color}-500/50`
                        : 'border-white/20 bg-white/5'
                    }`}
                    animate={{
                      scale: index === selectedFlow ? 1.1 : 1,
                    }}
                  >
                    <div className={`text-2xl font-bold ${index <= selectedFlow ? `text-${flow.color}-400` : 'text-gray-600'}`}>
                      {flow.step}
                    </div>
                  </motion.div>

                  {/* Step Info */}
                  <h4 className={`text-sm font-bold mb-2 ${index <= selectedFlow ? 'text-white' : 'text-gray-600'}`}>
                    {flow.title}
                  </h4>
                  <p className={`text-xs ${index <= selectedFlow ? 'text-gray-400' : 'text-gray-600'}`}>{flow.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Flow Details Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedFlow}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`mt-12 p-8 rounded-2xl border-2 border-${securityFlow[selectedFlow].color}-500/30 bg-${securityFlow[selectedFlow].color}-500/5`}
            >
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 rounded-xl bg-${securityFlow[selectedFlow].color}-500/20 flex items-center justify-center flex-shrink-0`}>
                  <Shield className={`w-8 h-8 text-${securityFlow[selectedFlow].color}-400`} />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-white mb-3">
                    Etapa {securityFlow[selectedFlow].step}: {securityFlow[selectedFlow].title}
                  </h4>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">{securityFlow[selectedFlow].description}</p>
                  <div className="flex gap-3">
                    <span className="px-3 py-1 rounded-full bg-white/10 text-xs text-gray-300">RSA-2048</span>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-xs text-gray-300">SHA256</span>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-xs text-gray-300">Anti-Replay</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Auto-play Controls */}
          <div className="flex justify-center gap-2 mt-8">
            {securityFlow.map((flow, index) => (
              <button
                key={index}
                onClick={() => setSelectedFlow(index)}
                aria-label={`Visualizar etapa ${index + 1}: ${flow.title}`}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === selectedFlow ? 'bg-nocry-500 w-8' : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
