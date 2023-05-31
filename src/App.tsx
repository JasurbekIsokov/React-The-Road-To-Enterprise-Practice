import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools/build/lib/devtools';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalSpinnerContextProvider from './context/GlobalSpinnerContext';

import './App.css';

import AnimalExample from './components/simpleApiLayer/AnimalExample';
import AnimalExampleWithApiStates from './components/simpleApiLayer/AnimalExampleWithApiStates';
import AnimalExampleWithApiStatesConstants from './components/simpleApiLayer/AnimalExampleWithApiStatesConstants';
import AnimalExampleWithUseApiStatus from './components/simpleApiLayer/AnimalExampleWithUseApiStatus';
import AnimalExampleWithUseApi from './components/simpleApiLayer/AnimalExampleWithUseApi';

import FetchPosts from './components/react-query/FetchPosts';
import UpdatePosts from './components/react-query/UpdatePosts';
import PaginatedTodos from './components/react-query/PaginatedTodos';
import InfiniteScrollTodos from './components/react-query/InfiniteScrollTodos';

import BusinessCardEditor from './components/StateManagementPatterns/BusinessCardEditor';

import GlobalSpinnerExample from './components/ContextAPI/GlobalSpinnerExample';

const queryClient = new QueryClient();

function App() {
  // return (
  //   <>
  //     <QueryClientProvider client={queryClient}>
  //       <ToastContainer />

  //       <div className='App mx-auto max-w-6xl text-center my-8'>
  //         <h1 className='font-semibold text-2xl'>
  //           React - The Road To Enterprise
  //         </h1>
  //         {/* <AnimalExample /> */}
  //         {/* <AnimalExampleWithApiStates /> */}
  //         {/* <AnimalExampleWithApiStatesConstants /> */}
  //         {/* <AnimalExampleWithUseApiStatus /> */}
  //         {/* <AnimalExampleWithUseApi /> */}
  //         {/* <UpdatePosts /> */}
  //         {/* <FetchPosts /> */}
  //         {/* <PaginatedTodos /> */}
  //         {/* <ReactQueryDevtools /> */}

  //         {/* <InfiniteScrollTodos /> */}

  //         <BusinessCardEditor />
  //       </div>
  //     </QueryClientProvider>
  //   </>
  // );

  return (
    <GlobalSpinnerContextProvider>
      <div className='App mx-auto max-w-6xl text-center my-8'>
        <h1 className='font-semibold text-2xl'>
          React - The Road To Enterprise
        </h1>
        <GlobalSpinnerExample />
      </div>
    </GlobalSpinnerContextProvider>
  );
}

export default App;
