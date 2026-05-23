import { Card } from "@/components/ui/card";
import { ChevronRight, Phone, MessageCircle, MapPin, Clock, Mail, Star } from "lucide-react";
import { useState, useEffect } from "react";
import PremiumHero from "@/components/PremiumHero";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

/**
 * Design Philosophy: Dark Luxury, Elegant Minimalism with Sophisticated Restraint
 * - Generous dark space and breathing room throughout (Deep Charcoal #0B0E14)
 * - Refined typography with Satoshi and General Sans font-families
 * - Custom rose-gold accents (#E4B4B4) and metallic-silver details (#CBD5E1)
 * - Glassmorphic cards and glowing elements
 * - Dynamic scroll behaviors and interactive states
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState("kitchens");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const kitchenCollections = {
    kitchens: [
      { name: "L-Shaped Kitchen", image: "/images/l_shaped_kitchen.webp" },
      { name: "U-Shaped Kitchen", image: "/images/hero_luxury_kitchen.webp" },
      { name: "Island Kitchen", image: "/images/island_kitchen.webp" },
      { name: "Parallel Kitchen", image: "/images/parallel_kitchen.webp" },
      { name: "Galley Kitchen", image: "/images/hero_luxury_kitchen.webp" },
      { name: "Open Kitchen", image: "/images/open_kitchen.webp" }
    ],
    finishes: [
      { name: "Acrylic Finish", image: "/images/l_shaped_kitchen.webp" },
      { name: "Laminate Finish", image: "/images/island_kitchen.webp" },
      { name: "Waterproof Finish", image: "/images/parallel_kitchen.webp" },
      { name: "Matte Finish", image: "/images/hero_luxury_kitchen.webp" },
      { name: "Glossy Finish", image: "/images/open_kitchen.webp" },
      { name: "Wood Finish", image: "/images/island_kitchen.webp" }
    ],
    layouts: [
      { name: "Modular Design", image: "/images/parallel_kitchen.webp" },
      { name: "Custom Layout", image: "/images/open_kitchen.webp" },
      { name: "Space Optimization", image: "/images/l_shaped_kitchen.webp" },
      { name: "Premium Hardware", image: "/images/island_kitchen.webp" },
      { name: "Smart Storage", image: "/images/hero_luxury_kitchen.webp" },
      { name: "Integrated Appliances", image: "/images/open_kitchen.webp" }
    ]
  };

  const projectGallery = [
    "/images/hero_luxury_kitchen.webp",
    "/images/l_shaped_kitchen.webp",
    "/images/island_kitchen.webp",
    "/images/parallel_kitchen.webp",
    "/images/open_kitchen.webp",
    "/images/island_kitchen.webp"
  ];

  return (
    <div className="min-h-screen bg-[#0B0E14] text-white overflow-x-hidden font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${scrolled ? "bg-[#0B0E14]/90 backdrop-blur-md border-white/5 py-4" : "bg-transparent border-white/0 py-6"}`}>
        <div className="container flex items-center justify-between max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3">
            <span className="text-xl font-black tracking-tighter uppercase text-white">
              Gautam <span className="text-rose-gold">Modular</span>
            </span>
          </div>
          
          <div className="hidden md:flex gap-10 text-xs font-semibold uppercase tracking-[0.2em] text-silver">
            <a href="#about" className="hover:text-rose-gold transition-colors duration-300">The Studio</a>
            <a href="#services" className="hover:text-rose-gold transition-colors duration-300">Services</a>
            <a href="#gallery" className="hover:text-rose-gold transition-colors duration-300">Collections</a>
            <a href="#process" className="hover:text-rose-gold transition-colors duration-300">Mastery</a>
            <a href="#contact" className="hover:text-rose-gold transition-colors duration-300">Contact</a>
          </div>

          <a 
            href="#contact" 
            className="px-6 py-3 bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-rose-gold transition-all duration-500 rounded-none"
          >
            Book a Visit
          </a>
        </div>
      </nav>

      {/* Premium Hero Section */}
      <PremiumHero />

      {/* About Section */}
      <section id="about" className="section-padding bg-[#0B0E14] border-t border-white/5">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-12 h-1 bg-rose-gold rounded-full"></div>
              </div>
              <h2 className="text-white text-3xl md:text-4xl font-black uppercase tracking-wider">About Our Studio</h2>
            </div>
            
            <div className="space-y-6 text-base sm:text-lg text-slate-400 font-light leading-relaxed">
              <p className="font-medium text-xl text-rose-gold text-center pb-4 leading-snug">
                At Gautam Modular Kitchen, we don’t just build kitchens — we create intelligent living spaces that become the heart of every home.
              </p>
              
              <p>
                Born from a passion for craftsmanship, innovation, and timeless design, Gautam Modular Kitchen has grown into a trusted name in premium modular interiors. Every project we undertake is a reflection of precision engineering, modern aesthetics, and a deep understanding of how people truly live, cook, gather, and connect.
              </p>
              
              <p>
                <strong className="text-white font-bold">We believe a kitchen is more than cabinets and countertops.</strong> It is where conversations begin, families unite, celebrations happen, and memories are created for generations. That belief drives us to design spaces that are not only visually stunning, but also highly functional, durable, and personalized to every lifestyle.
              </p>
              
              <p>
                From luxurious modular kitchens to sophisticated wardrobes and customized interior solutions, our team combines cutting-edge technology with master craftsmanship to deliver spaces that inspire everyday living. Every detail — from material selection to finishing touches — is executed with uncompromising quality standards.
              </p>
              
              <p>
                <strong className="text-white font-bold">What makes Gautam Modular Kitchen different is our obsession with perfection.</strong> We blend contemporary global trends with practical Indian living requirements, creating interiors that are elegant, efficient, and built to last. Our designs are thoughtfully planned to maximize space, enhance comfort, and elevate the overall experience of your home.
              </p>
            </div>

            <div className="pt-8 border-t border-white/5">
              <h3 className="text-2xl font-bold text-white mb-8 text-center uppercase tracking-wider">Why Clients Trust Us</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Bespoke designs tailored to individual lifestyles",
                  "Premium-quality materials and hardware",
                  "Precision manufacturing and flawless execution",
                  "Innovative storage and smart space solutions",
                  "Transparent process and customer-first approach",
                  "Commitment to durability, functionality, and luxury"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 glass rounded-xl border-white/5">
                    <div className="w-2.5 h-2.5 mt-2 rounded-full bg-rose-gold flex-shrink-0"></div>
                    <p className="text-slate-300 font-light text-sm sm:text-base">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 text-base sm:text-lg text-slate-400 font-light leading-relaxed pt-8 border-t border-white/5 text-center">
              <p>
                At Gautam Modular Kitchen, every project is a partnership built on trust, creativity, and excellence. Whether it is a modern urban apartment, a luxury villa, or a commercial space, we bring vision, sophistication, and craftsmanship together to transform interiors into masterpieces.
              </p>
              <p className="text-xl font-medium text-rose-gold italic leading-snug">
                We are not simply creating kitchens. We are shaping experiences, elevating lifestyles, and building spaces people love to come home to.
              </p>
              <p className="text-2xl font-black text-white uppercase tracking-wider pt-6">
                Gautam Modular Kitchen <br />
                <span className="text-sm font-semibold text-rose-gold tracking-[0.25em]">Crafted for Living. Designed for Life</span>
              </p>
            </div>

            <div className="pt-12 relative group">
              <div className="absolute -inset-2 bg-gradient-to-tr from-rose-gold/10 via-transparent to-blue-500/5 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
              <OptimizedImage
                src="/images/open_kitchen.webp"
                alt="Showroom"
                containerClassName="w-full h-[450px] rounded-2xl border border-white/10 glow-silver shadow-2xl"
                className="grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-[1.01] transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-[#0B0E14] border-t border-white/5">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <div className="flex justify-center">
              <div className="w-12 h-1 bg-rose-gold rounded-full"></div>
            </div>
            <h2 className="text-white text-3xl md:text-4xl font-black uppercase tracking-wider">Our Services</h2>
            <p className="text-base text-slate-400 max-w-2xl mx-auto font-light">
              Comprehensive interior solutions tailored to your needs and lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Modular Kitchens", desc: "Custom-designed kitchens with premium finishes" },
              { title: "Wardrobes", desc: "Floor-to-ceiling storage solutions" },
              { title: "TV Units", desc: "Entertainment centers with integrated storage" },
              { title: "Crockery Units", desc: "Elegant display and storage solutions" },
              { title: "Office Furniture", desc: "Professional workspace solutions" },
              { title: "False Ceiling", desc: "Modern ceiling designs with integrated lighting" },
            ].map((service, idx) => (
              <Card key={idx} className="p-8 glass rounded-2xl border border-white/5 hover:border-rose-gold/30 hover:glow-rose transition-all duration-500 group cursor-pointer text-left bg-transparent">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-rose-gold transition-colors duration-300 uppercase tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 font-light text-sm sm:text-base leading-relaxed">{service.desc}</p>
                  <button className="text-rose-gold font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all duration-300">
                    Explore <ChevronRight size={14} />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Kitchen Types Section */}
      <section className="section-padding bg-[#0B0E14] border-t border-white/5">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <div className="flex justify-center">
              <div className="w-12 h-1 bg-rose-gold rounded-full"></div>
            </div>
            <h2 className="text-white text-3xl md:text-4xl font-black uppercase tracking-wider">Kitchen Collections</h2>
            <p className="text-base text-slate-400 max-w-2xl mx-auto font-light">
              Explore our diverse range of kitchen designs and finishes
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {["kitchens", "finishes", "layouts"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 font-black text-xs uppercase tracking-[0.25em] transition-all duration-300 rounded-none cursor-pointer ${
                  activeTab === tab
                    ? "bg-rose-gold text-black glow-rose"
                    : "bg-white/5 text-silver border border-white/10 hover:border-rose-gold/50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Kitchen Collections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeTab === "kitchens" && (
              <>
                {kitchenCollections.kitchens.map((item, idx) => (
                  <div key={idx} className="relative h-72 rounded-2xl overflow-hidden group cursor-pointer border border-white/10 glow-silver bg-[#171B24]">
                    <OptimizedImage 
                      src={item.image} 
                      alt={item.name} 
                      containerClassName="absolute inset-0 w-full h-full"
                      className="grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14]/90 via-[#0B0E14]/40 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-left">
                      <p className="text-white font-bold text-lg tracking-tight uppercase">{item.name}</p>
                      <span className="text-[10px] text-rose-gold font-bold uppercase tracking-widest">Explore Concept</span>
                    </div>
                  </div>
                ))}
              </>
            )}
            {activeTab === "finishes" && (
              <>
                {kitchenCollections.finishes.map((item, idx) => (
                  <div key={idx} className="relative h-72 rounded-2xl overflow-hidden group cursor-pointer border border-white/10 glow-silver bg-[#171B24]">
                    <OptimizedImage 
                      src={item.image} 
                      alt={item.name} 
                      containerClassName="absolute inset-0 w-full h-full"
                      className="grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14]/90 via-[#0B0E14]/40 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-left">
                      <p className="text-white font-bold text-lg tracking-tight uppercase">{item.name}</p>
                      <span className="text-[10px] text-rose-gold font-bold uppercase tracking-widest">Explore Finish</span>
                    </div>
                  </div>
                ))}
              </>
            )}
            {activeTab === "layouts" && (
              <>
                {kitchenCollections.layouts.map((item, idx) => (
                  <div key={idx} className="relative h-72 rounded-2xl overflow-hidden group cursor-pointer border border-white/10 glow-silver bg-[#171B24]">
                    <OptimizedImage 
                      src={item.image} 
                      alt={item.name} 
                      containerClassName="absolute inset-0 w-full h-full"
                      className="grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14]/90 via-[#0B0E14]/40 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-left">
                      <p className="text-white font-bold text-lg tracking-tight uppercase">{item.name}</p>
                      <span className="text-[10px] text-rose-gold font-bold uppercase tracking-widest">Explore Layout</span>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section-padding bg-[#0B0E14] border-t border-white/5">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <div className="flex justify-center">
              <div className="w-12 h-1 bg-rose-gold rounded-full"></div>
            </div>
            <h2 className="text-white text-3xl md:text-4xl font-black uppercase tracking-wider">Project Gallery</h2>
            <p className="text-base text-slate-400 max-w-2xl mx-auto font-light">
              Showcasing our finest interior design projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectGallery.map((imagePath, idx) => (
              <div
                key={idx}
                className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer border border-white/10 glow-silver bg-[#171B24]"
              >
                <OptimizedImage 
                  src={imagePath} 
                  alt={`Project ${idx + 1}`} 
                  containerClassName="absolute inset-0 w-full h-full"
                  className="grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14]/90 via-[#0B0E14]/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-left">
                  <p className="text-white font-bold text-lg uppercase">Signature Project {idx + 1}</p>
                  <span className="text-[10px] text-rose-gold font-bold uppercase tracking-widest">Bespoke Design</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-[#0B0E14] border-t border-white/5">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <div className="flex justify-center">
              <div className="w-12 h-1 bg-rose-gold rounded-full"></div>
            </div>
            <h2 className="text-white text-3xl md:text-4xl font-black uppercase tracking-wider">Why Choose Gautam</h2>
            <p className="text-base text-slate-400 max-w-2xl mx-auto font-light">
              What makes us the preferred choice for premium interior design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Precision Manufacturing", desc: "State-of-the-art machinery and expert craftsmen" },
              { title: "Custom Designs", desc: "Personalized solutions tailored to your space" },
              { title: "Premium Materials", desc: "Only branded materials like Hettich, Ebco, Greenply" },
              { title: "Affordable Pricing", desc: "Luxury without breaking the bank" },
              { title: "Professional Installation", desc: "Expert team ensuring flawless execution" },
              { title: "Timely Delivery", desc: "Guaranteed project completion on schedule" },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 p-6 glass rounded-2xl border-white/5 hover:border-rose-gold/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-rose-gold/10 flex items-center justify-center flex-shrink-0 text-rose-gold font-bold border border-rose-gold/20">
                  {idx + 1}
                </div>
                <div className="space-y-2 text-left">
                  <h3 className="font-bold text-white text-lg uppercase tracking-wider">{item.title}</h3>
                  <p className="text-slate-400 font-light text-sm sm:text-base leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="section-padding bg-[#0B0E14] border-t border-white/5">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <div className="flex justify-center">
              <div className="w-12 h-1 bg-rose-gold rounded-full"></div>
            </div>
            <h2 className="text-white text-3xl md:text-4xl font-black uppercase tracking-wider">Our Process</h2>
            <p className="text-base text-slate-400 max-w-2xl mx-auto font-light">
              Six steps to your dream interior
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-white/10 glow-silver p-4 bg-white/5 backdrop-blur-sm max-w-5xl mx-auto">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663665123618/coXWUQEdTXUjHQnzQmvQwe/process-timeline-visual-o7KdfeKNbdDGwcmUo5a5KN.webp"
              alt="Our Process Timeline"
              className="w-full rounded-lg filter invert brightness-90 contrast-125 mix-blend-screen"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-[#0B0E14] border-t border-white/5">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <div className="flex justify-center">
              <div className="w-12 h-1 bg-rose-gold rounded-full"></div>
            </div>
            <h2 className="text-white text-3xl md:text-4xl font-black uppercase tracking-wider">Client Testimonials</h2>
            <p className="text-base text-slate-400 max-w-2xl mx-auto font-light">
              What our satisfied clients say about us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Rajesh Kumar", rating: 5, text: "Exceptional quality and professionalism. The kitchen exceeded our expectations!" },
              { name: "Priya Sharma", rating: 5, text: "Best interior design experience. Highly recommended for premium modular kitchens." },
              { name: "Amit Patel", rating: 5, text: "Outstanding craftsmanship and attention to detail. Worth every penny!" },
            ].map((testimonial, idx) => (
              <Card key={idx} className="p-8 glass rounded-2xl border border-white/5 hover:border-rose-gold/30 hover:glow-rose transition-all duration-500 text-left bg-transparent">
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-rose-gold text-rose-gold" />
                    ))}
                  </div>
                  <p className="text-slate-300 italic font-light">"{testimonial.text}"</p>
                  <p className="font-bold text-white uppercase tracking-wider text-sm">{testimonial.name}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Generation Section */}
      <section className="section-padding bg-[#0B0E14] border-t border-white/5">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto space-y-8 glass p-8 sm:p-12 rounded-3xl border border-white/10 glow-rose text-left">
            <div className="space-y-4 text-center">
              <h2 className="text-white text-3xl font-black uppercase tracking-wider">Get Your Free 3D Design Consultation</h2>
              <p className="text-slate-400 font-light text-sm">
                Let our experts create a personalized design for your space
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-5 py-4 rounded-sm bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-rose-gold focus:ring-1 focus:ring-rose-gold transition-all duration-300"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-5 py-4 rounded-sm bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-rose-gold focus:ring-1 focus:ring-rose-gold transition-all duration-300"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-5 py-4 rounded-sm bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-rose-gold focus:ring-1 focus:ring-rose-gold transition-all duration-300"
                />
                <select className="w-full px-5 py-4 rounded-sm bg-[#171B24] border border-white/10 text-white focus:outline-none focus:border-rose-gold focus:ring-1 focus:ring-rose-gold transition-all duration-300">
                  <option value="" className="bg-[#171B24]">Select Property Type</option>
                  <option value="apartment" className="bg-[#171B24]">Apartment</option>
                  <option value="villa" className="bg-[#171B24]">Villa</option>
                  <option value="commercial" className="bg-[#171B24]">Commercial</option>
                </select>
              </div>
              <textarea
                placeholder="Tell us about your project..."
                rows={4}
                className="w-full px-5 py-4 rounded-sm bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-rose-gold focus:ring-1 focus:ring-rose-gold transition-all duration-300"
              ></textarea>
              <button type="submit" className="w-full py-5 bg-white text-black font-black uppercase tracking-[0.25em] text-xs hover:bg-rose-gold transition-all duration-500 rounded-sm cursor-pointer">
                Get Free Consultation
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer id="contact" className="bg-[#0B0E14] border-t border-white/5 text-left">
        <div className="container max-w-7xl mx-auto px-6 section-padding">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold uppercase tracking-tighter text-white">
                Gautam <span className="text-rose-gold">Modular</span>
              </h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Premium modular kitchen and interior solutions for modern living.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-bold text-white uppercase tracking-wider text-sm">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="text-slate-400 hover:text-rose-gold transition-colors duration-300">Services</a></li>
                <li><a href="#gallery" className="text-slate-400 hover:text-rose-gold transition-colors duration-300">Gallery</a></li>
                <li><a href="#about" className="text-slate-400 hover:text-rose-gold transition-colors duration-300">About Us</a></li>
                <li><a href="#contact" className="text-slate-400 hover:text-rose-gold transition-colors duration-300">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-bold text-white uppercase tracking-wider text-sm">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <Phone size={16} className="text-rose-gold flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400 font-light">+91 9035725303</span>
                </li>
                <li className="flex gap-3">
                  <Mail size={16} className="text-rose-gold flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400 font-light">info@gautammodularkitchen.com</span>
                </li>
                <li className="flex gap-3">
                  <MapPin size={16} className="text-rose-gold flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400 font-light">Bangalore, India</span>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div className="space-y-4">
              <h4 className="font-bold text-white uppercase tracking-wider text-sm">Business Hours</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex gap-3">
                  <Clock size={16} className="text-rose-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-light">Mon - Sat: 10 AM - 7 PM</p>
                    <p className="font-light">Sunday: 11 AM - 5 PM</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Floating Action Buttons */}
          <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40">
            <a 
              href="https://wa.me/919035725303"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
            >
              <MessageCircle size={24} />
            </a>
            <a 
              href="tel:+919035725303"
              className="w-14 h-14 rounded-full bg-white text-black border border-white/10 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center glow-silver"
            >
              <Phone size={24} className="text-rose-gold" />
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/5 pt-8 text-center text-sm text-slate-500 font-light">
            <p>&copy; 2026 Gautam Modular Kitchen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
