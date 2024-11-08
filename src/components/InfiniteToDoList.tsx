// src/components/InfiniteToDoList.tsx
import { useInfiniteTasks } from '@/hooks/useTasks';
import TaskCard from './TaskCard';

const InfiniteToDoList: React.FC = () => {
    const limit = 10;
    const { data, isLoading, isError, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteTasks(limit);

    if (isLoading) return <p>Loading tasks...</p>;
    if (isError) return <p>Error loading tasks.</p>;

    return (
        <div>
            {data?.pages.map((page, pageIndex) => (
                <div key={pageIndex}>
                    {page.tasks.map((task) => (
                        <TaskCard key={task._id} task={task} onDelete={function (): void {
                            throw new Error('Function not implemented.');
                        }} />
                    ))}
                </div>
            ))}

            <div className="flex justify-center mt-4">
                <button
                    onClick={() => fetchNextPage()}
                    disabled={!hasNextPage || isFetchingNextPage}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                >
                    {isFetchingNextPage ? 'Chargement...' : hasNextPage ? 'Charger plus' : 'Plus de tâches'}
                </button>
            </div>
        </div>
    );
};

export default InfiniteToDoList;
