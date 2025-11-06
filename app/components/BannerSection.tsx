'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const BannerSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            "El océano no comienza en la costa: empieza en cada hogar, en cada decisión,{' '}
            <span className="text-sky-500">en cada gota que fluye hacia él"</span>
          </h2>
        </motion.div>

        {/* Banner Image */}
        <motion.div
          className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Image
            src="/img/bannerImg.webp"
            alt="Ocean banner"
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BannerSection;
