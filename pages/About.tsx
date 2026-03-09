import React from 'react';
import { BIO_TEXT, PHILOSOPHY_TEXT } from '../constants';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6 md:px-24 py-12 md:py-24 pt-[calc(57px+3rem)]">
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Korbinian Enzinger (Dipl.-Ing.)</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-24">
        {/* Profile Image */}
        <div>
          <img 
            src="https://storage.googleapis.com/mutualism-media/about/KorbinianEnzinger02.webp" 
            alt="Korbinian Enzinger" 
            className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>

        {/* Bio Text */}
        <div className="flex flex-col justify-center">
          {BIO_TEXT.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="text-lg mb-6 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="max-w-4xl mx-auto border-t-[1px] border-main-dark pt-12">
        {PHILOSOPHY_TEXT.split('\n\n').map((paragraph, idx) => (
          <p key={idx} className="text-lg md:text-xl mb-8 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default About;
