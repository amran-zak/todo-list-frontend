"use client";
import PaginatedToDoList from '@/components/PaginatedToDoList';

const PaginatedToDoListPage: React.FC = () => {

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-500">Paginated / Lagged Queries</h1>
            <PaginatedToDoList />
        </div>
    );
};

export default PaginatedToDoListPage;
