// src/app/TaskColumn.tsx
import { Task } from '../types/types';

interface TaskColumnProps {
    title: string;
    tasks: Task[];
    onUpdateStatus: (id: number, newStatus: Task['status']) => void;
}

const TaskColumn: React.FC<TaskColumnProps> = ({ title, tasks, onUpdateStatus }) => {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'todo':
                return 'text-blue-500';
            case 'in-progress':
                return 'text-yellow-500';
            case 'done':
                return 'text-green-500';
            default:
                return 'text-gray-500';
        }
    };
    return (
        <div className="bg-gray-800 rounded-lg shadow-lg w-1/3 p-4">
            <h2 className="text-xl font-semibold mb-4 text-gray-300">{title}</h2>
            <div className="space-y-4">
                {tasks.map(task => (
                    <div key={task.id} className="bg-gray-700 p-4 rounded-md shadow-md hover:shadow-lg transition-shadow">
                        <p className="text-gray-100 font-medium">{task.title}</p>
                        <div className="flex space-x-4 mt-2 text-sm">
                            {task.status !== 'todo' && (
                                <button
                                    onClick={() => onUpdateStatus(task.id, 'todo')}
                                    className={`${getStatusColor('todo')} hover:underline`}
                                >
                                    À faire
                                </button>
                            )}
                            {task.status !== 'in-progress' && (
                                <button
                                    onClick={() => onUpdateStatus(task.id, 'in-progress')}
                                    className={`${getStatusColor('in-progress')} hover:underline`}
                                >
                                    En cours
                                </button>
                            )}
                            {task.status !== 'done' && (
                                <button
                                    onClick={() => onUpdateStatus(task.id, 'done')}
                                    className={`${getStatusColor('done')} hover:underline`}
                                >
                                    Terminé
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskColumn;
