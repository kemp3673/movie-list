import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

let searchTerm = '';
var Search = (props) => (

  <div className="search-bar form-inline">
  <input type="text" onChange={event => {searchTerm = event.target.value}} />
  <button style={{background:"blue", color:"white"}}onClick={event => {props.onSearchButtonClick(searchTerm)}} >Search
  </button>
</div>
)


export default Search;