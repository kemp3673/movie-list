import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

var MovieListMaker = ({title, onSetWatched}) => (
  <ul style={{border:"1px solid black", background:"#dbdbdb", width:"160px", color:"black"}}>{title} <button onClick={event => onSetWatched({title})}>Watched</button></ul>
)




export default MovieListMaker;