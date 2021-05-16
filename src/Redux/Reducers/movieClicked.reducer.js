// Used to store the movie clicked
const movieClicked = (state = [], action) => {
    switch (action.type) {
        case 'SET_CLICK':
            return action.payload;
        case 'RESET_CLICK':
            return state;
        default:
            return state;
    }
}

export default movieClicked;