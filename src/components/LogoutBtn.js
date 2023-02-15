import { FaSignOutAlt } from "react-icons/fa"; 
import OnlytextButton from "./OnlytextButton";

const LogoutBtn = () => {

    return ( 
    <OnlytextButton className="button__text" greyBtn><FaSignOutAlt style={{transForm: "translateY(.12rem)"}}/>Log out</OnlytextButton>
    );
}
 
export default LogoutBtn;