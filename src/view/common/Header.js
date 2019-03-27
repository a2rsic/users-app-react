import React from "react";
import { Link } from 'react-router-dom';

import "./Header.css";

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper container">
                <Link to="/"><span className="brand-logo">Users App</span></Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Users</a></li>
                    <li><a href="badges.html">About</a></li>
                </ul>
            </div>
        </nav>
    )
}

export {
    Header
}