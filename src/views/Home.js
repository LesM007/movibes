/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import HorizontalList from "../components/HorizontalList";
import { theme } from "../themes/theme";
import FeaturedMovie from "../components/FeaturedMovie";

const Home = () => {
  const ImgContainer = css`
    max-width: 57rem;
    max-height: 18.75rem;
    border-radius: 2rem;
    background-color: ${theme.colors.secondary};

    & img {
      object-fit: cover;
    }
  `;

  return (
    <>
      <div css={ImgContainer}>
        <FeaturedMovie />
      </div>
      <HorizontalList
        headline="Trending"
        url="https://api.themoviedb.org/3/trending/all/day?api_key=d27cfb6baa191e1cd0eaa5f32b9e1d80&"
        type="movie"
      />
      <HorizontalList
        headline="Upcoming"
        url="https://api.themoviedb.org/3/movie/upcoming?api_key=d27cfb6baa191e1cd0eaa5f32b9e1d80&"
        type="movie"
      />
      <HorizontalList
        headline="TV Series"
        url="https://api.themoviedb.org/3/tv/popular?api_key=d27cfb6baa191e1cd0eaa5f32b9e1d80&"
        type="shows"
      />
    </>
  );
};

export default Home;
