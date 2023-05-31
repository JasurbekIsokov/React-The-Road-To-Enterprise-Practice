import './App.css';
import AnimalExample from './components/simpleApiLayer/AnimalExample';
import AnimalExampleWithApiStates from './components/simpleApiLayer/AnimalExampleWithApiStates';
import AnimalExampleWithApiStatesConstants from './components/simpleApiLayer/AnimalExampleWithApiStatesConstants';
import AnimalExampleWithUseApiStatus from './components/simpleApiLayer/AnimalExampleWithUseApiStatus';
import AnimalExampleWithUseApi from './components/simpleApiLayer/AnimalExampleWithUseApi';

function App() {
  return (
    <>
      <div className='App mx-auto max-w-6xl text-center my-8'>
        <h1 className='font-semibold text-2xl'>
          React - The Road To Enterprise
        </h1>
        {/* <AnimalExample /> */}
        {/* <AnimalExampleWithApiStates /> */}
        {/* <AnimalExampleWithApiStatesConstants /> */}
        {/* <AnimalExampleWithUseApiStatus /> */}
        {/* <AnimalExampleWithUseApi /> */}
      </div>
    </>
  );
}

export default App;
