/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NavLink } from "react-router-dom";
import { theme } from "../themes/theme";

const NavigationLink = ({children,to}) => {

    const stdStyle = css`
        padding: 1.5rem 3rem;
        background-color: ${theme};
        color: ${theme.colors.standard};
        text-decoration: none;
        
        &.active {
        color: ${theme.colors.primary};
        background-color: ${theme.colors.pri40};
        border-right: 0.2rem solid;
        font-weight: 600;
        text-decoration: none;
        text-shadow: 0px 0.125rem 0.25rem ${theme.colors.txtshadow},  
        }

        & svg {
            margin-right: 0.6rem;
            transform: translateY(.12rem);
        }`

    return ( 
       <NavLink css={stdStyle} to={to}>
        {children}
       </NavLink>
     );
}
 
export default NavigationLink;