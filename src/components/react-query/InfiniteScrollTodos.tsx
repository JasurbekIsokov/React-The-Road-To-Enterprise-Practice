import { useInfiniteQuery } from 'react-query';
import { fetchTodosByCursor, TodosDataWithCursor } from '../../api/todosApi';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const InfiniteScrollTodos = () => {
  const { ref: loadMoreRef, inView } = useInView();

  const {
    data: todos,
    isLoading,
    isFetchingNextPage,
    isSuccess,
    isError,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery<TodosDataWithCursor>(
    'todos',
    ({ pageParam = 0 }) => fetchTodosByCursor(pageParam),
    {
      getNextPageParam: (lastPage, pages) => {
        return lastPage.nextCursor;
      },
    }
  );

  useEffect(() => {
    if (inView && !isFetchingNextPage && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <div className='py-8 max-w-2xl mx-auto'>
      <div>
        <h2 className='font-bold text-2xl mb-4'>Infinite Scroll Quotes</h2>
        {isError ? (
          <p className='text-red-900'>
            There was a problem with fetching quotes
          </p>
        ) : null}{' '}
        {isLoading ? <p>Fetching quotes</p> : null}{' '}
        {isSuccess ? (
          <div>
            <div className='max-h-96 overflow-y-auto divide-y'>
              {/* {todos?.map((todo) => {
                return (
                  <blockquote
                    key={todo.id}
                    className='relative p-4 text-xl italic border-l-4 bg-neutral-100
    text-neutral-600 border-neutral-500 quote'
                  >
                    <p className='mb-4'>"{todo.title}"</p>
                    <cite className='flex items-center justify-center'>
                      <div className='flex flex-col items-start'>
                        <span className='mb-1 text-sm italic font-bold'>
                          {todo.title}
                        </span>
                      </div>
                    </cite>
                  </blockquote>
                );
              })} */}
              <div ref={loadMoreRef}></div>
            </div>
            {isFetchingNextPage ? <span> Loading...</span> : null}{' '}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default InfiniteScrollTodos;
