import { useState } from "react";
import { useSelector } from "react-redux";

const AddMovieForm = () => {
    const [movieTitle, setMovieTitle] = useState('');
    const [movieUrl, setMovieUrl] = useState('');
    const [movieDescription, setMovieDescription] = useState('');
    const [genre, setGenre] = useState('Genre 1')

    const genres = useSelector(store => store.genres);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('clicked submit form');
    }

    return (
        <div>
            {JSON.stringify(genres)}
            <h1>Add a New Movie!</h1>
            <form onSubmit={handleSubmit}>
                <input
                    value={movieTitle}
                    placeholder="Movie Title"
                    onChange={(e) => setMovieTitle(e.target.value)}
                />
                <input
                    value={movieUrl}
                    placeholder="Movie Url"
                    onChange={(e) => setMovieUrl(e.target.value)}
                />
                <input
                    value={movieDescription}
                    placeholder="Movie Description"
                    onChange={(e) => setMovieDescription(e.target.value)}
                />
                <select
                    onChange={(e) => setGenre(e.target.value)}
                >
                    <option>Genre 1</option>
                    <option>Genre 2</option>
                    <option>Genre 3</option>
                    <option>Genre 4</option>
                    <option>Genre 5</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddMovieForm;