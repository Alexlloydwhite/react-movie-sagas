import { useDispatch, useSelector } from "react-redux";

const MovieDetail = () => {
    const movieClickedDetail = useSelector(store => store.movieClicked);

    return (
        <div>
            <h2>details about the movie go here...</h2>
            {movieClickedDetail.map(movie => {
                return <h1 key={movie.id}>{movie.description}</h1>
            })}
        </div>
    );
}

export default MovieDetail;