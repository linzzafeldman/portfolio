import { useState, useEffect } from 'react';
// Импорт всех фоновых ресурсов
import background1 from '../images/home/background-01.png';
import background2 from '../images/home/background-02.png';
import background3 from '../images/home/background-03.png';
import background4 from '../images/home/background-04.png';
import background5 from '../images/home/background-05.png';
import background6 from '../images/home/background-06.png';
import background7 from '../media/twisters/TWISTERS I-2 Bipolar.mp4';

interface BackgroundResource {
    url: string;
    type: 'image' | 'video';
}

// Ключ для хранения списка ресурсов в Session Storage
const STORAGE_KEY = 'background_cycle_list';

// Функция для перемешивания массива (Алгоритм Фишера-Йейтса)
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

    useEffect(() => {
        // 1. Полный список всех ресурсов
        const initialResources: BackgroundResource[] = [
            { url: background1, type: 'image' },
            { url: background2, type: 'image' },
            { url: background3, type: 'image' },
            { url: background4, type: 'image' },
            { url: background5, type: 'image' },
            { url: background6, type: 'image' },
            { url: background7, type: 'video' },
        ];

        let remainingResources: BackgroundResource[] = [];
        
        // 2. Пытаемся получить сохраненный список из Session Storage
        const storedList = sessionStorage.getItem(STORAGE_KEY);
        if (storedList) {
            try {
                remainingResources = JSON.parse(storedList);
            } catch (e) {
                console.error("Error reading background list from Session Storage", e);
            }
        }

        // 3. Если список пуст, перемешиваем полный список заново
        if (!remainingResources || remainingResources.length === 0 || remainingResources.length !== initialResources.length) {
            remainingResources = shuffleArray(initialResources);
        }

        // 4. Берем первый элемент из списка
        const nextResource = remainingResources.shift(); 

        if (nextResource) {
            // 5. Устанавливаем его для отображения
            setBackgroundResource(nextResource);
            
            // 6. Сохраняем оставшуюся часть списка обратно в Session Storage
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify(remainingResources));
        }
        
    }, []); 

    if (!backgroundResource) {
        return null;
    }

    const { url, type } = backgroundResource;

    return (
        // УСТАНОВКА Z-INDEX: 1 (для фона)
        <div className="fixed inset-0 -mt-24" style={{ zIndex: 1 }}> 
            {type === 'video' ? (
                // Рендеринг видео
                <video
                    src={url}
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
                    style={{ backgroundImage: `url(${url})` }}
                />
            )}
        </div>
    );
}