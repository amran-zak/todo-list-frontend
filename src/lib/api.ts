// src/lib/api.ts
import { Task } from '../types/types';

export const fetchTasks = async (): Promise<Task[]> => {
  const response = await fetch('/api/tasks');
  if (!response.ok) throw new Error('Failed to fetch tasks');
  return response.json();
};

export const addTask = async ({ name }: { name: string }): Promise<Task> => {
  const response = await fetch('/api/tasks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }),
  });
  if (!response.ok) throw new Error('Failed to add task');
  return response.json();
};

export const updateTask = async ({ id, completed }: { id: string; completed: boolean }): Promise<Task> => {
  const response = await fetch(`/api/tasks/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed }),
  });
  if (!response.ok) throw new Error('Failed to update task');
  return response.json();
};

export const deleteTask = async (id: string): Promise<void> => {
  const response = await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
  if (!response.ok) throw new Error('Failed to delete task');
};
