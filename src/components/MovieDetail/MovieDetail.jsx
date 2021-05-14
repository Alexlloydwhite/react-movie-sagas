import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

const MovieDetail = () => {
    const movieClickedDetail = useSelector(store => store.movieClicked);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleBackClick = () => {
        history.push('/')
        dispatch({ type: 'RESET_CLICK' });
    }

    return (
        <div className="moviecard">
            {movieClickedDetail.map(movie => {
                return <h1 key={movie.id}>{movie.description}</h1>
            })}
            <button onClick={handleBackClick}>Back to List</button>
        </div>
    );
}

export default MovieDetail;