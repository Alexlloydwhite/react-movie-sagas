import { put } from 'redux-saga/effects';
import axios from 'axios';

function* getMovieById(action) {
    // get movie based on ID of movie clicked
    try {
        const movieClick = yield axios.get(`/api/movie/${action.payload}`)
        console.log(`IN getMovieById - response from GET request:`, movieClick.data);
        // dispatch to reducer to hold state of movie clicked
        yield put({ type: 'SET_CLICK', payload: movieClick.data })
    } catch (error) {
        console.log('Error in getMovieById:', error);
    }
}

export default getMovieById;