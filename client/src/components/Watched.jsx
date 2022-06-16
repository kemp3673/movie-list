import React from 'react';
import App from './App.jsx';

var Watched = (props) => (
  <div>
    <button onClick={event => {props.onWatchClick()}} >Watched
    </button>
    <button onClick={event => {props.onUnwatchedClick()}} >Unwatched
    </button>
  </div>
)

export default Watched;
