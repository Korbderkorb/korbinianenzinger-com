
import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      <footer id="contact" className="py-20 px-6 md:px-24 bg-main-light text-main-dark border-t-[1px] border-main-dark">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-7xl mb-12 font-light">Contact</h1>
          
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            <div className="md:w-1/2">
              <p className="text-lg md:text-xl leading-relaxed mb-8">
                If you are interested in my work or have questions about the research and techniques I use, please feel free to contact me at the following email:
                <br /><br />
                <a href="mailto:korbinian.enzinger@gmail.com" className="font-bold hover:underline">
                  korbinian.enzinger@gmail.com
                </a>
              </p>
            </div>
            
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-6">Follow me.</h3>
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                  aria-label="Instagram"
                >
                  {/* Placeholder SVG for Instagram */}
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      <div className="py-4 border-t-[1px] border-main-dark bg-main-light">
        <div className="container mx-auto px-6 md:px-24">
          <p className="text-sm">by Korbinian Enzinger</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
