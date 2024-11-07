// src/app/Board.tsx
"use client";

import { useState } from 'react';
import TaskColumn from '../components/TaskColumn';
import AddTaskForm from '../components/AddTaskForm';
import { Task } from '../types/types';

const Board: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Tâche 1', status: 'todo' },
    { id: 2, title: 'Tâche 2', status: 'in-progress' },
    { id: 3, title: 'Tâche 3', status: 'done' },
  ]);

  const addTask = (title: string) => {
    const newTask: Task = { id: Date.now(), title, status: 'todo' };
    setTasks([...tasks, newTask]);
  };

  const updateTaskStatus = (id: number, newStatus: Task['status']) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, status: newStatus } : task
    ));
  };

  return (
    <div className="bg-gray-900 min-h-screen p-8 text-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">Tableau de tâches</h1>

      {/* Formulaire pour ajouter une nouvelle tâche */}
      <AddTaskForm onAddTask={addTask} />

      {/* Colonnes des tâches */}
      <div className="flex space-x-4 mt-8">
        <TaskColumn title="À faire" tasks={tasks.filter(task => task.status === 'todo')} onUpdateStatus={updateTaskStatus} />
        <TaskColumn title="En cours" tasks={tasks.filter(task => task.status === 'in-progress')} onUpdateStatus={updateTaskStatus} />
        <TaskColumn title="Terminé" tasks={tasks.filter(task => task.status === 'done')} onUpdateStatus={updateTaskStatus} />
      </div>
    </div>
  );
};

export default Board;
