// IMPORTS FOR REACT FRAMEWORKS!
import { useState } from "react";
import { useDispatch } from "react-redux";
// -------------------- MUI -----------------------
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    input: {
        height: 40,
        width: 500,
        marginRight: 10
    },
    button: {
        height: 53,
    }
})

const Search = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        console.log('IN handleSearch - Search for:', e.target.value);
        setSearch(e.target.value)
        dispatch({ type: 'SET_SEARCH', search: e.target.value });
    }

    return (
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
    );
}

export default Search;