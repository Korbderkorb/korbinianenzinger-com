import React, { useEffect, useRef, useState } from 'react';

interface AnimatedLineProps {
  type?: 'horizontal' | 'vertical';
  className?: string;
  delay?: number;
  trigger?: boolean; // New prop to control start
  onComplete?: () => void; // Callback when animation finishes
}

const AnimatedLine: React.FC<AnimatedLineProps> = ({ 
  type = 'horizontal', 
  className = '', 
  delay = 0,
  trigger = true,
  onComplete
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trigger) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            if (onComplete) {
              // Approximate duration of transition is 1500ms
              setTimeout(onComplete, 1500); 
            }
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay, trigger, onComplete]);

  const baseClasses = "bg-main-dark transition-all duration-[1500ms] ease-out";
  
  if (type === 'horizontal') {
    return (
      <div 
        ref={ref}
        className={`${baseClasses} h-px ${isVisible ? 'w-full' : 'w-0'} ${className}`}
      />
    );
  } else {
    return (
      <div 
        ref={ref}
        className={`${baseClasses} w-px ${isVisible ? 'h-full' : 'h-0'} ${className}`}
      />
    );
  }
};

export default AnimatedLine;