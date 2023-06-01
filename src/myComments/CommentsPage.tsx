import React, { useEffect } from 'react';
import {
  setComments,
  useFetchCommentsQuery,
} from '../myComments/commentsSlice';
import { useSelector, useDispatch } from 'react-redux';

const CommentsPage = () => {
  const dispatch = useDispatch();

  const { data: comments, isLoading, isError, error } = useFetchCommentsQuery();

  console.log(error);

  useEffect(() => {
    if (comments) {
      dispatch(setComments(comments));
    }
  }, [comments, dispatch]);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  if (isError) {
    return <h1>{error?.error}</h1>;
  }

  return <div>CommentsPage</div>;
};

export default CommentsPage;
