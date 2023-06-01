import api from './api';
import { Todos } from '../components/TodosManager/TodosManager.type';

export const listUsers = () => {
  return api.get<{ todos: Todos[] }>('todos').then((res) => res.data.todos);
};
