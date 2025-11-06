"use client";

import type React from "react";
import { motion } from "framer-motion";
import CountUp from "@/components/CountUp";

interface StatItem {
  value: string | number;
  label: string;
  description?: string;
  prefix?: string;
  suffix?: string;
}

interface SectionData {
  title: string;
  items: (StatItem & { icon?: React.ReactNode })[];
}

interface ImpactBannerProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  sections: SectionData[];
}

export function ImpactBanner({ backgroundImage, title, subtitle, sections }: ImpactBannerProps) {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 25, 45, 0.6), rgba(15, 25, 45, 0.7)), url('${backgroundImage}')`,
      }}
    >
      {/* Sutil fade/zoom del fondo */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16 lg:py-24">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-3">{title}</h1>
          <p className="text-sm lg:text-base text-cyan-300/80">{subtitle}</p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-12 lg:space-y-16">
          {sections.map((section, sectionIdx) => (
            <motion.div
              key={sectionIdx}
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 + sectionIdx * 0.05 }}
              viewport={{ once: true }}
            >
              {/* Section Title */}
              <div className="flex items-center gap-4">
                <motion.h2
                  className="text-xs lg:text-sm font-semibold text-cyan-300/60 uppercase tracking-widest"
                  initial={{ x: -40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  {section.title}
                </motion.h2>
                <motion.div
                  className="flex-1 h-px bg-linear-to-r from-cyan-400/40 to-transparent"
                  initial={{ scaleX: 0, opacity: 0.6, originX: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                />
              </div>

              {/* Section Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {section.items.map((item, itemIdx) => {
                  const isNumeric = typeof item.value === "number";
                  const numericValue = isNumeric ? (item.value as number) : parseFloat(item.value as string);
                  const canAnimate = !isNaN(Number(numericValue));

                  return (
                    <motion.div
                      key={itemIdx}
                      className="flex flex-col items-start"
                      initial={{ y: 24, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 + itemIdx * 0.08 }}
                      viewport={{ once: true, margin: "-80px" }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        {item.icon && (
                          <motion.div
                            className="w-12 h-12 flex items-center justify-center text-white"
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 + itemIdx * 0.08 }}
                            viewport={{ once: true }}
                          >
                            {item.icon}
                          </motion.div>
                        )}
                        <div>
                          <div className="text-3xl lg:text-4xl font-bold text-cyan-300">
                            {item.prefix && <span>{item.prefix}</span>}
                            {canAnimate ? (
                              <CountUp to={numericValue} duration={1.5} separator="," />
                            ) : (
                              item.value
                            )}
                            {item.suffix && <span>{item.suffix}</span>}
                          </div>
                        </div>
                      </div>
                      <div className="pl-0 lg:pl-0">
                        <h3 className="text-sm lg:text-base font-bold text-white uppercase">{item.label}</h3>
                        {item.description && (
                          <p className="text-xs text-cyan-300/60 mt-1">{item.description}</p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
