'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <>
      {/* First Section - Image on Right */}
      <section className="flex items-center justify-center bg-gray-50 px-4 py-16 md:py-14 overflow-hidden">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Header */}
            <motion.div
              className="space-y-6"
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-px bg-sky-500"></div>
                <h2 className="text-sm tracking-widest text-gray-800 uppercase font-semibold">
                  Nosotros
                </h2>
              </div>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-base md:text-lg max-w-lg">
                Nuestro propósito es articular esfuerzos, impulsar iniciativas y crear alianzas sólidas encaminadas a
                lograr un legado de bienestar para la vida silvestre y la salud de nuestros océanos.
              </p>
            </motion.div>

            {/* Links */}
            <motion.div
              className="flex flex-wrap gap-6 text-sm md:text-base"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link
                href="#colaboraciones"
                className="text-gray-600 hover:text-sky-500 transition-colors duration-200 font-medium"
              >
                Colaboraciones
              </Link>
              <Link
                href="#proyectos"
                className="text-gray-600 hover:text-sky-500 transition-colors duration-200 font-medium"
              >
                Proyectos
              </Link>
              <Link
                href="#eventos"
                className="text-gray-600 hover:text-sky-500 transition-colors duration-200 font-medium"
              >
                Eventos
              </Link>
              <Link
                href="#intercambios"
                className="text-gray-600 hover:text-sky-500 transition-colors duration-200 font-medium"
              >
                Intercambios
              </Link>
            </motion.div>

            {/* Divider */}
            <motion.div
              className="w-32 h-px bg-gray-300"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
              viewport={{ once: true }}
            ></motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-md aspect-square md:aspect-auto md:h-[500px]">
              <Image
                src="/img/microscopio.webp"
                alt="Laboratory microscope work"
                fill
                className="rounded-2xl object-cover shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Second Section - Image on Left */}
      <section className="flex items-center justify-center bg-gray-50 px-4 py-16 md:py-14 overflow-hidden">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Image */}
          <motion.div
            className="flex justify-center md:justify-start order-2 md:order-1"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-md aspect-square md:aspect-auto md:h-[400px]">
              <Image
                src="/img/aboutImg.webp"
                alt="Ocean conservation teamwork"
                fill
                className="rounded-2xl object-cover shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="flex flex-col justify-center space-y-8 order-1 md:order-2"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <h2 className="text-sm tracking-widest text-gray-800 uppercase font-semibold">
                  Colaboramos a través de diversas vías, con un enfoque local y visión regional.
                </h2>
              </div>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-base md:text-lg max-w-lg">
                Como CIO, reconocemos que todos miramos el océano y la vida silvestre desde perspectivas distintas. Pero
                reconociéndonos como una pieza en el equilibrio del mundo natural y con acciones conjuntas, podremos
                preservar la región y el planeta.
              </p>
            </div>

            {/* Divider */}
            <motion.div
              className="w-32 h-px bg-sky-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
              viewport={{ once: true }}
            ></motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
