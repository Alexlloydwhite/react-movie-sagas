// IMPORTS FOR REACT FRAMEWORKS!
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
// -------------------- MUI -----------------------
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
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

const EditMovieForm = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const history = useHistory();
    const classes = useStyles();
    // grabs the movie details from store
    const movie = useSelector(store => store.movieEdit)
    // function to handle form submit
    const handleSubmit = () => {
        console.log('Clicked handle submit');
        // dispatch to store to send PUT request
        dispatch({
            type: 'EDIT_MOVIE',
            id: movie.id,
            title: movie.title,
            description: movie.description
        })
        // after form submit, take user back to the details page
        history.push(`/details/${params.id}`);
    }
    // dispatch reducer for state of title
    const handleTitleChange = (e) => {
        dispatch({
            type: 'EDIT_ONCHANGE',
            payload: { property: 'title', value: e.target.value }
        });
    }
    // dispatch reducer for state of desc
    const handleDescChange = (e) => {
        dispatch({
            type: 'EDIT_ONCHANGE',
            payload: { property: 'description', value: e.target.value }
        });
    }
    return (
        <Container>
            {/* Form to Edit Movie */}
            <form onSubmit={handleSubmit}>
                {/* Input holds movie to edit title */}
                <TextField
                    label="Edit Movie Title"
                    className={classes.field}
                    variant="outlined"
                    fullWidth
                    value={movie.title}
                    onChange={(e) => handleTitleChange(e)}
                />
                {/* input holds movie to edit description */}
                <TextField
                    value={movie.description}
                    label="Edit Movie Description"
                    multiline
                    rows={5}
                    fullWidth
                    className={classes.field}
                    variant="outlined"
                    onChange={(e) => handleDescChange(e)}
                />
                {/* Cancel Btn takes you back to details view */}
                <Button 
                    onClick={() => history.push(`/details/${params.id}`)}
                    className={classes.cancelBtn}
                    color="primary"
                    variant="contained"
                >
                    Cancel
                </Button>
                {/* Save Btn- submits form */}
                <Button 
                    type='submit'
                    color="primary"
                    variant="contained"
                >
                    Save
                </Button>
            </form>
        </Container>
    );
}

export default EditMovieForm;