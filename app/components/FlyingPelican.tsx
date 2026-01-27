'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function FlyingPelican() {
  const pelicanoRef = useRef(null);
  const containerRef = useRef(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!pelicanoRef.current || !containerRef.current) return;

    timelineRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
    });

    timelineRef.current.to(pelicanoRef.current, {
      x: 150,
      y: -90,
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
    <div ref={containerRef} className="pelicano-container relative">
      <div className="absolute left-0 top-1/2 z-30 pointer-events-none md:block">
        <div ref={pelicanoRef} className="relative w-32 h-32 lg:w-100 lg:h-100">
          <Image
            src="/img/pelicano.png"
            alt="Flying pelican"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
