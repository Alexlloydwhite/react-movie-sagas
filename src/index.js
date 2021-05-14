import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('SET_MOVIE_CLICK', getMovieById);
}

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

function* getMovieById(action) {
    // get movie based on ID of movie clicked
    try {
        const movieClick = yield axios.get(`/api/movie/${action.payload}`)
        console.log(`IN getMovieById - response from GET request:`, movieClick.data);
        // dispatch to reducer to hold state of movie clicked
        yield put ({ type: 'SET_CLICK', payload: movieClick.data})
    } catch (error) {
        console.log('Error in getMovieById:', error);
    }
} 

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie clicked
const movieClicked = (state = [], action) => {
    switch (action.type) {
        case 'SET_CLICK':
            return action.payload;
        default:
            return state;

    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movieClicked
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
