import React,{useState} from 'react';
import {Button} from '@material-ui/core';
import Header from './components/Header'
import Movies from './components/Movies'
type Movie = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
};
function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [tempMovies, setTempMovies] = useState<Movie[]>([]);
  return (
    <div className="App">
      <Header movies={movies} setMovies={setTempMovies} />
      <Movies movies={tempMovies} setMovies={setMovies} setTempMovies={setTempMovies} />
    </div>
  );
}

export default App;
