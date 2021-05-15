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

    const handleEditClick = (movie) => {
        history.push(`/editmovie/${movie.id}`)
        dispatch({ type: 'SET_MOVIE_EDIT', id: movie.id, title: movie.title, description: movie.description })
    }

    useEffect(() => {
        dispatch({ type: 'SET_MOVIE_CLICK', payload: params.id })
    }, [])

    return (
        <div className="moviecard">
            {movieClickedDetail.map(movie => {
                return <div>
                    <h1 key={movie.id}>{movie.description}</h1>
                    <button onClick={() => handleEditClick(movie)}>Edit Movie</button>
                </div>
            })}
            <button onClick={handleBackClick}>Back to List</button>
        </div>
    );
}

export default MovieDetail;

