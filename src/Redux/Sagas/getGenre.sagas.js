import { put } from 'redux-saga/effects';
import axios from 'axios';

function* getGenre() {
    try {
        const genre = yield axios.get('/api/genre');
        console.log('IN getGenre - response from GET request:', genre.data);
        yield put({ type: 'SET_GENRE', payload: genre.data })
    } catch {
        console.log('error in getGenre:');
    }
}

export default getGenre;