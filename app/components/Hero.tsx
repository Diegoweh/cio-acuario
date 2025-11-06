'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true }}
        >
          Unimos la ciencia con la sensibilidad ambiental
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: true }}
        >
          Somos el puente que conecta rigor/valor de la ciencia y las instituciones con la sensibilidad ambiental de la comunidad.
        </motion.p>
      </div>
    </section>
  );
}
