
import React, { useState } from 'react';
import { TRANSLATIONS } from './constants';
import { Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('tr');
  const [showPlusOne, setShowPlusOne] = useState<boolean>(false);
  
  const t = TRANSLATIONS[lang];

  const toggleLanguage = () => {
    setLang(prev => (prev === 'tr' ? 'en' : 'tr'));
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50">
        <button 
          onClick={toggleLanguage}
          className="bg-white/80 backdrop-blur-sm border border-slate-200 px-4 py-2 rounded-full shadow-sm text-sm font-bold text-mountain hover:shadow-md transition-all uppercase tracking-widest"
        >
          {lang === 'tr' ? 'EN' : 'TR'}
        </button>
      </div>

      {/* Header */}
      <header 
        className="w-full h-[450px] flex flex-col items-center justify-center text-center px-4"
        style={{
          background: "linear-gradient(rgba(161, 181, 193, 0.25), rgba(161, 181, 193, 0.25)), url('https://images.unsplash.com/photo-1519225495806-7d5d754720f3?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <h1 className="font-serif text-5xl md:text-7xl text-gold mb-4 drop-shadow-sm">
          {t.names}
        </h1>
        <p className="text-gold tracking-[0.25em] text-sm md:text-lg font-light uppercase">
          {t.date}
        </p>
      </header>

      {/* Main Photo Area */}
      <div className="relative -mt-16 md:-mt-24 px-4 w-full max-w-[700px]">
        <img 
          src="IMG-20251214-WA0060~2.jpg" 
          alt="Emel & Onur" 
          className="w-full h-auto rounded-2xl shadow-2xl border-[10px] border-white object-cover aspect-[4/3]"
          onError={(e) => {
            // Fallback if local image is missing in the preview environment
            (e.currentTarget as HTMLImageElement).src = 'https://picsum.photos/seed/wedding/1400/1050';
          }}
        />
      </div>

      {/* Intro Section */}
      <section className="py-20 px-6 max-w-xl text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-gold mb-6">{t.welcomeHeader}</h2>
        <p className="text-slate-600 leading-relaxed text-lg">
          {t.welcomeText}
        </p>
      </section>

      {/* RSVP Section */}
      <section className="w-full max-w-2xl px-6 pb-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12">
          <h2 className="font-serif text-3xl text-gold text-center mb-4">{t.rsvpTitle}</h2>
          <div className="w-20 h-px bg-slate-200 mx-auto mb-10" />

          <form action="https://formspree.io/f/xdkqreya" method="POST" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-gold font-bold text-sm tracking-wide uppercase">{t.firstNameLabel}</label>
                <input 
                  type="text" 
                  name="Ad" 
                  required 
                  placeholder={t.firstNamePlaceholder}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-mountain/20 focus:border-mountain outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-gold font-bold text-sm tracking-wide uppercase">{t.lastNameLabel}</label>
                <input 
                  type="text" 
                  name="Soyad" 
                  required 
                  placeholder={t.lastNamePlaceholder}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-mountain/20 focus:border-mountain outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-gold font-bold text-sm tracking-wide uppercase">{t.attendanceLabel}</label>
              <div className="flex flex-wrap gap-6 mt-2">
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <input type="radio" name="Katilim" value="Evet" required className="w-4 h-4 text-mountain focus:ring-mountain accent-mountain" />
                  <span className="text-slate-700 group-hover:text-mountain transition-colors">{t.attendanceYes}</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <input type="radio" name="Katilim" value="Hayir" className="w-4 h-4 text-mountain focus:ring-mountain accent-mountain" />
                  <span className="text-slate-700 group-hover:text-mountain transition-colors">{t.attendanceNo}</span>
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-gold font-bold text-sm tracking-wide uppercase">{t.foodPreferenceLabel}</label>
              <select 
                name="Yemek Tercihi"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-mountain/20 focus:border-mountain outline-none transition-all appearance-none cursor-pointer"
              >
                <option value="Standart">{t.foodStandard}</option>
                <option value="Vejetaryen">{t.foodVeggie}</option>
                <option value="Vegan">{t.foodVegan}</option>
              </select>
            </div>

            <div className="w-full h-px bg-slate-100 my-8" />

            <div className="space-y-3">
              <label className="block text-gold font-bold text-sm tracking-wide uppercase">{t.plusOneLabel}</label>
              <div className="flex flex-wrap gap-6 mt-2">
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <input 
                    type="radio" 
                    name="Misafir Var mi" 
                    value="Evet" 
                    onChange={() => setShowPlusOne(true)}
                    className="w-4 h-4 text-mountain focus:ring-mountain accent-mountain" 
                  />
                  <span className="text-slate-700 group-hover:text-mountain transition-colors">{t.plusOneYes}</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <input 
                    type="radio" 
                    name="Misafir Var mi" 
                    value="Hayir" 
                    defaultChecked 
                    onChange={() => setShowPlusOne(false)}
                    className="w-4 h-4 text-mountain focus:ring-mountain accent-mountain" 
                  />
                  <span className="text-slate-700 group-hover:text-mountain transition-colors">{t.plusOneNo}</span>
                </label>
              </div>
            </div>

            {showPlusOne && (
              <div className="p-6 bg-slate-50 rounded-xl border-l-4 border-mountain space-y-6 animate-in slide-in-from-top-4 duration-300">
                <div className="space-y-2">
                  <label className="block text-gold font-bold text-sm tracking-wide uppercase">{t.plusOneGuestName}</label>
                  <input 
                    type="text" 
                    name="Misafir Ismi" 
                    placeholder={t.plusOneGuestNamePlaceholder}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-mountain/20 focus:border-mountain outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-gold font-bold text-sm tracking-wide uppercase">{t.plusOneGuestFood}</label>
                  <select 
                    name="Misafir Yemek Tercihi"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-mountain/20 focus:border-mountain outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="Standart">{t.foodStandard}</option>
                    <option value="Vejetaryen">{t.foodVeggie}</option>
                    <option value="Vegan">{t.foodVegan}</option>
                  </select>
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="block text-gold font-bold text-sm tracking-wide uppercase">{t.notesLabel}</label>
              <textarea 
                name="Mesaj" 
                rows={3} 
                placeholder={t.notesPlaceholder}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-mountain/20 focus:border-mountain outline-none transition-all resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-mountain text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-mountain/20 hover:scale-[1.01] transition-all tracking-widest uppercase mt-6"
            >
              {t.submitButton}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 border-t border-slate-100 text-center">
        <p className="italic text-slate-400 font-light">
          {t.footerText}
        </p>
      </footer>
    </div>
  );
};

export default App;
