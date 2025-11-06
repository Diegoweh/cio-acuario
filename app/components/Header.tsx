'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/img/headerCio.webp"
        alt="Header background"
        fill
        priority
        className="object-cover"
        quality={100}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 bg-opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 uppercase"
          initial={{ y: -80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true }}
        >
          Cio nace de una convicción:
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed uppercase"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: true }}
        >
          La transformación positiva del ambiente es una tarea que hacemos juntos.
        </motion.p>
      </div>
    </header>
  );
}
