import React, { useState } from 'react'
import {movies} from '../movies';
const MoviesDisplay = () => {
   const [moviesList, setMoviesList] = useState(movies);
   

   const clickFilter = (filterValue)=>{
    const filterMovie = moviesList.filter((movies)=>
      movies.genre == filterValue)
     setMoviesList(filterMovie);

   }
   

 

   
  return (
    <div  className='bg-black flex flex-col gap-5 justify-between pt-10' style={{width: "100%"}}>
      <h1 className="text-3xl font-bold text-4xl font-mono text-white text-center">Find Your Movie </h1>

      <div className="m-auto w-1/2 flex flex-wrap gap-2 h-1/1" >
        <button className='bg-green-400 hover:bg-yellow-300 text-white font-bold py-3 px-5 rounded'  onClick={()=>{setMoviesList(movies)}}>All</button>
        <button className='bg-green-400 hover:bg-yellow-300 text-white font-bold py-3 px-5 rounded'  onClick={()=>clickFilter("Animation")}>Animation</button>
        <button className='bg-green-400 hover:bg-yellow-300 text-white font-bold py-3 px-5 rounded'  onClick={()=>clickFilter("Sci-Fi")}>Sci-Fi</button>
        <button className='bg-green-400 hover:bg-yellow-300 text-white font-bold py-3 px-5 rounded'  onClick={()=>clickFilter("Musical")}>Musical</button>
        <button className='bg-green-400 hover:bg-yellow-300 text-white font-bold py-3 px-5 rounded'  onClick={()=>clickFilter("Drama")}>Drama</button>
        <button className='bg-green-400 hover:bg-yellow-300 text-white font-bold py-3 px-5 rounded'  onClick={()=>clickFilter("Romance")}>Romance</button>
        <button className='bg-green-400 hover:bg-yellow-300 text-white font-bold py-3 px-5 rounded'  onClick={()=>clickFilter("Comedy")}>Comedy</button>
        <button className='bg-green-400 hover:bg-yellow-300 text-white font-bold py-3 px-5 rounded'  onClick={()=>clickFilter("Horror")}>Horror</button>
        <button className='bg-green-400 hover:bg-yellow-300 text-white font-bold py-3 px-5 rounded'  onClick={()=>clickFilter("Coming-of-age")}>Coming-of-age</button>
        <button className='bg-green-400 hover:bg-yellow-300 text-white font-bold py-3 px-5 rounded'  onClick={()=>clickFilter("Thriller")}>Thriller</button>
       
        
      </div>
      
      <div className='grid grid-cols-3 gap-5 m-auto p-5' style={{ width: "76%"}}>
        {moviesList.map(({name, id, image, duration, year, rating, genre})=>(
        <div className='bg-white max-w-80 max-h-90 overflow-hidden p-1.5 rounded border-white' key={id}>
            <img src={image} className='w-1/1 h-1/2'></img>
            <p className='text-black text-justify pl-2 pt-2 text-2xl font-semibold'>{name}</p>
            <p className='text-black text-justify pl-2 pt-2 text-s font-semibold'>Duration: {duration}</p>
            <p className='text-black text-justify pl-2 pt-2 text-s font-semibold'>Release: {year}</p>
            <p className='text-black text-justify pl-2 pt-2 text-s font-semibold'>Rating: {rating}</p>
            <p className='text-black text-justify pl-2 pt-2 text-s font-semibold'>Genre: {genre}</p>
        </div>)
         )}
      </div>
      
       
    </div>
  )
}

export default MoviesDisplay
