// src/components/PaginatedToDoList.tsx
import { useState } from 'react';
import TaskCard from './TaskCard';
import { useTasks } from '@/hooks/useTasks';

const PaginatedToDoList: React.FC = () => {
    const [page, setPage] = useState(1);
    const limit = 10;
    const { data, isLoading, isError } = useTasks(page, limit);

    if (isLoading) return <p>Loading tasks...</p>;
    if (isError) return <p>Error loading tasks.</p>;

    return (
        <div>
            {data?.tasks.map(task => (
                <TaskCard key={task._id} task={task} onDelete={function (): void {
                    throw new Error('Function not implemented.');
                }} />
            ))}

            <div className="flex justify-between mt-4">
                <button
                    onClick={() => setPage((old) => Math.max(old - 1, 1))}
                    disabled={page === 1}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                >
                    Précédent
                </button>

                <span>Page {page}</span>

                <button
                    onClick={() => setPage((old) => (!data || data.tasks.length < limit ? old : old + 1))}
                    disabled={data && data.tasks.length < limit}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                >
                    Suivant
                </button>
            </div>
        </div>
    );
};

export default PaginatedToDoList;


