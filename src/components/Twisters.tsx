import { Gallery } from "./Gallery";

import artwork_set from "../media/twisters/Twisters-I_all-9.mp4";

import artwork1 from "../media/twisters/TWISTERS I-1 Anxiety.mp4";
import artwork1_2 from "../images/projects/twisters/Twister-I-1_STILL-2_.jpg";
import artwork1_3 from "../images/projects/twisters/Twister-I-1_STILL-3_.jpg";

import artwork2 from "../media/twisters/TWISTERS I-2 Bipolar.mp4";
import artwork2_2 from "../images/projects/twisters/Twister-I-2_2500_1.jpg";
import artwork2_3 from "../images/projects/twisters/Twister-I-2_2500_2.jpg";

import artwork3 from "../media/twisters/TWISTERS I-3 WhiteNoise.mp4";
import artwork3_2 from "../images/projects/twisters/Twisters_I-3-27_2500.jpg";
import artwork3_3 from "../images/projects/twisters/Twisters_I-3-31_2500.jpg";

import artwork4 from "../media/twisters/TWISTERS I-4 Blackness.mp4";
import artwork4_2 from "../images/projects/twisters/TI-4_STILL_2500.jpg";
import artwork4_3 from "../images/projects/twisters/TI-4_STILL2_2500.jpg";

import artwork5 from "../media/twisters/TWISTERS I-5 Glitch.mp4";
import artwork5_2 from "../images/projects/twisters/T-I-5_STILL1_2500.jpg";
import artwork5_3 from "../images/projects/twisters/T-I-5_STILL2_2500.jpg";

import artwork6 from "../media/twisters/TWISTERS I-6 Letters.mp4";
import artwork6_2 from "../images/projects/twisters/Twisters_I-6_STILL2_2500.jpg";
import artwork6_3 from "../images/projects/twisters/Twisters_I-6_STILL1_2500.jpg";

import artwork7 from "../media/twisters/TWISTERS I-7 Betrayal.mp4";
import artwork7_2 from "../images/projects/twisters/Twisters-I-7_Betrayal-4_2500.jpg";
import artwork7_3 from "../images/projects/twisters/Twisters-I-7_Betrayal-2_2500.jpg";

import artwork8 from "../media/twisters/TWISTERS I-8 Simulacrum.mp4";
import artwork8_2 from "../images/projects/twisters/T_1-8_Still029_3000.jpg";
import artwork8_3 from "../images/projects/twisters/T_1-8_Still074_3000.jpg";

import artwork9 from "../media/twisters/TWISTERS I-9_Arrogance.mp4";
import artwork9_2 from "../images/projects/twisters/T_1-9_Stills_3000_74.jpg";
import artwork9_3 from "../images/projects/twisters/T_1-9_Stills_3000_86.jpg";

export function Twisters() {
  const artworks = [
    {
      id: "art0",
      images: [artwork_set],
      title: "Twisters I set of 9",
      description:
        "Twisters I set of 9",
    },
    {
      id: "art1",
      images: [artwork1, artwork1_2, artwork1_3],
      title: "Twister I-1. Bipolar",
      description:
        "Twister I-1. Bipolar",
    },
    {
      id: "art2",
      images: [artwork2, artwork2_2, artwork2_3],
      title: "Twister I-2. Anxiety",
      description:
        "Twister I-2. Anxiety",
    },
    {
      id: "art3",
      images: [artwork3, artwork3_2, artwork3_3],
      title: "Twister I-3. White Noise",
      description:
        "Twister I-3. White Noise",
    },
    {
      id: "art4",
      images: [artwork4, artwork4_2, artwork4_3],
      title: "Twister I-4. Blackness",
      description:
        "Twister I-4. Blackness",
    },
    {
      id: "art5",
      images: [artwork5, artwork5_2, artwork5_3],
      title: "Twister I-5. Glitch",
      description:
        "Twister I-5. Glitch",
    },
    {
      id: "art6",
      images: [artwork6, artwork6_2, artwork6_3],
      title: "Twister I-6. Letters",
      description:
        "Twister I-6. Letters",
    },
    {
      id: "art7",
      images: [artwork7, artwork7_2, artwork7_3],
      title: "Twister I-7. Betrayal",
      description:
        "Twister I-7. Betrayal",
    },
    {
      id: "art8",
      images: [artwork8, artwork8_2, artwork8_3],
      title: "Twister I-8. Simulacrum",
      description:
        "Twister I-8. Simulacrum",
    },
    {
      id: "art9",
      images: [artwork9, artwork9_2, artwork9_3],
      title: "Twister I-9. Arrogance",
      description:
        "Twister I-9. Arrogance",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen -mt-24 -mb-16 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-8">
        <button
          onClick={() => window.location.hash = 'projects'}
          className="mb-12 tracking-wider hover:opacity-50 transition-opacity text-white"
        >
          ← BACK TO PROJECTS
        </button>
        <div className="mb-12">
          <h1 className="mb-4 tracking-wider">TWISTERS</h1>
          <p className="mb-2 opacity-60">
            2017-2022 | 3D, Digital Art, Video Art
          </p>
          <div className="max-w-2xl">
            <p className="mt-6">
              The series presents abstract, living shapes that hover between randomness and
              recognition, as if each were a fleeting signal, a momentary birth of a familiar 
              form emerging from a repetitive pattern of radio waves.
            </p>
            <p className="mt-6">
              Though the series consists of multiple digital drawings, their origin is neither 
              purely manual nor entirely artificial. Each image begins as a generative sketch, 
              an algorithmic whisper refined and redrawn by hand into vector form.
            </p>
          </div>
        </div>
        <Gallery artworks={artworks} />
      </div>
    </div>
  );
}