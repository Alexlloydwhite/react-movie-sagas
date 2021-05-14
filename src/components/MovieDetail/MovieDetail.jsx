import { useSelector } from "react-redux";

const MovieDetail = () => {
    const movieClickedDetail = useSelector(store => store.movieClicked);

    return (
        <div>
            {movieClickedDetail.map(movie => {
                return <h1 key={movie.id}>{movie.description}</h1>
            })}
        </div>
    );
}

export default MovieDetail;