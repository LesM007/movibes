import Navigation from "./Navigation";
import Logo from "../components/Logo";
import { theme } from "../themes/theme";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import NavQuiz from "../components/NavQuiz";
import LogoutBtn from "../components/LogoutBtn";

const Header = () => {
    const style=css`
        display: flex;
        flex-direction: column;
        background-color: ${theme.colors.tertiary};
        max-width: 17rem;
        height: 100%;
        border-radius: 0px 45px 45px 0px;
        `

    return ( 
    <header className="navigation__main" css={style}>
        <Logo />
        <Navigation />
        <NavQuiz />
        <LogoutBtn />
        </header>
     );
}
 
export default Header;