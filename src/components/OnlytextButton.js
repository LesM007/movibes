import { theme } from "../themes/theme";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";


const OnlytextButton = ({children}) => {
    const BtnStyle= css`
    background-color: ${theme.colors.primary};
    text-decoration: none;
    color: ${theme.colors.secondary};
    `

    return ( 
        <button css={BtnStyle}>{children}</button>
     );
}
 
export default OnlytextButton;