import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  Instagram,
  MapPin,
  Menu,
  Phone,
  Scissors,
  Sparkles,
  X,
} from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    category: 'Wigs',
    eyebrow: 'Hair artistry',
    items: [
      { name: 'Wig installation', price: 'R250' },
      { name: 'Customisation', price: 'R100' },
      { name: 'Install + styling', price: 'R300' },
      { name: 'Wig treatment', price: 'R200' },
    ],
  },
  {
    category: 'Make-up',
    eyebrow: 'Your signature beat',
    items: [
      { name: 'Full face beat', price: 'R350' },
      { name: 'Light face beat', price: 'R250' },
    ],
  },
];

const benefits = ['Excellent service', 'Guaranteed results', 'A look made for you'];

const WHATSAPP_LINK =
  'https://wa.me/27670009252?text=' +
  encodeURIComponent("Hi Lee's Beauty Lounge, I'd like to book an appointment.");

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Lee's Beauty Lounge home">
          <span className="brand-mark">L</span>
          <span className="brand-copy">
            <strong>LEE’S</strong>
            <span>Beauty Lounge</span>
          </span>
        </a>

        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <nav className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#about" onClick={closeMenu}>About us</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href={WHATSAPP_LINK} target="_blank" rel="noreferrer" onClick={closeMenu}><Phone size={15} /> Book now</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-content">
            <p className="kicker"><Sparkles size={15} /> Beauty, styled your way</p>
            <h1>Come for the<br /><em>glow.</em> Stay for<br />the confidence.</h1>
            <p className="hero-text">A beauty salon with excellent service and guaranteed results that we provide. Your next signature look starts here.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#services">Explore services <ArrowRight size={17} /></a>
              <a className="text-link" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">WhatsApp 067 000 9252 <ArrowRight size={16} /></a>
            </div>
            <div className="hero-note"><span className="note-dot" /> Serving Atteridgeville and surrounds</div>
          </div>

          <div className="hero-visual" aria-label="Lee's Beauty Lounge lookbook">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="image-frame image-main"><img src="/images/image.png" alt="Lee's Beauty Lounge beauty looks" /></div>
            <div className="image-tag"><span>01</span><span>Lookbook</span></div>
            <div className="floating-card"><Scissors size={17} /><span>Wigs<br /><b>& make-up</b></span></div>
          </div>
        </section>

        <section className="promise-strip" id="about">
          <div className="section-pad promise-inner">
            <p className="section-label">The Lee’s experience</p>
            <div className="promise-intro"><h2>Beautiful looks.<br /><em>Beautifully done.</em></h2><p>We bring the details, the care, and the finishing touch that makes you feel like your best self.</p></div>
            <div className="benefits">{benefits.map((benefit, index) => <div className="benefit" key={benefit}><span>0{index + 1}</span><Check size={17} /> <strong>{benefit}</strong></div>)}</div>
          </div>
        </section>

        <section className="services-section section-pad" id="services">
          <div className="section-heading"><div><p className="section-label">Our services</p><h2>Choose your<br /><em>signature look.</em></h2></div><p className="heading-copy">From a fresh install to a flawless face beat, every appointment is finished with intention.</p></div>
          <div className="service-grid">{services.map((service, index) => <article className={index === 0 ? 'service-card featured-card' : 'service-card'} key={service.category}><div className="card-top"><span className="service-number">0{index + 1}</span><span className="service-eyebrow">{service.eyebrow}</span></div><h3>{service.category}</h3><div className="service-list">{service.items.map((item) => <div className="service-row" key={item.name}><span>{item.name}</span><strong>{item.price}</strong></div>)}</div><a className="card-link" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">Book this service <ArrowRight size={15} /></a></article>)}</div>
          <div className="booking-banner"><div><p className="section-label">Ready when you are</p><h3>Let’s create your next look.</h3></div><a className="button button-pink" href={WHATSAPP_LINK} target="_blank" rel="noreferrer"><CalendarDays size={17} /> Book an appointment</a></div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-pad contact-grid"><div><p className="section-label">Visit the lounge</p><h2>Your beauty<br /><em>moment awaits.</em></h2><p className="contact-copy">Drop us a call to secure your appointment. We can’t wait to welcome you.</p><a className="button button-light" href={WHATSAPP_LINK} target="_blank" rel="noreferrer"><Phone size={17} /> WhatsApp 067 000 9252</a></div><div className="contact-details"><div className="detail"><span className="detail-icon"><MapPin size={18} /></span><div><small>Find us</small><p>58 3rd Avenue Extension 7<br />Atteridgeville, 0008</p></div></div><div className="detail"><span className="detail-icon"><Instagram size={18} /></span><div><small>Follow the looks</small><a href="https://instagram.com/lee'sbeautylounge" target="_blank" rel="noreferrer">@lee’sbeautylounge</a></div></div><div className="detail"><span className="detail-icon"><Clock3 size={18} /></span><div><small>Appointments</small><p>By booking only</p></div></div></div></div>
        </section>
      </main>

      <footer className="footer section-pad"><a className="brand" href="#top"><span className="brand-mark">L</span><span className="brand-copy"><strong>LEE’S</strong><span>Beauty Lounge</span></span></a><p>Beauty that feels like you.</p><span>© 2024 Lee’s Beauty Lounge</span></footer>
    </div>
  );
}

export default App;
