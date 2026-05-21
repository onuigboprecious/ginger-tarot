import { useEffect, useState } from 'react';
import logo from './assets/logo.svg';

const servicesData = [
  {
    id: 'tarot',
    icon: 'style',
    iconColor: 'text-tertiary',
    title: 'Tarot Reading',
    content: 'Tarot reading is one of the oldest and most popular divinatory arts. Tarot is not “telling your fortune.” Tarot is an amazing way to verify information, gives much needed insight into your inner self, and brings new awareness about life circumstances.\n\nTarot reading involves using 78 cards that have predetermined meanings; it is the reader’s connection with the cards and intuition that ensures the correct cards are pulled. The tarot can answer virtually any question one may have.',
    linkText: 'Explore Tarot',
    bgClass: 'glass-card border border-tertiary/20'
  },
  {
    id: 'pendulum',
    icon: 'pending',
    iconColor: 'text-secondary',
    title: 'Pendulum Dowsing',
    content: 'Pendulum dowsing is one of the simplest divinatory arts. A pendulum is a weighted object on a string used to channel energy via electromagnetic impulses from the aether. Dowsing can be amazing way to verify information.\n\nPendulum dowsing works best with questions that can be answered yes, no, or undetermined. Be advised, the future is not set in stone, divination will give the most likely future outcome based on current circumstances. Timelines change frequently, all future readings should be taken as a possibility, not a guarantee.\n\nPendulum dowsing results will be sent via personalized video. I film the entire session start to finish. Live readings are also available.',
    linkText: 'Explore Dowsing',
    bgClass: 'bg-surface-container-high'
  },
  {
    id: 'book',
    icon: 'storefront',
    iconColor: 'text-mystic-purple',
    title: 'Book a Reading',
    content: 'Readings are available through Etsy. To purchase a reading visit the link below. Reading results are sent via in depth personalized video within 24 hours of finalizing your questions. Live video readings and/or chats are also available.',
    linkText: 'Visit Etsy Shop',
    isEtsy: true,
    bgClass: 'bg-gradient-to-r from-surface-container-high to-surface-container border border-white/5'
  }
];

