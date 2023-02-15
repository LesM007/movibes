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

    & img{
        object-fit: cover;
    }
    `

    return (
        <>
        <div css={ImgContainer}>
        <FeaturedMovie />
        </div>
        <HorizontalList />
        </>
     );
}
 
export default Home;