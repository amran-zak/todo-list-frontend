// src/components/ToDoList.tsx
import { useState } from 'react';
import { useAddTask, useTasks } from '../hooks/useTasks';
import { Task } from '../types/types';

const ToDoList: React.FC = () => {
    const { data: tasks, isLoading, error } = useTasks();
    const addTaskMutation = useAddTask();
    // const updateTaskMutation = useUpdateTask();
    // const deleteTaskMutation = useDeleteTask();

    const [newTaskName, setNewTaskName] = useState<string>('');

    if (isLoading) return <p>Loading tasks...</p>;
    if (error) return <p>Error loading tasks: {error.message}</p>;

    const handleAddTask = () => {
        if (newTaskName.trim()) {
            addTaskMutation.mutate({ name: newTaskName });
            setNewTaskName('');
        }
    };

    const handleToggleTask = (task: Task) => {
        // updateTaskMutation.mutate({ id: task.id, completed: task.status !== 'done' });
        console.log(task)
    };

    const handleDeleteTask = (id: number) => {
        // deleteTaskMutation.mutate(id);
        console.log(id)
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <input
                type="text"
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
                placeholder="New Task"
            />
            <button onClick={handleAddTask}>Add Task</button>

            <ul>
                {tasks?.map((task) => (
                    <li key={task.id}>
                        <span
                            style={{ textDecoration: task.status !== 'done' ? 'line-through' : 'none' }}
                            onClick={() => handleToggleTask(task)}
                        >
                            {task.title}
                        </span>
                        <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;
