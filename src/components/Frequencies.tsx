import { Gallery } from './Gallery';

import artwork1 from '../images/projects/frequencies/004_OlgaFeldman_AsAboveSoBelow.jpg';
import artwork2 from '../images/projects/frequencies/007_OlgaFeldman_Seconds-Time.jpg';
import artwork2_2 from '../images/projects/frequencies/007_OlgaFeldman_Seconds-Time02.jpg';
import artwork2_3 from '../images/projects/frequencies/007_OlgaFeldman_Seconds-Time03.jpg';
import artwork2_4 from '../images/projects/frequencies/007_OlgaFeldman_Seconds-Time04.jpg';
import artwork2_5 from '../images/projects/frequencies/007_OlgaFeldman_Seconds-Time05.jpg';

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
      description: '50cm. Acrylic on canvas. 2017',
    },
    {
      id: "freq007",
      images: [artwork2, artwork2_2, artwork2_3, artwork2_4, artwork2_5],
      title: '007. Seconds (Time).',
      description: '50cm. Acrylic on canvas. 2017.',
    }, 
    {
      id: "freq008",
      imageUrl: artwork3, 
      title: '008. Mount Fuji.',
      description: '50cm. Acrylic on canvas. 2017.',
    }, {
      id: "freq009",
      imageUrl: artwork4, 
      title: '009. Distant Shores.',
      description: '50cm. Acrylic on canvas. 2017.',
    },  {
      id: "freq010",
      imageUrl: artwork5, 
      title: '010. Direction.',
      description: '50cm. Acrylic on canvas. 2017.',
    }, {
      id: "freq013",
      imageUrl: artwork6, 
      title: '013. Balance',
      description: '50cm. Acrylic on canvas. 2017.',
    }, {
      id: "freq014",
      imageUrl: artwork7, 
      title: '014. Fault',
      description: '60cm. Acrylic on canvas. 2021.',
    }, {
      id: "freq015",
      imageUrl: artwork8, 
      title: '015. Waterfalls',
      description: '50cm. Acrylic on canvas. 2017.',
    }, {
      id: "freq016",
      imageUrl: artwork9, 
      title: '016. Liberty',
      description: '50cm. Acrylic on canvas. 2022',
    }, {
      id: "freq018",
      imageUrl: artwork10, 
      title: '018. Clif I',
      description: '50cm. Acrylic on canvas. 2022',
    }, {
      id: "freq019",
      imageUrl: artwork11, 
      title: '019. Cliff II',
      description: '50cm. Acrylic on canvas. 2022.',
    }, {
      id: "freq024",
      imageUrl: artwork12, 
      title: '024. Kusama Tribute',
      description: '40x40 cm. Acrylic on canvas. 2023',
    }, {
      id: "freq025",
      imageUrl: artwork13, 
      title: '025. The Word',
      description: '40x40 cm. Acrylic on canvas. 2023',
    },
    {
      id: "freq026",
      imageUrl: artwork14, 
      title: '026. Emotional Landscapes',
      description: '60x60 cm. Acrylic on canvas. 2024.',
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
        <p className="max-w-3xl mt-6">
          This series is an example of algorithmic, generative perception of reality.
Monochrome paintings "Frequencies" was created in attempts to display simple concepts and sensations using traditional graphic techniques and materials: high contrast match of white acrylic and black canvas.
Minimizing the number of expressive methods helped to build a surface as an optical illusion, referring in this series to the principles of the wave theory of light and electromagnetic oscillations.
        </p>
        <p className="mt-6">ARTIST STATEMENT</p>
        <p className="mt-4">I see waves.</p>
<p>I see waves everywhere.</p>
<p>I'm fascinated by the fact that all this reality can be described mathematically by wave equations.</p>
<p className="mt-6">Colours, sounds and movements are waves.</p>
<p>Forms and their elements are waves.</p>
<p>The movement of leaves on a tree branch is a repeating fractal wave.</p>
<p>A change of mood is a wave, and human emotions can be described as a constantly moving wave cluster of one's mind.
"Black" and "white" days of life are no more than waves of interference changing each other. Moving waves that consist of an uncountable amount of tiny possibilities, a giant point cloud beating and vibing amidst the silence, creating the universe itself.
</p>
<p className="mt-6">And we are part of this storm.
</p></div>
      
      <Gallery artworks={artworks} />
    </div>
  );
}
