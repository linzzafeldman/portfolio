import { useState } from 'react';
import { Navigation } from '.src/components/Navigation';
import { Home } from './components/Home';
import { About } from './components/About';
import { Exhibitions } from './components/Exhibitions';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'exhibitions':
        return <Exhibitions />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="pt-24 pb-16">
        {renderPage()}
      </main>
    </div>
  );
}
