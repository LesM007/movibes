import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";



const Navigation = () => {

    const activeStyle = {
        textDecoration: "underline",
    };

    return ( 
        <>
    <NavLink to="/" ><FaHome />Home</NavLink>
    <NavLink to="/tvseries"  >TV Series</NavLink>
    <NavLink to="/upcoming"  >Upcoming</NavLink>
    </>
       );
}
export default Navigation;