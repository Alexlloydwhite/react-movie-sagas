// IMPORTS FOR REACT FRAMEWORKS!
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();
    // reducer holds the movie clicked
    const movieClickedDetail = useSelector(store => store.movieClicked);
    // on click page, to use back to home page view
    const handleBackClick = () => {
        history.push('/')
        // Resets state of movie clicked
        dispatch({ type: 'RESET_CLICK' });
    }
    // handle click of edit btn
    const handleEditClick = (movie) => {
        // brings user to edit view
        history.push(`/editmovie/${movie.id}`)
        // dispatch store to set state of movie to edit
        dispatch({ type: 'SET_MOVIE_EDIT', id: movie.id, title: movie.title, description: movie.description })
    }
    // this hook allows to page view to persist thru refresh
    useEffect(() => {
        dispatch({ type: 'SET_MOVIE_CLICK', payload: params.id })
    }, [])
    return (
        <div className="moviecard">
            {/* Need to make this look cool... Movie Details go here*/}
            {movieClickedDetail.map(movie => {
                return <div key={movie.id}>
                    {/* Movie Details */}
                    <h1 key={movie.id}>{movie.description}</h1>
                    {/* Edit Button */}
                    <button onClick={() => handleEditClick(movie)}>Edit Movie</button>
                </div>
            })}
            {/* Back Btn */}
            <button onClick={handleBackClick}>Back to List</button>
        </div>
    );
}

export default MovieDetail;

