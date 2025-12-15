import { useState } from 'react'; 
import logo from '../images/home/logo.png';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  // ... (весь остальной код и функции остаются неизменными)

  return (
    // ИЗМЕНЕНО: z-50 на z-[99] (максимально высокий)
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-black z-[99]">
      <div className="max-w-7xl mx-auto px-8 py-6">
        
        <div className="flex items-center justify-between w-full"> 
          
          {/* 1. Логотип (Левая часть) - должен быть виден всегда */}
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
            
            {/* 2. Десктопное меню (hidden sm:flex) */}
            <ul className="hidden sm:flex gap-12 items-center"> 
              {/* ... ссылки ... */}
            </ul>

            {/* 3. Кнопка ГАМБУРГЕР (flex sm:hidden) */}
            {/* ВРЕМЕННОЕ ИЗМЕНЕНИЕ: Добавлен bg-red-500, чтобы гарантировать видимость кнопки */}
            <button
              className="flex sm:hidden flex-col items-end justify-center p-2 bg-red-500" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {/* ... иконка ... */}
            </button>
            
          </div>

        </div>
      </div>
      
      {/* 4. МОБИЛЬНЫЙ ОВЕРЛЕЙ */}
      {isOpen && (
        <div 
            // ИЗМЕНЕНО: z-40 на z-[98]
            className="fixed inset-0 z-[98] bg-white sm:hidden transition-opacity duration-300"
            // ... стили и содержимое ...
        >
          {/* ... */}
        </div>
      )}

    </nav>
  );
}