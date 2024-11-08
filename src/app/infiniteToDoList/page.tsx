"use client";
import InfiniteToDoList from '@/components/InfiniteToDoList';

const InfiniteToDoListPage: React.FC = () => {

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-500">Infinite Queries</h1>
            <InfiniteToDoList />
        </div>
    );
};

export default InfiniteToDoListPage;
