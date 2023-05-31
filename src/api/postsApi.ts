import api from './api';

export type Post = {
  userId: string;
  id: string;
  title: string;
  body: string;
};

export type PostsResponse = {
  posts: Post[];
};

export const fetchPosts = () =>
  api.get<PostsResponse>('/posts').then((res) => res.data);

export const postPosts = (post: Omit<Post, 'id'>) => api.post('/posts', post);

