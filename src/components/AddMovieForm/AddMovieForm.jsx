import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

const AddMovieForm = () => {
    const [movieTitle, setMovieTitle] = useState('');
    const [movieUrl, setMovieUrl] = useState('');
    const [movieDescription, setMovieDescription] = useState('');
    const [genre, setGenre] = useState('');
    const [genreId, setGenreId] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    // array of genres from the store
    const genres = useSelector(store => store.genres);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('clicked submit form');
        console.log(genre);
        dispatch({ type: 'POST_MOVIE', title: movieTitle, poster: movieUrl, description: movieDescription, genre_id: genreId })
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRE' })
    }, [])

    return (
        <div>
            <h1>Add a New Movie!</h1>
            {JSON.stringify(genreId)}
            {/* form for submitting new movie */}
            <form onSubmit={handleSubmit} id="movieform">
                {/* input takes title */}
                <input
                    value={movieTitle}
                    placeholder="Movie Title"
                    onChange={(e) => setMovieTitle(e.target.value)}
                />
                {/* input takes url */}
                <input
                    value={movieUrl}
                    placeholder="Movie Url"
                    onChange={(e) => setMovieUrl(e.target.value)}
                />
                {/* input takes description */}
                <input
                    value={movieDescription}
                    placeholder="Movie Description"
                    onChange={(e) => setMovieDescription(e.target.value)}
                />
                {/* selector for genre */}
                <select
                    form="movieform"
                    onChange={(e) => setGenreId(e.target.value)}
                >
                    {/* maps over array of genres, displays each as an option! */}
                    {genres.map(genre => {
                        return <option key={genre.id} value={genre.id}>{genre.name}</option>
                    })}
                </select>
                <br />
                <button onClick={() => history.push('/')}>Cancel</button>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default AddMovieForm;