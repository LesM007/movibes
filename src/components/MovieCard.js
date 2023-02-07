/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { theme } from "../themes/theme";
import { FaStar } from "react-icons/fa";


const MovieCard = ({movie}) => {

    const cardStyle = css`
        max-width: 12.5rem;
        max-height: 19.7rem;
        border-radius: 1.25rem;
        box-shadow: 0 2px 4px rbga(0 0 0 0 0.25);
    `
    const rateStyle = css`
        background-color: ${theme.colors.sec10};
        mix-blend-mode: screen;
        `

    return ( 
        <>
        <article css={cardStyle}>
        <p>{movie.title}</p>
            <section css={rateStyle}>
                <FaStar /><span>{movie.vote_average}</span>
            </section>
        </article>
        </>  
     );
}
 
export default MovieCard;