// src/components/ToDoList.tsx
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useTasks, useUpdateTaskStatus } from '../hooks/useTasks';
import AddTask from './AddTask';
import TaskColumn from './TaskColumn';

const ToDoList: React.FC = () => {
    const { data: tasks, isLoading, error } = useTasks();
    const updateTaskStatusMutation = useUpdateTaskStatus();

    const handleUpdateTaskStatus = (taskId: string, status: 'todo' | 'inProgress' | 'done') => {
        updateTaskStatusMutation.mutate({ _id: taskId, status });
    };

    if (isLoading) return <p className="text-center text-gray-500">Loading tasks...</p>;
    if (error) return <p className="text-center text-red-500">Error loading tasks: {error.message}</p>;

    const columns = {
        todo: tasks?.filter(task => task.status === 'todo'),
        inProgress: tasks?.filter(task => task.status === 'inProgress'),
        done: tasks?.filter(task => task.status === 'done'),
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="max-w-4xl mx-auto mt-10">
                <AddTask />
                <div className="grid grid-cols-3 gap-4">
                    {Object.entries(columns).map(([status, tasks]) => (
                        <TaskColumn
                            key={status}
                            status={status as 'todo' | 'inProgress' | 'done'}
                            tasks={tasks || []}
                            onDropTask={handleUpdateTaskStatus}
                        />
                    ))}
                </div>
            </div>
        </DndProvider>
    );
};

export default ToDoList;
