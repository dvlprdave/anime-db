import React from 'react';
import useSWR from 'swr';

import './App.css';

const API_URL = 'https://ghibliapi.herokuapp.com/films'

const App = () => {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error } = useSWR(API_URL, fetcher)
  
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  console.log(data);
  

  return (
    <div className="App">
      <h1>Ghibli DB</h1>
      <div className="App-container">
      {data.map(film => (
        <div className='film-card' key={film.id}>
          <h1 className='film-title'>{film.title}</h1>

          <div className='film-card_body'>
            <p className='film-description'>{film.description.substring(0, 200)}...</p>

            <div className='film-footer'>
              <p><span className='film-footer_span'>Score</span>{film.release_date}</p>
              <p><span className='film-footer_span'>Producer</span>{film.producer}</p>
            </div>
          </div>
          
        </div>
      ))}
      </div>
    </div>
  );
}

export default App;