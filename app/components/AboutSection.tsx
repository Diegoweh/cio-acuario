'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { PdfModal } from './PdfModal';
import { FlyingPelican } from './FlyingPelican';
import { FlyingGuacamaya } from './FlyingGuacamaya';

export function AboutSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');

  const handleLinkClick = (e: React.MouseEvent, title: string) => {
    e.preventDefault();
    setModalTitle(title);
    setIsModalOpen(true);
  };
  return (
    <>
      {/* First Section - Image on Right */}

      <FlyingPelican />

      <section
        id="nosotros"
        className="scroll-mt-20 flex items-center justify-center px-4 py-16 md:py-24 lg:py-32 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/img/blue-bg.png)' }}
      >
        <div className="max-w-[1400px] w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8 md:space-y-12">
            {/* Header */}
            <motion.div
              className="space-y-6 md:space-y-8"
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-12 md:w-20 h-px bg-white"></div>
                <h2 className="text-sm md:text-lg lg:text-xl tracking-widest text-white uppercase font-semibold">
                  Nosotros
                </h2>
              </div>

              {/* Description */}
              <p className="text-white leading-relaxed text-base md:text-xl lg:text-2xl">
                Nuestro propósito es articular esfuerzos, impulsar iniciativas y crear alianzas sólidas encaminadas a
                lograr un legado de bienestar para la vida silvestre y la salud de nuestros océanos.
              </p>
            </motion.div>

            {/* Links */}
            {/* <motion.div
              className="flex flex-wrap gap-6 md:gap-8 text-sm md:text-lg lg:text-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link
                href="#colaboraciones"
                onClick={(e) => handleLinkClick(e, 'Colaboraciones')}
                className="text-sky-500 bg-white rounded-lg px-3 hover:text-white hover:bg-sky-800 transition-colors duration-200 font-medium cursor-pointer shadow-lg"
              >
                Colaboraciones
              </Link>
              <Link
                href="#proyectos"
                onClick={(e) => handleLinkClick(e, 'Proyectos')}
                className="text-sky-500 bg-white rounded-lg px-3 hover:text-white hover:bg-sky-800 transition-colors duration-200 font-medium cursor-pointer shadow-lg"
              >
                Proyectos
              </Link>
              <Link
                href="#eventos"
                onClick={(e) => handleLinkClick(e, 'Eventos')}
                className="text-sky-500 bg-white rounded-lg px-3 hover:text-white hover:bg-sky-800 transition-colors duration-200 font-medium cursor-pointer shadow-lg"
              >
                Eventos
              </Link>
              <Link
                href="#intercambios"
                onClick={(e) => handleLinkClick(e, 'Intercambios')}
                className="text-sky-500 bg-white rounded-lg px-3 hover:text-white hover:bg-sky-800 transition-colors duration-200 font-medium cursor-pointer shadow-lg"
              >
                Intercambios
              </Link>
            </motion.div> */}

            {/* Divider */}
            <motion.div
              className="w-32 md:w-48 h-px bg-gray-300"
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
            <div className="relative w-full max-w-md aspect-square md:aspect-auto md:h-[500px] lg:h-[600px]">
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
      <section className="flex items-center justify-center bg-gray-50 px-4 py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-[1400px] w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-center">
          {/* Left Image */}
          <motion.div
            className="flex justify-center md:justify-start order-2 md:order-1"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-md aspect-square md:aspect-auto md:h-[400px] lg:h-[400px]">
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
            className="flex flex-col justify-center space-y-8 md:space-y-12 order-1 md:order-2"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center gap-3 md:gap-4">
                <h2 className="text-sm md:text-lg lg:text-xl tracking-widest text-sky-500 uppercase font-semibold">
                  Colaboramos a través de diversas vías, con un enfoque local y visión regional.
                </h2>
              </div>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-base md:text-xl lg:text-2xl">
                Como CIO, reconocemos que todos miramos el océano y la vida silvestre desde perspectivas distintas. Pero
                reconociéndonos como una pieza en el equilibrio del mundo natural y con acciones conjuntas, podremos
                preservar la región y el planeta.
              </p>
            </div>

            {/* Divider */}
            <motion.div
              className="w-32 md:w-48 h-px bg-sky-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
              viewport={{ once: true }}
            ></motion.div>
          </motion.div>
        </div>

        
      </section>

      <FlyingGuacamaya />

      {/* PDF Modal */}
      <PdfModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pdfUrl="/ejemplo.pdf"
        title={modalTitle}
      />
    </>
  );
}
