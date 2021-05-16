// IMPORTS FOR REACT FRAMEWORKS!
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useParams } from 'react-router-dom';
// -------------------- MUI -----------------------
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

// theme for inputs
const useStyles = makeStyles({
    cancelBtn: {
        marginRight: 5
    },
    poster: {
        marginRight: 20
    }
})

const MovieDetail = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();
    const classes = useStyles();
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
        dispatch({ type: 'SET_MOVIE_CLICK', payload: params.id });
        dispatch({ type: 'FETCH_GENRE_BY_ID', id: params.id })
    }, [])
    return (
        <Container>
            {movieClickedDetail.map(movie => {
                return <div key={movie.id}>
                    {/* Movie Details */}
                    <Typography 
                        variant="h2"
                        align="center"
                        gutterBottom
                    >
                        {movie.title}
                    </Typography>
                    {/* Movie Poster */}
                    <img 
                        className={classes.poster}
                        src={movie.poster} 
                        align="left"
                    />
                    <Typography variant="h4" gutterBottom>{movie.description}</Typography>
                    {/* Back Btn */}
                    <Button 
                        color="primary"
                        variant="contained"
                        className={classes.cancelBtn}
                        onClick={handleBackClick}
                    >
                        Back to List
                    </Button>
                    {/* Edit Button */}
                    <Button 
                        color="primary"
                        variant="contained"
                        onClick={() => handleEditClick(movie)}
                    >
                        Edit Movie
                    </Button>

                </div>
            })}
        </Container>
    );
}

export default MovieDetail;

