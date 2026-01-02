import { Gallery } from "./Gallery";

import artwork_set from "../images/projects/talkingmouse/OlgaFeldman_Mouse_red.webp";

export function Talkingmouse() {
  const artworks = [
    {
      id: "art0",
      images: [artwork_set],
      title: "Red Mouse",
      description:
        "Initial artwork depicting the Talking Mouse. 2019",
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
            2009-2013 | Digital Art
          </p>
          <div className="max-w-2xl">
            <p className="mt-6">
              It was an accident. It wasn’t an accident. </p>
<p>I came back home late at night. Exhausted. Empty. Desperate. Children has already slept. I was alone, overstressed and shattered. I turned on the computer and opened on of me art. 
So bright, full of details and colors. Razzle red. Deep yellow. Misty violent. All at once. I felt sick. Selected the shapes. Switched to monochrome mode. Still, that wasn’t enough. Different shades of black (of white?) irritated me. I selected the shapes again and deleted all the color fills. Now it was what I needed. Silence. Quietness. Serenity. Ghost of an art. In other words, that was a start of depression.
</p>

          </div>
        </div>
        <Gallery artworks={artworks} />
      </div>
    </div>
  );
}