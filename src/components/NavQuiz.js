/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { theme } from "../themes/theme";
import { FaTicketAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import OnlytextButton from "./OnlytextButton";


const NavQuiz = () => {
    return ( 
        <NavLink>
            <svg><FaTicketAlt /></svg>
            <h3>Play movie quizes and earn free tickets</h3>
            <h4>50k people are playing now</h4>
            <OnlytextButton style={{color:`${theme.colors.primary}`}}>Start playing</OnlytextButton>
        </NavLink>
     );
}
 
export default NavQuiz;