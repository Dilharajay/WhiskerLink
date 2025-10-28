import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import AnimalListings from './pages/AnimalListings';
import AnimalDetail from './pages/AnimalDetail';
import VolunteerRegistration from './pages/VolunteerRegistration';
import RescueReport from './pages/RescueReport';
import Contact from './pages/Contact';

export type Page = 'home' | 'listings' | 'animal-detail' | 'volunteer' | 'rescue-report' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedAnimalId, setSelectedAnimalId] = useState<string | null>(null);

  const navigateTo = (page: Page, animalId?: string) => {
    setCurrentPage(page);
    if (animalId) {
      setSelectedAnimalId(animalId);
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home navigateTo={navigateTo} />;
      case 'listings':
        return <AnimalListings navigateTo={navigateTo} />;
      case 'animal-detail':
        return <AnimalDetail animalId={selectedAnimalId} navigateTo={navigateTo} />;
      case 'volunteer':
        return <VolunteerRegistration navigateTo={navigateTo} />;
      case 'rescue-report':
        return <RescueReport navigateTo={navigateTo} />;
      case 'contact':
        return <Contact navigateTo={navigateTo} />;
      default:
        return <Home navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Navigation currentPage={currentPage} navigateTo={navigateTo} />
      <main className="pb-20">
        {renderCurrentPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;