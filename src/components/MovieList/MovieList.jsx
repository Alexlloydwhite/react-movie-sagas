import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import './MovieList.css'

function MovieList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const handleDetailsView = (id) => {
        history.push(`/details/${id}`)
        dispatch({ type: 'SET_MOVIE_ID', payload: id })
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                                <img
                                    src={movie.poster}
                                    alt={movie.title}
                                    onClick={() => handleDetailsView(movie.id)}
                                />
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;