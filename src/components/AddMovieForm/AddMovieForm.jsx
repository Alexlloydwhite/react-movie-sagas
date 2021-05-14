import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const AddMovieForm = () => {
    const [movieTitle, setMovieTitle] = useState('');
    const [movieUrl, setMovieUrl] = useState('');
    const [movieDescription, setMovieDescription] = useState('');
    const [genre, setGenre] = useState('')
    const dispatch = useDispatch();
    // array of genres from the store
    const genres = useSelector(store => store.genres);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('clicked submit form');
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRE' })
    }, [])

    return (
        <div>
            <h1>Add a New Movie!</h1>
            {/* form for submitting new movie */}
            <form onSubmit={handleSubmit}>
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
                    onChange={(e) => setGenre(e.target.value)}
                >
                    {/* maps over array of genres, displays each as an option! */}
                    {genres.map(genre => {
                        return <option key={genre.id}>{genre.name}</option>
                    })}
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddMovieForm;