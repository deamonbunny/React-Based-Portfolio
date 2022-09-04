import React, { useState } from 'react';
import Header from './Header';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import ContactMe from './pages/ContactMe';
import Resume from './pages/Resume';
import Footer from './Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // Check Page and Render
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'ContactMe') {
      return <ContactMe />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
