import React, { useState } from 'react';
import { TRANSLATIONS } from './constants';
import { Language } from './types';
import LanguageToggle from './LanguageToggle';
import Menu from './Menu';
import Hero from './Hero';
import RsvpForm from './RsvpForm';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('TR');
  const t = TRANSLATIONS[lang];

  const mainImageUrl = `${import.meta.env.BASE_URL}IMG-20251214-WA0060~2.jpg`;

  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Sticky Controls Container */}
      <div className="fixed top-4 right-4 z-50 flex flex-col items-end">
        <LanguageToggle currentLang={lang} onToggle={setLang} />
        <Menu t={t} />
      </div>

      <Hero title={t.title} date={t.date} />

      {/* Main Content */}
      <main className="w-full max-w-5xl px-4 -mt-12 mb-20 relative z-10">
        <div className="flex flex-col gap-20">
          
          {/* Main Photo Wrapper */}
          <div className="w-full bg-white p-2 rounded-2xl shadow-xl border-8 border-white overflow-hidden">
            <img 
              src={mainImageUrl} 
              alt="Emel & Onur" 
              className="w-full h-auto rounded-xl object-cover aspect-[4/3] md:aspect-video"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (!target.src.includes('MG-')) {
                   target.src = target.src.replace('IMG-', 'MG-');
                }
              }}
            />
          </div>

          {/* Welcome Section */}
          <section className="text-center pt-8">
            <h2 className="text-3xl md:text-4xl text-gold playfair mb-6">{t.welcomeTitle}</h2>
            <p className="text-lg leading-relaxed text-gray-600 max-w-xl mx-auto">
              {t.welcomeText}
            </p>
          </section>

          {/* Schedule Section - HIDDEN */}
          <section 
            id="schedule" 
            className="text-center scroll-mt-24 hidden" // <-- hidden now
          >
            <div className="inline-block p-4 mb-4 rounded-full bg-gold-light/10 text-gold">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl text-gold playfair mb-10">{t.scheduleTitle}</h2>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
              {/* Arrival, Celebration, Closing items here */}
            </div>
          </section>

          {/* Location Section */}
          <section id="location" className="text-center scroll-mt-24">
            {/* ...existing Location content... */}
          </section>

          {/* Attractions Section */}
          <section id="attractions" className="text-center scroll-mt-24">
            {/* ...existing Attractions content... */}
          </section>

          {/* RSVP Card */}
          <section id="rsvp" className="w-full scroll-mt-24">
            <RsvpForm t={t} />
          </section>

        </div>
      </main>

      <footer className="w-full py-12 border-t border-gray-100 text-center text-gray-400 italic">
        {t.footerText}
      </footer>
    </div>
  );
};

export default App;
