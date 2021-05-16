import { put } from 'redux-saga/effects';
import axios from 'axios';

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const clickedMovie = yield axios.get('/api/movie');
        console.log('IN fetchAllMovies - response from get request:', clickedMovie.data);
        yield put({ type: 'SET_MOVIES', payload: clickedMovie.data });

    } catch {
        console.log('get all error');
    }
}

export default fetchAllMovies;