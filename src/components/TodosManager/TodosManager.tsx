import LazySpinner from '../LazySpinner';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useEffect } from 'react';
import { fetchTodos } from './TodosSlice';

type DisplayTodosProps = {};

const TodosManager = (props: DisplayTodosProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div>
      <h2 className='font-semibold text-xl mb-4'>Todos</h2>
      <ul className='space-y-3'>
        {/* {isFetchTodosSuccess && Array.isArray(todos)
          ? todos?.map((todo) => {
              return (
                <li key={todo.id} className='space-x-3'>
                  <button className='hover:underline'>{todo.email}</button>
                </li>
              );
            })
          : null} */}
      </ul>
      {/* {isLoadingTodos ? <LazySpinner show /> : null} */}
    </div>
  );
};

export default TodosManager;
