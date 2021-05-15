import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const EditMovieForm = () => {
    const dispatch = useDispatch();
    const params = useParams();

    const [editTitle, setEditTitle] = useState('');
    const [editDesc, setEditDesc] = useState('');

    const editMovieDetail = useSelector(store => store.movieClicked)
    console.log('movie to edit is:', editMovieDetail);

    useEffect(() => {
        dispatch({ type: 'SET_MOVIE_CLICK', payload: params.id })
    }, [])

    return (
        <div>
            <h5>Edit Movie Form Here -- Under Construction!</h5>
        </div>
    );
}

export default EditMovieForm;