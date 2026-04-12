import React, { useState } from 'react';
import { FEATURED_PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';
import AnimatedLine from '../components/AnimatedLine';
import CornerCross from '../components/CornerCross';

const Projects: React.FC = () => {
  const [verticalLinesTrigger, setVerticalLinesTrigger] = useState(false);

  return (
    <div className="container mx-auto px-6 md:px-24 py-12 md:py-24 pt-[calc(57px+3rem)]">
      
      {/* Wrapper with padding for the frame */}
      <div className="relative px-6 md:px-12 py-12 group/frame">
        
        {/* Animated Frame - Hidden on Mobile */}
        <div className="hidden md:block">
          {/* Top Horizontal Line */}
          <div className="absolute top-0 left-0 w-full">
            <AnimatedLine 
              type="horizontal" 
              delay={100} 
              onComplete={() => setVerticalLinesTrigger(true)}
            />
          </div>

          {/* Left Vertical Line */}
          <div className="absolute top-0 left-0 h-full">
            <AnimatedLine type="vertical" trigger={verticalLinesTrigger} />
          </div>

          {/* Right Vertical Line */}
          <div className="absolute top-0 right-0 h-full">
            <AnimatedLine type="vertical" trigger={verticalLinesTrigger} />
          </div>

          {/* Bottom Horizontal Line */}
          <div className="absolute bottom-0 left-0 w-full">
            <AnimatedLine type="horizontal" trigger={verticalLinesTrigger} />
          </div>

          {/* Corner Crosses for the main frame */}
          <CornerCross position="top-left" className="opacity-40 group-hover/frame:opacity-100" />
          <CornerCross position="top-right" className="opacity-40 group-hover/frame:opacity-100" />
          <CornerCross position="bottom-left" className="opacity-40 group-hover/frame:opacity-100" />
          <CornerCross position="bottom-right" className="opacity-40 group-hover/frame:opacity-100" />
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {FEATURED_PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              category={project.category}
              date={project.date}
              imageUrl={project.imageUrl}
              linkPrefix="projects"
              aspectRatio="aspect-[1920/2880]"
            >
              {/* Corner Crosses for each image on hover */}
              <CornerCross position="top-left" className="opacity-0 group-hover:opacity-100 scale-75" />
              <CornerCross position="top-right" className="opacity-0 group-hover:opacity-100 scale-75" />
              <CornerCross position="bottom-left" className="opacity-0 group-hover:opacity-100 scale-75" />
              <CornerCross position="bottom-right" className="opacity-0 group-hover:opacity-100 scale-75" />
            </ProjectCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;