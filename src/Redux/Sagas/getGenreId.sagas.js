import axios from 'axios';
import { put } from 'redux-saga/effects';

function* getGenreById(action) {
    try {
        const genre = yield axios.get(`/api/genre/${action.id}`);
        console.log(`IN: getGenreByID for id ${action.id}. response from GET request: ${genres.data}`);
        yield put({ type: 'SET_GENRE_BY_ID', payload: genre.data})
    } catch (err) {
        console.log(`IN: getGenreByID for id ${action.id}. error in getting genre by movie ID: ${err}`);
    }
}

export default getGenreById;