
import React from 'react';
import { Language } from './types';

interface LanguageToggleProps {
  currentLang: Language;
  onToggle: (lang: Language) => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ currentLang, onToggle }) => {
  return (
    <div className="flex bg-white rounded-full shadow-lg border border-gray-100 overflow-hidden">
      <button 
        onClick={() => onToggle('TR')}
        className={`px-4 py-2 text-sm font-bold transition-colors ${currentLang === 'TR' ? 'bg-[#A1B5C1] text-white' : 'text-gray-500 hover:bg-gray-50'}`}
      >
        TR
      </button>
      <button 
        onClick={() => onToggle('EN')}
        className={`px-4 py-2 text-sm font-bold transition-colors ${currentLang === 'EN' ? 'bg-[#A1B5C1] text-white' : 'text-gray-500 hover:bg-gray-50'}`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;
