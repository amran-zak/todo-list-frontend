// src/components/InfiniteToDoList.tsx
import { useInfiniteTasks } from '@/hooks/useTasks';
import TaskCard from './TaskCard';
import { useState } from 'react';

const InfiniteToDoList: React.FC = () => {
    const limit = 10;
    const { data, isLoading, isError, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteTasks(limit);
    const [visiblePages, setVisiblePages] = useState(1); // État pour contrôler le nombre de pages visibles

    if (isLoading) return <p>Loading tasks...</p>;
    if (isError) return <p>Error loading tasks.</p>;

    // Fonction pour augmenter les pages visibles (charger plus)
    const showMore = () => {
        if (hasNextPage && visiblePages === data?.pages.length) {
            fetchNextPage(); // Charge une nouvelle page si toutes les pages actuelles sont visibles
        }
        setVisiblePages((prev) => prev + 1); // Augmente les pages visibles de 1
    };

    // Fonction pour diminuer les pages visibles (afficher moins)
    const showLess = () => setVisiblePages((prev) => Math.max(prev - 1, 1));

    return (
        <div>
            {/* Affiche seulement les pages jusqu'à la limite de `visiblePages` */}
            {data?.pages.slice(0, visiblePages).map((page, pageIndex) => (
                <div key={pageIndex}>
                    {page.tasks.map((task) => (
                        <TaskCard key={task._id} task={task} onDelete={function (): void {
                            throw new Error('Function not implemented.');
                        }} />
                    ))}
                </div>
            ))}

            <div className="flex justify-center mt-4 space-x-4">
                <button
                    onClick={showMore}
                    disabled={!hasNextPage && visiblePages === data?.pages.length}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                >
                    {isFetchingNextPage ? 'Chargement...' : hasNextPage || visiblePages < (data?.pages.length as number) ? 'Charger plus' : 'Plus de tâches'}
                </button>

                {visiblePages > 1 && (
                    <button
                        onClick={showLess}
                        className="px-4 py-2 bg-red-500 text-white rounded"
                    >
                        Afficher moins
                    </button>
                )}
            </div>
        </div>
    );
};

export default InfiniteToDoList;
