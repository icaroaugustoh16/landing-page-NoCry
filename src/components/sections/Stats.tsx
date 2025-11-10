"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Server, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export default function Stats() {
  const [counts, setCounts] = useState({
    servers: 0,
    players: 0,
    detections: 0,
    uptime: 0,
  });

  useEffect(() => {
    const targetValues = {
      servers: 2547,
      players: 10234567,
      detections: 48932,
      uptime: 99.94,
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        servers: Math.floor(targetValues.servers * progress),
        players: Math.floor(targetValues.players * progress),
        detections: Math.floor(targetValues.detections * progress),
        uptime: Number((targetValues.uptime * progress).toFixed(2)),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targetValues);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      Icon: Server,
      value: counts.servers.toLocaleString(),
      label: "Active Servers",
      suffix: "+",
      color: "text-nocry-400",
      bgColor: "from-nocry-500/20 to-nocry-600/20",
    },
    {
      Icon: Users,
      value: (counts.players / 1000000).toFixed(2) + "M",
      label: "Protected Players",
      suffix: "+",
      color: "text-cyber-purple",
      bgColor: "from-purple-500/20 to-cyber-purple/20",
    },
    {
      Icon: TrendingUp,
      value: counts.detections.toLocaleString(),
      label: "Cheats Detected Today",
      suffix: "",
      color: "text-green-400",
      bgColor: "from-green-500/20 to-emerald-600/20",
    },
    {
      Icon: Clock,
      value: counts.uptime.toFixed(2),
      label: "Uptime Guarantee",
      suffix: "%",
      color: "text-blue-400",
      bgColor: "from-blue-500/20 to-cyan-600/20",
    },
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Números que <span className="gradient-text">Impressionam</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Confiado por milhares de servidores ao redor do mundo
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="glass rounded-2xl p-8 h-full relative overflow-hidden">
                {/* Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} opacity-50`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.7, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Icon */}
                <div className="relative mb-6">
                  <stat.Icon className={`w-12 h-12 ${stat.color}`} />
                </div>

                {/* Value */}
                <div className="relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    className={`text-5xl font-bold ${stat.color} mb-2`}
                  >
                    {stat.value}{stat.suffix}
                  </motion.div>
                  <p className="text-gray-400 font-medium">{stat.label}</p>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-3 mt-16"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-gray-400 font-medium">
            Live statistics · Updated in real-time
          </span>
        </motion.div>
      </div>
    </section>
  );
}
