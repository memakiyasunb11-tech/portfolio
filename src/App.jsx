/* ============================================================
   APP ROOT — App.jsx
   Sets up routing, layout, and global styles
   ============================================================ */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home       from './pages/Home';
import './styles/global.css';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Catch-all redirects back to home (single-page portfolio) */}
          <Route path="*" element={<Home />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
