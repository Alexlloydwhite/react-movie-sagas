import { put } from '@redux-saga/core/effects';
import axios from 'axios';

function* searchMovies(action) {
    try {
        console.log('IN searchMovies saga: searching for:', action.search);
        const searchResult = yield axios.get(`api/search/${action.search}`);
        yield put({ type: 'SET_SEARCH_STATE', payload: searchResult.data })
    } catch (error) {
        console.log(`ERROR on search: ${action.search}: ${error}`);
    }
}

export default searchMovies;