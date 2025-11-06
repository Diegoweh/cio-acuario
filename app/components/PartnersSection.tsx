'use client';

import { motion } from 'framer-motion';

interface PartnersSectionProps {
  title?: string;
  logos?: string[];
}

export function PartnersSection({
  title = 'Organizaciones con las que colaboramos',
  logos = [],
}: PartnersSectionProps) {
  // Default logos if none provided
  const partnerLogos =
    logos.length > 0
      ? logos
      : [
          '/img/partners/uas.png',
          '/img/partners/uas2.png',
          '/img/partners/facimar.png',
          '/img/partners/sos.png',
          '/img/partners/sea.png',
          '/img/partners/bellaterra2.png',
          '/img/partners/gam.png',
          '/img/partners/proyecta.png',
        ];

  return (
    <section className="relative bg-white px-4 py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sky-600">
            {title}
          </h2>
        </motion.div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16 items-center">
          {partnerLogos.map((logo, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: 0.1 + index * 0.1, // stagger effect
              }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <img
                src={logo}
                alt={`Colaborador ${index + 1}`}
                className="w-full h-auto max-h-20 md:max-h-24 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
