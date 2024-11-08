// src/hooks/useTasks.ts
import { keepPreviousData, useInfiniteQuery, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addTask, deleteTask, fetchTasks, updateTaskStatus } from '../lib/api';
import { Task } from '../types/types';

// Hook pour récupérer les tâches
export const useTasks = (page: number, limit: number) => {
  return useQuery<{ tasks: Task[], total: number }, Error>(
    {
      queryKey: ['tasks', page],
      queryFn: () => fetchTasks(page, limit),
      // placeholderData: keepPreviousData,
    }
  );
};

export const useInfiniteTasks = (limit: number) => {
  return useInfiniteQuery(
    {
      queryKey: ['tasks'],
      queryFn: ({ pageParam = 1 }) => fetchTasks(pageParam, limit),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        const morePagesExist = lastPage.tasks.length === limit;
        return morePagesExist ? allPages.length + 1 : undefined;
      },
      getPreviousPageParam: (firstPage, allPages) => {
        const lessPagesExist = firstPage.tasks.length === limit;
        return lessPagesExist ? allPages.length + 1 : undefined;
      }
    }
  );
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
