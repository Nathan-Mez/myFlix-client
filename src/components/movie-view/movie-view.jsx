
import React from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import './movie-view.scss';

export class MovieView extends React.Component {

  keypressCallback(event) {
    console.log(event.key);
  }

  componentDidMount() {
    document.addEventListener('keypress', this.keypressCallback);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.keypressCallback);
  }

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <div className="movie-view d-lg-flex flex-row mx-auto mt-5">
        <div className="movie-poster">
          <img src={movie.ImagePath} />
        </div>
        <div className="movie-details">
          <div className="movie-title">
            <span className="label font-weight-bold">Title: </span>
            <span className="value">{movie.Title}</span>
          </div>
          <div className="movie-duration">
            <span className="label font-weight-bold">Duration: </span>
            <span className="value">{movie.Duration}</span>
          </div>
          <div className="movie-description">
            <span className="label font-weight-bold">Overview: </span>
            <span className="value">{movie.Description}</span>
          </div>

          <div><span className="font-weight-bold">Director: </span>  
          <Link to={`/directors/${movie.Director.Name}`}>
             {"  "+movie.Director.Name}
          </Link>
          </div>

          <div><span className="font-weight-bold">Genre: </span>  
          <Link to={`/genres/${movie.Genre.Name}`}>
             {"  "+movie.Genre.Name}
          </Link>
          </div>
          <br/>

          <Button  variant="warning" onClick={() => { onBackClick(null); }}>Back</Button>
        </div>

      </div>
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
  }).isRequired,
};