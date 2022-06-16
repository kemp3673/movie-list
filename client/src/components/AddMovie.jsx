import React from 'react';
import App from './App.jsx';

let addingMovie = '';
var AddMovie = (props) => (

  <div className="search-bar form-inline">
  <input type="text" onChange={event => {addingMovie = event.target.value}} />
  <button style={{background:"green", color:"white"}} onClick={event => {props.onAddClick(addingMovie)}} > Add Movie
  </button>
  <br></br>
  <button style={{background:"#a9b7e8"}} onClick={event => {props.displayAdded()}} >Show Added
  </button>
  <button style={{background:"#a9b7e8"}} onClick={event => {props.displayAll()}} >Show All
  </button>
</div>
)




export default AddMovie;