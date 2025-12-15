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


interface BackgroundResource {
    url: string;
    type: 'image' | 'video';
    id: number; 
}

const STORAGE_KEY = 'background_cycle_list';
const BREAKPOINT = 700; // 700px

function shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// --- Карта сопоставления ID и фактического URL импорта ---
const RESOURCE_MAP: Record<number, { desktop: string; mobile?: string; type: 'image' | 'video' }> = {
    1: { desktop: background1, mobile: mobileBackground1, type: 'image' },
    2: { desktop: background2, mobile: mobileBackground2, type: 'image' },
    3: { desktop: background3, mobile: mobileBackground3, type: 'image' },
    4: { desktop: background4, mobile: mobileBackground4, type: 'image' },
    5: { desktop: background5, mobile: mobileBackground5, type: 'image' },
    6: { desktop: background6, mobile: mobileBackground6, type: 'image' },
    7: { desktop: background7, type: 'video' },
};
// ---------------------------------------------------------


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
    
    // --- ЛОГИКА ЗАГРУЗКИ ФОНА (Выполняется только при загрузке) ---
    useEffect(() => {
        // Здесь мы используем ID для цикла, а не URL.
        const initialResources: BackgroundResource[] = [
            { id: 1, url: RESOURCE_MAP[1].desktop, type: 'image' },
            { id: 2, url: RESOURCE_MAP[2].desktop, type: 'image' },
            { id: 3, url: RESOURCE_MAP[3].desktop, type: 'image' },
            { id: 4, url: RESOURCE_MAP[4].desktop, type: 'image' },
            { id: 5, url: RESOURCE_MAP[5].desktop, type: 'image' },
            { id: 6, url: RESOURCE_MAP[6].desktop, type: 'image' },
            { id: 7, url: RESOURCE_MAP[7].desktop, type: 'video' },
        ];

        let remainingResources: BackgroundResource[] = [];
        const storedList = sessionStorage.getItem(STORAGE_KEY);
        
        // ... (логика цикла и Session Storage) ...
        
        if (storedList) {
            try {
                // Пытаемся получить список из Session Storage
                const parsedList = JSON.parse(storedList);
                // Проверяем, что в Session Storage хранятся только ID, чтобы избежать дублирования
                remainingResources = parsedList.map((res: { id: number }) => {
                    const mapItem = RESOURCE_MAP[res.id];
                    return { id: res.id, url: mapItem.desktop, type: mapItem.type };
                });
            } catch (e) {
                console.error("Error reading background list from Session Storage", e);
            }
        }

        if (!remainingResources || remainingResources.length === 0 || remainingResources.length > initialResources.length) {
            remainingResources = shuffleArray(initialResources);
        }

        const nextResource = remainingResources.shift(); 

        if (nextResource) {
            setBackgroundResource(nextResource);
            // Сохраняем в Session Storage только ID, чтобы избежать проблем с сериализацией
            const idsToSave = remainingResources.map(r => ({ id: r.id }));
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify(idsToSave));
        }
        
    }, []); 
    
    // --- ВЫЧИСЛЕНИЕ АДАПТИВНОГО URL ---
    const getAdaptiveUrl = (resource: BackgroundResource | null, isMobileMode: boolean): string | null => {
        if (!resource) return null;

        const mapItem = RESOURCE_MAP[resource.id];
        if (!mapItem) return resource.url; 

        // 1. Видео (всегда берем десктопный путь, как вы и просили)
        if (mapItem.type === 'video') {
            return mapItem.desktop; 
        }

        // 2. Изображения: Если мобильный режим и есть мобильный ресурс, используем его.
        if (isMobileMode && mapItem.mobile) {
            return mapItem.mobile;
        }

        // 3. Десктопное изображение
        return mapItem.desktop;
    };
    // ---------------------------------


    if (!backgroundResource) {
        return null;
    }

    const finalUrl = getAdaptiveUrl(backgroundResource, isMobile);
    const finalType = backgroundResource.type;


    return (
        // КОНТЕЙНЕР ФОНА: Отступ top-24 (96px) восстановлен
        <div 
            className="fixed inset-x-0 bottom-0 top-20 h-auto" 
            style={{ 
                zIndex: 1,
            }} 
        > 
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