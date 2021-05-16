import { combineReducers } from 'redux';
import movies from './movies.reducer';
import genres from './genres.reducer';
import movieClicked from './movieClicked.reducer';
import movieEdit from './movieEdit.reducer';
import movieSearched from './search.reducer';
import genreById from './genreById.reducer';

const rootReducer = combineReducers({
        movies,
        genres,
        movieClicked,
        movieEdit,
        movieSearched,
        genreById,
})

export default rootReducer;
