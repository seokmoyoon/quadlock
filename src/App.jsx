import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ActivityGrid from './components/ActivityGrid';
import ProductSection from './components/ProductSection';
import Breadcrumbs from './components/Breadcrumbs';
import ProductPage from './components/ProductPage';
import StickyBar from './components/StickyBar';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [route, setRoute] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="app">
      <Header />

      {route === '#pdp' ? (
        <main>
          <Breadcrumbs />
          <ProductPage />
          <StickyBar />
        </main>
      ) : (
        <main>
          <Hero />
          <ActivityGrid />
          <ProductSection />
        </main>
      )}

      <Footer />

      <div className="floating-promo-tab" onClick={() => window.location.hash = route === '#pdp' ? 'home' : 'pdp'}>
        SWITCH VIEW
      </div>
    </div>
  );
}

export default App;
