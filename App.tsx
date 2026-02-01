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

          {/* Location Section */}
          <section id="location" className="text-center scroll-mt-24">
            <div className="inline-block p-4 mb-4 rounded-full bg-blue-50 text-[#A1B5C1]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <h2 className="text-3xl text-gold playfair mb-8">{t.locationTitle}</h2>
            
            <div className="flex justify-center mb-12 px-4">
              {/* Winterthur Venue */}
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between text-left w-full max-w-md">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{t.venueWinterthurTitle}</h3>
                  <p className="text-gray-500 mb-6 text-sm">{t.venueWinterthurAddress}</p>
                </div>
                <a 
                  href="https://maps.google.com/?q=Kulturhaus+Villa+Sträuli+Winterthur" 
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
