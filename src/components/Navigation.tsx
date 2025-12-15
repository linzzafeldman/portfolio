import { useState } from 'react'; 
import logo from '../images/home/logo.png';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  
  const [isOpen, setIsOpen] = useState(false);

  const pages = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'exhibitions', label: 'Exhibitions' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavigate = (pageId: string) => {
    window.location.hash = pageId;
    onNavigate(pageId);
    setIsOpen(false); 
  };
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-black z-[99]">
      <div className="max-w-7xl mx-auto px-8 py-6">
        
        <div className="flex items-center justify-between w-full"> 
          
          <div className="flex-shrink-0 mr-12"> 
            <button
              onClick={() => handleNavigate('home')}
              className="tracking-wider hover:opacity-50 transition-opacity flex items-center gap-3"
            >
              <img src={logo} alt="Logo" className="w-[30px] h-[30px]" />
              OLGA FELDMAN
            </button>
          </div>
          
          <div className="flex items-center">
            
            {/* ДЕСКТОПНОЕ МЕНЮ (скрыто на sm и ниже) */}
            <ul className="hidden sm:flex gap-12 items-center"> 
              {pages.map((page) => (
                <li key={page.id}>
                  <button
                    onClick={() => handleNavigate(page.id)}
                    className={`tracking-wider hover:opacity-50 transition-opacity ${
                      currentPage === page.id ? 'opacity-100' : 'opacity-40'
                    }`}
                  >
                    {page.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* КНОПКА ГАМБУРГЕР (видна на sm и ниже) */}
            <button
              className="flex sm:hidden flex-col items-end justify-center" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className={`w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[0.375rem]' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-black mt-1 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
              <div className={`w-6 h-0.5 bg-black mt-1 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[0.375rem]' : ''}`}></div>
            </button>
            
          </div>

        </div>
      </div>
      
      {/* МОБИЛЬНЫЙ ОВЕРЛЕЙ */}
      {isOpen && (
        <div 
            className="fixed inset-0 z-[98] bg-white sm:hidden transition-opacity duration-300"
            style={{ 
                opacity: isOpen ? 1 : 0, 
                pointerEvents: isOpen ? 'auto' : 'none',
            }}
        >
            <div className="flex flex-col items-center justify-center min-h-screen pt-20 pb-20">
                <ul className="flex flex-col items-center gap-8">
                    {pages.map((page) => (
                        <li key={page.id}>
                            <button
                                onClick={() => handleNavigate(page.id)}
                                className={`tracking-wider text-2xl font-medium hover:opacity-50 transition-opacity ${
                                    currentPage === page.id ? 'opacity-100' : 'opacity-40'
                                }`}
                            >
                                {page.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      )}

    </nav>
  );
}