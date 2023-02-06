import { Outlet } from "react-router-dom";
import StyledSearchBar from "../components/StyledSearchBar";


const Main = () => {
    return (
        <>  
            <StyledSearchBar/> 
            <Outlet />
        </>
        );
}
 
export default Main;