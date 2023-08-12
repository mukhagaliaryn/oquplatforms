import React from "react";

import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/auth";
import PlatformHeader from "./platform";
import MainHeader from "./main";


const Header = ({ isAuthenticated, user}) => {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        if (dispatch && dispatch !== null && dispatch !== undefined) {
            dispatch(logout())
        }
    }

    return (
        <div id="header" className="bg-white border-b sticky top-0 z-50">
            {isAuthenticated ?
                <PlatformHeader 
                    user={user} 
                    isAuthenticated={isAuthenticated} 
                    logoutHandler={logoutHandler} 
                />
                :
                <MainHeader 
                    user={user} 
                    isAuthenticated={isAuthenticated} 
                    logoutHandler={logoutHandler} 
                />
            }
        </div>
    )
}

export default Header;