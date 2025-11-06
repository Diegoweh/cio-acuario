'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  return (
    <nav
      className={[
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled
          ? // fondo con glass cuando hay scroll
            'bg-white/60 backdrop-blur-md supports-backdrop-filter:backdrop-blur-md ring-1 ring-black/5 shadow-sm'
          : // transparente arriba del hero
            'bg-transparent'
      ].join(' ')}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="block">
              <Image
                src="/img/logoCio.png"
                alt="Logo de la empresa"
                width={130}
                height={40}
                className="h-auto w-auto bg-black/30 p-2 rounded-4xl"
                priority
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {/* cápsula con blur para asegurar contraste */}
            <div className="flex items-center gap-6 px-4 py-2 rounded-full bg-black/30 backdrop-blur-md supports-backdrop-filter:backdrop-blur-md ring-1 ring-white/10">
              <Link
                href="/"
                className="text-white hover:text-sky-200 transition-colors duration-200 text-sm lg:text-base"
              >
                Nosotros
              </Link>
              <Link
                href="/"
                className="text-white hover:text-sky-200 transition-colors duration-200 text-sm lg:text-base"
              >
                Programas
              </Link>
              <Link
                href="/"
                className="text-white hover:text-sky-200 transition-colors duration-200 text-sm lg:text-base"
              >
                Súmate a la causa
              </Link>
              <Link
                href="/"
                className="text-white hover:text-gray-200 bg-sky-500/90 hover:bg-sky-500 px-3 py-1.5 rounded-4xl font-bold transition-colors duration-200 text-sm lg:text-base uppercase"
              >
                Donar
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-gray-300 focus:outline-none focus:text-gray-700"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/45 backdrop-blur">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-white hover:bg-white/10 rounded-md transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Nosotros
            </Link>
            <Link
              href="/"
              className="block px-3 py-2 text-white hover:bg-white/10 rounded-md transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Programas
            </Link>
            <Link
              href="/"
              className="block px-3 py-2 text-white hover:bg-white/10 rounded-md transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Súmate a la causa
            </Link>
            <Link
              href="/"
              className="block px-3 py-2 text-white bg-sky-500 hover:bg-sky-600 rounded-md transition-colors duration-200 uppercase font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Donar
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
