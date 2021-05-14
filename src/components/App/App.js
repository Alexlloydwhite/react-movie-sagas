import {HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import MovieList from '../MovieList/MovieList';
import MovieDetail from '../MovieDetail/MovieDetail';
import AddMovieForm from '../AddMovieForm/AddMovieForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        <Route path='/details/:id' component={MovieDetail} />
        {/* Add Movie page */}
        <Route path="/addmovie" component={AddMovieForm} />
      </Router>
    </div>
  );
}


export default App;
