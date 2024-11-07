// src/types/types.ts
export interface Task {
  _id: string;  // ID généré par MongoDB
  title: string;
  status: 'todo' | 'inProgress' | 'done';
}
