import { useDispatch, useSelector } from "react-redux";

const MovieDetail = () => {
    const dispatch = useDispatch();
    // Get movie info from store
    const movie = useSelector(store => store.movieId);

    return (
        <div>
            {movie.desc}
        </div>
    );
}

export default MovieDetail;