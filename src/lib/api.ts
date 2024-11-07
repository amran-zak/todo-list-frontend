// src/lib/api.ts
import { Task } from '../types/types';

export const fetchTasks = async (): Promise<Task[]> => {
  const response = await fetch('http://localhost:3001/tasks');
  if (!response.ok) throw new Error('Failed to fetch tasks');
  return response.json();
};

export const addTask = async ({ title }: { title: string }): Promise<Task> => {
  const response = await fetch('http://localhost:3001/tasks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title }),
  });
  if (!response.ok) throw new Error('Failed to add task');
  return response.json();
};

export const updateTaskStatus = async ({ _id, status }: { _id: string; status: 'todo' | 'inProgress' | 'done' }): Promise<Task> => {
  const response = await fetch(`http://localhost:3001/tasks/${_id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status }),
  });
  if (!response.ok) throw new Error('Failed to update task');
  return response.json();
};

export const deleteTask = async (_id: string): Promise<void> => {
  const response = await fetch(`http://localhost:3001/tasks/${_id}`, { method: 'DELETE' });
  if (!response.ok) throw new Error('Failed to delete task');
};
