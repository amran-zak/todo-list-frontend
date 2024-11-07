// src/hooks/useTasks.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchTasks, addTask, updateTask, deleteTask } from '../lib/api';
import { Task } from '../types/types';

// Hook pour récupérer les tâches
export const useTasks = () => {
  return useQuery<Task[], Error>({ queryKey: ['tasks'], queryFn: fetchTasks });
};

// Hook pour ajouter une tâche
export const useAddTask = () => {
  const queryClient = useQueryClient();
  return useMutation<Task, Error, { name: string }>(
    {
      mutationFn: addTask, // On passe ici directement la fonction de mutation
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['tasks'],
          refetchType: 'active',
        },
        ); // Rafraîchir la liste des tâches
      }
    }
  );
};

// Hook pour mettre à jour une tâche
// export const useUpdateTask = () => {
//   const queryClient = useQueryClient();
//   return useMutation<Task, Error, { id: string; completed: boolean }>(updateTask, {
//     onSuccess: () => {
//       queryClient.invalidateQueries(['tasks']);
//     },
//   });
// };

// // Hook pour supprimer une tâche
// export const useDeleteTask = () => {
//   const queryClient = useQueryClient();
//   return useMutation<void, Error, string>(deleteTask, {
//     onSuccess: () => {
//       queryClient.invalidateQueries(['tasks']);
//     },
//   });
// };
