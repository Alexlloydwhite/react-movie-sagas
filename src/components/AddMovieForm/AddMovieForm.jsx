// IMPORTS FOR REACT FRAMEWORKS!
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
// -------------------- MUI -----------------------
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';

// theme for inputs
const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    },
    cancelBtn: {
        marginRight: 5
    }
})

const AddMovieForm = () => {
    // ---- local state -----
    const [movieTitle, setMovieTitle] = useState('');
    const [movieUrl, setMovieUrl] = useState('');
    const [movieDescription, setMovieDescription] = useState('');
    const [genre, setGenre] = useState('');
    const [genreId, setGenreId] = useState(1);

    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    // array of genres from the store
    const genres = useSelector(store => store.genres);

    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch to store to post movie data to db
        dispatch({ type: 'POST_MOVIE', title: movieTitle, poster: movieUrl, description: movieDescription, genre_id: genreId })
        // after dispatch , clear state of inputs
        setMovieTitle('');
        setMovieUrl('');
        setMovieDescription('');
        setGenreId(1);
    }

    useEffect(() => {
        // hook to grab genres from db
        dispatch({ type: 'FETCH_GENRE' })
    }, [])

    return (
        <Container>
            <Typography 
                variant="h4" 
                gutterBottom
                align="center"
            >
                Add a New Movie
            </Typography>
            {/* form for submitting new movie */}
            <form onSubmit={handleSubmit} id="movieform">
                {/* selector for genre */}
                <InputLabel>Genre</InputLabel>
                <Select
                    form="movieform"
                    onChange={(e) => setGenreId(e.target.value)}
                    fullWidth
                >
                    {/* maps over array of genres, displays each as an option! */}
                    {genres.map(genre => {
                        return <MenuItem key={genre.id} value={genre.id}>{genre.name}</MenuItem>
                    })}
                </Select>
                {/* input takes title */}
                <TextField
                    value={movieTitle}
                    label="Movie Title"
                    className={classes.field}
                    onChange={(e) => setMovieTitle(e.target.value)}
                    variant="outlined"
                    required
                    fullWidth
                />
                {/* input takes url */}
                <TextField
                    value={movieUrl}
                    label="Movie Url"
                    className={classes.field}
                    onChange={(e) => setMovieUrl(e.target.value)}
                    variant="outlined"
                    required
                    fullWidth
                />
                {/* input takes description */}
                <TextField
                    value={movieDescription}
                    label="Movie Description"
                    multiline
                    rows={5}
                    fullWidth
                    className={classes.field}
                    onChange={(e) => setMovieDescription(e.target.value)}
                    variant="outlined"
                    required
                />
                <br />
                <div>
                    {/* Cancel Btn, takes user to home page */}
                    <Button 
                        className={classes.cancelBtn}
                        onClick={() => history.push('/')}
                        color="primary"
                        variant="contained"
                    >
                        Cancel
                </Button>
                    {/* Save Btn, submits form */}
                    <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                    >
                        Save
                </Button>
                </div>
            </form>
        </Container>
    );
}

export default AddMovieForm;