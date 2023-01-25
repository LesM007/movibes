import { theme } from "../themes/theme";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";


const Logo = () => {
    const style= css`
        text-transform: uppercase;
        color: ${theme.colors.primary};
        font-family:'Oswald', sans-serif;
        font-weight: 400;
        letter-spacing: 0.05em;
        text-shadow: 0px 0.175rem 0.2rem #3DD2CC8e;
        align-items: center;
        justify-content: center;
    `

    const flexStyle= css`
        display: flex;
        justify-content: center;
        align-items: center;
        `

    return ( 
        <div css={flexStyle}>
            <h1 css={style}>Movibes</h1>
        </div>
     );
}
 
export default Logo;