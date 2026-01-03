
import React, { useState } from 'react';
import { Translations } from './types';

interface RsvpFormProps {
  t: Translations;
}

const RsvpForm: React.FC<RsvpFormProps> = ({ t }) => {
  const [hasPlusOne, setHasPlusOne] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-8 md:p-12 text-left">
      <h2 className="text-3xl playfair text-[#BFAE90] text-center mb-8">{t.rsvpTitle}</h2>
      <hr className="mb-10 border-gray-100" />
      
      <form action="https://formspree.io/f/xdkqreya" method="POST" className="space-y-6">
        
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block font-bold text-[#BFAE90] text-sm tracking-wide uppercase">
              {t.firstName}
            </label>
            <input 
              type="text" 
              name="Ad" 
              required 
              placeholder={t.namePlaceholder}
              className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#A1B5C1] focus:border-transparent outline-none transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="block font-bold text-[#BFAE90] text-sm tracking-wide uppercase">
              {t.lastName}
            </label>
            <input 
              type="text" 
              name="Soyad" 
              required 
              placeholder={t.lastNamePlaceholder}
              className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#A1B5C1] focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>

        {/* Participation Status */}
        <div className="space-y-3">
          <label className="block font-bold text-[#BFAE90] text-sm tracking-wide uppercase">
            {t.participationStatus}
          </label>
          <div className="flex flex-col sm:flex-row gap-4">
            <label className="flex items-center gap-2 cursor-pointer bg-gray-50 p-3 rounded-lg border border-gray-200 flex-1 hover:border-[#A1B5C1] transition-colors">
              <input type="radio" name="Katilim" value="Evet" required className="accent-[#A1B5C1] w-5 h-5" />
              <span className="text-gray-700">{t.accept}</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer bg-gray-50 p-3 rounded-lg border border-gray-200 flex-1 hover:border-[#A1B5C1] transition-colors">
              <input type="radio" name="Katilim" value="Hayir" className="accent-[#A1B5C1] w-5 h-5" />
              <span className="text-gray-700">{t.decline}</span>
            </label>
          </div>
        </div>

        {/* Meal Choice */}
        <div className="space-y-2">
          <label className="block font-bold text-[#BFAE90] text-sm tracking-wide uppercase">
            {t.mealPreference}
          </label>
          <select 
            name="Yemek Tercihi" 
            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#A1B5C1] outline-none appearance-none"
          >
            <option value="Standart">{t.standardMenu}</option>
            <option value="Vejetaryen">{t.vegetarian}</option>
            <option value="Vegan">{t.vegan}</option>
          </select>
        </div>

        <hr className="my-10 border-gray-100" />

        {/* Plus One Logic */}
        <div className="space-y-3">
          <label className="block font-bold text-[#BFAE90] text-sm tracking-wide uppercase">
            {t.plusOneQuestion}
          </label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                name="Misafir Var mi" 
                value="Evet" 
                onChange={() => setHasPlusOne(true)}
                className="accent-[#A1B5C1] w-5 h-5" 
              />
              <span className="text-gray-700">{t.yes}</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                name="Misafir Var mi" 
                value="Hayir" 
                defaultChecked 
                onChange={() => setHasPlusOne(false)}
                className="accent-[#A1B5C1] w-5 h-5" 
              />
              <span className="text-gray-700">{t.no}</span>
            </label>
          </div>
        </div>

        {/* Dynamic Plus One Section */}
        {hasPlusOne && (
          <div className="p-6 bg-blue-50/50 rounded-xl border-l-4 border-[#A1B5C1] space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="space-y-2">
              <label className="block font-bold text-[#A1B5C1] text-xs uppercase tracking-widest">
                {t.plusOneName}
              </label>
              <input 
                type="text" 
                name="Misafir Ismi" 
                placeholder={t.guestNamePlaceholder}
                className="w-full p-4 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#A1B5C1] outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="block font-bold text-[#A1B5C1] text-xs uppercase tracking-widest">
                {t.plusOneMeal}
              </label>
              <select 
                name="Misafir Yemek Tercihi" 
                className="w-full p-4 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#A1B5C1] outline-none"
              >
                <option value="Standart">{t.standardMenu}</option>
                <option value="Vejetaryen">{t.vegetarian}</option>
                <option value="Vegan">{t.vegan}</option>
              </select>
            </div>
          </div>
        )}

        {/* Notes */}
        <div className="space-y-2">
          <label className="block font-bold text-[#BFAE90] text-sm tracking-wide uppercase">
            {t.notes}
          </label>
          <textarea 
            name="Mesaj" 
            rows={4} 
            placeholder={t.notesPlaceholder}
            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#A1B5C1] outline-none resize-none transition-all"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full bg-[#A1B5C1] text-white py-5 rounded-lg text-lg font-bold tracking-widest uppercase hover:bg-[#8fa3af] transition-all transform active:scale-[0.98] shadow-lg hover:shadow-[#A1B5C1]/40"
        >
          {t.submitButton}
        </button>
      </form>
    </div>
  );
};

export default RsvpForm;
