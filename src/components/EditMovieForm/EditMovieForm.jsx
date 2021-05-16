import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

const EditMovieForm = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const history = useHistory();

    const movie = useSelector(store => store.movieEdit)
    console.log('movie to edit is:', movie);

    const handleSubmit = () => {
        console.log('Clicked handle submit');
        dispatch({ 
            type: 'EDIT_MOVIE',
            id: movie.id,
            title: movie.title,
            description: movie.description
        })
        history.push(`/details/${params.id}`);
    }

    const handleTitleChange = (e) => {
        dispatch({
            type: 'EDIT_ONCHANGE',
            payload: { property: 'title', value: e.target.value }
        });
    }

    const handleDescChange = (e) => {
        dispatch({
            type: 'EDIT_ONCHANGE',
            payload: { property: 'description', value: e.target.value }
        });
    }

    return (
        <div>
            <h5>Edit Movie Form Here -- Under Construction!</h5>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        value={movie.title}
                        placeholder="Title"
                        onChange={(e) => handleTitleChange(e)}
                    />
                    <input
                        value={movie.description}
                        placeholder="Description"
                        onChange={(e) => handleDescChange(e)}
                    />
                    <br />
                    <button onClick={() => history.push(`/details/${params.id}`)}>Cancel</button>
                    <button type='submit'>Save</button>
                </form>
            </div>
        </div>
    );
}

export default EditMovieForm;