import React from 'react';
import useSWR from 'swr';

import './App.css';
import fetcher from './helpers/fetcher'
import GhibliCard from './components/GhibliCard';

// const API_URL = 'https://ghibliapi.herokuapp.com/films'
const API_URL = 'https://kitsu.io/api/edge/trending/anime'

const App = () => {
  const { data, error } = useSWR(API_URL, fetcher)

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  console.log(data);


  return (
    <div className="App">
      <h1>Anime DB</h1>
      <GhibliCard
        data={data}
        error={error}
      />
    </div>
  );
}

export default App;