import { theme } from "../themes/theme";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";


const OnlytextButton = ({children, rounded, greyBtn}) => {
    const BtnStyle= css`
        background-color: ${rounded ? theme.colors.pri40 : greyBtn ? theme.colors.tertiary : theme.colors.primary};
        text-decoration: none;
        font-family: 'Poppins', sans-serif;
        color: ${rounded ? theme.colors.primary : greyBtn ? theme.colors.standard : theme.colors.secondary};
        border: none;
        padding: ${rounded ? "0.3rem 2rem" : greyBtn ? "1.5rem 3rem": "0.5rem"};
        border-radius: ${rounded ? "2rem" : "0.5rem"};
        font-weight: ${greyBtn || rounded ? "600" : "500"};

        & svg {
                margin-right: ${ greyBtn || rounded ? "0.6rem" : "5rem" };
                transform: ${greyBtn || rounded ? "translateY(.12rem)" : "0"};
            }
        `

    return ( 
        <button css={BtnStyle}>{children}</button>
     );
}
 
export default OnlytextButton;