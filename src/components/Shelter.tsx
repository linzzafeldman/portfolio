import { Gallery } from './Gallery';
import photo1 from "../images/exhibitions/shelter/ShelterExhibition_Poster.jpeg";
import photo2 from "../images/exhibitions/shelter/ShelterExhibition03.jpg";
import photo3 from "../images/exhibitions/shelter/ShelterExhibition02.jpg";

export function Shelter() {
  const artworks = [
    {
      id: 'shelter1',
      images: [photo1], 
      title: 'Shelter exhibition poster',
      description: 'Description of the artwork from Shelter exhibition.',
    },
    {
      id: 'shelter2',
      images: [photo2], 
      title: 'Artwork Title 2',
      description: 'Description of the artwork from Shelter exhibition.',
    },
    {
      id: 'shelter3',
      images: [photo3], 
      title: 'Artwork Title 3',
      description: 'Description of the artwork from Shelter exhibition.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-8">
  <button
          // Теперь при клике мы просто меняем адрес на #projects
          onClick={() => window.location.hash = 'exhibitions'}
          className="mb-12 tracking-wider hover:opacity-50 transition-opacity text-black"
        >
          ← BACK TO EXHIBITIONS
        </button>
      <div className="mb-12">
        <h1 className="mb-4 tracking-wider">SHELTER</h1>
        <p className="mb-2 opacity-60">2024 | Israel</p>
        <p className="max-w-2xl mt-6">
          The "Shelter Exhibition" in Akko, Israel, refers to the MiklatArt Project by Vera Gailis, a community art initiative turning public bomb shelters into vibrant, hopeful art spaces with murals by local artists and residents, transforming scary places into points of connection and beauty during challenging times, with a specific project opening in Acre (Akko) in July 2024 as a "community laboratory" for the project. 
        </p>
      </div>
      <Gallery artworks={artworks} />
    </div>
  );
}
