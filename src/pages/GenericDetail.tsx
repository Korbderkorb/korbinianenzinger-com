import React, { useState, useMemo } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { FEATURED_PROJECTS, BLOG_POSTS } from '../constants';
import { ContentBlock } from '../types';
import AnimatedLine from '../components/AnimatedLine';
import Lightbox from '../components/Lightbox';

interface GenericDetailProps {
  type: 'project' | 'blog';
  forceDetail?: boolean;
}

interface ContentRendererProps {
  block: ContentBlock;
  onImageClick: (src: string) => void;
}

const ContentRenderer: React.FC<ContentRendererProps> = ({ block, onImageClick }) => {
  switch (block.type) {
    case 'text':
      return (
        <div className="my-8 md:columns-2 gap-12">
          {block.content?.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="text-lg leading-relaxed mb-6 break-inside-avoid-column">
              {paragraph}
            </p>
          ))}
        </div>
      );
    case 'image':
      return (
        <div className="w-full my-12 group cursor-pointer" onClick={() => block.src && onImageClick(block.src)}>
          <img 
            src={block.src} 
            alt={block.alt || ''} 
            className="w-full h-auto object-cover transition-opacity duration-300 group-hover:opacity-90 block" 
          />
          {block.content && <p className="text-sm mt-2 text-gray-600">{block.content}</p>}
        </div>
      );
    case 'grid-2-col':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-12">
          {block.items?.map((item, idx) => (
            <div key={idx} className="w-full">
              {item.type === 'image' && (
                <div 
                  className="cursor-pointer group"
                  onClick={() => item.src && onImageClick(item.src)}
                >
                  <img 
                    src={item.src} 
                    alt={item.alt || ''} 
                    className="w-full h-auto object-cover transition-opacity duration-300 group-hover:opacity-90 block" 
                  />
                </div>
              )}
              {item.type === 'text' && (
                <div className="h-full flex flex-col justify-center">
                  <p className="text-lg leading-relaxed whitespace-pre-line">{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      );
    case 'blockquote':
      return (
        <blockquote className="my-12 pl-6 border-l-[3px] border-gray-200">
          <p className="text-xl italic leading-relaxed whitespace-pre-line">{block.content}</p>
        </blockquote>
      );
    case 'video':
      return (
        <div className="w-full my-12">
          {/* Standard video container */}
          <div className="aspect-video w-full relative bg-black">
             {block.src?.endsWith('.mp4') ? (
                <video 
                  src={block.src} 
                  className="absolute inset-0 w-full h-full object-contain"
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                />
             ) : (
                <iframe 
                  src={block.src} 
                  title="Video content"
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
             )}
          </div>
        </div>
      );
    case 'link-button':
      return (
        <div className="flex justify-center my-12">
          <a 
            href={block.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="border-[1px] border-main-dark px-8 py-3 text-lg font-medium hover:bg-main-dark hover:text-main-light transition-colors uppercase"
          >
            {block.label}
          </a>
        </div>
      );
    case 'gallery':
      return (
        <div className="my-24">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold pb-4 inline-block">Gallery</h2>
            <AnimatedLine type="horizontal" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {block.items?.map((item, idx) => (
              <div 
                key={idx} 
                className="aspect-square relative overflow-hidden group cursor-pointer"
                onClick={() => item.src && onImageClick(item.src)}
              >
                <img 
                  src={item.src} 
                  alt={item.alt || `Gallery item ${idx}`} 
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500 block"
                />
              </div>
            ))}
          </div>
        </div>
      );
    default:
      return null;
  }
};

const GenericDetail: React.FC<GenericDetailProps> = ({ type, forceDetail = false }) => {
  const { id } = useParams<{ id: string }>();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const location = useLocation();
  
  const item = type === 'project' 
    ? FEATURED_PROJECTS.find(p => p.id === id)
    : BLOG_POSTS.find(b => b.id === id);

  // Check if we should show the intro video view
  const showIntro = !forceDetail && item?.hasIntro && item?.introVideoUrl;

  // Collect all images from the item for the lightbox
  const lightboxImages = useMemo(() => {
    if (!item) return [];
    
    const images: { src: string; alt?: string }[] = [];
    
    // Add main banner image first
    if (item.imageUrl) {
      images.push({ src: item.imageUrl, alt: item.title });
    }

    // Traverse content blocks to find images
    item.content.forEach(block => {
      if (block.type === 'image' && block.src) {
        images.push({ src: block.src, alt: block.alt });
      }
      if ((block.type === 'grid-2-col' || block.type === 'gallery') && block.items) {
        block.items.forEach(subItem => {
          if (subItem.type === 'image' && subItem.src) {
            images.push({ src: subItem.src, alt: subItem.alt });
          }
        });
      }
    });

    return images;
  }, [item]);

  const openLightbox = (src: string) => {
    const index = lightboxImages.findIndex(img => img.src === src);
    if (index !== -1) {
      setCurrentImageIndex(index);
      setLightboxOpen(true);
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % lightboxImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
  };

  if (!item) {
    return (
      <div className="container mx-auto px-6 py-24 text-center mt-[57px]">
        <h2 className="text-4xl mb-4">Item not found</h2>
        <Link to="/" className="text-blue-600 underline">Go Home</Link>
      </div>
    );
  }

  // Render Fullscreen Intro Video
  if (showIntro) {
    return (
      <div className="fixed inset-0 z-40 bg-black">
        <div className="relative w-full h-full pt-[57px]">
          <video 
            src={item.introVideoUrl}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute bottom-12 right-12">
            <Link 
              to={`/blog/${id}/details`}
              className="border-[1px] border-white text-white px-8 py-3 text-lg font-medium hover:bg-white hover:text-black transition-colors uppercase bg-transparent"
            >
              Dive Deeper..
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-main-light pb-24">
      {/* Full Width Banner - Exact top margin to eliminate gap */}
      <div 
        className="w-full mt-[57px] relative group cursor-pointer"
        onClick={() => openLightbox(item.imageUrl)}
      >
        {/* Constrain height by ratio to avoid it becoming too tall */}
        <div className="w-full aspect-[21/9] max-h-[60vh]">
          <img 
            src={item.imageUrl} 
            alt={item.title} 
            className="w-full h-full object-cover block" 
          />
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-24">
        {/* Main Content Wrapper - No animated frame here */}
        <div className="relative mt-12 mb-24 px-6 md:px-12 py-12">
          
          {/* Header Info - Consolidated */}
          <div className="relative mb-12">
            <span className="block text-sm uppercase tracking-wider bg-main-dark text-main-light px-2 py-1 mb-4 w-fit">
              {item.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{item.title}</h1>
            
            {/* Combined Subtitle and Date - Smaller */}
            <div className="mt-6 text-sm font-light text-gray-600">
              <p className="mb-1 uppercase tracking-wide">{item.date}</p>
              {item.subtitle && (
                <div className="whitespace-pre-line leading-relaxed">
                  {item.subtitle}
                </div>
              )}
            </div>
          </div>

          {/* Dynamic Content */}
          <div className="content-blocks">
            {item.content && item.content.map((block, idx) => (
              <ContentRenderer 
                key={idx} 
                block={block} 
                onImageClick={openLightbox}
              />
            ))}
          </div>

          {/* Credits - Elegant Layout */}
          {item.credits && (
            <div className="max-w-4xl mx-auto mt-24 relative">
              <div className="absolute top-0 left-0 w-full">
                <AnimatedLine type="horizontal" />
              </div>
              
              <div className="py-8 flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                <div className="md:w-1/4">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-main-dark">Credits</h3>
                </div>
                <div className="md:w-3/4">
                  <p className="whitespace-pre-line leading-loose text-sm md:text-base font-light text-gray-800">
                    {item.credits}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full">
                <AnimatedLine type="horizontal" />
              </div>
            </div>
          )}
        </div>
        
        {/* Navigation */}
        <div className="mb-24 pt-12 relative flex justify-between">
          <div className="absolute top-0 left-0 w-full opacity-30">
             <AnimatedLine type="horizontal" />
          </div>
          <Link to={type === 'project' ? '/projects' : '/blog'} className="text-lg hover:underline font-medium">
            &larr; Back to {type === 'project' ? 'Projects' : 'Blog'}
          </Link>
        </div>
      </div>

      <Lightbox 
        isOpen={lightboxOpen}
        images={lightboxImages}
        currentIndex={currentImageIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  );
};

export default GenericDetail;