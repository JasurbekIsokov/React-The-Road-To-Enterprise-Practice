import { Todos } from './TodosManager.type';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { listUsers } from '../../api/userApi';
import { RootState } from '../../store';
import {
  createSlice,
  PayloadAction,
  createSelector,
  createAsyncThunk,
} from '@reduxjs/toolkit';

type ApiStatus = 'IDLE' | 'PENDING' | 'SUCCESS' | 'ERROR';

export type TodosState = {
  todos: Todos[];
  fetchTodosStatus: ApiStatus;
};

const initialState: TodosState = {
  todos: [],
  fetchTodosStatus: 'IDLE',
};

export const fetchTodos = createAsyncThunk('todos', listUsers);

// export const todosApiSlice = createApi({
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://jsonplaceholder.typicode.com/',
//   }),
//   tagTypes: ['Todos'],
//   endpoints: (builder) => ({
//     fetchTodos: builder.query<Todos[], void>({
//       query: () => `todos`,
//       transformResponse: (response: { todos: Todos[] }) => {
//         return response.todos;
//       },
//       providesTags: ['Todos'],
//     }),
//   }),
// });

// export const todosSlice = createSlice({
//   name: 'tods',
//   initialState: {
//     todos: {},
//   },

//   reducers: {
//     setUsers: (state, action: PayloadAction<Todos[]>) => {
//       state.todos = action.payload;
//     },
//   },
// });

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<Todos[]>) => {
      state.todos = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.fetchTodosStatus = 'PENDING';
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.fetchTodosStatus = 'SUCCESS';
      state.todos = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.fetchTodosStatus = 'ERROR';
    });
  },
});

export const { setUsers } = todosSlice.actions;



export default todosSlice.reducer;
