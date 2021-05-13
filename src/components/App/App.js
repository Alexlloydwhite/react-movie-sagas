import {HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import MovieList from '../MovieList/MovieList'
import MovieDetail from '../MovieDetail/MovieDetail'

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
      </Router>
    </div>
  );
}


export default App;
