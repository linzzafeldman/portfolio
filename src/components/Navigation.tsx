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
      backgroundColor: 'rgba(255, 255, 255, 0.5)', 
      backdropFilter: 'blur(6px)',
      WebkitBackdropFilter: 'blur(6px)', 
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
          {/* ЛОГОТИП (СЛЕВА) — Скрываем, если меню открыто */}
          <div className={`flex-shrink-0 transition-opacity duration-300 ${isOpen && isMobile ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}> 
            <button
              onClick={() => handleNavigate('home')}
              className="tracking-wider text-black hover:opacity-50 transition-opacity flex items-center gap-3"
            >
              <img src={logo} alt="Logo" className="w-[30px] h-[30px] logo-svg" />
              OLGA FELDMAN
            </button>
          </div>
        </div>
          
        <div style={menuContainerStyle}> 
            {/* ДЕСКТОПНОЕ МЕНЮ (без изменений) */}
            <ul style={isMobile ? hiddenStyle : desktopMenuStyle} className="gap-12 items-center"> 
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

            {/* ГАМБУРГЕР — Скрываем, если меню открыто (так как внутри меню есть свой крестик) */}
            {!isOpen && (
              <button
                style={isMobile ? hamburgerStyle : hiddenStyle} 
                className="z-[10000]" 
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <div style={{ width: '24px', height: '2px', backgroundColor: 'black' }}></div>
                <div style={{ width: '24px', height: '2px', backgroundColor: 'black', marginTop: '4px' }}></div>
                <div style={{ width: '24px', height: '2px', backgroundColor: 'black', marginTop: '4px' }}></div>
              </button>
            )}
        </div>
      </div>
      
      {/* 3. МОБИЛЬНЫЙ ОВЕРЛЕЙ */}
      {isOpen && isMobile && ( 
  <div className="mobile-menu-overlay">
      {/* Кнопка закрытия сверху */}
      <div className="flex justify-center p-8">
          <button 
            onClick={closeMenu} 
            className="text-black font-size: 80px font-light"
          >
            &times;
          </button>
      </div>

      {/* Кнопки в столбик */}
      <ul className="mobile-menu-stack">
          {pages.map((page) => (
              <li key={page.id}>
                  <button
                      onClick={() => handleNavigate(page.id)}
                      className={`tracking-wider text-2xl text-black ${
                        currentPage === page.id ? 'opacity-100' : 'opacity-40'
                      }`}
                  >
                      {page.label.toUpperCase()}
                  </button>
              </li>
          ))}
      </ul>
  </div>
)}
    </nav>
  );
}
