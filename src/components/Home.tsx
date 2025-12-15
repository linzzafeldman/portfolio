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

// Карта для сопоставления ID и адаптивных путей
const RESOURCE_MAP = {
    1: { desktop: background1, mobile: mobileBackground1, type: 'image' },
    2: { desktop: background2, mobile: mobileBackground2, type: 'image' },
    3: { desktop: background3, mobile: mobileBackground3, type: 'image' },
    4: { desktop: background4, mobile: mobileBackground4, type: 'image' },
    5: { desktop: background5, mobile: mobileBackground5, type: 'image' },
    6: { desktop: background6, mobile: mobileBackground6, type: 'image' },
    7: { desktop: background7, type: 'video' },
};


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
        // Создаем полный массив ресурсов на основе карты (для цикла)
        const allResources: BackgroundResource[] = Object.entries(RESOURCE_MAP).map(([id, item]) => ({
            id: parseInt(id, 10),
            url: item.desktop, // Для цикла используем десктопный URL
            type: item.type,
        }));

        let remainingResources: BackgroundResource[] = [];
        const storedList = sessionStorage.getItem(STORAGE_KEY);
        
        if (storedList) {
            try {
                // ИСПРАВЛЕНИЕ: Восстанавливаем объекты из ID, чтобы гарантировать стабильность
                const parsedData = JSON.parse(storedList);
                if (Array.isArray(parsedData) && parsedData.length > 0) {
                    remainingResources = parsedData.map((res: { id: number }) => {
                        const mapItem = RESOURCE_MAP[res.id as keyof typeof RESOURCE_MAP];
                        return mapItem ? { id: res.id, url: mapItem.desktop, type: mapItem.type } : null;
                    }).filter((res): res is BackgroundResource => res !== null);
                }
            } catch (e) {
                console.error("Error reading background list from Session Storage", e);
            }
        }

        if (remainingResources.length === 0 || remainingResources.length > allResources.length) {
            remainingResources = shuffleArray(allResources);
        }

        const nextResource = remainingResources.shift(); 

        if (nextResource) {
            setBackgroundResource(nextResource);
            // Сохраняем только ID в Session Storage
            const idsToSave = remainingResources.map(r => ({ id: r.id }));
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify(idsToSave));
        }
        
    }, []); 
    
    // --- ВЫЧИСЛЕНИЕ АДАПТИВНОГО URL ---
    const getAdaptiveUrl = (resource: BackgroundResource | null, isMobileMode: boolean): string | null => {
        if (!resource) return null;

        const mapItem = RESOURCE_MAP[resource.id as keyof typeof RESOURCE_MAP];
        if (!mapItem) return resource.url; 

        if (mapItem.type === 'video') {
            return mapItem.desktop; 
        }

        if (isMobileMode && mapItem.mobile) {
            return mapItem.mobile;
        }

        return mapItem.desktop;
    };
    // ---------------------------------


    if (!backgroundResource) {
        return null;
    }

    const finalUrl = getAdaptiveUrl(backgroundResource, isMobile);
    const finalType = backgroundResource.type;


    return (
        // ИСПРАВЛЕНИЕ ПОЗИЦИОНИРОВАНИЯ: Используем inset-x-0 bottom-0 и ваш top-[120px]
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