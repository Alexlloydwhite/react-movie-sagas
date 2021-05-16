// IMPORTS FOR REACT FRAMEWORKS!
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import MovieList from '../MovieList/MovieList';
import MovieDetail from '../MovieDetail/MovieDetail';
import AddMovieForm from '../AddMovieForm/AddMovieForm';
import EditMovieForm from '../EditMovieForm/EditMovieForm';
import Admin from '../Admin/Admin';
// -------------------- MUI -----------------------
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// custom "movie theatre" theme!
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
    // theme wraps the app!
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Header />
          <div style={{ marginTop: 80 }}>
            {/* Home Page */}
            <Route path="/" exact component={MovieList} />
            {/* Details page */}
            <Route path='/details/:id' component={MovieDetail} />
            {/* Add Movie page */}
            <Route path="/addmovie" component={AddMovieForm} />
            {/* Edit Page */}
            <Route path="/editmovie/:id" component={EditMovieForm} />
            {/* Admin Page */}
            <Route path="/admin" component={Admin} />
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
}


export default App;
