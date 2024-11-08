// src/app/Board.tsx
"use client";
import ToDoList from '@/components/ToDoList';

const Board: React.FC = () => {

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-500">Tableau de tâches</h1>
      <ToDoList />
    </div>
  );
};

export default Board;
