import { useState } from 'react';
import './App.css';
import { MovieList } from './components/Data/MovieList';
import ListMovies from './components/ListMovies/ListMovies';
import FilterMovie from './components/FilterMovie/FilterMovie';
import AddMovie from './components/AddMovie/AddMovie';
import FiltredList from './components/FiltredList/FiltredList'
import FiltredListt from './components/FiltredList/FiltredListt'




function App() {

  const [movie, setMovie]= useState(MovieList);
  const [search, setSearch]=useState("");


  const add = (newMovie) => {setMovie([ ...movie, newMovie ])}

  return (
    <div className="App">
    {/* FilterMovie component for filtering movies */}
    <FilterMovie setSearch={setSearch} />
    {/* Conditional rendering based on search value */}
    {search === "" ? (
      // Render ListMovies component if search query is empty
      <ListMovies Movies={movie} search={search} />
    ) : (
      // Render FiltredList and FiltredListt components if search  is not empty
      <div>
        <FiltredList Movies={movie} search={search} />
        <FiltredListt Movies={movie} search={search} />
      </div>
    )}
    {/* AddMovie component for adding new movies */}
    <AddMovie add={add} />
  </div>
)}

export default App