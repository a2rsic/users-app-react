import React from "react";
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper container">
                <Link to="/"><span className="brand-logo">Users App</span></Link>
            </div>
        </nav>
    )
}

export {
    Header
}