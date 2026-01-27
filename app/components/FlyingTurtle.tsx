'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function FlyingTurtle() {
  const turtleRef = useRef(null);
  const containerRef = useRef(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!turtleRef.current || !containerRef.current) return;

    timelineRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
    });

    timelineRef.current.to(turtleRef.current, {
      x: -250,
      y: -180,
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
    <div ref={containerRef} className="turtle-container relative">
      <div className="absolute right-0 top-1/2 z-30 pointer-events-none md:block">
        <div ref={turtleRef} className="relative w-32 h-32 lg:w-90 lg:h-90">
          <Image
            src="/img/tortuga.webp"
            alt="Swimming turtle"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
