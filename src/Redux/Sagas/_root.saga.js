import { takeEvery } from 'redux-saga/effects';

import fetchAllMovies from './fetchAllMovies.sagas';
import getMovieById from './getMoviesById.sagas';
import getGenre from './getGenre.sagas';
import postMovie from  './postMovie.sagas';
import editMovie from  './editMovie.sagas';
import searchMovie from './search.saga';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('SET_MOVIE_CLICK', getMovieById);
    yield takeEvery('FETCH_GENRE', getGenre);
    yield takeEvery('POST_MOVIE', postMovie);
    yield takeEvery('EDIT_MOVIE', editMovie);
    yield takeEvery('SET_SEARCH', searchMovie);
}

export default rootSaga;