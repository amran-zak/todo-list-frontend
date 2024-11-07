// src/components/TaskColumn.tsx
import { useDrop } from 'react-dnd';
import TaskCard from './TaskCard';
import { Task } from '../types/types';
import { useRef } from 'react';
import { useDeleteTask } from '@/hooks/useTasks';

interface TaskColumnProps {
    status: 'todo' | 'inProgress' | 'done';
    tasks: Task[];
    onDropTask: (taskId: string, newStatus: 'todo' | 'inProgress' | 'done') => void;
}

const TaskColumn: React.FC<TaskColumnProps> = ({ status, tasks, onDropTask }) => {
    const deleteTaskMutation = useDeleteTask();
    const [{ isOver }, dropRef] = useDrop({
        accept: 'TASK',
        drop: (item: { id: string }) => onDropTask(item.id, status),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    });

    // Create a ref and combine it with dropRef
    const columnRef = useRef<HTMLDivElement>(null);
    dropRef(columnRef);

    function handleDeleteTask(_id: string): void {
        deleteTaskMutation.mutate(_id)
    }

    return (
        <div
            ref={columnRef}
            className={`p-4 border rounded-md ${isOver ? 'bg-gray-100' : 'bg-gray-50'}`}
        >
            <h2 className="text-xl font-bold capitalize mb-4 text-gray-900 ">{status}</h2>
            <div className="space-y-2">
                {tasks.map(task => (
                    <TaskCard key={task._id} task={task} onDelete={() => handleDeleteTask(task._id)} />
                ))}
            </div>
        </div>
    );
};

export default TaskColumn;
