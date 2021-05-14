import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const MovieDetail = () => {
    const movieClickedDetail = useSelector(store => store.movieClicked);
    const history = useHistory();

    return (
        <div>
            {movieClickedDetail.map(movie => {
                return <h1 key={movie.id}>{movie.description}</h1>
            })}
            <button onClick={() => history.push('/')}>Back to List</button>
        </div>
    );
}

export default MovieDetail;