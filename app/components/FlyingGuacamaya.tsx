'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function FlyingGuacamaya() {
  const guacamayaRef = useRef(null);
  const containerRef = useRef(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!guacamayaRef.current || !containerRef.current) return;

    timelineRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
    });

    timelineRef.current.to(guacamayaRef.current, {
      x: -80,
      y: -50,
      duration: 5,
      ease: 'none',
    });

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="guacamaya-container relative">
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-30 pointer-events-none hidden md:block">
        <div ref={guacamayaRef} className="relative w-52 h-52 lg:w-65 lg:h-65">
          <Image
            src="/img/guacamaya.webp"
            alt="Flying guacamaya"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
