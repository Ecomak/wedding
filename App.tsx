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
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between text-left w-full max-w-md">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{t.venueWinterthurTitle}</h3>
                  <p className="text-gray-500 mb-6 text-sm">{t.venueWinterthurAddress}</p>
                </div>
                <a 
                  href="https://maps.google.com/?q=Kulturhaus+Villa+Sträuli+Winterthur" 
                  target="_blank" 
                  rel="noopener noreferrer"
