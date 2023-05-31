import { useEffect, useState } from 'react';

import { fetchCat, fetchDog } from '../api/todosApi';
import { withAsync } from '../helpers/withAsync';

type ApiStatus = 'IDLE' | 'PENDING' | 'SUCCESS' | 'ERROR';

const useFetchDog = () => {
  const [dog, setDog] = useState<string>();
  const [fetchDogStatus, setFetchDogStatus] = useState<ApiStatus>('IDLE');

  // const initFetchDog = async () => {
  //   try {
  //     setFetchDogStatus('PENDING');

  //     const response = await fetchDog();
  //     setDog(response.data.message);

  //     setFetchDogStatus('SUCCESS');
  //   } catch (error) {
  //     setFetchDogStatus('ERROR');
  //   }
  // };

  const initFetchDog = async () => {
    setFetchDogStatus('PENDING');
    const { response, error } = await withAsync(() => fetchDog());

    if (error) {
      setFetchDogStatus('ERROR');
    } else if (response) {
      setDog(response.data.message);
      setFetchDogStatus('SUCCESS');
    }
  };

  return {
    dog,
    initFetchDog,
    fetchDogStatus,
  };
};

const useFetchCat = () => {
  const [cat, setCat] = useState<string>();
  const [fetchCatStatus, setFetchCatStatus] = useState<ApiStatus>('IDLE');

  const initFetchCat = async () => {
    try {
      setFetchCatStatus('PENDING');

      const response = await fetchCat();
      setCat(response.data?.[0].url);

      setFetchCatStatus('SUCCESS');
    } catch (error) {
      setFetchCatStatus('ERROR');
    }
  };

  return {
    cat,
    initFetchCat,
    fetchCatStatus,
  };
};

const useFetchAnimals = () => {
  const { dog, initFetchDog, fetchDogStatus } = useFetchDog();
  const { cat, initFetchCat, fetchCatStatus } = useFetchCat();

  const fetchAnimals = () => {
    initFetchDog();
    initFetchCat();
  };

  useEffect(() => {
    fetchAnimals();
  }, []);

  return {
    dog,
    cat,
    fetchAnimals,
    fetchCatStatus,
    fetchDogStatus,
  };
};

function AnimalExampleWithApiStates() {
  const { dog, cat, fetchCatStatus, fetchDogStatus, fetchAnimals } =
    useFetchAnimals();

  useEffect(() => {
    fetchAnimals();
  }, []);

  return (
    <div className='my-8 mx-auto max-w-2xl'>
      <div className='flex justify-center gap-8'>
        <div className='w-64 h-64'>
          {fetchDogStatus === 'IDLE' ? <p>Welcome</p> : null}{' '}
          {fetchDogStatus === 'PENDING' ? <p>Loading data...</p> : null}{' '}
          {fetchDogStatus === 'ERROR' ? <p>There was a problem</p> : null}{' '}
          {fetchDogStatus === 'SUCCESS' ? (
            <img className='h-64 w-full object-cover' src={dog} alt='Dog' />
          ) : null}
        </div>
        <div className='w-64 h-64'>
          {fetchCatStatus === 'IDLE' ? <p>Welcome</p> : null}{' '}
          {fetchCatStatus === 'PENDING' ? <p>Loading data...</p> : null}{' '}
          {fetchCatStatus === 'ERROR' ? <p>There was a problem</p> : null}{' '}
          {fetchCatStatus === 'SUCCESS' ? (
            <img className='h-64 w-full object-cover' src={cat} alt='Dog' />
          ) : null}
        </div>
      </div>
      <button
        onClick={fetchAnimals}
        className='mt-4 bg-blue-800 text-blue-100 p-4'
      >
        Fetch animals
      </button>
    </div>
  );
}

export default AnimalExampleWithApiStates;
