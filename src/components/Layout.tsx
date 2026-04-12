import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-main-light">
      <Navbar />
      {/* 
        Navbar height is approx 57px (py-3 = 24px + text-3xl approx 36px + border 1px - adjustments).
        Pages handle their own top padding or margin-top to align with the fixed navbar.
      */}
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;