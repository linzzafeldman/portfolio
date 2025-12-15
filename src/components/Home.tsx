import { useState, useEffect } from 'react';
// Импорт ВСЕХ десктопных ресурсов
import background1 from '../images/home/background-01.png';
import background2 from '../images/home/background-02.png';
import background3 from '../images/home/background-03.png';
import background4 from '../images/home/background-04.png';
import background5 from '../images/home/background-05.png';
import background6 from '../images/home/background-06.png';
import background7 from '../media/twisters/TWISTERS I-2 Bipolar.mp4'; 
// !!! ИМПОРТЫ для мобильных картинок !!!
import mobileBackground1 from '../images/home/mobile/background-01.png';
import mobileBackground2 from '../images/home/mobile/background-02.png';
import mobileBackground3 from '../images/home/mobile/background-03.png';
import mobileBackground4 from '../images/home/mobile/background-04.png';
import mobileBackground5 from '../images/home/mobile/background-05.png';
import mobileBackground6 from '../images/home/mobile/background-06.png';


interface ResourceData {
    url: string;
    type: 'image' | 'video';
    id: number; 
}

const STORAGE_KEY = 'background_cycle_ids'; // Изменил ключ на более явный
const BREAKPOINT = 700; 

function shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// --- КЛЮЧЕВАЯ КАРТА РЕСУРСОВ: Замена массива на объект для быстрого поиска ---
const RESOURCE_MAP = {
    1: { desktop: background1, mobile: mobileBackground1, type: 'image' },
    2: { desktop: background2, mobile: mobileBackground2, type: 'image' },
    3: { desktop: background3, mobile: mobileBackground3, type: 'image' },
    4: { desktop: background4, mobile: mobileBackground4, type: 'image' },
    5: { desktop: background5, mobile: mobileBackground5, type: 'image' },
    6: { desktop: background6, mobile: mobileBackground6, type: 'image' },
    7: { desktop: background7, type: 'video' },
};
const ALL_RESOURCE_IDS = Object.keys(RESOURCE_MAP).map(id => parseInt(id, 10));


export function Home() {
    // Храним только ID текущего ресурса, чтобы избежать проблем с сериализацией
    const [currentResourceId, setCurrentResourceId] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < BREAKPOINT); 

    // --- ЛОГИКА РЕАКТИВНОСТИ ---
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < BREAKPOINT);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []); 
    
    // --- ЛОГИКА ЗАГРУЗКИ ФОНА (Выполняется только при загрузке) ---
    useEffect(() => {
        let remainingIds: number[] = [];
        const storedList = sessionStorage.getItem(STORAGE_KEY);
        
        if (storedList) {
            try {
                // Читаем из Session Storage только массив ID
                remainingIds = JSON.parse(storedList);
                // Фильтруем на случай, если в хранилище попали невалидные ID
                remainingIds = remainingIds.filter(id => ALL_RESOURCE_IDS.includes(id));
            } catch (e) {
                console.error("Error reading background list from Session Storage", e);
            }
        }

        // Если список пуст или поврежден
        if (remainingIds.length === 0) {
            remainingIds = shuffleArray(ALL_RESOURCE_IDS);
        }

        const nextId = remainingIds.shift(); 

        if (nextId) {
            setCurrentResourceId(nextId);
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify(remainingIds));
        } else {
            // Если остался один элемент, это он. Если нет, загружаем новый цикл.
            if (ALL_RESOURCE_IDS.length > 0) {
                 const newCycleIds = shuffleArray(ALL_RESOURCE_IDS);
                 setCurrentResourceId(newCycleIds.shift() as number);
                 sessionStorage.setItem(STORAGE_KEY, JSON.stringify(newCycleIds));
            }
        }
        
    }, []); 
    
    // --- ВЫЧИСЛЕНИЕ АДАПТИВНОГО URL ---
    const getAdaptiveUrl = (resourceId: number, isMobileMode: boolean): { url: string | null, type: 'image' | 'video' } => {
        const mapItem = RESOURCE_MAP[resourceId as keyof typeof RESOURCE_MAP];
        if (!mapItem) return { url: null, type: 'image' }; 

        // 1. Видео
        if (mapItem.type === 'video') {
            return { url: mapItem.desktop, type: 'video' }; 
        }

        // 2. Изображения: Если мобильный режим и есть мобильный путь, используем его.
        if (isMobileMode && mapItem.mobile) {
            return { url: mapItem.mobile, type: 'image' };
        }

        // 3. Десктопное изображение
        return { url: mapItem.desktop, type: 'image' };
    };
    // ---------------------------------


    if (currentResourceId === null) {
        return null;
    }

    // Здесь мы получаем URL и ТИП напрямую из ID
    const adaptiveResource = getAdaptiveUrl(currentResourceId, isMobile);
    const finalUrl = adaptiveResource.url;
    const finalType = adaptiveResource.type;


    return (
        // КОНТЕЙНЕР ФОНА: Отступ top-120px
        <div className="fixed inset-x-0 bottom-0 top-[120px]" style={{ zIndex: 1 }}> 
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
                // Рендеринг изображения
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ 
                        backgroundImage: `url(${finalUrl})`,
                        width: '100%', 
                        height: '100%',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            )}
        </div>
    );
}