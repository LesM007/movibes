/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { theme } from "../themes/theme";
import { FaTicketAlt, FaCheckCircle } from "react-icons/fa";
import OnlytextButton from "./OnlytextButton";


const NavQuiz = () => {
    const svgStyle=css`
        background-color: ${theme.colors.pri40};
        color: ${theme.colors.primary};
        border-radius: 2.8rem;
        height: 4rem;
        width: 4rem;
        position: absolute;
        top: 6%;
        left: 50%;
        transform: translate(-50%, -50%);

        & svg:last-of-type {
            position: absolute;
            right: 17%;
            bottom:25%;
            background-color: ${theme.colors.standard};
            border-radius: 50%;
            border: 2px solid ${theme.colors.pri40};
        }
        `
    const topStyle=css`
        margin-top: 3rem;
        padding: 1rem;
        `
    
    const quizButton=css`
        background-color: ${theme.colors.backdrop};
        max-height: 13.2rem;
        max-width: 11rem;
        padding: 1rem;
        border-radius: 2.8rem;
        
            & h3 {
                color: ${theme.colors.secondary};
                opacity: 80%;
                font-weight: 600;
            }
            & h4{
                color: ${theme.colors.standard};
                font-weight: 500;
            }
        `

    return ( 
        <article css={topStyle} className="posiRelativ">
            <div css={svgStyle} className="flexCenter"><FaTicketAlt size="2rem"/><FaCheckCircle /></div>
                <section css={quizButton}>
                    <h3>Play movie quizes and earn free tickets</h3>
                    <h4>50k people are playing now</h4>
                    <div className="flexCenter"><OnlytextButton rounded>Start playing</OnlytextButton></div>
                </section>
        </article>
     );
}
 
export default NavQuiz;