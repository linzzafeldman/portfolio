import type { ComponentType } from 'react';
import type { Page } from './pages';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { About } from './components/About';
import { Exhibitions } from './components/Exhibitions';
import { ArtOfBeingAlone } from './components/ArtOfBeingAlone';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

import { Twisters } from './components/Twisters';
import { Hikli } from './components/Hikli';
import { Shelter } from './components/Shelter';
import { Frequencies } from './components/Frequencies';
import { AnAtomy } from './components/AnAtomy';
import { OneOfAKind } from './components/OneOfAKind';
import { Parting } from './components/Parting';
import { Women } from './components/Women';
import { VariousArt } from './components/VariousArt';
import { Talkingmouse } from './components/Talkingmouse';

const components: Record<Page, ComponentType> = {
  home: Home,
  about: About,
  exhibitions: Exhibitions,
  'art-of-being-alone': ArtOfBeingAlone,
  projects: Projects,
  contact: Contact,
  twisters: Twisters,
  hikli: Hikli,
  shelter: Shelter,
  frequencies: Frequencies,
  anatomy: AnAtomy,
  oneofakind: OneOfAKind,
  parting: Parting,
  women: Women,
  variousart: VariousArt,
  talkingmouse: Talkingmouse,
};

export default function App({ page }: { page: Page }) {
  const Content = components[page];
  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation currentPage={page} />
      <main className="pt-24 pb-16">
        <Content />
      </main>
    </div>
  );
}
