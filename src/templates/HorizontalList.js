import useAxios from "../customHooks/useAxios";
import MovieCard from "../components/MovieCard";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const HorizontalList = ({ url, headline, type }) => {
  const { data: movies, loading: moviesLoading } = useAxios(url);
  //movies && console.log(movies);

  const style = css`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    max-width: 57rem;
  `;

  return moviesLoading ? (
    <p>loading...</p>
  ) : (
    <article>
      <h3>{headline}</h3>
      <section css={style}>
        {movies?.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </article>
  );
};

export default HorizontalList;
