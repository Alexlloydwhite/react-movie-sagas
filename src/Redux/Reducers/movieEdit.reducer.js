const movieEdit = (state={}, action) => {
    console.log('IN movieEdit reducer action is:', action);
    switch(action.type) {
        case 'SET_MOVIE_EDIT':
            return { id: action.id, title: action.title, description: action.description };
        case 'EDIT_ONCHANGE':
            return {
                ...state,
                [action.payload.property]: action.payload.value
            }
        default:
            return state;
    }
}

export default movieEdit;