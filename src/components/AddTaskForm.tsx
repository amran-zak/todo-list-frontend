// src/app/AddTaskForm.tsx
import { useState } from 'react';

interface AddTaskFormProps {
  onAddTask: (title: string) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title);
      setTitle(''); // Réinitialise le champ après l'ajout
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Ajouter une nouvelle tâche"
        className="flex-grow p-3 rounded-lg border border-gray-600 bg-gray-800 text-gray-100 placeholder-gray-400"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Ajouter
      </button>
    </form>
  );
};

export default AddTaskForm;
