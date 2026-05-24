import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function PremiumHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      if (scrollRef.current) {
        scrollRef.current.style.transform = `translateX(-${scrolled * 0.08}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* Massive Background Text */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none overflow-hidden">
        <h1
          ref={scrollRef}
          className="text-[28vw] font-black uppercase tracking-tighter text-white/[0.04] whitespace-nowrap transition-transform"
        >
          GAUTAM
        </h1>
      </div>

      {/* 3D Cube Container */}
      <div
        className={`cinema-perspective z-10 transition-all duration-1000 ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <div className="cube-wrapper">
          {/* Front */}
          <div className="cube-face cube-front">
            <img
              src="/images/hero_luxury_kitchen.webp"
              alt="Luxury Kitchen"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-2xl font-black text-white tracking-[0.2em] uppercase">Bespoke</h2>
            </div>
          </div>
          {/* Bottom */}
          <div className="cube-face cube-bottom">
            <img
              src="/images/l_shaped_kitchen.webp"
              alt="L Shaped Kitchen"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-2xl font-black text-white tracking-[0.2em] uppercase">Precision</h2>
            </div>
          </div>
          {/* Back */}
          <div className="cube-face cube-back">
            <img
              src="/images/island_kitchen.webp"
              alt="Island Kitchen"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-2xl font-black text-white tracking-[0.2em] uppercase">Elegant</h2>
            </div>
          </div>
          {/* Top */}
          <div className="cube-face cube-top">
            <img
              src="/images/parallel_kitchen.webp"
              alt="Parallel Kitchen"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-2xl font-black text-white tracking-[0.2em] uppercase">Timeless</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Text */}
      <div
        className={`absolute bottom-16 sm:bottom-20 z-10 text-center px-4 w-full transition-all duration-1000 delay-300 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-gray-500 font-bold mb-3 sm:mb-4">
          Premium Modular Interiors · Est. 2009
        </p>
        <h2 className="text-[10vw] sm:text-[9vw] leading-[0.85] font-black uppercase tracking-tighter text-white">
          Crafted For<br />Living
        </h2>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] overflow-hidden transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
          >
            <span>Get Free Consultation</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#gallery"
            className="px-8 py-4 border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.2em] hover:border-white transition-all duration-300 inline-block"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10 opacity-40">
        <div className="w-px h-12 bg-white/30 animate-pulse" />
      </div>
    </section>
  );
}
