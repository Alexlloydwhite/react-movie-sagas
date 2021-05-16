const genreById = (state=[], action) => {
    switch(action.type) {
        case 'SET_GENRE_BY_ID':
            return action.payload;
        case 'RESET_GENRE':
            return state;
        default:
            return state;
    }
}

export default genreById;