import React from 'react';

import { Button, Col, Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import './director-view.scss';

export class DirectorView extends React.Component {
  render() {
    const { director, onBackClick } = this.props;
 
    return ( 
        <Card className="director-view mt-5">
        <Card.Body>
         <Card.Title className="font-weight-bold">{director.Name}</Card.Title>
         <Card.Text>{director.Bio}</Card.Text>
         <Card.Text><span className="font-weight-bold">Birthdate: </span>{director.Birth_date}</Card.Text>
         
         <Button onClick={() => { onBackClick(null); }} variant="warning">Back</Button>
        </Card.Body>
      </Card>   
    )
  }
}
