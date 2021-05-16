// IMPORTS FOR REACT FRAMEWORKS!
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
// -------------------- MUI -----------------------
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { Container, makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    img: {
        cursor: "pointer"
    },
    input: {
        height: 40,
        width: 500,
        marginRight: 10
    },
    button: {
        height: 53,
    }
}));

function MovieList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();
    // movie list
    const movies = useSelector(store => store.movies);
    // search results
    let searchResults = useSelector(store => store.movieSearched)
    // Functions fires on click of img poster
    // Grabs the movies ID and sends it to store
    // We will use this to load the movies details
    const handleDetailsView = (id) => {
        history.push(`/details/${id}`)
        dispatch({ type: 'SET_MOVIE_CLICK', payload: id })
    }
    // state for search input
    const [search, setSearch] = useState('');
    // state for toggling search && conditional rendering
    const [toggleSearch, setToggleSearch] = useState(false)
    // Function to send search input => server => db => client. 
    // This will continue to fire a dispatch AS the user changes search input.
    const handleSearch = (e) => {
        console.log('IN handleSearch - Search for:', e.target.value);
        setSearch(e.target.value);
        dispatch({ type: 'SET_SEARCH', search: e.target.value });
    }
    useEffect(() => {
        // on page load - pull movie array from DB
        dispatch({ type: 'FETCH_MOVIES' });
        // Watch search bar and toggle search results
        if (search) {
            setToggleSearch(true);
        } else {
            setToggleSearch(false);
        }
    }, [search]);

    return (
        <Container align="center">
            {/* Page view info text */}
            <Typography
                variant="h2"
                align="center"
            >
                Movie List
            </Typography>
            {/* Search Bar */}
            <Container align="center">
                <TextField
                    value={search}
                    onChange={(e) => handleSearch(e)}
                    label="Search Movies"
                    variant="outlined"
                    className={classes.input}
                />
                <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    className={classes.button}
                >
                    Search
            </Button>
            </Container>
            {/* Grid holds movie cards */}
            <Grid container align="center">
                {/* Conditional rending */}
                {toggleSearch ?
                    // IF search is toggled, display search results
                    searchResults.map(movie => {
                        return (
                            <Card key={movie.id} elevation={0} className={classes.root}>
                                {/* Movie Card! */}
                                <CardContent>
                                    {/* Movie Poster */}
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
                    })
                    :
                    // IF no search, display full array of movies
                    movies.map(movie => {
                        return (
                            <Card key={movie.id} elevation={0} className={classes.root}>
                                {/* Movie Card! */}
                                <CardContent>
                                    {/* Movie Poster */}
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