import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { postPosts, fetchPosts } from '../../api/postsApi';

const UpdatePosts = () => {
  const queryClient = useQueryClient();
  // Quotes mutations
  const createPostMutation = useMutation(postPosts);

  // Form state
  const [form, setForm] = useState({
    title: '',
    body: '',
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, body } = form;

    if (!title || !body) {
      alert('Please provide quote and author text.');
      return;
    }

    await createPostMutation.mutate(form, {
      onSuccess: () => {
        setForm({
          title: '',
          body: '',
        });
        // Tell React-Query to refetch 'top-quotes' and 'quotes' queries
        queryClient.invalidateQueries('posts');
        toast.success('Posts created');
      },
    });
  };

  return (
    <div className='py-8 max-w-2xl mx-auto'>
      <h2 className='font-bold text-2xl mb-4'>Create Pots</h2>
      <form
        onSubmit={onSubmit}
        className='space-y-6 max-w-lg mx-auto text-left'
      >
        <div className='flex flex-col space-y-3'>
          <label>Title</label>
          <input
            type='text'
            name='author'
            value={form.title}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                title: e.target.value,
              }))
            }
          />
        </div>
        <div className='flex flex-col space-y-3'>
          <label>Body</label>
          <input
            type='text'
            name='quote'
            value={form.body}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                body: e.target.value,
              }))
            }
          />
        </div>
        <div className='text-center'>
          <button
            type='submit'
            className='bg-blue-600 text-blue-100 px-4 py-3'
            disabled={createPostMutation.isLoading}
          >
            {createPostMutation.isLoading ? 'Creating Post...' : 'Create Post'}
          </button>
          <button className='border-blue-600 text-blue-600 px-4 py-3'></button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePosts;
