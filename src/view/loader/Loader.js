import React from "react";

import "./Loader.css"

const Loader = (props) => {
    return (
        <>
            <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
            </div>
            <h5 className="center-align gray">{props.text}</h5>
        </>
    )
}

export { Loader }
