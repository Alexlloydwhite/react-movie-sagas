// IMPORTS FOR REACT FRAMEWORKS!
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

const EditMovieForm = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const history = useHistory();
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
        <div>
            <div>
                {/* Form to Edit Movie */}
                <form onSubmit={handleSubmit}>
                    {/* Input holds movie to edit title */}
                    <input
                        value={movie.title}
                        placeholder="Title"
                        onChange={(e) => handleTitleChange(e)}
                    />
                    {/* input holds movie to edit description */}
                    <input
                        value={movie.description}
                        placeholder="Description"
                        onChange={(e) => handleDescChange(e)}
                    />
                    <br />
                    {/* Cancel Btn takes you back to details view */}
                    <button onClick={() => history.push(`/details/${params.id}`)}>Cancel</button>
                    {/* Save Btn- submits form */}
                    <button type='submit'>Save</button>
                </form>
            </div>
        </div>
    );
}

export default EditMovieForm;