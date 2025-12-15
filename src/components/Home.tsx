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
    id: number; // Добавлен ID для упрощения логики
}

const STORAGE_KEY = 'background_cycle_list';
const BREAKPOINT = 700; // Используем тот же брейкпоинт, что и в Navigation.tsx

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
    const [isMobile, setIsMobile] = useState(window.innerWidth < BREAKPOINT); // НОВОЕ СОСТОЯНИЕ

    // --- ЛОГИКА РЕАКТИВНОСТИ ---
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < BREAKPOINT);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []); 
    // -------------------------
    
    // --- ЛОГИКА ЗАГРУЗКИ ФОНА ---
    useEffect(() => {
        // Определение ресурсов (используем ID, чтобы связать десктоп и мобильный)
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
        
        // ... (Логика shuffle и sessionStorage остается прежней) ...
        
        if (storedList) {
            try {
                // Если список найден, парсим его
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

        // Видео (мы предполагаем, что видео одно и используется одно и то же)
        if (resource.type === 'video') {
            return resource.url; 
        }

        // Сопоставление десктопных ресурсов с мобильными
        const mobileMap: { [key: number]: string } = {
            1: mobileBackground1,
            2: mobileBackground2,
            3: mobileBackground3,
            4: mobileBackground4,
            5: mobileBackground5,
            6: mobileBackground6,
        };

        if (isMobileMode && mobileMap[resource.id]) {
            return mobileMap[resource.id];
        }

        // Если не мобильный режим или ресурс не найден в карте, используем десктопный URL
        return resource.url;
    };
    // ---------------------------------


    if (!backgroundResource) {
        return null;
    }

    // Получаем URL в зависимости от текущего размера экрана
    const finalUrl = getAdaptiveUrl(backgroundResource, isMobile);
    const type = backgroundResource.type; // Тип ресурса (видео/изображение)

    return (
        <div className="fixed inset-0 -mt-24" style={{ zIndex: 1 }}> 
            {type === 'video' ? (
                // Рендеринг видео
                <video
                    src={finalUrl || ''} // Используем finalUrl, хотя для видео он не меняется
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
                    style={{ backgroundImage: `url(${finalUrl})` }}
                />
            )}
        </div>
    );
}