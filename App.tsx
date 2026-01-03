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

  // Using a relative path starting with ./ is crucial for GitHub Pages subdirectories like /wedding/
  const mainImageUrl = "./IMG-20251214-WA0060~2.jpg";

  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Sticky Controls Container */}
      <div className="fixed top-4 right-4 z-50 flex flex-col items-end">
        <LanguageToggle currentLang={lang} onToggle={setLang} />
        <Menu t={t} />
      </div>

      <Hero title={t.title} date={t.date} />

      {/* Main Content */}
      <main className="w-full max-w-2xl px-4 -mt-12 mb-20 relative z-10">
        <div className="flex flex-col gap-20">
          
          {/* Main Photo Wrapper */}
          <div className="w-full bg-white p-2 rounded-2xl shadow-xl border-8 border-white overflow-hidden">
            <img 
              src={mainImageUrl} 
              alt="Emel & Onur" 
              className="w-full h-auto rounded-xl object-cover aspect-[4/3] md:aspect-video"
              onError={(e) => {
                // Fallback in case there is a typo in the repo filename (IMG vs MG)
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

          {/* Schedule Section */}
          <section id="schedule" className="text-center scroll-mt-24">
             <div className="inline-block p-4 mb-4 rounded-full bg-gold-light/10 text-gold">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl text-gold playfair mb-10">{t.scheduleTitle}</h2>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
              
              {/* Arrival */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#A1B5C1] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <span className="text-xs font-bold">13:30</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-slate-100 bg-white shadow-sm text-left">
                  <h3 className="font-bold text-gray-800">{t.arrivalTitle}</h3>
                  <p className="text-sm text-gray-500">{t.arrivalText}</p>
                </div>
              </div>

              {/* Ceremony */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#BFAE90] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <span className="text-xs font-bold">14:00</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-slate-100 bg-white shadow-sm text-left">
                  <h3 className="font-bold text-gray-800">{t.ceremonyTitle}</h3>
                  <p className="text-sm text-gray-500">Zürich Stadthaus</p>
                </div>
              </div>

              {/* Celebration */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#A1B5C1] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <span className="text-xs font-bold">16:00</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-slate-100 bg-white shadow-sm text-left">
                  <h3 className="font-bold text-gray-800">{t.celebrationTitle}</h3>
                  <p className="text-sm text-gray-500">Kulturhaus Villa Sträuli</p>
                </div>
              </div>

            </div>
          </section>

          {/* Location Section */}
          <section id="location" className="text-center scroll-mt-24">
            <div className="inline-block p-4 mb-4 rounded-full bg-blue-50 text-[#A1B5C1]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <h2 className="text-3xl text-gold playfair mb-8">{t.locationTitle}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Zurich Venue */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between text-left">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{t.venueZurichTitle}</h3>
                  <p className="text-gray-500 mb-6 text-sm">{t.venueZurichAddress}</p>
                </div>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Stadthausquai+17+8001+Zürich" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-sm font-bold text-[#A1B5C1] hover:text-[#8fa3af] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  {t.viewOnMaps}
                </a>
              </div>

              {/* Winterthur Venue */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between text-left">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{t.venueWinterthurTitle}</h3>
                  <p className="text-gray-500 mb-6 text-sm">{t.venueWinterthurAddress}</p>
                </div>
                <a 
                  href="https://www.google.com/maps/place/Kulturhaus+Villa+Sträuli/@47.5016989,8.7239641,17z/data=!3m2!4b1!5s0x479a9982bd34f091:0xe2299d477b01c8e5!4m6!3m5!1s0x479a99b207b31019:0x1cb2b27b6d5a610e!8m2!3d47.501699!4d8.728835!16s%2Fg%2F1tgnl0xk?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-sm font-bold text-[#A1B5C1] hover:text-[#8fa3af] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  {t.viewOnMaps}
                </a>
              </div>
            </div>

            {/* Transport Advice Section */}
            <div className="p-8 bg-blue-50/30 rounded-3xl border border-blue-100 text-left">
              <h3 className="text-xl font-bold text-[#A1B5C1] mb-4 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
                </svg>
                {t.transportTitle}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm italic">
                {t.transportText}
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                 <a 
                   href="https://www.sbb.ch/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="px-4 py-2 bg-white border border-[#A1B5C1] text-[#A1B5C1] rounded-full text-xs font-bold hover:bg-[#A1B5C1] hover:text-white transition-all shadow-sm"
                 >
                   SBB.ch
                 </a>
              </div>
            </div>
          </section>

          {/* Attractions Section */}
          <section id="attractions" className="text-center scroll-mt-24">
            <div className="inline-block p-4 mb-4 rounded-full bg-gold-light/10 text-gold">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </div>
            <h2 className="text-3xl text-gold playfair mb-8">{t.attractionsTitle}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {/* Zurich Suggestions */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-[#A1B5C1] mb-4 border-b border-gray-50 pb-2">{t.zurichTitle}</h3>
                <ul className="space-y-3">
                  {t.zurichAttractions.map((item, idx) => (
                    <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                      <span className="text-[#BFAE90]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Winterthur Suggestions */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-[#A1B5C1] mb-4 border-b border-gray-50 pb-2">{t.winterthurTitle}</h3>
                <ul className="space-y-3">
                  {t.winterthurAttractions.map((item, idx) => (
                    <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                      <span className="text-[#BFAE90]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Food Section */}
            <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-100 text-left">
               <h3 className="text-lg font-bold text-[#BFAE90] mb-3 flex items-center gap-2">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.856.12-1.685.344-2.47" />
                 </svg>
                 {t.eatTitle}
               </h3>
               <div className="text-gray-600 text-sm space-y-4">
                 <p>
                   {lang === 'TR' 
                     ? 'İsviçre denince akla gelen klasik lezzetleri mutlaka deneyin: ' 
                     : 'Don\'t miss out on these essential Swiss classics: '}
                   <span className="font-bold text-gray-800">Fondue</span>, 
                   <span className="font-bold text-gray-800"> Raclette</span>, 
                   <span className="font-bold text-gray-800"> Rösti</span>
                   {lang === 'TR' ? ' ve meşhur İsviçre peynirleri.' : ' and of course, famous Swiss cheeses.'}
                 </p>
                 <p>
                   {lang === 'TR' 
                     ? 'Çikolata severler için ' 
                     : 'For chocolate lovers, a visit to '}
                   <span className="font-bold text-mountain">Läderach</span> 
                   {lang === 'TR' ? ' veya ' : ' or '}
                   <span className="font-bold text-mountain">Sprüngli</span> 
                   {lang === 'TR' 
                     ? ' (meşhur Luxemburgerli makaronları ile) butikleri tatlı bir mola için idealdir.' 
                     : ' (try their famous Luxemburgerli macarons) boutiques is a must for a sweet break.'}
                 </p>
               </div>
            </div>
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
