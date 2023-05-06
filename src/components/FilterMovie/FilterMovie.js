import React from 'react'
import './FilterMovie.css'

const FilterMovie = ({setSearch, setTest}) => {
  return (
    <div>
      <form className="search" action="">
        <input type="search" placeholder="Search here..." required onChange={(e)=> setSearch(e.target.value)}></input>
        <button type="submit">Search</button>
      </form>  
    </div>
  )
}

export default FilterMovie