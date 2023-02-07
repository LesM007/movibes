import { FaSearch } from 'react-icons/fa';
import { createSearchParams, useNavigate } from 'react-router-dom';
import OnlytextButton from './OnlytextButton';


const StyledSearchBar = ({placeholder}) => {

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
        <form className="search header__search" onSubmit={handleSubmit}>
            <OnlytextButton type='submit' />
            <FaSearch />
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