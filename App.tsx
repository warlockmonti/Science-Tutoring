
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Reviews from './pages/Reviews';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  const handleNavigateToSection = (page: Page, sectionId: string) => {
    setCurrentPage(page);
    // Use a small timeout to allow the DOM to render if switching pages
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return (
          <Home 
            onBookNow={() => setCurrentPage(Page.Booking)} 
            onLeaveReview={() => setCurrentPage(Page.Reviews)} 
          />
        );
      case Page.Booking:
        return <Booking />;
      case Page.Reviews:
        return <Reviews />;
      default:
        return <Home onBookNow={() => setCurrentPage(Page.Booking)} onLeaveReview={() => setCurrentPage(Page.Reviews)} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigateToSection} />
    </div>
  );
};

export default App;
