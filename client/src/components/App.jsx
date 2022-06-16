import React from 'react';
import ReactDOM from 'react-dom';
import movieData from './movieData.js';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';
import Watched from './Watched.jsx';
// import MovieListMaker from './MovieListMaker.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: movieData,
      userAdded: [],
      movieOriginal: movieData
    };
  }

  onSearchButtonClick(searchTerm) {
    this.setState({movieList: []});
    let tempArray = [];
    for (var i = 0; i < this.state.movieList.length; i++) {
      let movie = this.state.movieList[i];
      if (movie.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        console.log(tempArray);
        tempArray.push(movie);
      }
    }
    if (tempArray.length === 0) {
      this.setState({movieList: [{title: '*** Sorry... but it appears there are no movies that match your query. Please try again ***'}]})
    } else {
      this.setState({movieList: tempArray});
    }
  }

  onAddClick(added) {
    if (added.length !== 0) {
      let tempArray = this.state.userAdded;
      let addingMovie = [{title: added, watched: false}];
      let oldArray = movieData;
      this.setState({movieList: movieData.concat(addingMovie), userAdded: tempArray.concat(addingMovie)});
    }
  }

  displayAdded() {
    let tempArray = this.state.userAdded;
    this.setState({movieList: tempArray});
  }

  displayAll() {
    let tempArray = this.state.userAdded;
    let OGMovies = this.state.movieOriginal;
    this.setState({movieList: OGMovies.concat(tempArray)});
  }

  onWatchCLick() {
    let AddedArray = this.state.userAdded;
    let OGMovies = this.state.movieOriginal;
    let totalArray = OGMovies.concat(AddedArray);
    var watchedMovies =  [];
    for (var i = 0; i < totalArray.length; i++) {
      if (totalArray[i].watched === true) {
        watchedMovies.push(totalArray[i]);
      }
    }
    this.setState({movieList: watchedMovies});
  }

  onUnwatchedClick() {
    let AddedArray = this.state.userAdded;
    let OGMovies = this.state.movieOriginal;
    let totalArray = OGMovies.concat(AddedArray);
    var watchedMovies =  [];
    for (var i = 0; i < totalArray.length; i++) {
      if (totalArray[i].watched === false) {
        watchedMovies.push(totalArray[i]);
      }
    }
    this.setState({movieList: watchedMovies});
  }

  onSetWatched(passedTitle) {
    let totalArray = this.state.movieList;
    for (var i = 0; i < totalArray.length; i++) {
      if (totalArray[i].title === passedTitle.title) {
        if (totalArray[i].watched === false) {
          totalArray[i].watched = true;
        } else if (totalArray[i].watched === true) {
          totalArray[i].watched = false;
        }

      }
    }
    this.setState({movieList: totalArray});
  }


  render () {
    return (

      <div >
        <h1 style={{color:"#9c061a"}}>Totally Legit Movies</h1>
        <Search onSearchButtonClick={this.onSearchButtonClick.bind(this)}/>
        <br></br>
        <AddMovie onAddClick={this.onAddClick.bind(this)} displayAdded={this.displayAdded.bind(this)} displayAll={this.displayAll.bind(this)}/>
        <br></br>
        <Watched onWatchClick={this.onWatchCLick.bind(this)} onUnwatchedClick={this.onUnwatchedClick.bind(this)}/>
        <MovieList classname="List" exported={this.state.movieList} onSetWatched={this.onSetWatched.bind(this)}/>
      </div>
    );
  }
}



ReactDOM.render(<App />, document.getElementById('app'));
export default App;





