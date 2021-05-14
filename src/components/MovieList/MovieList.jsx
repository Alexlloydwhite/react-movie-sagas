// IMPORTS FOR REACT FRAMEWORKS!
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
// -------------------- MUI -----------------------
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { Container, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    img: {
        cursor: "pointer"
    }
}));

function MovieList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();
    const movies = useSelector(store => store.movies);

    // Functions fires on click of img poster
    // Grabs the movies ID and sends it to store
    // We will use this to load the movies details
    const handleDetailsView = (id) => {
        history.push(`/details/${id}`)
        dispatch({ type: 'SET_MOVIE_CLICK', payload: id })
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <Container>
            <Typography 
                variant="h2"
                align="center"
            >
                Movie List
        </Typography>
            <br />
            <Grid container spacing={5}>
                {movies.map(movie => {
                    return (
                        <Card key={movie.id} elevation={0} className={classes.root}>
                            <CardContent>
                                <img
                                    src={movie.poster}
                                    alt={movie.title}
                                    className={classes.img}
                                    //  on click of movie poster img fire function to hold ID in redux
                                    onClick={() => handleDetailsView(movie.id)}
                                />
                            </CardContent>
                        </Card>
                    );
                })}
            </Grid>
        </Container>

    );
}

export default MovieList;