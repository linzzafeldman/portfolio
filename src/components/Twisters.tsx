import { Gallery } from "./Gallery";
import artwork1 from "../images/projects/twisters/Twister-I-1_STILL-3_.jpg";
import artwork2 from "../images/projects/twisters/Twister-I-2_2500_2.jpg";

export function Twisters() {
  const artworks = [
    {
      id: "art1",
      imageUrl: artwork1, 
      title: "Twister I-1. Bipolar",
      description:
        "Layered abstract forms creating a symmetrical composition that explores mirroring and balance in digital space.",
    },
    {
      id: "art2",
      imageUrl: artwork2, 
      title: "Twister I-2. Anxiety",
      description:
        "Flowing organic shapes contrasted against a dark void, representing the emergence of form from emptiness.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen -mt-24 -mb-16 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-8">
        <button
          onClick={() => window.location.hash = 'projects'}
          className="mb-12 tracking-wider hover:opacity-50 transition-opacity text-white"
        >
          ← BACK TO PROJECTS
        </button>
        <div className="mb-12">
          <h1 className="mb-4 tracking-wider">TWISTERS</h1>
          <p className="mb-2 opacity-60">
            2017-2022 | Digital Art, Video, 3D
          </p>
          <div className="max-w-2xl">
            <p className="mt-6 italic">"Twisters" series.</p>
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
        {/* Gallery теперь получит правильный формат данных */}
        <Gallery artworks={artworks} />
      </div>
    </div>
  );
}