/* ============================================================
   LAYOUT — MainLayout
   Wraps all page content with background, navbar, footer
   ============================================================ */

import React from 'react';
import Navbar              from '../components/Navbar/Navbar';
import Footer              from '../components/Footer/Footer';
import ScrollToTop         from '../components/ScrollToTop/ScrollToTop';
import AnimatedBackground  from '../components/AnimatedBackground/AnimatedBackground';
import './MainLayout.css';

function MainLayout({ children }) {
  return (
    <div className="layout">
      {/* Canvas particle background */}
      <AnimatedBackground />

      {/* Sticky navbar */}
      <Navbar />

      {/* Page content */}
      <main className="layout__main" id="main-content">
        {children}
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to top FAB */}
      <ScrollToTop />
    </div>
  );
}

export default MainLayout;
