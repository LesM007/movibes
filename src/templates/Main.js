import { Outlet } from "react-router-dom";
import StyledSearchBar from "../components/StyledSearchBar";


const Main = () => {
    return (
        <main>
            <StyledSearchBar/> 
            <Outlet />
        </main>
        );
}
 
export default Main;