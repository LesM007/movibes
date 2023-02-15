import useAxios from "../customHooks/useAxios";
import MovieCard from "./MovieCard";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";


const HorizontalList = () => {
    const url =  "https://api.themoviedb.org/3/movie/popular?api_key=d27cfb6baa191e1cd0eaa5f32b9e1d80&language=en-US";

    const {data: movies, loading} = useAxios(url);
    movies && console.log(movies)

    const style=css`
        display: flex;
        flex-direction: row;
        overflow-x: hidden;
        overflow-y: auto;
        max-width: 57rem;
        `

    return loading ? <p>loading...</p> : ( 
        <article style={{overflowX : "scroll"}}>
            <h3>Trending</h3>
            <div css={style}>
        {movies.results.map( (movie) => (<MovieCard key={movie.id} movie={movie}/>)
        )}
        </div>
        </article>
     );
}
 
export default HorizontalList;