import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { commentsResponce } from './commentsApi';

export type Comments = {
  postId: string;
  id: string;
  name: string;
  email: string;
  body: string;
};

export const commentsApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode/',
  }),
  tagTypes: ['Comments'],
  endpoints: (builder) => ({
    fetchComments: builder.query<Comments[], void>({
      query: () => `comments`,
    }),
  }),
});

const initialState: commentsResponce = {
  comments: [],
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,

  reducers: {
    setComments: (state, action: PayloadAction<Comments[]>) => {
      state.comments = action.payload;
    },
  },
});

export const { useFetchCommentsQuery } = commentsApiSlice;

export const { setComments } = commentsSlice.actions;

export default commentsSlice.reducer;
