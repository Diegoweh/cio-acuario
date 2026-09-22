'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const STORAGE_KEY = 'carrera-popup-visto';

export function CarreraPopup() {
  const [isOpen, setIsOpen] = useState(false);

  // Mostrar una vez por sesión, poco después de cargar la página
  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === '1') return;
    const timer = setTimeout(() => setIsOpen(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    sessionStorage.setItem(STORAGE_KEY, '1');
  }, []);

  // Cerrar con ESC y bloquear el scroll del body
  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, close]);

  const goToCarrera = () => {
    close();
    document.getElementById('carrera')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Mazatlán Run Wild 2026"
        >
          <motion.div
            className="relative w-full max-w-md rounded-3xl bg-white p-6 sm:p-8 shadow-2xl"
            initial={{ scale: 0.9, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              className="absolute right-3 top-3 p-2 rounded-full text-gray-500 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>

            <Image
              src="/img/carrera/pop-up.webp"
              alt="Mazatlán Run Wild 2026 - Corre por la biodiversidad"
              width={546}
              height={470}
              className="w-full h-auto"
              priority
            />

            <p className="mt-4 text-center text-gray-700">
              22 de noviembre · 6:30 A.M. · Av. Leonismo Internacional
            </p>

            <button
              onClick={goToCarrera}
              className="mt-5 w-full rounded-full bg-sky-500 hover:bg-sky-400 px-6 py-3.5 text-lg font-bold uppercase text-white shadow-lg transition-all duration-200 hover:scale-[1.02]"
            >
              Ver la carrera
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
