import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-[57px]">
      <h1 className="text-6xl md:text-9xl font-bold mb-4">404</h1>
      <h2 className="text-2xl md:text-4xl mb-8">Page Not Found</h2>
      <p className="text-xl mb-12 max-w-lg">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/" 
        className="border-2 border-main-dark px-8 py-3 text-lg font-medium hover:bg-main-dark hover:text-main-light transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;