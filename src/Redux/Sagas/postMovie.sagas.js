import axios from 'axios';

function* postMovie(action) {
    try {
        yield axios.post('/api/movie', {title: action.title, poster: action.poster, description: action.description, genre_id: action.genre_id});
    } catch (error) {
        console.log('Error posting movie', error);
    }
}

export default postMovie;