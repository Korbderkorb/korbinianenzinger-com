import React from 'react';
import { Link } from 'react-router-dom';
import { FEATURED_PROJECTS, BLOG_POSTS } from '../constants';
import ProjectCard from '../components/ProjectCard';
import AnimatedLine from '../components/AnimatedLine';
import CornerCross from '../components/CornerCross';

const Home: React.FC = () => {
  // Take only first 2 projects for home page display as per original layout
  const homeProjects = FEATURED_PROJECTS.slice(0, 2);
  const homeBlogs = BLOG_POSTS.slice(0, 4);

  return (
    <div className="flex flex-col pt-[57px]">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 md:px-24 pt-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-[100em] items-stretch">
          {/* Image Column */}
          <div className="w-full relative group overflow-hidden">
            <div className="absolute inset-0 bg-main-light z-10 transition-transform duration-1000 ease-out transform translate-x-full"></div>
            {/* Aspect ratio 1920x2880 is 2:3. No grayscale effect. */}
            <div className="aspect-[2/3] w-full relative">
              <img 
                src="https://storage.googleapis.com/mutualism-media/hydromorphology-01.webp" 
                alt="Hydromorphology Hero" 
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 block"
              />
              {/* Corner Crosses for Hero Image */}
              <CornerCross position="top-left" className="opacity-0 group-hover:opacity-100 scale-75" />
              <CornerCross position="top-right" className="opacity-0 group-hover:opacity-100 scale-75" />
              <CornerCross position="bottom-left" className="opacity-0 group-hover:opacity-100 scale-75" />
              <CornerCross position="bottom-right" className="opacity-0 group-hover:opacity-100 scale-75" />
            </div>
          </div>
          
          {/* Text Column - Aligned to edges */}
          <div className="flex flex-col justify-between h-full py-1">
            <div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-medium mb-2">Mutualism</h1>
              <p className="text-sm md:text-base mb-12 font-light">by Korbinian Enzinger</p>
            </div>
            <div className="mt-8">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight">
                Designing<br/>
                symbiotic<br/>
                relationships<br/>
                between human<br/>
                and non-human
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative flex flex-col md:flex-row">
        <div className="absolute top-0 left-0 w-full">
          <AnimatedLine type="horizontal" />
        </div>
        
        {/* Sticky Vertical Header for Desktop */}
        <div className="hidden md:flex w-24 relative flex-shrink-0">
          <div className="absolute top-0 right-0 h-full">
            <AnimatedLine type="vertical" />
          </div>
          <div className="sticky top-24 h-screen w-full flex items-start justify-center pt-24">
            <h2 className="text-4xl md:text-5xl font-normal uppercase tracking-widest -rotate-90 whitespace-nowrap origin-center translate-y-24">
              Projects
            </h2>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden p-6 border-b-[1px] border-main-dark">
          <h2 className="text-5xl font-normal uppercase tracking-widest">Projects</h2>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 md:p-24 bg-main-light">
          {/* Updated grid gap-y to 12 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-24 gap-y-12 mb-24">
            {homeProjects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                category={project.category}
                date={project.date}
                imageUrl={project.imageUrl}
                linkPrefix="projects"
                aspectRatio="aspect-[1080/1616]"
              >
                {/* Corner Crosses for each image on hover */}
                <CornerCross position="top-left" className="opacity-0 group-hover:opacity-100 scale-75" />
                <CornerCross position="top-right" className="opacity-0 group-hover:opacity-100 scale-75" />
                <CornerCross position="bottom-left" className="opacity-0 group-hover:opacity-100 scale-75" />
                <CornerCross position="bottom-right" className="opacity-0 group-hover:opacity-100 scale-75" />
              </ProjectCard>
            ))}
          </div>
          
          <div className="flex justify-end">
            <Link 
              to="/projects" 
              className="border-[1px] border-main-dark px-8 py-3 text-lg font-medium hover:bg-main-dark hover:text-main-light transition-colors"
            >
              More Work
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="relative flex flex-col md:flex-row">
        <div className="absolute top-0 left-0 w-full">
          <AnimatedLine type="horizontal" />
        </div>

        {/* Sticky Vertical Header for Desktop */}
        <div className="hidden md:flex w-24 relative flex-shrink-0">
           <div className="absolute top-0 right-0 h-full">
            <AnimatedLine type="vertical" />
          </div>
           <div className="sticky top-24 h-screen w-full flex items-start justify-center pt-24">
            <h2 className="text-4xl md:text-5xl font-normal uppercase tracking-widest -rotate-90 whitespace-nowrap origin-center translate-y-12">
              Blog
            </h2>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden p-6 border-b-[1px] border-main-dark">
          <h2 className="text-5xl font-normal uppercase tracking-widest">Blog</h2>
        </div>

        <div className="flex-1 p-6 md:p-24 bg-main-light">
          {/* Updated grid gap-y to 12 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-24 gap-y-12 mb-24">
            {homeBlogs.map((blog) => (
              <ProjectCard
                key={blog.id}
                id={blog.id}
                title={blog.title}
                category={blog.category}
                date={blog.date}
                imageUrl={blog.imageUrl}
                linkPrefix="blog"
                aspectRatio="aspect-video"
              >
                {/* Corner Crosses for each image on hover */}
                <CornerCross position="top-left" className="opacity-0 group-hover:opacity-100 scale-75" />
                <CornerCross position="top-right" className="opacity-0 group-hover:opacity-100 scale-75" />
                <CornerCross position="bottom-left" className="opacity-0 group-hover:opacity-100 scale-75" />
                <CornerCross position="bottom-right" className="opacity-0 group-hover:opacity-100 scale-75" />
              </ProjectCard>
            ))}
          </div>

          <div className="flex justify-end">
            <Link 
              to="/blog" 
              className="border-[1px] border-main-dark px-8 py-3 text-lg font-medium hover:bg-main-dark hover:text-main-light transition-colors"
            >
              More Blogs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
