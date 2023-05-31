import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchTodosByPage, TodosData } from '../../api/todosApi';

const PaginatedTodos = () => {
  const [page, setPage] = useState(1);

  const {
    data: todos,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    isPreviousData,
  } = useQuery<TodosData>(['todos', page], () => fetchTodosByPage(page), {
    keepPreviousData: true,
  });

  return (
    <div className='py-8 max-w-2xl mx-auto'>
      <div>
        <h2 className='font-bold text-2xl mb-4'>Paginated todos</h2>
        {isError ? (
          <p className='text-red-900'>
            There was a problem with fetching todos
          </p>
        ) : null}{' '}
        {isLoading ? <p>Fetching todos</p> : null}{' '}
        {isSuccess ? (
          <div>
            <div className='overflow-y-auto divide-y'>
              {' '}
              {todos?.map((todo) => {
                return (
                  <blockquote
                    key={todo.id}
                    className='relative p-4 text-xl italic border-l-4 bg-neutral-100
    text-neutral-600 border-neutral-500 quote'
                  >
                    <p className='mb-4'>"{todo.title}"</p>
                    <cite className='flex items-center justify-center'>
                      <div className='flex flex-col items-start'>
                        <span className='mb-1 text-sm italic font-bold'></span>
                      </div>
                    </cite>
                  </blockquote>
                );
              })}
            </div>
            <div className='flex space-x-3 items-center justify-center mt-4'>
              <button
                onClick={() => setPage((old) => Math.max(old - 1, 0))}
                className={page === 1 ? 'text-gray-400' : ''}
                disabled={page === 1}
              >
                Previous
              </button>{' '}
              <span className='text-lg font-italic'>{page}</span>
              <button
                onClick={() => {
                  if (!isPreviousData && todos?.hasMore) {
                    setPage((old) => old + 1);
                  }
                }}
                className={
                  isPreviousData || !todos?.hasMore ? 'text-gray-400' : ''
                }
                // Disable the Next Page button until we know a next page is available
                disabled={isPreviousData || !todos?.hasMore}
              >
                Next
              </button>
            </div>
            {isFetching ? <span>Loading...</span> : null}{' '}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PaginatedTodos;
