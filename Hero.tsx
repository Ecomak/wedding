
import React from 'react';

interface HeroProps {
  title: string;
  date: string;
}

const Hero: React.FC<HeroProps> = ({ title, date }) => {
  return (
    <header 
      className="w-full h-[60vh] flex flex-col items-center justify-center relative bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `linear-gradient(rgba(161, 181, 193, 0.15), rgba(161, 181, 193, 0.15)), url('https://images.unsplash.com/photo-1519225495806-7d5d754720f3?auto=format&fit=crop&w=1600&q=80')` }}
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-[#BFAE90] playfair mb-4 drop-shadow-sm">
          {title}
        </h1>
        <p className="text-lg md:text-xl tracking-[0.3em] text-[#BFAE90] font-light">
          {date}
        </p>
      </div>
    </header>
  );
};

export default Hero;
