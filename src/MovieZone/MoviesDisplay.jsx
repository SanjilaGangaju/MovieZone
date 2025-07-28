import React, { useState } from 'react'
import {movies} from '../movies';
const MoviesDisplay = () => {
   const [moviesList, setMoviesList] = useState(movies);
   const [filterMovies, setFilterMovies] = useState(movies);

   const clickFilter = (filterValue)=>{
    const filterMovie = moviesList.filter((movies)=>
      movies.genre == filterValue)
    setFilterMovies(filterMovie);

   }
   

 

   
  return (
    <div>
      <h1>Movie Zone</h1>
      <div>
        <button onClick={()=>clickFilter("Animation")}>Animation</button>
        <button onClick={()=>{}}>Animation</button>
        
      </div>
      
      <div>
        {filterMovies.map(({name, id, image, duration, year, rating, genre})=>(
        <div key={id}>
            <img src={image}></img>
            <span>{name}</span>
            <p>{duration}</p>
            <p>{year}</p>
            <p>{rating}</p>
            <p>{genre}</p>
        </div>)
         )}
      </div>
      
       
    </div>
  )
}

export default MoviesDisplay
