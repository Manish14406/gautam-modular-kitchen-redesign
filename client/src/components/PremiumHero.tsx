import { useEffect, useRef, useState } from 'react';
import { ChevronDown, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { OptimizedImage } from './ui/OptimizedImage';

/**
 * Premium Hero Component with Cinematic Animations
 * Design Philosophy: Dark Luxury, Elegant Minimalism with Sophisticated Restraint
 * 
 * Features:
 * - Parallax background and mouse interactions
 * - Dual-column layout: detailed typography on left, high-end image on right
 * - Decorative lighting orbs and background gradients
 * - Staggered text animations on load
 * - Signature Detail overlay and rotating text badge
 * - High-end custom typography with Satoshi & General Sans
 */

export default function PremiumHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Handle mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      
      setMousePosition({ x: x * 20, y: y * 20 });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Trigger animations on mount
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full bg-[#0B0E14] flex items-center pt-32 pb-20 overflow-hidden px-6 md:px-12 lg:px-20"
    >
      {/* Light Leaks */}
      <div className="light-leak light-leak-rose absolute -top-48 -right-24 w-[600px] h-[600px] rounded-full filter blur-[120px] pointer-events-none opacity-60"></div>
      <div className="light-leak light-leak-navy absolute -bottom-24 -left-24 w-[600px] h-[600px] rounded-full filter blur-[120px] pointer-events-none opacity-40"></div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto w-full z-10">
        
        {/* LEFT: TEXT CONTENT */}
        <div className="space-y-8 sm:space-y-10 text-left">
          <div
            className={`space-y-4 transition-all duration-1000 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-rose-gold animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-rose-gold">2026 Design Excellence</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black leading-[1.0] tracking-tighter text-white">
              DESIGNING ELEGANT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-rose-300 to-rose-400">
                MODULAR KITCHENS
              </span>
              <br />& MODERN INTERIORS
            </h1>
            
            <p className="text-base sm:text-lg text-slate-400 max-w-lg font-light leading-relaxed">
              Transform your living spaces with premium modular solutions. Crafted with precision, designed with elegance. At Gautam Modular Kitchen, we create intelligent living spaces that become the heart of every home.
            </p>
          </div>

          {/* CTA BUTTONS */}
          <div
            className={`flex flex-wrap items-center gap-6 transition-all duration-1000 ease-out delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <a 
              href="#contact" 
              className="group relative px-8 py-5 bg-white text-black text-xs font-black uppercase tracking-[0.2em] overflow-hidden transition-all duration-500 rounded-sm hover:shadow-lg inline-block"
            >
              <div className="absolute inset-0 bg-rose-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <span className="relative z-10 flex items-center gap-3 text-black">
                Get Free Consultation 
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
            
            <a 
              href="#gallery" 
              className="group px-8 py-5 border border-white/20 text-white text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 hover:border-rose-gold hover:text-rose-gold rounded-sm inline-block"
            >
              View Projects
            </a>
          </div>

          {/* TRUST BADGES / STATS */}
          <div
            className={`grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/5 transition-all duration-1000 ease-out delay-400 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '15+', label: 'Years Mastery' },
              { number: '100%', label: 'Satisfaction' },
              { number: '24/7', label: 'Dedicated Support' },
            ].map((badge, idx) => (
              <div key={idx} className="space-y-1">
                <p className="text-2xl sm:text-3xl font-bold text-white tracking-tighter">{badge.number}</p>
                <p className="text-[9px] uppercase tracking-widest text-slate-500 font-semibold leading-tight">{badge.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: IMAGE SECTION */}
        <div 
          className={`relative group transition-all duration-1000 ease-out delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-rose-gold/20 via-transparent to-blue-500/10 blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
          
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 glow-silver bg-[#171B24]">
            <OptimizedImage 
              ref={bgRef}
              src="/images/hero_luxury_kitchen.webp" 
              alt="Luxury Kitchen Interior" 
              className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              style={{
                transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px) scale(1.02) translateZ(0)`,
                willChange: 'transform',
                transition: 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), grayscale 0.5s ease',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-transparent"></div>
            
            {/* Signature Finish glass overlay */}
            <div className="absolute bottom-8 left-8 glass p-6 rounded-xl max-w-[280px] border-white/10 text-left">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="text-rose-gold w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-rose-gold">Signature Finish</span>
              </div>
              <p className="text-sm font-medium text-white leading-snug">Metallic Charcoal Finish with Rose-Gold Edge Detail.</p>
            </div>
          </div>

          {/* CIRCULAR BADGE */}
          <div className="absolute -top-10 -right-10 w-36 h-36 sm:w-40 sm:h-40 glass rounded-full flex items-center justify-center border-rose-gold/20 border backdrop-blur-xl animate-spin-slow">
            <div className="relative flex items-center justify-center">
              <svg className="w-28 h-28 sm:w-32 sm:h-32" viewBox="0 0 100 100">
                <path id="textPath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none"></path>
                <text className="text-[6.5px] font-bold uppercase tracking-[0.43em] fill-rose-gold">
                  <textPath href="#textPath">Bespoke • Luxury • Timeless • Interior • </textPath>
                </text>
              </svg>
              <ShieldCheck className="absolute text-rose-gold w-6 h-6 sm:w-8 sm:h-8" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[9px] uppercase tracking-[0.4em] text-slate-500 font-semibold animate-pulse">Scroll to explore</span>
        <ChevronDown className="w-4 h-4 text-rose-gold animate-bounce" />
      </div>
    </section>
  );
}
