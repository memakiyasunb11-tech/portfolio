import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import AnimatedBackground from '../components/AnimatedBackground/AnimatedBackground';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Animated particle background (absolute positioning) */}
      <AnimatedBackground />

      {/* Sticky navbar */}
      <Navbar />

      {/* Page content */}
      <main className="flex-grow z-10 w-full px-4 sm:px-6 pt-24 overflow-x-hidden" id="main-content">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
