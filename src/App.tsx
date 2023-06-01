// import { QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools/build/lib/devtools';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import GlobalSpinnerContextProvider from './context/GlobalSpinnerContext';

// import './App.css';

// import AnimalExample from './components/simpleApiLayer/AnimalExample';
// import AnimalExampleWithApiStates from './components/simpleApiLayer/AnimalExampleWithApiStates';
// import AnimalExampleWithApiStatesConstants from './components/simpleApiLayer/AnimalExampleWithApiStatesConstants';
// import AnimalExampleWithUseApiStatus from './components/simpleApiLayer/AnimalExampleWithUseApiStatus';
// import AnimalExampleWithUseApi from './components/simpleApiLayer/AnimalExampleWithUseApi';

// import FetchPosts from './components/react-query/FetchPosts';
// import UpdatePosts from './components/react-query/UpdatePosts';
// import PaginatedTodos from './components/react-query/PaginatedTodos';
// import InfiniteScrollTodos from './components/react-query/InfiniteScrollTodos';

// import BusinessCardEditor from './components/StateManagementPatterns/BusinessCardEditor';

// import GlobalSpinnerExample from './components/ContextAPI/GlobalSpinnerExample';

// import TasksBoard from './components/TasksBoard';

// import UsersManager from './components/UsersManager/UsersManager';
// import {
//   resetUsersSlice,
//   resetUsersApiSlice,
//   initialiseUsersApi,
// } from './components/UsersManager/components/usersSlice';

// import { resetStore } from './store';

// import { useAppDispatch } from './store/hooks';
// import TodosManager from './components/TodosManager/TodosManager';

// const queryClient = new QueryClient();

// function App() {
//   const dispatch = useAppDispatch();

//   //return (
//   //   <>
//   //     <QueryClientProvider client={queryClient}>
//   //       <ToastContainer />
//   //       <div className='App mx-auto max-w-6xl text-center my-8'>
//   //         <h1 className='font-semibold text-2xl'>
//   //           React - The Road To Enterprise
//   //         </h1>
//   //         {/* <AnimalExample /> */}
//   //         {/* <AnimalExampleWithApiStates /> */}
//   //         {/* <AnimalExampleWithApiStatesConstants /> */}
//   //         {/* <AnimalExampleWithUseApiStatus /> */}
//   //         {/* <AnimalExampleWithUseApi /> */}
//   //         {/* <UpdatePosts /> */}
//   //         {/* <FetchPosts /> */}
//   //         {/* <PaginatedTodos /> */}
//   //         {/* <ReactQueryDevtools /> */}
//   //         {/* <InfiniteScrollTodos /> */}
//   //         <BusinessCardEditor />
//   //       </div>
//   //     </QueryClientProvider>
//   //   </>
//   // );
//   // return (
//   //   <GlobalSpinnerContextProvider>
//   //     <div className='App mx-auto max-w-6xl text-center my-8'>
//   //       <h1 className='font-semibold text-2xl'>
//   //         React - The Road To Enterprise
//   //       </h1>
//   //       {/* <GlobalSpinnerExample /> */}
//   //       <TasksBoard />
//   //     </div>
//   //   </GlobalSpinnerContextProvider>
//   // );
//   // return (
//   //   <div className='App mx-auto max-w-6xl text-center my-8'>
//   //     <h1 className='font-semibold text-2xl'>React - The Road To Enterprise</h1>
//   //     <UsersManager />
//   //   </div>
//   // );

//   // return (
//   //   <div className='App mx-auto max-w-6xl text-center my-8'>
//   //     <h1 className='font-semibold text-2xl'>React - The Road To Enterprise</h1>
//   //     <main>
//   //       <div className='space-x-4 my-8'>
//   //         <button
//   //           className='shadow px-4 py-3 bg-blue-100'
//   //           onClick={() => {
//   //             dispatch(resetUsersSlice());
//   //             dispatch(resetUsersApiSlice());
//   //           }}
//   //         >
//   //           Reset users slice
//   //         </button>
//   //         <button
//   //           className='shadow px-4 py-3 bg-blue-100'
//   //           onClick={() => dispatch(resetStore())}
//   //         >
//   //           Reset store
//   //         </button>
//   //         <button
//   //           className='shadow px-4 py-3 bg-blue-100'
//   //           onClick={() => dispatch(initialiseUsersApi())}
//   //         >
//   //           Fetch users
//   //         </button>
//   //       </div>
//   //       <UsersManager />
//   //     </main>
//   //   </div>
//   // );

//   return (
//     <div className='App mx-auto max-w-6xl text-center my-8'>
//       <h1 className='font-semibold text-2xl'>React - The Road To Enterprise</h1>
//       <TodosManager />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import CommentsPage from './myComments/CommentsPage';

const App = () => {
  return <CommentsPage />;
};

export default App;
