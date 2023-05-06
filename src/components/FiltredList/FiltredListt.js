import React from 'react'
import Moviestyle from '../Movie/Moviestyle'

function ListMovies({Movies,search}) {
  return (
    <div style={{display:'flex', flexWrap:'wrap' , marginLeft:"200px"}}>
    { Movies.filter(Movie => Movie.name.toUpperCase().includes(search.toUpperCase().trim()))
    .map (Movie => <Moviestyle Movie={Movie} key={Movie.id}/> )}
    </div>
  )}
  

export default ListMovies