import NavigationLink from "../components/NavigationLink";
import { FaHome, FaFilm, FaTv, FaCalendarAlt } from "react-icons/fa";

const Navigation = () => {

    return ( 
        <>
            <NavigationLink to="/"><FaHome /> Home</NavigationLink>
            <NavigationLink to="/movies"><FaFilm /> Movies</NavigationLink>
            <NavigationLink to="/tvseries"><FaTv /> TV Series</NavigationLink>
            <NavigationLink to="/upcoming"><FaCalendarAlt/> Upcoming</NavigationLink>
        </>
       );
}
export default Navigation;