/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { theme } from "../themes/theme";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const link = "/movies/" + movie.title;

  const cardStyle = css`
    max-width: 12.5rem;
    max-height: 19.7rem;
    box-shadow: 0 2px 4px rbga(0 0 0 0 0.25);
  `;
  const rateStyle = css`
    background-color: ${theme.colors.sec10};
    mix-blend-mode: screen;

    & span {
      color: ${theme.colors.sec10};

      & svg {
        color: ${theme.colors.star};
      }
    }
  `;

  return (
    <Link to={link} css={cardStyle}>
      <img
        src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
        style={{ borderRadius: "1.25rem" }}
      />
      <section css={rateStyle}>
        <span>
          <FaStar />
          {movie.vote_average}
        </span>
      </section>
    </Link>
  );
};

export default MovieCard;
