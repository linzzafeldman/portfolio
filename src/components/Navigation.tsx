import { useState } from 'react'; 
import logo from '../images/home/logo.png'; // Убедитесь, что путь к логотипу верен

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
    
    // Закрывает мобильное меню после клика, если оно было открыто
    setIsOpen(false); 
  };
  
 
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-black z-50">
      <div className="max-w-7xl mx-auto px-8 py-6">
        
        {/* ГЛАВНЫЙ КОНТЕЙНЕР: Разделяет Логотип и Навигацию/Гамбургер */}
        <div className="flex items-center justify-between w-full"> 
          
          {/* 1. Логотип (Левая часть) */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavigate('home')}
              className="tracking-wider hover:opacity-50 transition-opacity flex items-center gap-3"
            >
              <img src={logo} alt="Logo" className="w-[30px] h-[30px]" />
              OLGA FELDMAN
            </button>
          </div>
          
          {/* 2. Десктопное меню (Правая часть, скрыто на мобильных) */}
          <ul className="hidden md:flex gap-12 items-center"> 
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

          {/* 3. Кнопка-гамбургер (Правая часть, видна на мобильных) */}
          <button
            className="md:hidden flex flex-col items-end justify-center"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {/* Иконка Гамбургер */}
            <div className={`w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[0.375rem]' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-black mt-1 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            <div className={`w-6 h-0.5 bg-black mt-1 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[0.375rem]' : ''}`}></div>
          </button>

        </div>
      </div>
      
      {/* 4. Мобильное меню (Появляется при нажатии на Гамбургер) */}
      <div 
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 py-4 border-t border-black' : 'max-h-0' 
        }`}
      >
        <ul className="flex flex-col items-center gap-4">
          {pages.map((page) => (
            <li key={page.id}>
              <button
                onClick={() => handleNavigate(page.id)}
                className={`tracking-wider text-lg hover:opacity-50 transition-opacity ${
                  currentPage === page.id ? 'opacity-100' : 'opacity-40'
                }`}
              >
                {page.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

    </nav>
  );
}