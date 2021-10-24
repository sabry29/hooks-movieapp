import './App.css';
import {moviesList} from './assets/mookData';
import MoviesList from './component/MoviesList';
import AddMovie from './component/addMovie';
import SearchBar from './component/SearchBar';

import React, { useState } from 'react';

function App() {

  const [movieList, setMovieList] = useState(moviesList);
  const addMovie =(newMovie) => setMovieList([...moviesList,newMovie]);
  const [searchWord, setSearchWord] = useState('');
  const handleSearch = (e) => setSearchWord(e.target.value);
  const [ratingSearch, setRatingSearch] = useState(0);

  return (
    <div className='container'>
      <SearchBar
        handleSearch={handleSearch}
        setRatingSearch={setRatingSearch}
        ratingSearch={ratingSearch}
      />
     <MoviesList
        moviesArray={
          searchWord
            ? movieList.filter((movie) =>
                movie.title.toLowerCase().includes(searchWord.toLowerCase())
              )
            : ratingSearch > 1
            ? movieList.filter((movie) => movie.rate >= ratingSearch)
            : movieList
        }
      />
      <AddMovie handleAdd={addMovie} />
  </div>
  );
}

export default App;
