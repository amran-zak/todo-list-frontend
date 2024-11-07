// src/app/Board.tsx
"use client";
import AboutApp from '@/components/AboutApp';
import ToDoList from '@/components/ToDoList';
import { ReactQueryProvider } from '../lib/react-query';

const Board: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <AboutApp />
      <h1 className="text-3xl font-bold mb-6 text-center">Tableau de tâches</h1>
      <ReactQueryProvider><ToDoList /></ReactQueryProvider>
    </div>
  );
};

export default Board;
