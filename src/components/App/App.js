import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import MovieList from '../MovieList/MovieList';
import MovieDetail from '../MovieDetail/MovieDetail';
import AddMovieForm from '../AddMovieForm/AddMovieForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div style={{marginTop: 80}}>
          <Route path="/" exact>
            <MovieList />
          </Route>
          {/* Details page */}
          <Route path='/details/:id' component={MovieDetail} />
          {/* Add Movie page */}
          <Route path="/addmovie" component={AddMovieForm} />
        </div>
      </Router>
    </div>
  );
}


export default App;
