import React from 'react'

const GhibliCard = ({data}) => (
  <div className='card-container'>
    {data.map(film => (
      <div key={film.id}>
        <h1 className='card-title'>{film.title}</h1>

        <div className='card-body'>
          <p className='card-description'>{film.description.substring(0, 200)}...</p>

          <div className='card-footer'>
            <p><span className='card-footer_span'>Release Date:</span>{film.release_date}</p>
          </div>
        </div>
        
      </div>
    ))}
  </div>
)

export default GhibliCard