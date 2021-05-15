import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
    const movieClickedDetail = useSelector(store => store.movieClicked);
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();

    const handleBackClick = () => {
        history.push('/')
        dispatch({ type: 'RESET_CLICK' });
    }

    const handleEditClick = (id) => {
        history.push(`/editmovie/${id}`)
    }

    useEffect(() => {
        dispatch({ type: 'SET_MOVIE_CLICK', payload: params.id })
    }, [])

    return (
        <div className="moviecard">
            {movieClickedDetail.map(movie => {
                return <h1 key={movie.id}>{movie.description}</h1>
            })}
            <button onClick={handleBackClick}>Back to List</button>
            <button onClick={() => handleEditClick(params.id)}>Edit Movie</button>
        </div>
    );
}

export default MovieDetail;

