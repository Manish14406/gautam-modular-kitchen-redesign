import { ChevronRight, ChevronLeft, Phone, MessageCircle, MapPin, Clock, Mail, Star, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import PremiumHero from "@/components/PremiumHero";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

export default function Home() {
  const [activeTab, setActiveTab] = useState("kitchens");
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    message: ""
  });
  const [phoneError, setPhoneError] = useState("");
  
  const [selectedServiceImages, setSelectedServiceImages] = useState<string[]>([]);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState("");
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openServiceModal = (images: string[], title: string) => {
    setSelectedServiceImages(images);
    setSelectedServiceTitle(title);
    setCurrentImageIndex(0);
    setIsImageModalOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % selectedServiceImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + selectedServiceImages.length) % selectedServiceImages.length);
  };

  const handleConsultationSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate phone number - strictly 10 digits
    if (formData.phone.length !== 10) {
      setPhoneError("Please enter exactly 10 digits");
      return;
    }
    setPhoneError("");

    const text = `Hi, I would like to get a free consultation. Here are my details:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Property Type: ${formData.propertyType || "Not specified"}
Message: ${formData.message || "Not specified"}`;

    const whatsappUrl = `https://wa.me/919035725303?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
      { name: "Open Kitchen", image: "/images/open_kitchen.webp" },
    ],
    finishes: [
      { name: "Acrylic Finish", image: "/images/l_shaped_kitchen.webp" },
      { name: "Laminate Finish", image: "/images/island_kitchen.webp" },
      { name: "Waterproof Finish", image: "/images/parallel_kitchen.webp" },
      { name: "Matte Finish", image: "/images/hero_luxury_kitchen.webp" },
      { name: "Glossy Finish", image: "/images/open_kitchen.webp" },
      { name: "Wood Finish", image: "/images/island_kitchen.webp" },
    ],
    layouts: [
      { name: "Modular Design", image: "/images/parallel_kitchen.webp" },
      { name: "Custom Layout", image: "/images/open_kitchen.webp" },
      { name: "Space Optimization", image: "/images/l_shaped_kitchen.webp" },
      { name: "Premium Hardware", image: "/images/island_kitchen.webp" },
      { name: "Smart Storage", image: "/images/hero_luxury_kitchen.webp" },
      { name: "Integrated Appliances", image: "/images/open_kitchen.webp" },
    ],
  };

  const projectGallery = [
    "/images/hero_luxury_kitchen.webp",
    "/images/l_shaped_kitchen.webp",
    "/images/island_kitchen.webp",
    "/images/parallel_kitchen.webp",
    "/images/open_kitchen.webp",
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden" style={{ fontFamily: "'General Sans', sans-serif" }}>

      {/* ── NAVIGATION ── */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-10 mix-blend-difference ${scrolled ? "py-4 bg-[#050505]/80 backdrop-blur-md" : "py-6"}`}>
        <div className="flex items-center justify-between max-w-[1440px] mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-rose-500 rounded-full animate-pulse" />
            <span className="text-lg font-black tracking-tighter uppercase text-white">Gautam Modular</span>
          </div>
          <div className="hidden md:flex items-center gap-10">
            {["#about", "#services", "#gallery", "#process", "#contact"].map((href, i) => (
              <a key={i} href={href} className="text-xs font-bold uppercase tracking-widest text-white hover:text-gray-400 transition-colors">
                {["Studio", "Services", "Collections", "Process", "Contact"][i]}
              </a>
            ))}
          </div>
          <a href="#contact" className="px-5 py-2 rounded-full bg-white text-black text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform">
            Book a Visit
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <PremiumHero />

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 md:py-40 px-6 md:px-12 bg-[#050505] border-t border-white/5">
        <div className="max-w-[90rem] mx-auto">
          <div className="mb-12">
            <h2 className="cinema-heading text-white mb-4">About<br />Our Studio</h2>
            <div className="cinema-accent-line" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6 text-slate-400 font-light leading-relaxed text-base sm:text-lg">
              <p className="text-xl text-rose-300 font-medium">At Gautam Modular Kitchen, we don't just build kitchens — we create intelligent living spaces that become the heart of every home.</p>
              <p>Born from a passion for craftsmanship, innovation, and timeless design, Gautam Modular Kitchen has grown into a trusted name in premium modular interiors.</p>
              <p><strong className="text-white">We believe a kitchen is more than cabinets and countertops.</strong> It is where conversations begin, families unite, and memories are created for generations.</p>
              <p>From luxurious modular kitchens to sophisticated wardrobes and customized interior solutions, our team combines cutting-edge technology with master craftsmanship.</p>
              <p className="text-xl text-rose-300 italic">We are not simply creating kitchens. We are shaping experiences, elevating lifestyles, and building spaces people love to come home to.</p>
            </div>
            <div className="space-y-6">
              <div className="grayscale-hover rounded-2xl overflow-hidden border border-white/10 group">
                <OptimizedImage
                  src="/images/open_kitchen.webp"
                  alt="Showroom"
                  containerClassName="w-full h-[400px]"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[{ n: "500+", l: "Projects" }, { n: "15+", l: "Years" }, { n: "100%", l: "Satisfaction" }, { n: "24/7", l: "Support" }].map((s, i) => (
                  <div key={i} className="p-6 border border-white/10 bg-white/5 rounded-2xl">
                    <p className="text-3xl font-black text-white">{s.n}</p>
                    <p className="text-xs uppercase tracking-widest text-gray-500 mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why Clients Trust Us */}
          <div className="mt-20">
            <h3 className="text-2xl font-black uppercase tracking-widest text-white mb-8">Why Clients Trust Us</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {["Bespoke designs tailored to individual lifestyles","Premium-quality materials and hardware","Precision manufacturing and flawless execution","Innovative storage and smart space solutions","Transparent process and customer-first approach","Commitment to durability, functionality, and luxury"].map((item, idx) => (
                <div key={idx} className={`flex items-start gap-4 p-5 border border-white/10 rounded-2xl bg-white/5 ${idx % 2 === 0 ? "antigravity" : "antigravity-alt"}`}>
                  <div className="w-2 h-2 mt-2 rounded-full bg-rose-400 flex-shrink-0" />
                  <p className="text-slate-300 text-sm font-light">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24 md:py-40 px-6 md:px-12 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-[90rem] mx-auto">
          <div className="mb-12">
            <h2 className="cinema-heading text-white mb-4">Our<br />Services</h2>
            <div className="cinema-accent-line" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              { title: "Modular Kitchens", desc: "Custom-designed kitchens with premium finishes", num: "01", images: ["/images/Modular_kitchen1.png", "/images/modular_kitchen2.png"] },
              { title: "Wardrobes", desc: "Floor-to-ceiling storage solutions", num: "02", images: ["/images/wardrobes1.webp", "/images/wardrobes2.avif"] },
              { title: "TV Units", desc: "Entertainment centers with integrated storage", num: "03", images: ["/images/TVunits1.webp", "/images/Tvunits2.jpeg"] },
              { title: "Crockery Units", desc: "Elegant display and storage solutions", num: "04", images: ["/images/crockeryunit1.jpg", "/images/crockeryunt2.jpg"] },
              { title: "Office Furniture", desc: "Professional workspace solutions", num: "05", images: ["/images/officefurniture1.webp", "/images/officefurniture2.webp"] },
              { title: "False Ceiling", desc: "Modern ceiling designs with integrated lighting", num: "06", images: ["/images/falseceiling1.jpg", "/images/falseceiling2.avif"] },
            ].map((service, idx) => (
              <div key={idx} onClick={() => openServiceModal(service.images, service.title)} className={`group p-8 border border-white/10 bg-[#111111] rounded-2xl hover:border-rose-300/30 transition-all duration-500 cursor-pointer ${idx % 2 === 0 ? "antigravity" : "antigravity-alt"}`}>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 mb-6">{service.num}</p>
                <h3 className="text-xl font-black uppercase tracking-tight text-white mb-3 group-hover:text-rose-300 transition-colors">{service.title}</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-6">{service.desc}</p>
                <button className="text-rose-300 font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                  Explore <ChevronRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KITCHEN COLLECTIONS ── */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-[#050505] border-t border-white/5">
        <div className="max-w-[90rem] mx-auto">
          <div className="mb-12">
            <h2 className="cinema-heading text-white mb-4">Kitchen<br />Collections</h2>
            <div className="cinema-accent-line" />
          </div>
          <div className="hidden">
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kitchenCollections[activeTab as keyof typeof kitchenCollections].map((item, idx) => (
              <div key={idx} className={`group relative rounded-2xl overflow-hidden border border-white/10 bg-[#111111] grayscale-hover cursor-pointer ${idx % 2 === 0 ? "antigravity-alt" : "antigravity"}`}>
                <div className="px-4 py-2.5 flex gap-1.5 border-b border-white/5 bg-white/5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
                <div className="h-56 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex justify-between items-center">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-rose-300 mb-1">Project {String(idx + 1).padStart(2, "0")}</p>
                    <h3 className="text-lg font-black uppercase tracking-tight text-white">{item.name}</h3>
                  </div>
                  <ChevronRight size={18} className="text-gray-600 group-hover:text-white transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="gallery" className="py-24 md:py-40 px-6 md:px-12 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-[90rem] mx-auto">
          <div className="mb-16">
            <h2 className="cinema-heading text-white mb-4">Featured<br />Works</h2>
            <div className="cinema-accent-line" />
          </div>
          {/* Featured */}
          <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#111111] mb-12 grayscale-hover cursor-pointer antigravity">
            <div className="px-4 py-3 flex gap-1.5 border-b border-white/5 bg-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500" /><div className="w-3 h-3 rounded-full bg-yellow-500" /><div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="aspect-video overflow-hidden">
              <img src={projectGallery[0]} className="w-full h-full object-cover" alt="Featured project" />
            </div>
            <div className="p-8">
              <p className="text-xs font-black uppercase tracking-widest text-rose-300 mb-2">Project 01</p>
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">Signature Kitchen</h3>
            </div>
          </div>
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectGallery.slice(1).map((img, idx) => (
              <div key={idx} className={`group grayscale-hover cursor-pointer ${idx % 2 === 0 ? "antigravity-alt" : "antigravity"}`}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-[#111111] mb-4">
                  <img src={img} className="w-full h-full object-cover" alt={`Project ${idx + 2}`} />
                </div>
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-black uppercase tracking-tight">Signature Project {idx + 2}</h4>
                  <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">2026</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-[#0B0216] border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-800 rounded-full opacity-20 blur-[120px] pointer-events-none" />
        <div className="max-w-[90rem] mx-auto relative z-10">
          <div className="mb-16">
            <h2 className="cinema-heading text-white mb-4">Why Choose<br />Gautam</h2>
            <div className="cinema-accent-line" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { n: "01", title: "Precision Manufacturing", desc: "State-of-the-art machinery and expert craftsmen" },
              { n: "02", title: "Custom Designs", desc: "Personalized solutions tailored to your space" },
              { n: "03", title: "Premium Materials", desc: "Branded materials: Hettich, Ebco, Greenply" },
              { n: "04", title: "Affordable Pricing", desc: "Luxury without breaking the bank" },
              { n: "05", title: "Professional Installation", desc: "Expert team ensuring flawless execution" },
              { n: "06", title: "Timely Delivery", desc: "Guaranteed project completion on schedule" },
            ].map((item, idx) => (
              <div key={idx} className={`p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md ${idx % 2 === 0 ? "antigravity" : "antigravity-alt"}`}>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-6">{item.n}</p>
                <h3 className="text-xl font-black uppercase tracking-tight text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" className="py-24 md:py-40 px-6 md:px-12 bg-[#050505] border-t border-white/5">
        <div className="max-w-[90rem] mx-auto">
          <div className="mb-16">
            <h2 className="cinema-heading text-white mb-4">Our<br />Process</h2>
            <div className="cinema-accent-line" />
            <p className="text-gray-500 mt-4 font-light">Six steps to your dream interior</p>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-white/10 p-4 bg-white/5 backdrop-blur-sm max-w-5xl">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663665123618/coXWUQEdTXUjHQnzQmvQwe/process-timeline-visual-o7KdfeKNbdDGwcmUo5a5KN.webp"
              alt="Our Process Timeline"
              className="w-full rounded-lg filter invert brightness-90 contrast-125"
            />
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-[90rem] mx-auto">
          <div className="mb-16">
            <h2 className="cinema-heading text-white mb-4">Client<br />Stories</h2>
            <div className="cinema-accent-line" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Rajesh Kumar", rating: 5, text: "Exceptional quality and professionalism. The kitchen exceeded our expectations!" },
              { name: "Priya Sharma", rating: 5, text: "Best interior design experience. Highly recommended for premium modular kitchens." },
              { name: "Amit Patel", rating: 5, text: "Outstanding craftsmanship and attention to detail. Worth every penny!" },
            ].map((t, idx) => (
              <div key={idx} className={`p-8 rounded-3xl border border-white/10 bg-[#111111] ${idx % 2 === 0 ? "antigravity" : "antigravity-alt"}`}>
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} className="fill-rose-300 text-rose-300" />)}
                </div>
                <p className="text-slate-300 italic font-light mb-6 leading-relaxed">"{t.text}"</p>
                <p className="font-black text-white uppercase tracking-widest text-xs">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-[#050505] border-t border-white/5">
        <div className="max-w-[90rem] mx-auto">
          <div className="mb-16">
            <h2 className="cinema-heading text-white mb-4">Get Free<br />Consultation</h2>
            <div className="cinema-accent-line" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <form className="space-y-6" onSubmit={handleConsultationSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-all rounded-lg" 
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-all rounded-lg" 
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    required
                    value={formData.phone}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                      setFormData({...formData, phone: val});
                      setPhoneError("");
                    }}
                    className={`w-full px-5 py-4 bg-white/5 border ${phoneError ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-white'} text-white placeholder-gray-600 focus:outline-none transition-all rounded-lg`}
                  />
                  {phoneError && <p className="text-red-500 text-xs mt-2 ml-1">{phoneError}</p>}
                </div>
                <select 
                  value={formData.propertyType}
                  onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
                  className="w-full px-5 py-4 bg-[#111111] border border-white/10 text-white focus:outline-none focus:border-white transition-all rounded-lg"
                >
                  <option value="">Select Property Type</option>
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
              <textarea 
                placeholder="Tell us about your project..." 
                rows={4} 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-all rounded-lg" 
              />
              <button type="submit" className="w-full py-5 bg-white text-black font-black uppercase tracking-[0.25em] text-xs hover:scale-[1.01] transition-transform rounded-lg">
                Get Free Consultation
              </button>
            </form>
            <div className="h-full min-h-[400px] w-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 relative grayscale-hover group">
              <iframe
                src="https://maps.google.com/maps?q=GMK%20Interior%20Decoration%20works%20%26%20Modular%20Kitchens%20Bangalore&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px', display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="group-hover:scale-105 transition-transform duration-700"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer id="contact" className="py-20 px-6 md:px-12 bg-[#050505] border-t border-white/5">
        <div className="max-w-[90rem] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
            <div className="text-[14vw] md:text-[10vw] font-black uppercase tracking-tighter leading-none">
              FIN.<br />
              <span style={{ background: "linear-gradient(to right,#e4b4b4,#cbd5e1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>2026</span>
            </div>
            <div className="flex flex-col gap-4 md:text-right text-sm">
              <div className="flex items-center md:justify-end gap-3"><Phone size={14} className="text-rose-300" /><span className="text-slate-400">+91 9035725303</span></div>
              <div className="flex items-center md:justify-end gap-3"><Mail size={14} className="text-rose-300" /><span className="text-slate-400">gautammodularkitchen@gmail.com</span></div>
              <div className="flex items-center md:justify-end gap-3"><MapPin size={14} className="text-rose-300" /><span className="text-slate-400">Bangalore, India</span></div>
              <div className="flex items-center md:justify-end gap-3"><Clock size={14} className="text-rose-300" /><span className="text-slate-400">Mon–Sat: 10 AM – 7 PM</span></div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {["Services", "Gallery", "About Us", "Contact"].map((l, i) => (
                  <a key={i} href={`#${["services","gallery","about","contact"][i]}`} className="text-xs font-bold uppercase tracking-widest text-gray-600 hover:text-white transition-colors">{l}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between pt-8 border-t border-white/10 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-700">
            <p>© 2026 Gautam Modular Kitchen. All Rights Reserved.</p>
            <p>Crafted for Living. Designed for Life.</p>
          </div>
        </div>
      </footer>

      {/* ── IMAGE MODAL ── */}
      {isImageModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-md">
          <button 
            onClick={() => setIsImageModalOpen(false)}
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all z-10"
          >
            <X size={24} />
          </button>
          
          <div className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-6 text-center">{selectedServiceTitle}</h3>
            
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-[#050505] flex items-center justify-center">
              {selectedServiceImages.length > 0 && (
                <img 
                  src={selectedServiceImages[currentImageIndex]} 
                  alt={`${selectedServiceTitle} ${currentImageIndex + 1}`} 
                  className="w-full h-full object-contain" 
                />
              )}
              
              {selectedServiceImages.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white backdrop-blur-md transition-all"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white backdrop-blur-md transition-all"
                  >
                    <ChevronRight size={24} />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedServiceImages.map((_, i) => (
                      <div key={i} className={`w-2 h-2 rounded-full transition-all ${i === currentImageIndex ? "bg-rose-400 w-4" : "bg-white/30"}`} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40">
        <a href="https://wa.me/919035725303" target="_blank" rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center">
          <MessageCircle size={22} />
        </a>
        <a href="tel:+919035725303"
          className="w-14 h-14 rounded-full bg-white text-black shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center">
          <Phone size={22} />
        </a>
      </div>
    </div>
  );
}
