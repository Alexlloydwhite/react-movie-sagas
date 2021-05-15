import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const EditMovieForm = () => {
    const dispatch = useDispatch();
    const params = useParams();

    const movie = useSelector(store => store.movieEdit)
    console.log('movie to edit is:', movie);

    useEffect(() => {
        dispatch({ type: 'SET_MOVIE_CLICK', payload: params.id });
    }, [])

    const handleSubmit = () => {
        console.log('Clicked handle submit');
    }

    const handleTitleChange = (e) => {
        dispatch({
            type: 'EDIT_ONCHANGE',
            payload: { property: 'title', value: e.target.value }
        });
    }

    const handleDescChange = (e) => {
        dispatch({
            type: 'EDIT_ONCHANGE',
            payload: { property: 'description', value: e.target.value }
        });
    }

    return (
        <div>
            <h5>Edit Movie Form Here -- Under Construction!</h5>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        value={movie.title}
                        placeholder="Title"
                        onChange={(e) => handleTitleChange(e)}
                    />
                    <input
                        value={movie.description}
                        placeholder="Description"
                        onChange={(e) => handleDescChange(e)}
                    />
                </form>
            </div>
        </div>
    );
}

export default EditMovieForm;