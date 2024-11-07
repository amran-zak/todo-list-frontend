// src/app/Board.tsx
"use client";
import ToDoList from '@/components/ToDoList';
import { ReactQueryProvider } from '../lib/react-query';

const Board: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-500">Tableau de tâches</h1>
      <ReactQueryProvider><ToDoList /></ReactQueryProvider>
    </div>
  );
};

export default Board;
