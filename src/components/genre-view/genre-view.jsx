import React from 'react';

import { Button, Col, Container, Row } from 'react-bootstrap';

import './genre-view.scss';

export class GenreView extends React.Component {
  render() {
    const { genre, genreMovies, onBackClick } = this.props;

    return (
      <Container>
        <Row>
          <Col className="label">Genre: </Col>
          <Col className="value">{genre.Name}</Col>
        </Row>
        <Row className="mt-3">
          <Col className="label">Description: </Col>
          <Col className="value">{genre.Description}</Col>
        </Row>
        <Row className="mt-3">
          <Col className="label">Movies on this Genre: </Col>
          <Col className="value">{genreMovies.map((movie) => (
            <MovieCard key={movie._id} movie={movie}>
              {movie.title}
            </MovieCard>
          ))}</Col>
        </Row>
          
        <Button className="d-block mt-3" onClick={() => { onBackClick(null); }} variant="warning">Back</Button>
      </Container>
    )
  }
}

/*GenreView.propTypes = {
  genre: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired
  }).isRequired
};

import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { MovieCard } from '../movie-card/movie-card';

export class GenreView extends React.Component {
  constructor() {
    super();
    this.state;
  }

  render() {
    const { genre, genreMovies, goBack } = this.props;
    return (
      <Container className="mt-5" style={{ width: '80%' }}>
        <h1 className="mb-1">{genre.name}</h1>
        <Button className="mb-4" variant="warning" onClick={goBack}>
          « Back
        </Button>

        <h2 className="subtitle">DESCRIPTION: </h2>
        <p>{genre.description}</p>
        <h2 className="subtitle">MOVIES ON THIS GENRE: </h2>
        <Row className="justify-content-center mt-3">
          {genreMovies.map((movie) => (
            <MovieCard key={movie._id} movie={movie}>
              {movie.title}
            </MovieCard>
          ))}
        </Row>
      </Container>
    );
  }
}




<Row className="mt-3">
          <Col className="label">Movies on this Genre: </Col>
          <Col className="value">{genreMovies.map((movie) => (
            <MovieCard key={movie._id} movie={movie}>
              {movie.title}
            </MovieCard>
          ))}</Col>
        </Row>*/