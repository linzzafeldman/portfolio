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
// Мы используем эту карту только для быстрого поиска мобильных/десктопных версий
const RESOURCE_MAP = [
    { id: 1, desktop: background1, mobile: mobileBackground1, type: 'image' },
    { id: 2, desktop: background2, mobile: mobileBackground2, type: 'image' },
    { id: 3, desktop: background3, mobile: mobileBackground3, type: 'image' },
    { id: 4, desktop: background4, mobile: mobileBackground4, type: 'image' },
    { id: 5, desktop: background5, mobile: mobileBackground5, type: 'image' },
    { id: 6, desktop: background6, mobile: mobileBackground6, type: 'image' },
    { id: 7, desktop: background7, type: 'video' },
];
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
        // Здесь мы используем ID и URL для цикла
        const allResources: BackgroundResource[] = RESOURCE_MAP.map(item => ({
            id: item.id,
            url: item.desktop, // Для цикла используем десктопный URL
            type: item.type,
        }));

        let remainingResources: BackgroundResource[] = [];
        const storedList = sessionStorage.getItem(STORAGE_KEY);
        
        if (storedList) {
            try {
                // Восстанавливаем объекты BackgroundResource из сохраненных ID
                const parsedIds = JSON.parse(storedList);
                remainingResources = parsedIds.map((res: { id: number }) => {
                    const mapItem = RESOURCE_MAP.find(r => r.id === res.id);
                    // Если элемент найден, возвращаем его
                    if (mapItem) {
                        return { id: mapItem.id, url: mapItem.desktop, type: mapItem.type } as BackgroundResource;
                    }
                    return null;
                }).filter((res): res is BackgroundResource => res !== null); // Отфильтровываем null
            } catch (e) {
                console.error("Error reading background list from Session Storage", e);
            }
        }

        if (!remainingResources || remainingResources.length === 0 || remainingResources.length !== allResources.length) {
            remainingResources = shuffleArray(allResources);
        }

        const nextResource = remainingResources.shift(); 

        if (nextResource) {
            setBackgroundResource(nextResource);
            // Сохраняем в Session Storage только ID
            const idsToSave = remainingResources.map(r => ({ id: r.id }));
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify(idsToSave));
        }
        
    }, []); 
    
    // --- ВЫЧИСЛЕНИЕ АДАПТИВНОГО URL ---
    const getAdaptiveUrl = (resource: BackgroundResource | null, isMobileMode: boolean): string | null => {
        if (!resource) return null;

        const mapItem = RESOURCE_MAP.find(r => r.id === resource.id);
        if (!mapItem) return resource.url; 

        // 1. Видео
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
        // КОНТЕЙНЕР ФОНА: Отступ top-24 (96px) сохранен
        <div 
            className="fixed inset-x-0 bottom-0 top-[80px] h-auto" 
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