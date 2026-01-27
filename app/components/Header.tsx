'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

// Type definition for Network Information API
interface NavigatorWithConnection extends Navigator {
  connection?: {
    effectiveType?: string;
  };
}

export default function Header() {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    // Only load video on desktop devices with good connection
    const isDesktop = window.innerWidth >= 768;
    const connection = (navigator as NavigatorWithConnection).connection;
    const hasGoodConnection = !connection || connection.effectiveType === '4g';

    if (isDesktop && hasGoodConnection) {
      // Use a microtask to avoid synchronous setState in effect
      queueMicrotask(() => setShouldLoadVideo(true));
    }
  }, []);

  return (
    <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video or Image fallback */}
      {shouldLoadVideo ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/headerCio-2-compressed.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
      ) : (
        <Image
          src="/img/headerCio.webp"
          alt="Header background"
          fill
          priority
          className="object-cover"
          quality={85}
        />
      )}

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-sky-300 mb-6 uppercase"
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
