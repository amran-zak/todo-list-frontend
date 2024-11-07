// src/app/Board.tsx
"use client";
import ToDoList from '@/components/ToDoList';
import { ReactQueryProvider } from '../lib/react-query';
import { useState } from 'react';
import { QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const Board: React.FC = () => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-500">Tableau de tâches</h1>
      <ReactQueryProvider client={queryClient}><ToDoList /> <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /></ReactQueryProvider>
    </div>
  );
};

export default Board;
