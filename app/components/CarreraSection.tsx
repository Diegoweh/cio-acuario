'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Backpack,
  Calendar,
  ChevronDown,
  Clock,
  Droplet,
  Award,
  Image as ImageIcon,
  MapPin,
  Medal,
  Shirt,
  Ticket,
  Hash,
  Compass,
  X,
} from 'lucide-react';
import { REGISTRO_PAGO_URL } from '@/lib/carrera';

const eventDetails = [
  { icon: Calendar, label: '22 de Noviembre, 2026' },
  { icon: Clock, label: '6:30 A.M.' },
  { icon: MapPin, label: 'Av. Leonismo Internacional' },
];

const prices = [
  { label: 'Niños', amount: '$250' },
  { label: 'Adultos', amount: '$300' },
];

const kits = [
  {
    title: 'Adultos · 5K',
    items: [
      { icon: Backpack, label: 'Mochila' },
      { icon: Shirt, label: 'Playera oficial Run Wild 2026' },
      { icon: Hash, label: 'Número de corredor' },
      { icon: Award, label: 'Pin de agradecimiento' },
      { icon: Ticket, label: 'Cortesía 2x1 para Gran Acuario Mazatlán' },
      { icon: Medal, label: 'Medalla Run Wild 2026 al cruzar la meta' },
    ],
  },
  {
    title: 'Niños · 200 m',
    items: [
      { icon: Backpack, label: 'Mochila' },
      { icon: Droplet, label: 'Botella reutilizable Run Wild' },
      { icon: Hash, label: 'Número de corredor' },
      { icon: Award, label: 'Pin de agradecimiento' },
      { icon: Ticket, label: 'Cortesía 2x1 para Gran Acuario Mazatlán' },
      { icon: Compass, label: 'Pasaporte Marino para recorrer el acuario' },
      { icon: Medal, label: 'Medalla Run Wild 2026 al terminar' },
    ],
  },
];

export function CarreraSection() {
  const [isFlyerOpen, setIsFlyerOpen] = useState(false);
  const [isKitOpen, setIsKitOpen] = useState(false);

  const closeFlyer = useCallback(() => setIsFlyerOpen(false), []);

  // Cerrar con ESC y bloquear el scroll del body
  useEffect(() => {
    if (!isFlyerOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeFlyer();
    };
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isFlyerOpen, closeFlyer]);

  return (
    <section
      id="carrera"
      className="relative scroll-mt-20 py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#0B3C6B] overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#A6CE39] text-[#0B3C6B] font-bold uppercase tracking-wide text-xs sm:text-sm">
            Carrera familiar de convivencia
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Mazatlán Run Wild 2026
          </h2>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-[#A6CE39] font-semibold uppercase">
            Corre por la biodiversidad
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Foto de la carrera */}
          <motion.div
            className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl"
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/img/carrera/section.webp"
              alt="Corredores en el malecón de Mazatlán con la playera Run Wild"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 640px"
            />
          </motion.div>

          {/* Datos + precios + CTA */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
            viewport={{ once: true }}
          >
            <ul className="space-y-4">
              {eventDetails.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-white/10 ring-1 ring-white/15 backdrop-blur-sm"
                >
                  <Icon className="w-6 h-6 shrink-0 text-[#A6CE39]" />
                  <span className="text-white text-base sm:text-lg font-medium">
                    {label}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {prices.map(({ label, amount }) => (
                <div
                  key={label}
                  className="rounded-2xl bg-[#A6CE39] px-4 py-5 text-center shadow-lg"
                >
                  <p className="text-[#0B3C6B] font-bold uppercase text-sm tracking-wide">
                    {label}
                  </p>
                  <p className="text-3xl md:text-4xl font-bold text-white drop-shadow">
                    {amount}
                  </p>
                </div>
              ))}
            </div>

            <a
              href={REGISTRO_PAGO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-sky-500 hover:bg-sky-400 px-8 py-4 text-lg md:text-xl font-bold uppercase text-white shadow-xl transition-all duration-200 hover:scale-[1.02]"
            >
              Regístrate
            </a>

            <p className="mt-3 text-center text-sm text-white/70">
              Pago seguro en línea · También en la taquilla del Gran Acuario
              Mazatlán (solo efectivo) o al WhatsApp 6692153234.
            </p>
          </motion.div>
        </div>

        {/* Kit del corredor (plegable para no saturar la sección) */}
        <motion.div
          className="mt-12"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => setIsKitOpen((v) => !v)}
            aria-expanded={isKitOpen}
            aria-controls="kit-corredor"
            className="flex w-full items-center justify-between gap-4 rounded-2xl bg-white/10 ring-1 ring-white/15 px-5 py-4 text-left transition-colors duration-200 hover:bg-white/15"
          >
            <span className="text-white text-base sm:text-lg font-semibold">
              ¿Qué incluye tu kit Run Wild?
            </span>
            <ChevronDown
              className={`w-5 h-5 shrink-0 text-[#A6CE39] transition-transform duration-300 ${
                isKitOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          <AnimatePresence initial={false}>
            {isKitOpen && (
              <motion.div
                id="kit-corredor"
                key="kit"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="overflow-hidden"
              >
                <div className="grid gap-4 pt-4 md:grid-cols-2">
                  {kits.map((kit) => (
                    <div
                      key={kit.title}
                      className="rounded-2xl bg-white/10 ring-1 ring-white/15 p-5"
                    >
                      <h3 className="text-[#A6CE39] font-bold uppercase tracking-wide text-sm">
                        {kit.title}
                      </h3>
                      <ul className="mt-3 space-y-2.5">
                        {kit.items.map(({ icon: Icon, label }) => (
                          <li key={label} className="flex items-start gap-3">
                            <Icon className="mt-0.5 w-4 h-4 shrink-0 text-[#A6CE39]" />
                            <span className="text-white/90 text-sm sm:text-base">
                              {label}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-sm text-white/70">
                  El día del evento entras <strong className="text-white">gratis</strong> al
                  Gran Acuario Mazatlán presentando tu número de corredor en taquilla,
                  dentro del horario habitual.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Enlace al flyer oficial */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => setIsFlyerOpen(true)}
            className="inline-flex items-center gap-2 text-[#A6CE39] hover:text-white underline underline-offset-4 decoration-2 font-semibold text-base sm:text-lg transition-colors duration-200"
          >
            <ImageIcon className="w-5 h-5" />
            Ver flyer oficial
          </button>
        </motion.div>
      </div>

      {/* Modal del flyer oficial */}
      <AnimatePresence>
        {isFlyerOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeFlyer}
            role="dialog"
            aria-modal="true"
            aria-label="Flyer oficial Mazatlán Run Wild 2026"
          >
            <motion.div
              className="relative max-h-[90vh]"
              initial={{ scale: 0.92, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeFlyer}
                className="absolute -top-3 -right-3 z-10 p-2 rounded-full bg-white text-gray-700 shadow-lg hover:bg-gray-100 transition-colors duration-200"
                aria-label="Cerrar flyer"
              >
                <X className="w-5 h-5" />
              </button>

              <Image
                src="/img/carrera/flayer-oficial.webp"
                alt="Flyer oficial de la preventa Mazatlán Run Wild 2026"
                width={1080}
                height={1920}
                className="max-h-[90vh] w-auto h-auto rounded-2xl shadow-2xl object-contain"
                sizes="(max-width: 768px) 90vw, 500px"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
