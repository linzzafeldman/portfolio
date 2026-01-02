import { Gallery } from './Gallery';

import artwork1 from '../images/projects/women/OlgaFeldman_Banshee.png';
import artwork2 from '../images/projects/women/OlgaFeldman_MsYou.png';
import artwork3 from '../images/projects/women/OlgaFeldman_L2.jpg';
import artwork4 from '../images/projects/women/OlgaFeldman_BlackLight.jpg';
import artwork5 from '../images/projects/women/OlgaFeldman_Cosmodiva.jpg';
import artwork6 from '../images/projects/women/OlgaFeldman_Redevil.jpg';
import artwork7 from '../images/projects/women/OlgaFeldman_Rainbow.jpg';
import artwork8 from '../images/projects/women/OlgaFeldman_Spectra02.jpg';
import artwork8_2 from '../images/projects/women/OlgaFeldman_Spectra01.jpg';



export function Women() {
  const artworks = [
    {
      id: "art1",
      imageUrl: artwork1, 
      title: 'Banshee',
      description: '"Banshee" is a mythological creature of Irish culture. <br> Described as a female spirit with long hair and grey cloak, Banshee heralds death of a family member or warns someone of deadly circumstances. While Banshee is silent, you’re safe. That is what folklore tells us. <br>As all the others, this one feels and knows everything. Her messed, enormously long hair is electrically charged, receiving frequencies of every human thought. Her body consists of millions quantum-size particles making her almost weightless. But even when she tries to speak, she remains unheard and unseen. Rejected. All she can do is float in a middle of darkness, all by herself, watching you. This Banshee is an embodiment of silence which precedes a future transformation. '
    },
    {
      id: "art2",
      imageUrl: artwork2, 
      title: 'Ms. You',
      description: "We're no more than mere radio waves wandering in black space, repeatedly shaping out forms and paths that may suddenly, accidentally, unexpectedly contain someone else. And after while, illusion disappears leaving empty shapes that we’re trying to refill. Ms.You reflects the idea of individuals as carriers of distinct frequencies. Through meaningful encounters, these frequencies begin to shape an image of the other. Even after the object has disappeared, the form remains as a hollow structure sustained by memory. Absence itself can be shaped, held, and preserved from within.",
    },
        {
      id: "art3",
      imageUrl: artwork3, 
      title: 'L',
      description: '”L” depicts a woman in love, reaching toward her dream at the moment it is finally attained. As she moves closer, her body dissolves into countless particles, becoming a surrounding presence, like air itself, merging with the object of her desire.',
    },
    {
      id: "art4",
      imageUrl: artwork4, 
      title: 'Black Light',
    //  description: '”L” depicts a woman in love, reaching toward her dream at the moment it is finally attained. As she moves closer, her body dissolves into countless particles, becoming a surrounding presence, like air itself, merging with the object of her desire.',
    },
     {
      id: "art5",
      imageUrl: artwork5, 
      title: 'Cosmodiva',
    //  description: '”L” depicts a woman in love, reaching toward her dream at the moment it is finally attained. As she moves closer, her body dissolves into countless particles, becoming a surrounding presence, like air itself, merging with the object of her desire.',
    },
    {
      id: "art6",
      imageUrl: artwork6, 
      title: 'Redevil',
    //  description: '”L” depicts a woman in love, reaching toward her dream at the moment it is finally attained. As she moves closer, her body dissolves into countless particles, becoming a surrounding presence, like air itself, merging with the object of her desire.',
    },
    {
      id: "art7",
      imageUrl: artwork7, 
      title: 'Rainbow',
    //  description: '”L” depicts a woman in love, reaching toward her dream at the moment it is finally attained. As she moves closer, her body dissolves into countless particles, becoming a surrounding presence, like air itself, merging with the object of her desire.',
    },
    {
      id: "art8",
      images: [artwork8,artwork8_2], 
      title: 'Spectra',
    //  description: '”L” depicts a woman in love, reaching toward her dream at the moment it is finally attained. As she moves closer, her body dissolves into countless particles, becoming a surrounding presence, like air itself, merging with the object of her desire.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-8">
      <button
        onClick={() => window.location.hash = 'projects'}
        className="mb-12 tracking-wider hover:opacity-50 transition-opacity text-black"
      >
        ← BACK TO PROJECTS
      </button>

      <div className="mb-12">
        <h1 className="mb-4 tracking-wider text-xl">WOMEN</h1>
        <p className="mb-2 opacity-60">2010-2014 | Digital Art, Vector Art</p>
        <p className="max-w-2xl mt-6">
          Fragile research on emotional instability, loss and growth.
        </p>
      </div>

      <Gallery artworks={artworks} />
    </div>
  );
}