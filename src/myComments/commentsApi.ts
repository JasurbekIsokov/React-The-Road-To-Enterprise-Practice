export type Comments = {
  postId: string;
  id: string;
  name: string;
  email: string;
  body: string;
};

export type commentsResponce = {
  comments: Comments[];
};

