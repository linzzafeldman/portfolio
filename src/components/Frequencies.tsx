import { Gallery } from './Gallery';

import artwork1 from '../images/projects/frequencies/004_OlgaFeldman_AsAboveSoBelow.jpg';
import artwork2 from '../images/projects/frequencies/007_OlgaFeldman_007_Seconds-Time.jpg';
import artwork2_2 from '../images/projects/frequencies/007_OlgaFeldman_007_Seconds-Time02.jpg';
import artwork3 from '../images/projects/frequencies/008_OlgaFeldman_MountFuji.jpg';
import artwork4 from '../images/projects/frequencies/009_OlgaFeldman_DistantShores.jpg';
import artwork5 from '../images/projects/frequencies/010_OlgaFeldman_Direction.jpg';
import artwork6 from '../images/projects/frequencies/013_OlgaFeldman_Balance.jpg';
import artwork7 from '../images/projects/frequencies/014_OlgaFeldman_Fault.jpg';
import artwork8 from '../images/projects/frequencies/015_OlgaFeldman_Waterfalls.jpg';
import artwork9 from '../images/projects/frequencies/016_OlgaFeldman_Libertad.jpg';
import artwork10 from '../images/projects/frequencies/018_OlgaFeldman_CLIFF-I.jpg';
import artwork11 from '../images/projects/frequencies/019_OlgaFeldman_CLIFF-II.jpg';
import artwork12 from '../images/projects/frequencies/024_OlgaFeldman_KusamaTribute.jpg';
import artwork13 from '../images/projects/frequencies/025_OlgaFeldman_InTheBeginning.jpg';
import artwork14 from '../images/projects/frequencies/026_OlgaFeldman_EmotionalLandscapes.jpg';


export function Frequencies() {
  const artworks = [
    {
      id: "freq004",
      imageUrl: artwork1, 
      title: '004. As Above So Below.',
      description: 'Visualizing sound waves as tangible forms, exploring the physicality of invisible frequencies. <br>50cm. Acrylic on canvas. 2017',
    },
    {
      id: "freq007",
      images: [artwork2, artwork2_2],
      title: '007. Seconds (Time).',
      description: 'Visualizing sound waves as tangible forms, exploring the physicality of invisible frequencies.',
    }, {
      id: "freq008",
      imageUrl: artwork3, 
      title: '008. Mount Fuji.',
      description: 'Visualizing sound waves as tangible forms, exploring the physicality of invisible frequencies.',
    }, {
      id: "freq009",
      imageUrl: artwork4, 
      title: '009. Distant Shores.',
      description: 'Visualizing sound waves as tangible forms, exploring the physicality of invisible frequencies.',
    },  {
      id: "freq010",
      imageUrl: artwork5, 
      title: '010. Direction.',
      description: 'Visualizing sound waves as tangible forms, exploring the physicality of invisible frequencies.',
    }, {
      id: "freq013",
      imageUrl: artwork6, 
      title: '013',
      description: 'Visualizing sound waves as tangible forms, exploring the physicality of invisible frequencies.',
    }, {
      id: "freq014",
      imageUrl: artwork7, 
      title: '014',
      description: 'Visualizing sound waves as tangible forms, exploring the physicality of invisible frequencies.',
    }, {
      id: "freq015",
      imageUrl: artwork8, 
      title: '015',
      description: 'Visualizing sound waves as tangible forms, exploring the physicality of invisible frequencies.',
    }, {
      id: "freq016",
      imageUrl: artwork9, 
      title: '016',
      description: 'Visualizing sound waves as tangible forms, exploring the physicality of invisible frequencies.',
    }, {
      id: "freq018",
      imageUrl: artwork10, 
      title: '018',
      description: 'Visualizing sound waves as tangible forms, exploring the physicality of invisible frequencies.',
    }, {
      id: "freq019",
      imageUrl: artwork11, 
      title: '019',
      description: 'Visualizing sound waves as tangible forms, exploring the physicality of invisible frequencies.',
    }, {
      id: "freq024",
      imageUrl: artwork12, 
      title: '024',
      description: 'Visualizing sound waves as tangible forms, exploring the physicality of invisible frequencies.',
    }, {
      id: "freq025",
      imageUrl: artwork13, 
      title: '025',
      description: 'Visualizing sound waves as tangible forms, exploring the physicality of invisible frequencies.',
    },
    {
      id: "freq026",
      imageUrl: artwork14, 
      title: '026',
      description: 'Visualizing sound waves as tangible forms, exploring the physicality of invisible frequencies.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-8">
       <button
          // Теперь при клике мы просто меняем адрес на #projects
          onClick={() => window.location.hash = 'projects'}
          className="mb-12 tracking-wider hover:opacity-50 transition-opacity text-black"
        >
          ← BACK TO PROJECTS
        </button>
      <div className="mb-12">
        <h1 className="mb-4 tracking-wider">FREQUENCIES</h1>
        <p className="mb-2 opacity-60">∞ | Acrylic on canvas</p>
        <p className="max-w-2xl mt-6">
          A series exploring the invisible world of sound through visual translation. By capturing 
          and transforming audio frequencies into graphic representations, this project bridges the 
          gap between auditory and visual perception, revealing the hidden patterns in sonic landscapes.
        </p>
      </div>
      <Gallery artworks={artworks} />
    </div>
  );
}
