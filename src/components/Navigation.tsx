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
  
  const closeMenu = () => {
    setIsOpen(false);
  };

  // --- Стили для обхода конфликтов Tailwind ---
  const menuContainerStyle = {
      position: 'absolute', 
      top: '50%', 
      right: '2rem', // Эквивалент right-8
      transform: 'translateY(-50%)',
      display: 'flex',
      alignItems: 'center',
      // Добавим padding и background для гарантии, что элемент занимает место
      padding: '0 1rem', 
  };
  
  const desktopMenuStyle = {
      display: 'flex', // Гарантируем видимость на десктопе
      gap: '3rem', // Эквивалент gap-12
      alignItems: 'center',
  };
  
  const hiddenOnMobileStyle = {
      display: 'none',
  }
  // ---------------------------------------------


  return (
    // Навигационная панель: фиксирована и имеет zIndex: 9999
    <nav 
        className="fixed top-0 left-0 right-0 bg-white border-b border-black" 
        style={{ zIndex: 9999 }} 
    >
      <div className="max-w-7xl mx-auto px-8 py-6 relative"> 
        
        {/* Контейнер для логотипа (остается в потоке) */}
        <div className="flex items-center justify-between w-full"> 
          
          {/* ЛОГОТИП (СЛЕВА) */}
          <div className="flex-shrink-0"> 
            <button
              onClick={() => handleNavigate('home')}
              className="tracking-wider text-black hover:opacity-50 transition-opacity flex items-center gap-3"
            >
              <img src={logo} alt="Logo" className="w-[30px] h-[30px]" />
              OLGA FELDMAN
            </button>
          </div>
        </div>
          
        {/* КОНТЕЙНЕР МЕНЮ И ГАМБУРГЕРА: ЧИСТЫЙ CSS */}
        <div 
            style={menuContainerStyle as React.CSSProperties} 
        > 
          
            {/* 1. ДЕСКТОПНОЕ МЕНЮ: Используем медиа-запрос для скрытия на мобильном 
                Для десктопа мы явно задаем display: flex */}
            <ul 
                style={window.innerWidth >= 640 ? desktopMenuStyle as React.CSSProperties : hiddenOnMobileStyle as React.CSSProperties}
                className="gap-12 items-center" // Tailwind классы для отступов и шрифтов
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

            {/* 2. КНОПКА ГАМБУРГЕР: Скрыта на десктопе, видна на мобильном */}
            <button
              // Инлайн стили для адаптивности (должны работать более надежно)
              style={window.innerWidth >= 640 ? hiddenOnMobileStyle as React.CSSProperties : desktopMenuStyle as React.CSSProperties}
              className="flex-col items-end justify-center z-[10000]" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className={`w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[0.375rem]' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-black mt-1 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
              <div className={`w-6 h-0.5 bg-black mt-1 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[0.375rem]' : ''}`}></div>
            </button>
          
        </div>

      </div>
      
      {/* 3. МОБИЛЬНЫЙ ОВЕРЛЕЙ: Скрыт на десктопе */}
      {isOpen && (
        <div 
            className="fixed inset-0 bg-white/95 sm:hidden transition-opacity duration-300" 
            style={{ zIndex: 9998 }} 
        >
            
            {/* КНОТКА ЗАКРЫТИЯ (X) */}
            <div className="flex justify-end p-8">
                <button
                    onClick={closeMenu}
                    className="text-black text-3xl font-light hover:opacity-50 transition-opacity"
                    aria-label="Close menu"
                >
                    &times; 
                </button>
            </div>

            {/* КОНТЕНТ МЕНЮ (центрирован) */}
            <div className="flex flex-col items-center justify-start h-[calc(100vh-80px)]"> 
                <ul className="flex flex-col items-center gap-8">
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