import React from 'react'

const GhibliCard = ({data}) => (
  <div className='card-container'>
    {data.data.map(anime => {

      let {
        averageRating,
        canonicalTitle, 
        synopsis, 
        coverImage: {small}, 
        posterImage: {medium}
      } = anime.attributes

      return(
      <div key={anime.id}>

        <div>
          <img src={medium} alt='Poster'/>
          <h1 className='card-title'>{canonicalTitle}</h1>
          <p className='card-description'>{synopsis.substring(0, 300)}...</p>
        </div>
      </div>
      )
    })}
  </div>
)

export default GhibliCard