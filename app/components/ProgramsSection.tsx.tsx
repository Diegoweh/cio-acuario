"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const programsData = [
  {
    id: 1,
    image: "/img/venado.webp",
    title: "Conservación",
    description: "Protegemos y rehabilitamos especies en peligro de extinción",
  },
  {
    id: 2,
    image: "/img/pelicanos.webp",
    title: "Educación Ambiental",
    description: "Formamos conciencia sobre la importancia de los océanos",
  },
  {
    id: 3,
    image: "/img/manglar.webp",
    title: "Investigación Científica",
    description: "Desarrollamos estudios para comprender mejor la vida marina",
  },
];

const videosData = [
  {
    id: 1,
    video: "https://www.pexels.com/es-es/download/video/857103/",
    title: "Rescate Marino",
    description: "Conoce cómo rescatamos y rehabilitamos especies marinas",
  },
  {
    id: 2,
    video: "https://www.pexels.com/es-es/download/video/7723259/",
    title: "Educación en Acción",
    description: "Nuestros programas educativos llegan a miles de estudiantes",
  },
  {
    id: 3,
    video: "https://www.pexels.com/es-es/download/video/5079225/",
    title: "Investigación Marina",
    description: "Descubre nuestros proyectos de investigación científica",
  },
];

export function ProgramsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentVideoSlide, setCurrentVideoSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % programsData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + programsData.length) % programsData.length);
  };

  const nextVideoSlide = () => {
    setCurrentVideoSlide((prev) => (prev + 1) % videosData.length);
  };

  const prevVideoSlide = () => {
    setCurrentVideoSlide((prev) => (prev - 1 + videosData.length) % videosData.length);
  };

  return (
    <>
      {/* First Section - Link on Right */}
      <section className="flex items-center justify-center bg-gray-50 px-4 py-16 md:py-14 overflow-hidden">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Header */}
            <motion.div
              className="space-y-6"
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-px bg-sky-500"></div>
                <h2 className="text-sm tracking-widest text-gray-800 uppercase font-semibold">
                  PROGRAMAS
                </h2>
              </div>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-base md:text-3xl max-w-lg">
                Cada acción, por pequeña que parezca, suma a un propósito compartido
              </p>
            </motion.div>

            {/* Divider */}
            <motion.div
              className="w-32 h-px bg-gray-300"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            />
          </div>

          {/* Right Side - Button Centered */}
          <motion.div
            className="flex justify-end items-center"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center items-center w-full md:w-auto">
              <Link
                href="/"
                className="text-white hover:text-gray-300 bg-sky-500 px-6 py-3 rounded-md transition-colors duration-200 text-sm lg:text-base uppercase font-bold"
              >
                Donar
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="relative bg-white px-4 py-16 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Carousel Container */}
          <motion.div
            className="relative overflow-hidden rounded-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            {/* Slides */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {programsData.map((program, index) => (
                <div key={program.id} className="min-w-full relative">
                  {/* Image */}
                  <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                    {/* Content Overlay - Left Bottom Corner */}
                    <div className="absolute bottom-0 left-0 p-8 md:p-12 lg:p-16 max-w-2xl">
                      <AnimatePresence mode="wait">
                        {/* key cambia con el slide para animar entrada/salida */}
                        <motion.div
                          key={currentSlide === index ? `content-${program.id}` : `content-inactive-${program.id}`}
                          initial={{ y: 40, opacity: 0 }}
                          animate={{ y: currentSlide === index ? 0 : 20, opacity: currentSlide === index ? 1 : 0 }}
                          exit={{ y: -20, opacity: 0 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                          {/* "PROGRAMA" Label */}
                          <p className="text-white/90 text-xs md:text-sm tracking-widest uppercase font-semibold mb-4">
                            PROGRAMA
                          </p>

                          {/* Title */}
                          <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                            {program.title}
                          </h3>

                          {/* Description */}
                          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
                            {program.description}
                          </p>

                          {/* Arrow Icon */}
                          <motion.div
                            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sky-500 hover:bg-sky-600 transition-colors cursor-pointer"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: currentSlide === index ? 1 : 0.95, opacity: currentSlide === index ? 1 : 0 }}
                            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                          >
                            <ArrowRight className="w-6 h-6 text-white" />
                          </motion.div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <motion.button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all flex items-center justify-center group"
              aria-label="Previous slide"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </motion.button>

            <motion.button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all flex items-center justify-center group"
              aria-label="Next slide"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>

            {/* Dots Indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            >
              {programsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video Carousel Section */}
      <section className="relative bg-gray-50 px-4 py-16 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Carousel Container */}
          <motion.div
            className="relative overflow-hidden rounded-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            {/* Slides */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentVideoSlide * 100}%)` }}
            >
              {videosData.map((videoItem, index) => (
                <div key={videoItem.id} className="min-w-full relative">
                  {/* Video */}
                  <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
                    <video
                      src={videoItem.video}
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                    {/* Content Overlay - Left Bottom Corner */}
                    <div className="absolute bottom-0 left-0 p-8 md:p-12 lg:p-16 max-w-2xl">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentVideoSlide === index ? `vcontent-${videoItem.id}` : `vcontent-inactive-${videoItem.id}`}
                          initial={{ y: 40, opacity: 0 }}
                          animate={{ y: currentVideoSlide === index ? 0 : 20, opacity: currentVideoSlide === index ? 1 : 0 }}
                          exit={{ y: -20, opacity: 0 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                          {/* "PROGRAMA" Label */}
                          <p className="text-white/90 text-xs md:text-sm tracking-widest uppercase font-semibold mb-4">
                            PROGRAMA
                          </p>

                          {/* Title */}
                          <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                            {videoItem.title}
                          </h3>

                          {/* Description */}
                          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
                            {videoItem.description}
                          </p>

                          {/* Arrow Icon */}
                          <motion.div
                            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sky-500 hover:bg-sky-600 transition-colors cursor-pointer"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: currentVideoSlide === index ? 1 : 0.95, opacity: currentVideoSlide === index ? 1 : 0 }}
                            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                          >
                            <ArrowRight className="w-6 h-6 text-white" />
                          </motion.div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <motion.button
              onClick={prevVideoSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all flex items-center justify-center group"
              aria-label="Previous video"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </motion.button>

            <motion.button
              onClick={nextVideoSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all flex items-center justify-center group"
              aria-label="Next video"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>

            {/* Dots Indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            >
              {videosData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentVideoSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentVideoSlide ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to video ${index + 1}`}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
