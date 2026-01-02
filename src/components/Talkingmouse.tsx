import { Gallery } from "./Gallery";

import artwork_set from "../media/twisters/Twisters-I_all-9.mp4";

export function Talkingmouse() {
  const artworks = [
    {
      id: "art0",
      images: [artwork_set],
      title: "Twisters I set of 9",
      description:
        "Twisters I set of 9",
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
          <h1 className="mb-4 tracking-wider">DECOMPOSITION OF THE TALKING MOUSE</h1>
          <p className="mb-2 opacity-60">
            2009-2013 | 3D, Digital Art
          </p>
          <div className="max-w-2xl">
            <p className="mt-6">
              TTWISTERS is an original series of abstract monochrome animated artworks. </p>
<p className="mt-6">It is a visual project about inconstant and changeable human nature, and about different ways people may react 
to something that doesn’t fit their expectations. Based on a wordplay when the word «twist» can have several meanings. Each portrait represents an anthropomorphic torso contained of thousand layers, which became visible only when it twists: reacts to circumstances out of the frame.</p>
<p className="mt-6">
Once I’ve come to a dialogue, people were talking about silence, absence and lack of social presence.</p>
<p>«Why don’t you talk to people anymore?», one asked.</p>
<p>«Because I say something and people twist», said the other after a brief pause.
</p>
            <p className="mt-6">The project dedicated to those who keeps silence.</p>
            <p className="mt-6">TWISTERS contains 9 monochromatic sets. 
Each set contains one animation in mp4 format and 2 still keyframes. The animation has no sound.
Each set represents a state of a human personality reaction.
</p>
          </div>
        </div>
        <Gallery artworks={artworks} />
      </div>
    </div>
  );
}