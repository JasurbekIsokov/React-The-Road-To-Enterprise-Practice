import api from './api';

export type Todos = {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
};

export type TodosData = {
  posts: Todos[];
  hasMore?: boolean;
};

export const fetchTodosByPage = (page: number) =>
  api.get<TodosData>('todos', { params: { page } }).then((res) => res.data);

export type TodosDataWithCursor = {
  todos: Todos[];
  nextCursor: number | null;
};

export const fetchTodosByCursor = (cursor: number) =>
  api
    .get<TodosDataWithCursor>('todos', { params: { cursor } })
    .then((res) => res.data);
