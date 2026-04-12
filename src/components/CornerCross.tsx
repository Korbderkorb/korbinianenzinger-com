import React from 'react';

interface CornerCrossProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}

const CornerCross: React.FC<CornerCrossProps> = ({ position, className = '' }) => {
  const baseClass = "absolute w-3 h-3 transition-opacity duration-300 pointer-events-none z-20";
  const lineClass = "absolute bg-main-dark";
  
  let posStyles = {};
  let transformClass = "";

  switch(position) {
    case 'top-left': 
      posStyles = { top: '0', left: '0' }; 
      transformClass = "-translate-x-1/2 -translate-y-1/2";
      break;
    case 'top-right': 
      posStyles = { top: '0', right: '0' }; 
      transformClass = "translate-x-1/2 -translate-y-1/2";
      break;
    case 'bottom-left': 
      posStyles = { bottom: '0', left: '0' }; 
      transformClass = "-translate-x-1/2 translate-y-1/2";
      break;
    case 'bottom-right': 
      posStyles = { bottom: '0', right: '0' }; 
      transformClass = "translate-x-1/2 translate-y-1/2";
      break;
  }

  return (
    <div style={posStyles} className={`${baseClass} ${transformClass} ${className}`}>
      {/* Horizontal line of the cross */}
      <div className={`${lineClass} top-1/2 left-0 w-full h-px -translate-y-1/2`}></div>
      {/* Vertical line of the cross */}
      <div className={`${lineClass} left-1/2 top-0 h-full w-px -translate-x-1/2`}></div>
    </div>
  );
};

export default CornerCross;