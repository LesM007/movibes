import useAxios from "../customHooks/useAxios";
import MovieCard from "./MovieCard";

const HorizontalList = () => {
    const url =  "https://api.themoviedb.org/3/movie/popular?api_key=d27cfb6baa191e1cd0eaa5f32b9e1d80&language=en-US";

    const {data: movies, loading} = useAxios(url);
    //movies && console.log(movies)

    return loading ? <p>loading...</p> : ( 
        <div>
        {movies.results.map( (movie) => (<MovieCard key={movie.id} movie={movie}/>)
        )}
        </div>
     );
}
 
export default HorizontalList;