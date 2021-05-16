const movieSearched = (state=[], action) => {
    switch(action.type) {
        case 'SET_SEARCH_STATE':
            console.log('IN movieSearched reducer, search is:', action.payload);
            return action.payload;
        default:
            return state;
    }
}

export default movieSearched;