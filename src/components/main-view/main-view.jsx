import React from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { DirectorView } from '../director-view/director-view';
import { GenreView } from '../genre-view/genre-view';
import { LoginView } from '../login-view/login-view';
//import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { RegistrationView } from '../registration-view/registration-view';
import { NavBar } from '../navbar-view/navbar-view';
import { ProfileView } from '../profile-view/profile-view';

import { connect } from 'react-redux';
import { setMovies } from '../../actions/actions';
import MoviesList from '../movies-list/movies-list';

import './main-view.scss';


class MainView extends React.Component {
  constructor() {
    super();
// Initial state is set to null
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user')
      });
      this.getMovies(accessToken);
    }
  }

  /*When a movie is clicked, this function is invoked and updates the state of the `selectedMovie` *property to that movie*/

  setSelectedMovie(movie) {
    this.setState({
      selectedMovie: movie
    });
  }

  /* When a user successfully logs in, this function updates the `user` property in state to that *particular user*/

  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username,
      email: authData.user.Email,
      birthday: authData.user.Birth_date
    });
  
    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    localStorage.setItem('email', authData.user.Email);
    localStorage.setItem('birthday', authData.user.Birth_date);
    this.getMovies(authData.token);
  }

  getMovies(token) {
    axios.get('https://grandflix.herokuapp.com/movies', {
      headers: { Authorization: `Bearer ${token}`}
    })
    .then(response => {
      //this.setState({
        //movies: response.data
      //});
      this.props.setMovies(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    //const { movies, user } = this.state;
    let { movies } = this.props;
    let { user } = this.state;

  
    return (
      <Router>
        <NavBar user={user}/>
        <Container className="d-flex">

        <Row className="main-view justify-content-md-center">

          <Route exact path="/" render={() => {
            if (!user) return <Col> <LoginView onLoggedIn={user => this.onLoggedIn(user)} /> </Col>

            if (movies.length === 0) return <div className="main-view" />;

            //return movies.map(m => (
              //<Col md={3} key={m._id} className="card-group mt-5">
                //<MovieCard movie={m} />
              //</Col>
            //))

            return <Col md={3} key={m._id} className="card-group mt-5"><MoviesList movies={movies}/></Col>;

          }} />


          <Route path="/register" render={() => {
           // if (user) return <Redirect to="/" />

            return <Col>
              <RegistrationView />
            </Col>
          }} />


          <Route path="/movies/:movieId" render={({ match, history }) => {
            if (!user) return <Col> <LoginView onLoggedIn={user => this.onLoggedIn(user)} /> </Col>

            if (movies.length === 0) return <div className="main-view" />;
            return <Col md={8}>
              <MovieView movie={movies.find(m => m._id === match.params.movieId)} onBackClick={() => history.goBack()} />
            </Col>
          }} />


          <Route path="/directors/:name" render={({ match, history }) => {
            if (!user) return <Col> <LoginView onLoggedIn={user => this.onLoggedIn(user)} /> </Col>

            if (movies.length === 0) return <div className="main-view" />;
            return <Col md={8}>
              <DirectorView director={movies.find(m => m.Director.Name === match.params.name).Director} onBackClick={() => history.goBack()} />
            </Col>
          }
          } />


          <Route path="/genres/:name" render={({ match, history }) => {
            if (!user) return <Col> <LoginView onLoggedIn={user => this.onLoggedIn(user)} /> </Col>

            if (movies.length === 0) return <div className="main-view" />;
            return <Col md={8}>
              <GenreView  genreMovies={movies.filter(m => m.Genre.Name === match.params.name)} 
                         genre={movies.find(m => m.Genre.Name === match.params.name).Genre} 
                         onBackClick={() => history.goBack()} />
            </Col>
          }
          } />


          <Route path={`/users/${user}`} render={({match, history}) => {
              if (!user) return <Redirect to = "/" />
              return <Col>
                <ProfileView movies={movies} user={user} onBackClick={()=> history.goBack()}/></Col>
            }}/>


          <Route path={`/user-update/${user}`} render={({match, history}) => {
              if (!user) return <Redirect to = "/" />
              return <Col>
              <UserUpdate user={user} onBackClick={() => history.goBack()}/></Col>
            }}/>


        </Row> 
        </Container>
      </Router>
    );
  }
}

let mapStateToProps = state => {
  return { movies: state.movies }
}

export default connect(mapStateToProps, { setMovies } )(MainView);


