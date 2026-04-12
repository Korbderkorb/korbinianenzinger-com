import React, { useEffect, useCallback, useState } from 'react';

interface LightboxProps {
  isOpen: boolean;
  images: { src: string; alt?: string }[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Small delay to allow mounting before transition
      requestAnimationFrame(() => setIsVisible(true));
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;
    
    switch (e.key) {
      case 'Escape':
        onClose();
        break;
      case 'ArrowRight':
        onNext();
        break;
      case 'ArrowLeft':
        onPrev();
        break;
    }
  }, [isOpen, onClose, onNext, onPrev]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    // Prevent scrolling when lightbox is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [handleKeyDown, isOpen]);

  if (!isOpen && !isVisible) return null;

  const currentImage = images[currentIndex];

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-black bg-opacity-90 flex items-center justify-center backdrop-blur-sm transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-gray-300 focus:outline-none z-50 p-2"
        aria-label="Close lightbox"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      {/* Prev Button */}
      <button 
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 focus:outline-none p-4 z-50 transition-transform active:scale-95"
        aria-label="Previous image"
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      {/* Next Button */}
      <button 
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 focus:outline-none p-4 z-50 transition-transform active:scale-95"
        aria-label="Next image"
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      {/* Main Image */}
      <div 
        className="relative w-full h-full flex items-center justify-center p-4 md:p-20"
        onClick={onClose} // Click outside image to close
      >
        {currentImage && (
          <>
            <img 
              src={currentImage.src} 
              alt={currentImage.alt || 'Gallery image'} 
              className="max-w-full max-h-full object-contain shadow-2xl cursor-default block"
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking image
            />
            {currentImage.alt && (
              <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none">
                <p className="inline-block text-white text-sm md:text-base drop-shadow-md">
                  {currentImage.alt}
                </p>
              </div>
            )}
          </>
        )}
      </div>

      {/* Counter */}
      <div className="absolute top-6 left-6 text-white/80 text-sm font-mono">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default Lightbox;