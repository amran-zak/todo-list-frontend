// src/lib/ReactQueryProvider.tsx
"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

interface ReactQueryProviderProps {
    children: React.ReactNode;
}

const ReactQueryProvider: React.FC<ReactQueryProviderProps> = ({ children }) => {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <DndProvider backend={HTML5Backend}>
                {children}
                <ReactQueryDevtools initialIsOpen={false} />
            </DndProvider>
        </QueryClientProvider>
    );
};

export default ReactQueryProvider;
