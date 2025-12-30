import { Gallery } from './Gallery';
// Импорт основных изображений
import artwork1 from '../images/projects/women/OlgaFeldman_Banshee.png';
import artwork2 from '../images/projects/women/OlgaFeldman_MsYou.png';
import artwork3 from '../images/projects/women/OlgaFeldman_L.jpg';


// ПРИМЕР: Импорт дополнительных изображений для галереи (если они есть)
// import artwork1Detail from '../images/projects/women/artwork-01-detail.png';
// import artwork1Process from '../images/projects/women/artwork-01-process.png';

export function Women() {
  const artworks = [
    {
      id: "art1",
      // Теперь передаем список картинок в массиве []
      // Если хочешь добавить еще фото в этот слайдер, просто допиши их через запятую
      imageUrl: artwork1, 
      title: 'Banshee',
      description: 'Banshee is a mythological creature of Irish culture. <br> Described as a female spirit with long hair and grey cloak, Banshee heralds death of a family member or warns someone of deadly circumstances. While Banshee is silent, you’re safe. That is what folklore tells us. As all the others, this one feels and knows everything. Her messed, enormously long hair is electrically charged, receiving frequencies of every human thought. Her body consists of millions quantum-size particles making her almost weightless. But even when she tries to speak, she remains unheard and unseen. Rejected. All she can do is float in a middle of darkness, all by herself, watching you. This Banshee is an embodiment of silence which precedes a future transformation. The original art was made in Adobe Illustrator and is a size limitless vector artwork based on a draft 3d render of the pose. All the details including hair and «particles» made by hands.'
    },
    {
      id: "art2",
      // Даже если картинка одна, она должна быть в массиве [ ]
      imageUrl: artwork2, 
      title: 'Ms. You',
      description: 'Flowing organic shapes contrasted against a dark void, representing the emergence of form from emptiness.',
    },
        {
      id: "art3",
      // Даже если картинка одна, она должна быть в массиве [ ]
      imageUrl: artwork3, 
      title: 'L',
      description: 'Flowing organic shapes contrasted against a dark void, representing the emergence of form from emptiness.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-8">
      {/* Кнопка возврата к списку проектов */}
      <button
        onClick={() => window.location.hash = 'projects'}
        className="mb-12 tracking-wider hover:opacity-50 transition-opacity text-black"
      >
        ← BACK TO PROJECTS
      </button>

      {/* Заголовок и описание страницы проекта */}
      <div className="mb-12">
        <h1 className="mb-4 tracking-wider text-xl">WOMEN</h1>
        <p className="mb-2 opacity-60">2010-2014 | Digital Art, Vector Art</p>
        <p className="max-w-2xl mt-6">
          An exploration of organic and geometric forms in digital space, examining the tension 
          between order and chaos through parametric design and computational aesthetics.
        </p>
      </div>

      {/* Компонент галереи, который теперь умеет делать слайдеры */}
      <Gallery artworks={artworks} />
    </div>
  );
}