// src/hooks/useTasks.ts
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addTask, deleteTask, fetchTasks, updateTaskStatus } from '../lib/api';
import { Task } from '../types/types';

// Hook pour récupérer les tâches
export const useTasks = () => {
  return useQuery<Task[], Error>({ queryKey: ['tasks'], queryFn: fetchTasks });
};

// Hook pour ajouter une tâche
export const useAddTask = () => {
  const queryClient = useQueryClient();
  return useMutation<Task, Error, { title: string }>(
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
export const useUpdateTaskStatus = () => {
  const queryClient = useQueryClient();
  return useMutation<Task, Error, { _id: string; status: 'todo' | 'inProgress' | 'done' }>({
    mutationFn: updateTaskStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['tasks'],
        refetchType: 'active',
      });
    },
  });
};
// // Hook pour supprimer une tâche
export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, string>({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries(
        {
          queryKey: ['tasks'],
          refetchType: 'active',
        }
      );
    },
  });
};
