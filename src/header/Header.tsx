import React from 'react';
import "./Header.css"
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <div className="header">
            <Link to="/">home</Link>
            <Link to="user">user</Link>
        </div>
    )
}

export default Header;
