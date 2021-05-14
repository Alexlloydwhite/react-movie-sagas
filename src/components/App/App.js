// IMPORTS FOR REACT FRAMEWORKS!
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import MovieList from '../MovieList/MovieList';
import MovieDetail from '../MovieDetail/MovieDetail';
import AddMovieForm from '../AddMovieForm/AddMovieForm';
// -------------------- MUI -----------------------
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#800020',
      contrastText: '#ffe5b4'
    },
    secondary: {
      main: '#d5C7bc',
      contrastText: 'white'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Header />
          <div style={{ marginTop: 80 }}>
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
    </ThemeProvider>
  );
}


export default App;
