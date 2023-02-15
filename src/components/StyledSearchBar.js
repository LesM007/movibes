import { CiSearch } from 'react-icons/ci';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { theme, fontSizes } from '../themes/theme';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const StyledSearchBar = ({placeholder}) => {

    const style=css`
        background-color: ${theme.colors.tertiary};
        border-radius: 2rem;
        border: none;
        padding: .7rem 1.75rem;
        max-width: 55rem;
        margin: 1.75rem;
        
        & button, input{
            font-size: ${fontSizes.medium};
            font-weight: 600;
            background-color: ${theme.colors.tertiary};
            color: ${theme.colors.sec10};
            border: none;
            text-shadow: 0px 0.125rem 0.25rem ${theme.colors.txtshadow};
            transform: translateY(-.2em);

        }
        & svg {
            font-size: ${fontSizes.large};
            color: ${theme.colors.sec10};
            transform: translateY(.2em);
            margin-right: 0.6rem;
        }
    `

    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault();
        let params = {search: e.target.search.value}
        navigate({
            pathname:"/results",
            search: `?${createSearchParams(params)}`
        })
        console.log(e.target.search.value)
        e.target.reset()
    }

    return (
        <form css={style} className="search header__search" onSubmit={handleSubmit} >
            <button type='submit'><CiSearch /></button>
            <input
            type="search" 
            name="search"
            id="search" 
            placeholder="Search for movies, TV shows..."
         />
        </form>
     );
}
 
export default StyledSearchBar;