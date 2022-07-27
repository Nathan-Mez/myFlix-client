import React from 'react';

import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";

import Card from 'react-bootstrap/Card';

import './genre-view.scss';

export class GenreView extends React.Component {
  render() {
    const { genre, genreMovies, onBackClick } = this.props;

    return (
        <Card className="mt-5">
          <Card.Body>
           <Card.Title className="font-weight-bold">{genre.Name}</Card.Title>
           <Card.Text>{genre.Description}</Card.Text>
           <Card.Title>Movies on {genre.Name} Genre</Card.Title>
           <Card.Text>
             {genreMovies.map((movie) => (movie.Title+"   "))}
           </Card.Text>
           <Button onClick={() => { onBackClick(null); }} variant="warning">Back</Button>
          </Card.Body>
        </Card>
      
    )
  }
}

