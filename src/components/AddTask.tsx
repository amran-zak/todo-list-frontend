// src/components/AddTask.tsx
import { useState } from 'react';
import { useAddTask } from '../hooks/useTasks';

const AddTask: React.FC = () => {
    const [newTaskName, setNewTaskName] = useState<string>('');
    const addTaskMutation = useAddTask();

    const handleAddTask = () => {
        if (newTaskName.trim()) {
            addTaskMutation.mutate({ title: newTaskName });
            setNewTaskName('');
        }
    };

    return (
        <div className="mb-4">
            <input
                type="text"
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
                placeholder="New Task"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            />
            <button
                onClick={handleAddTask}
                className="mt-2 w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
                Add Task
            </button>
        </div>
    );
};

export default AddTask;
