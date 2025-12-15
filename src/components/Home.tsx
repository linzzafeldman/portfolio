import { useState, useEffect } from 'react';
// Импорт ВСЕХ десктопных ресурсов
import background1 from '../images/home/background-01.png';
import background2 from '../images/home/background-02.png';
import background3 from '../images/home/background-03.png';
import background4 from '../images/home/background-04.png';
import background5 from '../images/home/background-05.png';
import background6 from '../images/home/background-06.png';
import background7 from '../media/twisters/TWISTERS I-2 Bipolar.mp4'; 
// !!! НОВЫЕ ИМПОРТЫ для мобильных картинок !!!
import mobileBackground1 from '../images/home/mobile/background-01.png';
import mobileBackground2 from '../images/home/mobile/background-02.png';
import mobileBackground3 from '../images/home/mobile/background-03.png';
import mobileBackground4 from '../images/home/mobile/background-04.png';
import mobileBackground5 from '../images/home/mobile/background-05.png';
import mobileBackground6 from '../images/home/mobile/background-06.png';


interface BackgroundResource {
    url: string;
    type: 'image' | 'video';
    id: number; 
}

const STORAGE_KEY = 'background_cycle_list';
const BREAKPOINT = 700; 

function shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

export function Home() {
    const [backgroundResource, setBackgroundResource] = useState<BackgroundResource | null>(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < BREAKPOINT); 

    // --- ЛОГИКА РЕАКТИВНОСТИ ---
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < BREAKPOINT);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []); 
    // -------------------------
    
    // --- ЛОГИКА ЗАГРУЗКИ ФОНА (Выполняется только при загрузке) ---
    useEffect(() => {
        const allResources: BackgroundResource[] = [
            { id: 1, url: background1, type: 'image' },
            { id: 2, url: background2, type: 'image' },
            { id: 3, url: background3, type: 'image' },
            { id: 4, url: background4, type: 'image' },
            { id: 5, url: background5, type: 'image' },
            { id: 6, url: background6, type: 'image' },
            { id: 7, url: background7, type: 'video' },
        ];

        let remainingResources: BackgroundResource[] = [];
        const storedList = sessionStorage.getItem(STORAGE_KEY);
        
        if (storedList) {
            try {
                remainingResources = JSON.parse(storedList);
            } catch (e) {
                console.error("Error reading background list from Session Storage", e);
            }
        }

        if (!remainingResources || remainingResources.length === 0 || remainingResources.length > allResources.length) {
            remainingResources = shuffleArray(allResources);
        }

        const nextResource = remainingResources.shift(); 

        if (nextResource) {
            setBackgroundResource(nextResource);
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify(remainingResources));
        }
        
    }, []); 
    
    // --- ВЫЧИСЛЕНИЕ АДАПТИВНОГО URL ---
    const getAdaptiveUrl = (resource: BackgroundResource | null, isMobileMode: boolean): string | null => {
        if (!resource) return null;

        if (resource.type === 'video') {
            return resource.url; 
        }

        const mobileImageMap: { [key: number]: string } = {
            1: mobileBackground1,
            2: mobileBackground2,
            3: mobileBackground3,
            4: mobileBackground4,
            5: mobileBackground5,
            6: mobileBackground6,
        };
        
        if (isMobileMode && mobileImageMap[resource.id]) {
            return mobileImageMap[resource.id];
        }

        return resource.url;
    };
    // ---------------------------------


    if (!backgroundResource) {
        return null;
    }

    const finalUrl = getAdaptiveUrl(backgroundResource, isMobile);
    const finalType = backgroundResource.type;


    return (
        // Родительский контейнер, который должен быть fixed и заполнять экран
        <div className="fixed inset-x-0 bottom-0 top-[120px] h-auto" style={{ zIndex: 1 }}> 
            {finalType === 'video' ? (
                // Рендеринг видео
                <video
                    src={finalUrl || ''} 
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover bg-black"
                />
            ) : (
                // Рендеринг изображения: ДОБАВЛЕНИЕ ИНЛАЙН СТИЛЕЙ
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ 
                        backgroundImage: `url(${finalUrl})`,
                        // ГАРАНТИЯ: Убеждаемся, что ширина контейнера 100%
                        width: '100%', 
                        height: '100%',
                        // Для фона также используем cover, но на всякий случай
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            )}
        </div>
    );
}