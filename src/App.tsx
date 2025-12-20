import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { About } from './components/About';
import { Exhibitions } from './components/Exhibitions';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

// ИМПОРТЫ СТРАНИЦ ПРОЕКТОВ (на основе твоего дерева папок)
import { Twisters } from './components/Twisters';
import { Hikli } from './components/Hikli';
import { Shelter } from './components/Shelter';
import { Frequencies } from './components/Frequencies';
import { AnAtomy } from './components/AnAtomy';
import { OneOfAKind } from './components/OneOfAKind';
import { Parting } from './components/Parting';
import { Women } from './components/Women';
import { VariousArt } from './components/VariousArt';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // --- ФУНКЦИЯ ОБНОВЛЕНИЯ МЕТАТЕГОВ ---
  const updateMetaTags = (page: string) => {
    let title = "Olga Feldman";
    let description = "Olga Feldman. Monochrome visual artwork.";

    switch (page) {
      case 'home':
        title = "Olga Feldman | Monochrome visual artwork";
        description = "Olga Feldman. Monochrome visual artwork.";
        break;
      case 'about':
        title = "Olga Feldman | Artist Statement";
        description = "Olga Feldman. Artist Statement.";
        break;
      case 'exhibitions':
        title = "Olga Feldman | Exhibitions";
        description = "Olga Feldman. Recent and upcoming exhibitions.";
        break;
      case 'projects':
        title = "Olga Feldman | Projects";
        description = "Selected visual art projects by Olga Feldman.";
        break;
      case 'contact':
        title = "Olga Feldman | Contact";
        description = "Get in touch with Olga Feldman.";
        break;
      
      // МЕТАТЕГИ ДЛЯ КАЖДОГО ПРОЕКТА
      case 'twisters':
        title = "Twisters | Olga Feldman";
        description = "Monochrome project 'Twisters' by Olga Feldman.";
        break;
      case 'hikli':
        title = "Hikli | Olga Feldman";
        description = "Visual series 'Hikli' by Olga Feldman.";
        break;
      case 'shelter':
        title = "Shelter | Olga Feldman";
        description = "Project 'Shelter' by Olga Feldman.";
        break;
      case 'frequencies':
        title = "Frequencies | Olga Feldman";
        description = "Monochrome artwork from the 'Frequencies' series.";
        break;
      case 'anatomy':
        title = "AnAtomy | Olga Feldman";
        description = "Visual project 'AnAtomy' by Olga Feldman.";
        break;
      case 'oneofakind':
        title = "One Of A Kind | Olga Feldman";
        description = "Unique artworks from 'One Of A Kind' series.";
        break;
      case 'parting':
        title = "Parting: stories of grief and letting go | Olga Feldman";
        description = "Monochrome exploration in 'Parting' project.";
        break;
      case 'women':
        title = "Women | Olga Feldman";
        description = "The 'Women' series by Olga Feldman.";
        break;
      case 'variousart':
        title = "Various Art | Olga Feldman";
        description = "Various monochrome artworks by Olga Feldman.";
        break;

      default:
        title = "Olga Feldman Artwork";
        description = "Olga Feldman. Monochrome visual artwork.";
    }

    document.title = title;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
  };

  useEffect(() => {
    const hash = window.location.hash.slice(1) || 'home';
    setCurrentPage(hash);
    updateMetaTags(hash);

    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1) || 'home';
      setCurrentPage(newHash);
      updateMetaTags(newHash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home />;
      case 'about': return <About />;
      case 'exhibitions': return <Exhibitions />;
      case 'projects': return <Projects />;
      case 'contact': return <Contact />;
      
      // ЛОГИКА ОТОБРАЖЕНИЯ СТРАНИЦ ПРОЕКТОВ
      case 'twisters': return <Twisters />;
      case 'hikli': return <Hikli />;
      case 'shelter': return <Shelter />;
      case 'frequencies': return <Frequencies />;
      case 'anatomy': return <AnAtomy />;
      case 'oneofakind': return <OneOfAKind />;
      case 'parting': return <Parting />;
      case 'women': return <Women />;
      case 'variousart': return <VariousArt />;
      
      default: return <Home />;
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