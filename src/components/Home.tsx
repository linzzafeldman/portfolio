import { useState, useEffect } from 'react';
import background1 from '../images/home/background-01.png';
import background2 from '../images/home/background-02.png';
import background3 from '../images/home/background-03.png';
import background4 from '../images/home/background-04.png';
import background5 from '../images/home/background-05.png';
import background6 from '../images/home/background-06.png';

export function Home() {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    // Randomly select one of the images on component mount
    const images = [background1, background2, background3, background4, background5];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setBackgroundImage(randomImage);
  }, []);

  return (
    <div className="fixed inset-0 -mt-24">
      <div
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
    </div>
  );
}