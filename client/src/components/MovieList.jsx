import React from 'react';
import ReactDOM from 'react-dom';
import MovieListMaker from './MovieListMaker.jsx';

var MovieList = (props) => (

  <div className="movie-list-item">
    {props.exported.map((movie, index) => {
      return <MovieListMaker
      key={index}
      title={movie.title}
      onSetWatched = {props.onSetWatched}
      />
    })}
  </div>
);

export default MovieList;