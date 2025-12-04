import logo from '../images/home/logo.png';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const pages = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'exhibitions', label: 'Exhibitions' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavigate = (pageId: string) => {
    window.location.hash = pageId;
    onNavigate(pageId);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-black z-50">
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavigate('home')}
            className="tracking-wider hover:opacity-50 transition-opacity flex items-center gap-3"
          >
            <img src={logo} alt="Logo" className="w-[30px] h-[30px]" />
            OLGA FELDMAN
          </button>
          <ul className="flex gap-12">
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
        </div>
      </div>
    </nav>
  );
}