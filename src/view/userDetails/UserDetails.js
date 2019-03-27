import React from "react";
import { Link } from "react-router-dom";

const UserDetails = (props) => {
    const { user } = props;
    console.log("us", user);
    const { id, email, name, address } = user;
    return (
        <>
            <div className="card">
                <div className="card-content grey lighten-4">
                    <div id="user-name">{name}</div>
                </div>
                <div className="card-content">
                    <p className="user-details"><b>ID:</b> {id}</p>
                    <p className="user-details"><b>Email:</b> {email}</p>
                    <p className="user-details"><b>Street:</b> {address.street}</p>
                    <p className="user-details"><b>City:</b> {address.city}</p>
                    <p className="user-details"><b>ZIP:</b> {address.zipcode}</p>

                </div>
            </div>

            <Link to="/users/edit" className="btn waves-effect waves-light btn-small red">Delete</Link>
            <button className="btn waves-effect waves-light btn-small">Edit</button>
        </>
    )
}

export {
    UserDetails
}
