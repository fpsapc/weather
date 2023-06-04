import React from "react";
import Movie from "./Movie";
import movies from '../movies.json'

const Movies = () => {
  return (
    movies.map((movie)=> {
        return(
                <Movie title={movie.title} poster={movie.poster}/>
        )
    })
  )
}

export default Movies;

