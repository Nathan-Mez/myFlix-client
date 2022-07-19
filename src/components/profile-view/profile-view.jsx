
import React from 'react';
import axios from 'axios';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
//import { FavoriteCard } from '../favorite-card/favorite-card';
import '../profile-view/profile-view.scss';

export function ProfileView(props) {
  const { onBackClick, user, movies } = props;
  const username = localStorage.getItem('user');
  const email = localStorage.getItem('email');
  const birthday = localStorage.getItem('birthday');
  const token = localStorage.getItem('token');


  return (
    <Card className="profile-view" style={{ width: '25rem' }} >
        <Card.Body>
         <Card.Title className="font-weight-bold">{username}</Card.Title>
         <Card.Text><span className="font-weight-bold">Email: </span>{email}</Card.Text>
         <Card.Text><span className="font-weight-bold">Birthdate: </span>{birthday}</Card.Text>
         
         <Button onClick={() => { onBackClick(null); }} variant="warning">Back</Button>
        </Card.Body>
      </Card>  

  );
}
