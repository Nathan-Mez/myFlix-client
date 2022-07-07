
import React from 'react';

import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {
  constructor(){
    super();
    this.state = {
      movies: [
        { _id: 1, Title: 'Titanic', Description: 'Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.', ImagePath: 'https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png'},
        { _id: 2, Title: 'The Highwaymen', Description: 'Former Texas Rangers Frank Hamer and Maney Gault come out of retirement and join forces to try and apprehend notorious outlaws Bonnie Parker and Clyde Barrow.', ImagePath: 'https://upload.wikimedia.org/wikipedia/en/6/62/The_Highwaymen_film_poster.jpeg'},
        { _id: 3, Title: 'The Trial of the Chicago 7', Description: 'The film follows the Chicago Seven, a group of anti Vietnam War protesters charged with conspiracy and crossing state lines with the intention of inciting riots', ImagePath: 'https://upload.wikimedia.org/wikipedia/en/c/c2/TrialChicago7poster.jpeg'}
      ],
      selectedMovie: null
    }
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }


  render() {
    const { movies, selectedMovie } = this.state;

    if (movies.length === 0) return <div className="main-view">The list is empty!</div>;

    return (
      <div className="main-view">
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
          ))
        }
      </div>
    );
  }
}