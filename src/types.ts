export type ContentBlockType = 'text' | 'image' | 'video' | 'grid-2-col' | 'gallery' | 'blockquote' | 'spacer' | 'link-button';

export interface ContentBlock {
  type: ContentBlockType;
  content?: string; // For text, captions, blockquotes
  src?: string; // For images, videos
  alt?: string;
  items?: ContentBlock[]; // For grids, galleries
  url?: string; // For link buttons
  label?: string; // For link buttons
}

export interface Project {
  id: string;
  title: string;
  category: string;
  date: string;
  subtitle?: string; // For artist credits etc.
  description: string;
  imageUrl: string;
  content: ContentBlock[];
  credits?: string;
  // Intro properties
  hasIntro?: boolean;
  introVideoUrl?: string;
}

export interface BlogPost extends Project {} // Reusing same structure for now as they are very similar

export interface NavLink {
  label: string;
  path: string;
}