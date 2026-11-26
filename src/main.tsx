import { createRoot } from 'react-dom/client';
import App from './App';
import { isPage, pageIds, pages } from './pages';
import './index.css';
import './styles/globals.css';

const root = createRoot(document.getElementById('root')!);

function renderPage() {
  const { pathname, hash, search } = window.location;
  const path = pathname.replace(/\/index\.html$/, '').replace(/\/$/, '') || '/';
  const legacyPage = hash.slice(1);
  let page = pageIds.find(id => pages[id].path === path);

  if (path === '/' && isPage(legacyPage)) {
    page = legacyPage;
    window.history.replaceState(window.history.state, '', pages[page].path + search);
  } else if (!page) {
    const slug = path.slice(1);
    if (isPage(slug)) {
      page = slug;
      window.history.replaceState(window.history.state, '', pages[page].path + search + hash);
    }
  }

  page ??= 'home';
  document.title = pages[page].title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', pages[page].description);
  root.render(<App page={page} />);
}

window.addEventListener('hashchange', renderPage);
window.addEventListener('popstate', renderPage);
renderPage();
