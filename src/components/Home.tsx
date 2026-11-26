import { useEffect, useRef, useState } from 'react';
import background1 from '../images/home/background-01.webp';
import background2 from '../images/home/background-02.webp';
import background3 from '../images/home/background-03.png';
import background4 from '../images/home/background-04.webp';
import background5 from '../images/home/background-05.webp';
import background6 from '../images/home/background-06.jpg';
import background7 from '../media/twisters/TWISTERS I-2 Bipolar.mp4';
import mobileBackground1 from '../images/home/mobile/background-01.png';
import mobileBackground2 from '../images/home/mobile/background-02.png';
import mobileBackground3 from '../images/home/mobile/background-03.png';
import mobileBackground4 from '../images/home/mobile/background-04.png';
import mobileBackground5 from '../images/home/mobile/background-05.png';
import mobileBackground6 from '../images/home/mobile/background-06.png';

const slides = [
  { id: 1, src: background1, mobile: mobileBackground1 },
  { id: 2, src: background2, mobile: mobileBackground2 },
  { id: 3, src: background3, mobile: mobileBackground3 },
  { id: 4, src: background4, mobile: mobileBackground4 },
  { id: 5, src: background5, mobile: mobileBackground5 },
  { id: 6, src: background6, mobile: mobileBackground6 },
  { id: 7, src: background7 },
];

const storageKey = 'background_cycle_list';

function getSlideOrder() {
  const shuffled = [...slides];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Older visits stored the remaining slides as objects with an id.
  try {
    const saved = JSON.parse(sessionStorage.getItem(storageKey) || '[]');
    const ids = saved.map((entry: number | { id: number }) => typeof entry === 'number' ? entry : entry.id);
    const remaining = slides.filter(slide => ids.includes(slide.id))
      .sort((a, b) => ids.indexOf(a.id) - ids.indexOf(b.id));
    return [...remaining, ...shuffled.filter(slide => !ids.includes(slide.id))];
  } catch {
    return shuffled;
  }
}

export function Home() {
  const [order] = useState(getSlideOrder);
  const [step, setStep] = useState(0);
  const video = useRef<HTMLVideoElement>(null);
  const current = step % order.length;
  const next = (current + 1) % order.length;
  const previous = step > 0 ? (current + order.length - 1) % order.length : -1;

  useEffect(() => {
    const timer = window.setInterval(() => setStep(value => value + 1), 5000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!order[current].mobile) video.current?.play().catch(() => {});
    try {
      const remaining = [...order.slice(next), ...order.slice(0, next)];
      sessionStorage.setItem(storageKey, JSON.stringify(remaining.map(slide => slide.id)));
    } catch {
      // The slideshow also works when browser storage is unavailable.
    }
  }, [order, current, next]);

  return (
    <div className="home-slideshow" aria-hidden="true">
      {order.map((slide, index) => {
        if (index !== current && index !== previous && index !== next) return null;
        const layer = index === current ? 'current' : index === previous ? 'previous' : 'upcoming';
        return (
          <div key={slide.id} className={`home-slide ${layer}`} data-fade={step > 0}>
            {slide.mobile ? (
              <picture>
                <source media="(max-width: 699px)" srcSet={slide.mobile} />
                <img src={slide.src} alt="" className="w-full h-full object-cover" />
              </picture>
            ) : (
              <video ref={video} src={slide.src} muted loop playsInline preload="auto"
                className="w-full h-full object-cover" />
            )}
          </div>
        );
      })}
    </div>
  );
}
