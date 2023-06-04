import React from 'react'

const Movie = ({title, poster}) => {
  return (
            <div className='movieCard'>
            <img src={poster} alt="Movie" />
            <p>{title}</p>
            </div>
        )
}

export default Movie
