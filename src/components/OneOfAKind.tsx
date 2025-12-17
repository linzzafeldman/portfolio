import { Gallery } from "./Gallery";
import artwork1 from "../images/projects/one-of-a-kind/artwork-01.png";
import artwork2 from "../images/projects/one-of-a-kind/artwork-02.png";

// Мы убираем интерфейс OneOfAKindProps, так как параметры больше не нужны
export function OneOfAKind() {
  const artworks = [
    {
      id: "art1",
      images: [artwork1], 
      title: "Cat 01",
      description:
        "Layered abstract forms creating a symmetrical composition that explores mirroring and balance in digital space.",
      isImported: true,
    },
    {
      id: "art2",
      images: [artwork2], 
      title: "Male 02",
      description:
        "Flowing organic shapes contrasted against a dark void, representing the emergence of form from emptiness.",
      isImported: true,
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen -mt-24 -mb-16 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-8">
        <button
          // Теперь при клике мы просто меняем адрес на #projects
          onClick={() => window.location.hash = 'projects'}
          className="mb-12 tracking-wider hover:opacity-50 transition-opacity text-white"
        >
          ← BACK TO PROJECTS
        </button>
        <div className="mb-12">
          <h1 className="mb-4 tracking-wider">ONE OF A KIND</h1>
          <p className="mb-2 opacity-60">
            2025 | Digital Art, AI, Vector Art
          </p>
          <p className="max-w-2xl mt-6">
            "One of a Kind" explores the illusion of
            individuality: the fragile belief that we are singular
            in form and essence. </p>
            <p className="max-w-2xl mt-6">
            The series presents abstract,
            living shapes that hover between randomness and
            recognition, as if each were a fleeting signal, a
            momentary birth of a familiar form emerging from a
            repetitive pattern of radio waves. The works balance
            between precision and glitch, between the moment of
            emergence and disappearance. Within their restrained
            geometry lies a quiet irony: every form claims
            uniqueness, yet all return to the same rhythm, an
            echo, endlessly looping through variations of one
            code. Universe has a structure, and we are part of it.</p>
            <p className="max-w-2xl mt-6">
            Though the series consists of multiple digital
            drawings, their origin is neither purely manual nor
            entirely artificial. Each image begins as a generative
            sketch, an algorithmic whisper refined and redrawn by
            hand into vector form. The process mirrors the concept
            itself: individuality born from repetition, the human
            refined through the artificial, and the artificial
            softened by human touch.
          </p>
        </div>
        <Gallery artworks={artworks} />
      </div>
    </div>
  );
}