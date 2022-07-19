import React from 'react';

import { Button, Col, Container, Row, Col } from 'react-bootstrap';

import './director-view.scss';

export class DirectorView extends React.Component {
  render() {
    const { director, onBackClick } = this.props;
 
    return (
      <Container className="director-view">
        <Row>
          <Col className="label">Director: </Col>
          <Col className="value">{director.Name}</Col>
        </Row>
        <Row className="mt-3">
          <Col className="label">Bio: </Col>
          <Col className="value">{director.Bio}</Col>
        </Row>
        <Row className="mt-3">
          <Col className="label">Birth: </Col>
          <Col className="value">{director.Birth_date}</Col>
        </Row>
        <Button onClick={() => { onBackClick(null); }} variant="warning">Back</Button>
      </Container>
    )
  }
}
