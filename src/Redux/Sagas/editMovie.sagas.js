import axios from 'axios';

function* editMovie(action) {
    try {
        yield axios.put(`/api/movie/${action.id}`, {title: action.title , description: action.description});
    } catch (error) {
        console.log('put request failed:', error);
    }
}

export default editMovie;