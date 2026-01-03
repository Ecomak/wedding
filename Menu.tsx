
import React, { useState } from 'react';
import { Translations } from './types';

interface MenuProps {
  t: Translations;
}

const Menu: React.FC<MenuProps> = ({ t }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col items-end gap-2 mt-2">
      <button 
        onClick={toggleMenu}
        className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg border border-gray-100 text-[#A1B5C1] focus:outline-none transition-transform active:scale-95"
        aria-label="Menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          )}
        </svg>
      </button>

      {isOpen && (
        <nav className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 min-w-[180px] animate-in fade-in zoom-in-95 duration-200">
          <ul className="flex flex-col gap-2">
            <li>
              <button 
                onClick={() => scrollTo('location')}
                className="w-full text-right px-4 py-2 text-gray-600 hover:text-[#A1B5C1] hover:bg-gray-50 rounded-lg transition-colors font-medium"
              >
                {t.menuLocation}
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollTo('attractions')}
                className="w-full text-right px-4 py-2 text-gray-600 hover:text-[#A1B5C1] hover:bg-gray-50 rounded-lg transition-colors font-medium"
              >
                {t.menuAttractions}
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollTo('rsvp')}
                className="w-full text-right px-4 py-2 text-gray-600 hover:text-[#A1B5C1] hover:bg-gray-50 rounded-lg transition-colors font-medium"
              >
                {t.menuRsvp}
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Menu;
