import useAxios from "../customHooks/useAxios";
import MovieCard from "./MovieCard";

const HorizontalList = (props) => {
    const url =  "https://api.themoviedb.org/3/movie/popular?api_key=d27cfb6baa191e1cd0eaa5f32b9e1d80&language=en-US";

    const {data: movies, loading} = useAxios(url);


    return loading ? <p>loading...</p> : ( 
        <div value={[movies]}>
        {movies.results.map(
        movie => (
            <MovieCard {movie.title} />))}
        </div>
     );
}
 
export default HorizontalList;