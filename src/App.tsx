import { useState } from 'react';
import {
  Code2, Globe, Smartphone, Zap, Shield, ShoppingCart,
  Calendar, Search, Image, ChevronLeft, MessageCircle,
  Mail, Phone, Check, Star, Palette, Wrench, CreditCard,
  X
} from 'lucide-react';
import heroImg from './assets/image.png';
import exampleImg from './assets/examples/image.png';

type View = 'home' | 'portfolio-detail';

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  url: string;
  images: string[];
  tags: string[];
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 'queenfab',
    title: 'Queen Fab Beauty Salon',
    description: 'A full-featured beauty salon website for Queen Fab — featuring service listings, training courses, booking capabilities, and a stunning mobile-first design that reflects the brand\'s premium aesthetic.',
    url: 'https://queenfab.lovable.app/',
    images: [
      exampleImg,
    ],
    tags: ['Beauty & Wellness', 'Mobile-First', 'Bookings', 'Branding'],
  },
];

const WHATSAPP_NUMBER = '27638680612';
const WHATSAPP_MESSAGE = encodeURIComponent("Hi Jaxy†Ralis, I'm interested in getting a website built for my business. Can we chat?");
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function App() {
  const [view, setView] = useState<View>('home');
  const [activePortfolio, setActivePortfolio] = useState<PortfolioItem | null>(null);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openPortfolioDetail = (item: PortfolioItem) => {
    setActivePortfolio(item);
    setView('portfolio-detail');
    window.scrollTo(0, 0);
  };

  const goHome = () => {
    setView('home');
    setActivePortfolio(null);
    window.scrollTo(0, 0);
  };

  if (view === 'portfolio-detail' && activePortfolio) {
    return (
      <div className="min-h-screen bg-black text-white">
        {/* Back bar */}
        <div className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-blue-900/40">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
            <button
              onClick={goHome}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              <ChevronLeft className="w-5 h-5" />
              Back to Portfolio
            </button>
            <span className="text-gray-600">/</span>
            <span className="text-gray-300 text-sm">{activePortfolio.title}</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {activePortfolio.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-blue-900/40 border border-blue-700/50 rounded-full text-blue-300 text-xs font-medium tracking-wide">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{activePortfolio.title}</h1>
            <p className="text-gray-400 text-lg leading-relaxed">{activePortfolio.description}</p>
            <a
              href={activePortfolio.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-semibold transition-all hover:scale-105"
            >
              <Globe className="w-4 h-4" />
              Visit Live Site
            </a>
          </div>

          {/* Screenshots */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-blue-300 border-b border-blue-900/40 pb-3">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activePortfolio.images.map((img, i) => (
                <div
                  key={i}
                  className="relative group rounded-xl overflow-hidden border border-blue-900/30 cursor-zoom-in"
                  onClick={() => setLightboxImg(img)}
                >
                  <img
                    src={img}
                    alt={`${activePortfolio.title} screenshot ${i + 1}`}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 rounded-full p-3">
                      <Image className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              ))}
              {/* Additional Queen Fab screenshots from provided images */}
              <div
                className="relative group rounded-xl overflow-hidden border border-blue-900/30 cursor-zoom-in"
                onClick={() => setLightboxImg(heroImg)}
              >
                <img
                  src={heroImg}
                  alt="Development work example"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 rounded-full p-3">
                    <Image className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-900/30 to-black border border-blue-800/40 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Want something like this?</h3>
            <p className="text-gray-400 mb-6">Let's discuss your project and build something tailored to your business.</p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 rounded-xl text-white font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-green-900/30"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Lightbox */}
        {lightboxImg && (
          <div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightboxImg(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
              onClick={() => setLightboxImg(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={lightboxImg}
              alt="Full view"
              className="max-w-full max-h-[90vh] object-contain rounded-xl"
              onClick={e => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black text-blue-400 select-none" style={{ fontFamily: 'Georgia, serif' }}>†</span>
            <div>
              <span className="font-bold text-white text-lg tracking-tight">Jaxy's CodeCraft</span>
              <span className="font-bold text-blue-400 text-lg"> Studios</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a>
            <a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</a>
            <a href="#maintenance" className="hover:text-blue-400 transition-colors">Maintenance</a>
            <a href="#payment" className="hover:text-blue-400 transition-colors">Payment</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-semibold transition-all hover:scale-105 text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            Get a Quote
          </a>
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-current transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-current transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-current transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-blue-900/30 px-4 py-4 space-y-3">
            {['services','pricing','portfolio','maintenance','payment','contact'].map(s => (
              <a
                key={s}
                href={`#${s}`}
                className="block py-2 text-gray-300 hover:text-blue-400 capitalize transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {s}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-3 px-5 py-3 bg-blue-600 rounded-lg text-white font-semibold justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <MessageCircle className="w-4 h-4" />
              Get a Quote
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
        </div>
        {/* Animated grid overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(59,130,246,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-20">
          {/* Logo mark */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-600/20 border border-blue-500/40 mb-8 backdrop-blur-sm">
            <span className="text-5xl font-black text-blue-400" style={{ fontFamily: 'Georgia, serif' }}>†</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900/30 border border-blue-700/40 rounded-full text-blue-300 text-sm font-medium mb-6">
            <Code2 className="w-3.5 h-3.5" />
            Web Developer & Digital Builder
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Jaxy<span className="text-blue-400">†</span>Ralis
          </h1>
          <p className="text-xl md:text-2xl text-blue-300 font-semibold mb-4">
            Jaxys's CodeCraft Studios
          </p>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            I build modern, mobile-friendly websites that are fast, professional, and tailored to your business — helping customers find you, trust you, and choose you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 rounded-xl text-white font-bold text-lg transition-all hover:scale-105 shadow-2xl shadow-green-900/40"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Me Now
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600/20 border border-blue-500/50 hover:bg-blue-600/30 rounded-xl text-blue-300 font-bold text-lg transition-all hover:scale-105"
            >
              View Pricing
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl mx-auto">
            {[
              { value: 'R250', label: 'Starting Price' },
              { value: '100%', label: 'Mobile-Friendly' },
              { value: '†', label: 'Custom Logos' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-black text-blue-400">{s.value}</div>
                <div className="text-gray-500 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-500/40 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-blue-400 rounded-full" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-900/30 border border-blue-700/40 rounded-full text-blue-400 text-xs font-semibold uppercase tracking-widest mb-5">
                About Me
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Your Business Deserves to Be Online
              </h2>
              <p className="text-gray-400 leading-relaxed mb-5">
                Hi, I'm <span className="text-white font-semibold">Jaxy Ralis</span> from <span className="text-blue-400 font-semibold">Jaxys's CodeCraft Studios</span>. I noticed that many businesses still don't have a website — and they're missing out on customers every single day.
              </p>
              <p className="text-gray-400 leading-relaxed mb-5">
                These days, customers search online before deciding where to shop or who to contact. A professional website helps people find your business, see your services, view your contact details, and build trust before they even call.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Whether you need a simple page with your services and contact information, or something more advanced with bookings or online payments — I can help. I'd be happy to discuss what you're looking for and provide a <span className="text-blue-400 font-semibold">no-obligation quote</span>.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: Globe, title: 'Custom Websites', desc: 'Built specifically for your brand and goals' },
                { icon: Smartphone, title: 'Mobile-Friendly', desc: 'Looks perfect on all devices' },
                { icon: Palette, title: 'Custom Logos', desc: 'Unique logos designed for your brand identity' },
                { icon: Zap, title: 'Fast & Reliable', desc: 'Optimized performance and secure hosting' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4 p-4 rounded-xl bg-blue-950/20 border border-blue-900/30 hover:border-blue-700/50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{title}</div>
                    <div className="text-gray-500 text-sm">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-4 bg-blue-950/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-900/30 border border-blue-700/40 rounded-full text-blue-400 text-xs font-semibold uppercase tracking-widest mb-5">
              What I Offer
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Services & Features</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Everything your business needs to succeed online, built with precision and care.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: 'Business Websites', desc: 'A professional online presence with your services, about info, contact details, and branding — everything customers need to choose you.' },
              { icon: Palette, title: 'Custom Logos', desc: 'A unique logo designed to represent your business and make your brand instantly recognisable.' },
              { icon: ShoppingCart, title: 'E-Commerce Stores', desc: 'Sell products online with a catalog, shopping cart, secure checkout, and order management.' },
              { icon: Calendar, title: 'Booking Systems', desc: 'Let customers book appointments or services directly through your website, with automated availability and confirmations.' },
              { icon: CreditCard, title: 'Online Payments', desc: 'Accept card payments, EFT, or other payment methods securely integrated into your site.' },
              { icon: Search, title: 'SEO Foundations', desc: 'Search-engine-friendly structure, meta tags, and content guidance so customers can find you on Google.' },
              { icon: Smartphone, title: 'Mobile-Friendly Design', desc: 'Every site is built to look and work beautifully on phones, tablets, and desktops.' },
              { icon: Zap, title: 'Fast Performance', desc: 'Optimized code, images, and hosting setup so your pages load quickly and rank better.' },
              { icon: Shield, title: 'Secure & Reliable', desc: 'SSL certificates, secure forms, and reliable hosting so your site stays safe and available.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-2xl bg-black border border-blue-900/30 hover:border-blue-600/50 transition-all hover:-translate-y-1 group">
                <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-700/30 flex items-center justify-center mb-4 group-hover:bg-blue-600/25 transition-colors">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-900/30 border border-blue-700/40 rounded-full text-blue-400 text-xs font-semibold uppercase tracking-widest mb-5">
              Transparent Pricing
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Choose Your Plan</h2>
            <p className="text-gray-400 max-w-xl mx-auto">No hidden fees. No surprises. Just honest pricing for quality work.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic */}
            <div className="relative rounded-2xl bg-black border border-blue-900/40 p-8 flex flex-col">
              <div className="mb-6">
                <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-2">Basic</p>
                <div className="text-4xl font-black text-white">R250</div>
                <p className="text-gray-500 text-sm mt-2">No Maintenance Included</p>
              </div>
              <div className="space-y-3 flex-1 mb-8">
                {[
                  'Business Website',
                  'Professional Online Presence',
                  'Services & Contact Info',
                  'Custom Logo Design',
                  'Secure & Reliable (SSL)',
                  'Mobile-Friendly Design',
                  'Branding & About Info',
                ].map(f => (
                  <div key={f} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400 text-sm">{f}</span>
                  </div>
                ))}
                {[
                  'Online Payments',
                  'Booking System',
                  'SEO Foundations',
                ].map(f => (
                  <div key={f} className="flex items-start gap-3 opacity-30">
                    <X className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{f}</span>
                  </div>
                ))}
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-3 rounded-xl border border-blue-600 text-blue-400 font-semibold hover:bg-blue-600 hover:text-white transition-all"
              >
                Get Started
              </a>
            </div>

            {/* Premium */}
            <div className="relative rounded-2xl bg-gradient-to-b from-blue-950/60 to-black border-2 border-blue-500 p-8 flex flex-col shadow-2xl shadow-blue-900/30">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1.5 bg-blue-600 rounded-full text-white text-xs font-bold tracking-wide flex items-center gap-1">
                  <Star className="w-3 h-3" /> POPULAR
                </span>
              </div>
              <div className="mb-6">
                <p className="text-blue-300 font-semibold text-sm uppercase tracking-widest mb-2">Premium</p>
                <div className="text-4xl font-black text-white">R500</div>
                <p className="text-blue-400 text-sm mt-2 font-medium">+ 1 Month Maintenance Included</p>
              </div>
              <div className="space-y-3 flex-1 mb-8">
                {[
                  'Everything in Basic',
                  'E-Commerce Store',
                  'Online Payments (Card, EFT)',
                  'Custom Logo Design',
                  'SEO Foundations',
                  'Secure & Reliable (SSL)',
                  'Mobile-Friendly Design',
                  'Fast Performance',
                ].map(f => (
                  <div key={f} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{f}</span>
                  </div>
                ))}
                {['Booking System'].map(f => (
                  <div key={f} className="flex items-start gap-3 opacity-30">
                    <X className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{f}</span>
                  </div>
                ))}
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all hover:scale-105"
              >
                Get Started
              </a>
            </div>

            {/* Professional */}
            <div className="relative rounded-2xl bg-black border border-blue-900/40 p-8 flex flex-col">
              <div className="mb-6">
                <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-2">Professional</p>
                <div className="text-4xl font-black text-white">R1 000</div>
                <p className="text-gray-500 text-sm mt-2">+ 3 Months Maintenance Included</p>
              </div>
              <div className="space-y-3 flex-1 mb-8">
                {[
                  'Everything in Premium',
                  'Full E-Commerce Store',
                  'Booking System',
                  'Automated Confirmations',
                  'Advanced Online Payments',
                  'Custom Logo Design',
                  'SEO Foundations',
                  'Mobile-Friendly Design',
                  'Fast Performance',
                  'Secure & Reliable (SSL)',
                ].map(f => (
                  <div key={f} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400 text-sm">{f}</span>
                  </div>
                ))}
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-3 rounded-xl border border-blue-600 text-blue-400 font-semibold hover:bg-blue-600 hover:text-white transition-all"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MAINTENANCE */}
      <section id="maintenance" className="py-24 px-4 bg-blue-950/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-900/30 border border-blue-700/40 rounded-full text-blue-400 text-xs font-semibold uppercase tracking-widest mb-5">
              After Launch
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Website Maintenance & Editing</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Keep your website up-to-date, secure, and running smoothly with ongoing maintenance plans.</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { period: '2 Weeks', price: 'R50', desc: 'Quick fixes and minor updates' },
              { period: '1 Month', price: 'R110', desc: 'Regular edits and content updates' },
              { period: '3 Months', price: 'R210', desc: 'Best value — ongoing support & changes', highlight: true },
            ].map(({ period, price, desc, highlight }) => (
              <div key={period} className={`p-6 rounded-2xl border text-center transition-all hover:-translate-y-1 ${highlight ? 'bg-blue-950/40 border-blue-500/60 shadow-lg shadow-blue-900/20' : 'bg-black border-blue-900/30'}`}>
                <Wrench className={`w-8 h-8 mx-auto mb-4 ${highlight ? 'text-blue-400' : 'text-blue-600'}`} />
                <div className="text-3xl font-black text-white mb-1">{price}</div>
                <div className={`font-bold mb-2 ${highlight ? 'text-blue-300' : 'text-gray-400'}`}>{period}</div>
                <div className="text-gray-500 text-sm">{desc}</div>
                {highlight && (
                  <div className="mt-3 inline-block px-3 py-1 bg-blue-600/20 border border-blue-600/40 rounded-full text-blue-400 text-xs font-medium">
                    Best Value
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-900/30 border border-blue-700/40 rounded-full text-blue-400 text-xs font-semibold uppercase tracking-widest mb-5">
              My Work
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Previous Projects</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Real websites I've built for real businesses. Click to explore each project.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolioItems.map(item => (
              <div
                key={item.id}
                className="group rounded-2xl bg-black border border-blue-900/30 hover:border-blue-600/60 overflow-hidden cursor-pointer transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20"
                onClick={() => openPortfolioDetail(item)}
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold flex items-center gap-2">
                      <Image className="w-4 h-4" />
                      View Project
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 bg-blue-900/30 border border-blue-800/40 rounded-full text-blue-400 text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1 transition-colors"
                      onClick={e => e.stopPropagation()}
                    >
                      <Globe className="w-3.5 h-3.5" />
                      Visit Live Site
                    </a>
                    <span className="text-gray-600 text-sm group-hover:text-blue-400 transition-colors flex items-center gap-1">
                      View Details <ChevronLeft className="w-4 h-4 rotate-180" />
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Python / Tech work card */}
            <div className="group rounded-2xl bg-black border border-blue-900/30 hover:border-blue-600/60 overflow-hidden transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20"
              onClick={() => setLightboxImg(heroImg)}
              style={{ cursor: 'zoom-in' }}
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={heroImg}
                  alt="Development work"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold flex items-center gap-2">
                    <Image className="w-4 h-4" />
                    View Full Image
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {['Python', 'Backend', 'Development'].map(tag => (
                    <span key={tag} className="px-2 py-0.5 bg-blue-900/30 border border-blue-800/40 rounded-full text-blue-400 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-white font-bold text-xl mb-2">Technical Development Work</h3>
                <p className="text-gray-500 text-sm">Advanced coding capabilities spanning web development, Python scripting, and modern web technologies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAYMENT */}
      <section id="payment" className="py-24 px-4 bg-blue-950/10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-900/30 border border-blue-700/40 rounded-full text-blue-400 text-xs font-semibold uppercase tracking-widest mb-5">
              Payment Details
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Banking Information</h2>
            <p className="text-gray-400 max-w-lg mx-auto">Make your payment via EFT and send proof of payment via WhatsApp to confirm your order.</p>
          </div>

          <div className="rounded-2xl bg-black border border-blue-800/40 overflow-hidden">
            <div className="p-2 bg-gradient-to-r from-blue-900/40 to-blue-950/40">
              <div className="flex items-center gap-3 px-4 py-3">
                <CreditCard className="w-5 h-5 text-blue-400" />
                <span className="font-bold text-white">Capitec Bank — EFT Transfer</span>
              </div>
            </div>
            <div className="p-8 space-y-5">
              {[
                { label: 'Card Holder', value: 'MR GB RALINALA' },
                { label: 'Account Number', value: '2362766612' },
                { label: 'Bank', value: 'CAPITEC' },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between py-4 border-b border-blue-900/20 last:border-0">
                  <span className="text-gray-500 text-sm">{label}</span>
                  <span className="text-white font-bold tracking-wide">{value}</span>
                </div>
              ))}
            </div>
            <div className="mx-8 mb-8 p-4 rounded-xl bg-green-900/20 border border-green-700/30 flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-green-300 font-semibold text-sm">Send Proof of Payment via WhatsApp</p>
                <p className="text-gray-500 text-sm mt-1">After making your payment, please send your proof of payment screenshot to <span className="text-white font-medium">0638680612</span> on WhatsApp to confirm your order.</p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 text-green-400 hover:text-green-300 text-sm font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Open WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/30 via-black to-blue-950/30 pointer-events-none" />
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="text-5xl font-black text-blue-400 mb-4" style={{ fontFamily: 'Georgia, serif' }}>†</div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Get Your Website?</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Contact me today for a free, no-obligation quote. Let's build something great together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 rounded-xl text-white font-bold text-lg transition-all hover:scale-105 shadow-2xl shadow-green-900/30 justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp: 063 868 0612
            </a>
            <a
              href="mailto:ralisjaxy@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600/20 border border-blue-500/50 hover:bg-blue-600/30 rounded-xl text-blue-300 font-bold text-lg transition-all hover:scale-105 justify-center"
            >
              <Mail className="w-5 h-5" />
              ralisjaxy@gmail.com
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 text-left max-w-lg mx-auto">
            <div className="p-4 rounded-xl bg-black/60 border border-blue-900/30 flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <div>
                <div className="text-xs text-gray-500 mb-0.5">Phone / WhatsApp</div>
                <div className="text-white font-semibold">063 868 0612</div>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-black/60 border border-blue-900/30 flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <div>
                <div className="text-xs text-gray-500 mb-0.5">Email</div>
                <div className="text-white font-semibold text-sm">ralisjaxy@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-blue-900/30 py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black text-blue-400" style={{ fontFamily: 'Georgia, serif' }}>†</span>
            <span className="text-gray-400 text-sm">Jaxys's CodeCraft Studios</span>
          </div>
          <div className="text-gray-600 text-sm text-center">
            &copy; {new Date().getFullYear()} Jaxy†Ralis — Jaxys's CodeCraft Studios. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-400 transition-colors">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="mailto:ralisjaxy@gmail.com" className="text-gray-500 hover:text-blue-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
            onClick={() => setLightboxImg(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightboxImg}
            alt="Full view"
            className="max-w-full max-h-[90vh] object-contain rounded-xl"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
