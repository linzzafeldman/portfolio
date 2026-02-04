import { useState, useEffect } from 'react'; 
import logo from '../../favicon.svg';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

// БРЕЙКПОИНТ
const BREAKPOINT = 700; 

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < BREAKPOINT); 

  // --- ЛОГИКА РЕАКТИВНОСТИ ---
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < BREAKPOINT);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 
  // -------------------------

  const pages = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'exhibitions', label: 'Exhibitions' },
    { id: 'contact', label: 'Contact' },
  ];

  // --- ИЗМЕНЕННАЯ ФУНКЦИЯ НАВИГАЦИИ ---
  const handleNavigate = (pageId: string) => {
    // Если пользователь на главной странице и нажимает на "Home" или логотип
    if (pageId === 'home' && currentPage === 'home') {
      window.location.reload(); // Принудительная полная перезагрузка страницы
      return; // Останавливаем дальнейшее выполнение
    }
    
    // Стандартная навигация
    window.location.hash = pageId;
    onNavigate(pageId);
    setIsOpen(false); 
  };
  // ------------------------------------
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const closeMenu = () => {
    setIsOpen(false);
  };

  // --- ИНЛАЙН СТИЛИ ДЛЯ ГАРАНТИИ ПРИОРИТЕТА ---
  const menuContainerStyle: React.CSSProperties = {
      position: 'absolute', 
      top: '50%', 
      right: '2rem', 
      transform: 'translateY(-50%)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 1rem', 
  };
  
  const desktopMenuStyle: React.CSSProperties = {
      display: 'flex', 
      gap: '3rem', 
      alignItems: 'center',
  };
  
  const hiddenStyle: React.CSSProperties = {
      display: 'none',
  }
  
  const hamburgerStyle: React.CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'center',
  };
  
  const overlayStyle: React.CSSProperties = {
      position: 'fixed', 
      inset: 0,
      zIndex: 9998,
      backgroundColor: 'rgba(255, 255, 255, 0.95)', 
      transition: 'opacity 300ms',
  }
  // ---------------------------------------------


  return (
    <nav 
      className="fixed top-0 left-0 right-0 border-b border-black/10 nav-glass" 
      style={{ zIndex: 9999 }} 
    >
      <div className="max-w-7xl mx-auto px-8 py-6 relative"> 
        <div className="flex items-center justify-between w-full"> 
          {/* ЛОГОТИП (СЛЕВА) */}
          <div className="flex-shrink-0"> 
            <button
              onClick={() => handleNavigate('home')}
              className="tracking-wider text-black hover:opacity-50 transition-opacity flex items-center gap-3"
            >
              <img 
                src={logo} 
                alt="Logo" 
                className="w-[30px] h-[30px] logo-svg" 
              />
              OLGA FELDMAN
            </button>
          </div>
        </div>
          
        {/* КОНТЕЙНЕР МЕНЮ И ГАМБУРГЕРА */}
        <div style={menuContainerStyle}> 
            {/* 1. ДЕСКТОПНОЕ МЕНЮ */}
            <ul 
                style={isMobile ? hiddenStyle : desktopMenuStyle}
                className="gap-12 items-center" 
            > 
                {pages.map((page) => (
                  <li key={page.id}>
                    <button
                      onClick={() => handleNavigate(page.id)}
                      className={`text-black tracking-wider hover:opacity-50 transition-opacity ${
                        currentPage === page.id ? 'opacity-100' : 'opacity-40'
                      }`}
                    >
                      {page.label}
                    </button>
                  </li>
                ))}
            </ul>

            {/* 2. КНОПКА ГАМБУРГЕР */}
            <button
              style={isMobile ? hamburgerStyle : hiddenStyle} 
              className="z-[10000]" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div 
                style={{ width: '24px', height: '2px', backgroundColor: 'black' }} 
                className={`transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[0.375rem]' : ''}`}
              ></div>
              <div 
                style={{ width: '24px', height: '2px', backgroundColor: 'black', marginTop: '4px' }}
                className={`transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
              ></div>
              <div 
                style={{ width: '24px', height: '2px', backgroundColor: 'black', marginTop: '4px' }}
                className={`transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[0.375rem]' : ''}`}
              ></div>
            </button>
        </div>
      </div>
      
      {/* 3. МОБИЛЬНЫЙ ОВЕРЛЕЙ */}
      {isOpen && isMobile && ( 
        <div style={overlayStyle}>
            <div className="flex justify-center p-8">
                <button
                    onClick={closeMenu}
                    className="text-black text-3xl font-light hover:opacity-50 transition-opacity"
                    aria-label="Close menu"
                >
                    &times; 
                </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-grow h-[calc(100%-80px)]"> 
                <ul 
                    style={{ flexDirection: 'column' }}
                    className="flex items-center gap-8" 
                >
                    {pages.map((page) => (
                        <li key={page.id}>
                            <button
                                onClick={() => handleNavigate(page.id)}
                                className={`text-black tracking-wider text-2xl font-medium hover:opacity-50 transition-opacity ${
                                    currentPage === page.id ? 'opacity-100' : 'opacity-40'
                                }`}
                                style={{ textAlign: 'center' }} 
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
