import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  date: string;
  imageUrl: string;
  linkPrefix: 'projects' | 'blog';
  aspectRatio?: string;
  children?: React.ReactNode; // To accept corner crosses or other overlays
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  id, 
  title, 
  category, 
  date, 
  imageUrl, 
  linkPrefix,
  aspectRatio = 'aspect-square',
  children
}) => {
  return (
    <div className="flex flex-col group relative">
      <Link to={`/${linkPrefix}/${id}`} className="block mb-4 relative">
        {/* Main Aspect Ratio Container - No Overflow Hidden Here to allow crosses to protrude */}
        <div className={`${aspectRatio} w-full relative`}>
          
          {/* Image Container - Handles Clipping for Zoom Effect */}
          <div className="absolute inset-0 overflow-hidden w-full h-full bg-gray-100">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
            />
          </div>

          {/* Overlays (Crosses) - Rendered outside the clipping container but inside the relative wrapper */}
          {children}
        </div>
      </Link>
      
      <div className="flex flex-col items-start">
        <span className="bg-main-dark text-main-light px-2 py-1 text-xs mb-2 uppercase tracking-wide">
          {category}
        </span>
        <h3 className="text-3xl font-bold mb-1 leading-tight">{title}</h3>
        <p className="text-gray-600 text-sm">{date}</p>
        <div className="w-full h-px bg-main-dark mt-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      </div>
    </div>
  );
};

export default ProjectCard;