import React from 'react';
import useSWR from 'swr';

import './App.css';
import fetcher from './helpers/fetcher'
import banner from './banner.jpg'
import GhibliCard from './components/GhibliCard';

const API_URL = 'https://ghibliapi.herokuapp.com/films'

const App = () => {
  const { data, error } = useSWR(API_URL, fetcher)
  
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div className="App">
      <img src={banner} alt="Banner"/>
        <GhibliCard 
          data={data}
          error={error}
        />
    </div>
  );
}

export default App;