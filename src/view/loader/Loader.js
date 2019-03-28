import React from "react";

import "./Loader.css"

const Loader = () => {
    return (
        <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
        </div>
    )
}

export { Loader }