function App() {
  const images = ['/slider1.png', '/slider2.png', '/slider3.png'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  const nextService = () => setCurrentServiceIndex((prev) => (prev + 1) % servicesData.length);
  const prevService = () => setCurrentServiceIndex((prev) => (prev - 1 + servicesData.length) % servicesData.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const glow = document.querySelector('.celestial-glow');
      if (glow) {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        glow.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(79, 70, 229, 0.15) 0%, transparent 70%)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="font-body-md text-body-md">
      {/* TopAppBar */}
      <header className="bg-surface-container-lowest/80 backdrop-blur-xl text-secondary dark:text-secondary docked full-width top-0 sticky z-50 border-b border-white/5 shadow-[0_8px_32px_rgba(79,70,229,0.15)]">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto h-20">
          <div className="flex items-center">
            <img src={logo} alt="Renegade Readings" className="h-8 md:h-10 w-auto" />
          </div>
          <nav className="hidden md:flex gap-8 items-center">

          </nav>
          <a href="https://www.etsy.com/shop/RenegadeReadings?ref=profile_header" target="_blank" rel="noopener noreferrer" className="bg-mystic-purple text-white px-4 py-1.5 md:px-6 md:py-2 rounded-full font-label-sm text-xs md:text-label-sm hover:scale-95 transition-all duration-200 shadow-lg shadow-mystic-purple/20 whitespace-nowrap inline-flex items-center justify-center">
            Book Now
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-12 md:pt-20">
          <div className="absolute inset-0 celestial-glow z-0"></div>
          <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter relative z-10">
            <div className="md:col-span-6 flex flex-col justify-center space-y-8">
              <h1 className="font-display-lg text-display-lg md:leading-[1.1] leading-[1.2] text-on-surface">
                We Are Exactly Where We Are Meant To Be.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
                Ancient wisdom meets contemporary clarity. Navigate your path with the guidance of an intuitive empath.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#services" className="bg-mystic-purple text-white px-6 py-2 rounded-full font-label-sm text-label-sm hover:scale-95 transition-all duration-200 shadow-lg shadow-mystic-purple/20 inline-flex items-center justify-center">
                  Get Clarity!
                </a>
              </div>
            </div>
            <div className="md:col-span-6 flex items-center justify-center mt-8 md:mt-0">
              <div
                className="relative w-full aspect-square max-w-xs md:max-w-lg pointer-events-none mix-blend-lighten"
                style={{
                  maskImage: 'radial-gradient(circle, black 30%, transparent 70%)',
                  WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 70%)'
                }}
              >
                {images.map((img, idx) => (
                  <img
                    key={img}
                    src={img}
                    alt={`Mystical reading image ${idx + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section (Ginger) */}
        <section className="py-12 md:py-24 bg-surface-container-lowest">
          <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                <img className="w-full aspect-[4/5] object-cover grayscale opacity-80" data-alt="A portrait of Ginger McLaughlin, a warm and intuitive woman with a serene expression, set against a dark atmospheric background with soft mystical lighting. The style is moody and professional, using a palette of deep navy and subtle gold accents to evoke a sense of spiritual authority and modern alchemy." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYdCXGLepGj9Ol1XDYcFbMkZFJ4_pfET7BGQprVB5znmxNB9PKCZ3T0tYCoCBR4-_rhzGZd7C1DMl2QPx8zdcjic_90C6kxgZ7m8xdiX86p_4W71WmjdSD80XAH19hnbCAVb-YKzRWP0RcZd_qknfYXoM-cx3sFj2Zf3_RaosPQeo1376srNCLd5rBMI58k9BoAAAxvXXd_llK_eeRK_SUzuunvPpkJ_MXwVMnw5JKxsbOpDw4ubijtPpY-ng8GU0KS6JyhO4g9DDW" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-void via-transparent to-transparent"></div>
              </div>
            </div>
            <div className="md:col-span-7 space-y-6">
              <span className="font-label-sm text-label-sm text-tertiary tracking-[0.2em] uppercase">The Guide</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Meet Ginger McLaughlin</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Renegade Readings is owned and operated by Ginger McLaughlin; an intuitive empath & certified spiritual life coach with 8 years experience performing divination, and emotional intelligence life coach.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Divination is an extremely helpful tool that can give one much needed insight into himself and reality. Ginger's approach combines deep spiritual intuition with the practical grounding of a certified coach.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="space-y-1">
                  <div className="font-display-lg text-headline-lg text-tertiary">8+</div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant uppercase">Years Experience</div>
                </div>
                <div className="space-y-1">
                  <div className="font-display-lg text-headline-lg text-tertiary">Certified</div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant uppercase">Spiritual Coach</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Bento Grid */}
        <section id="services" className="py-12 md:py-24">
          <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg mb-4">Mystical Services</h2>
              <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">Explore the tools of modern alchemy to uncover hidden truths and find your flow.</p>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem]">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentServiceIndex * 100}%)` }}
                >
                  {servicesData.map((svc) => (
                    <div key={svc.id} className="w-full flex-shrink-0 min-w-full md:p-4 p-2">
                      <div className={`bento-inner h-full rounded-3xl p-8 md:p-12 flex flex-col justify-between ${svc.bgClass}`}>
                        <div>
                          <span className={`material-symbols-outlined ${svc.iconColor} mb-6 text-4xl`} style={{ fontVariationSettings: "'FILL' 1" }}>{svc.icon}</span>
                          <h3 className="font-headline-lg text-headline-lg mb-6">{svc.title}</h3>
                          <div className="text-on-surface-variant font-body-md max-w-4xl space-y-4 whitespace-pre-wrap">
                            {svc.content}
                          </div>
                        </div>
                        <div className="pt-10">
                          {svc.isEtsy ? (
                            <a className="bg-mystic-purple text-white px-8 py-4 rounded-xl font-title-md inline-flex items-center gap-2 hover:scale-105 transition-all shadow-lg shadow-mystic-purple/20" href="https://www.etsy.com/shop/RenegadeReadings?ref=simple-shop-header-name&listing_id=1041852775" target="_blank" rel="noopener noreferrer">
                              {svc.linkText} <span className="material-symbols-outlined">open_in_new</span>
                            </a>
                          ) : (
                            <a className={`${svc.iconColor} font-title-md inline-flex items-center gap-2 hover:gap-4 transition-all`} href="https://www.etsy.com/shop/RenegadeReadings?ref=simple-shop-header-name&listing_id=1041852775" target="_blank" rel="noopener noreferrer">
                              {svc.linkText} <span className="material-symbols-outlined">arrow_forward</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slider Navigation */}
              <button
                onClick={prevService}
                className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-surface-container-highest border border-white/10 text-on-surface hover:bg-mystic-purple hover:border-mystic-purple transition-colors z-10 shadow-xl"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button
                onClick={nextService}
                className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-surface-container-highest border border-white/10 text-on-surface hover:bg-mystic-purple hover:border-mystic-purple transition-colors z-10 shadow-xl"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>

              {/* Slider Dots */}
              <div className="flex justify-center gap-3 mt-8">
                {servicesData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentServiceIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentServiceIndex ? 'bg-mystic-purple w-8' : 'bg-surface-variant hover:bg-outline'
                      }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Patreon Callout */}
        <section className="py-8 md:py-12">
          <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="bg-gradient-to-br from-tertiary-container to-deep-void rounded-[2rem] p-8 md:p-16 border border-tertiary/20 relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-10">
                <span className="material-symbols-outlined text-[300px]">stars</span>
              </div>
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 space-y-6">
                  <div className="inline-block bg-tertiary/10 text-tertiary px-4 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider">
                    Exclusive Offer
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface">Become a Patron</h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                    Join our inner circle on Patreon and receive <span className="text-tertiary font-bold text-headline-lg leading-none">30% OFF</span> all divination services plus one free tarot reading every single month.
                  </p>
                  <a className="inline-flex items-center gap-3 bg-tertiary text-on-tertiary px-8 py-4 rounded-xl font-title-md hover:scale-105 transition-transform shadow-xl shadow-tertiary/20" href="https://www.patreon.com/gingermcl">
                    <span className="material-symbols-outlined">stars</span>
                    Join the Circle
                  </a>
                </div>
                <div className="flex-shrink-0">
                  <div className="glass-card p-8 rounded-2xl border border-white/10 rotate-3">
                    <div className="text-center">
                      <div className="text-4xl font-display-lg text-tertiary mb-2">30% OFF</div>
                      <div className="text-on-surface-variant font-label-sm tracking-widest uppercase">Member Discount</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quotes / Testimonials Teaser */}
        <section className="py-12 md:py-24">
          <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              <div className="p-8 space-y-4 italic text-on-surface-variant font-display-lg text-title-md border-l border-tertiary/30">
                "Anything Is Possible, Certain Events Are More Probable."
              </div>
              <div className="p-8 space-y-4 italic text-on-surface-variant font-display-lg text-title-md border-l border-tertiary/30">
                "Live Without Expectation. Go With The Flow And See How Life Unfolds."
              </div>
              <div className="p-8 space-y-4 italic text-on-surface-variant font-display-lg text-title-md border-l border-tertiary/30">
                "There Is Only One You In This World. Embrace Yourself."
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest text-on-surface-variant full-width bottom-0 mt-12 md:mt-20 border-t border-outline-variant/20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop py-8 md:py-12 max-w-max-width mx-auto">
          <div className="md:col-span-4 space-y-6">
            <div className="font-display-lg text-title-md text-tertiary-fixed-dim">About Renegade Readings</div>
            <p className="font-body-sm text-body-sm pr-8 text-on-surface-variant/80 leading-relaxed">
              Renegade Readings is owned and operated by Ginger McLaughlin; an intuitive empath & certified spiritual life coach with 8 years experience performing divination, and emotional intelligence life coach. Divination is an extremely helpful tool that can give one much needed insight into himself and reality. Ginger is also a creator on Patreon. All Patrons receive 30% off divination services plus one free tarot reading per month. Visit <a href="https://www.patreon.com/gingermcl" target="_blank" rel="noopener noreferrer" className="text-tertiary hover:underline">this link</a> to become a patron.
            </p>

          </div>
          <div className="md:col-span-4 space-y-4 md:flex md:flex-col md:items-center">
            <div className="w-full md:w-auto">
              <div className="text-on-surface font-title-md mb-4">Readings</div>
              <ul className="space-y-2 font-label-sm text-label-sm">
                <li><a className="hover:text-secondary transition-colors" href="https://www.etsy.com/listing/1494648496/alchemy-reading-relationships?ls=r&sr_prefetch=1&pf_from=shop_home&ref=items-pagination-10&dd=1&content_source=a52f736504bf2c3a85ae873aa7a3c028%253ALT43f84122341e988702a08cfdda082373b119396e&logging_key=a52f736504bf2c3a85ae873aa7a3c028%3ALT43f84122341e988702a08cfdda082373b119396e">Alchemy Reading (Relationships) </a></li>
                <li><a className="hover:text-secondary transition-colors" href="https://www.etsy.com/listing/960301714/alchemy-reading-the-self?ls=r&sr_prefetch=1&pf_from=shop_home&ref=items-pagination-11&dd=1&content_source=a52f736504bf2c3a85ae873aa7a3c028%253ALT64cb23bc33ab1990646aa66a9cefd4c11e89eb79&logging_key=a52f736504bf2c3a85ae873aa7a3c028%3ALT64cb23bc33ab1990646aa66a9cefd4c11e89eb79">Alchemy Reading (The Self)</a></li>
                <li><a className="hover:text-secondary transition-colors" href="https://www.etsy.com/listing/1138084150/revamp-your-mindset-1-hr-session?ls=r&sr_prefetch=1&pf_from=shop_home&ref=items-pagination-14&dd=1&content_source=a52f736504bf2c3a85ae873aa7a3c028%253ALTfb3bdb0c81aa59eeb1610fd4b844bbb511627a29&logging_key=a52f736504bf2c3a85ae873aa7a3c028%3ALTfb3bdb0c81aa59eeb1610fd4b844bbb511627a29">Revamp your mindset - 1 hr session</a></li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-4 space-y-6 md:flex md:flex-col md:items-end md:text-right">
            <div className="w-full md:max-w-sm">
              <div className="text-on-surface font-title-md mb-4">Connect</div>
              <div className="flex gap-3 md:justify-end flex-wrap">
                {/* Facebook */}
                <a href="https://www.facebook.com/ginger.mclaughlin.1" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform shadow-md text-[#6A9EEB]">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                </a>
                {/* Instagram */}
                <a href="https://instagram.com/gingermcl332?utm_medium=copy_link" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform shadow-md text-[#6A9EEB]">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                </a>
                {/* Etsy */}
                <a href="https://www.etsy.com/shop/RenegadeReadings?ref=simple-shop-header-name&listing_id=1041852775" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform shadow-md text-[#6A9EEB]">
                  <span className="font-display-lg text-xl font-medium tracking-tight mt-[2px]">E</span>
                </a>
                {/* YouTube */}
                <a href="https://www.youtube.com/channel/UCpZXGHVq05v1hOcRmwkN_PQ" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform shadow-md text-[#6A9EEB]">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M21.582 6.186a2.66 2.66 0 00-1.87-1.884C18.062 3.86 12 3.86 12 3.86s-6.062 0-7.712.442a2.66 2.66 0 00-1.87 1.884C2 7.854 2 12 2 12s0 4.146.448 5.814a2.66 2.66 0 001.87 1.884C6.062 20.14 12 20.14 12 20.14s6.062 0 7.712-.442a2.66 2.66 0 001.87-1.884C22 16.146 22 12 22 12s0-4.146-.418-5.814zM9.9 15.424V8.576L15.9 12l-6 3.424z" /></svg>
                </a>
                {/* TikTok */}
                <a href="https://www.tiktok.com/@gingermcl332" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform shadow-md text-[#6A9EEB]">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.96-.5 3.96-1.69 5.51-1.35 1.75-3.56 2.89-5.83 3.06-2.28.18-4.66-.41-6.39-1.93-1.83-1.6-2.73-4.04-2.58-6.45.14-2.12 1.18-4.14 2.84-5.46 1.72-1.37 4.07-1.85 6.22-1.46v4.13c-.93-.19-1.92-.09-2.75.36-.88.48-1.52 1.34-1.74 2.32-.23.99-.04 2.06.51 2.89.56.84 1.48 1.42 2.49 1.55 1.05.13 2.14-.15 2.92-.81.82-.7 1.25-1.77 1.32-2.85V.02z" /></svg>
                </a>
                {/* Email */}
                <a href="mailto:gingermcl332@gmail.com" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform shadow-md text-[#6A9EEB]">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="md:col-span-12 pt-12 border-t border-outline-variant/10 text-center text-label-sm opacity-50">
            © 2026 Renegade Readings. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
