/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FaSignOutAlt } from "react-icons/fa"; 
import OnlytextButton from "./OnlytextButton";

const LogoutBtn = () => {

    return ( 
    <OnlytextButton greyBtn><FaSignOutAlt />Log out</OnlytextButton>
    );
}
 
export default LogoutBtn;