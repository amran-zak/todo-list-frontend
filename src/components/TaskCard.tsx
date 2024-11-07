// src/components/TaskCard.tsx
import { useDrag } from 'react-dnd';
import { Task } from '../types/types';
import { useRef } from 'react';

interface TaskCardProps {
    task: Task;
    onDelete: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onDelete }) => {
    const [{ isDragging }, dragRef] = useDrag({
        type: 'TASK',
        item: { id: task._id },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    // Create a ref and combine it with dragRef
    const cardRef = useRef<HTMLDivElement>(null);
    dragRef(cardRef);

    return (
        <div
            ref={cardRef}
            className={`p-3 border rounded-md bg-white shadow-sm flex justify-between items-center ${isDragging ? 'opacity-50' : 'opacity-100'
                }`}
        >
            <span
                className={`flex-1 ${task.status === 'done' ? 'line-through text-gray-500' : 'text-gray-800'
                    }`}
            >
                {task.title}
            </span>
            <button
                onClick={onDelete}
                className="ml-4 text-red-500 hover:text-red-600 focus:outline-none"
                aria-label="Supprimer la tâche"
            >
                🗑️
            </button>
        </div>
    );
};

export default TaskCard;
