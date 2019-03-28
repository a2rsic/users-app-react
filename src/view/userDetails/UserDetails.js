import React from "react";
import { Link } from "react-router-dom";

const UserDetails = (props) => {
    const { user, onDeleteUser } = props;
    const { id, email, name, address } = user;

    return (
        <>
            <div className="row">
                <div className="input-field col s6">
                    <h5>User details | ID: {id}</h5>
                </div>
                <div className="input-field col s6">
                    <button onClick={onDeleteUser} className="btn waves-effect waves-light btn-small red">Delete</button>
                    <Link to={`/users/${id}/edit`} className="btn waves-effect waves-light btn-small">Edit</Link>
                </div>
            </div>
            <div className="card-panel">
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input disabled id="name" type="text" className="validate" value={name} />
                                <span className="helper-text" data-error="wrong" data-success="right">Name</span>
                            </div>
                            <div className="input-field col s6">
                                <input disabled id="email" type="email" className="validate" value={email} />
                                <span className="helper-text" data-error="wrong" data-success="right">Email</span>
                            </div>
                            <div className="input-field col s6">
                                <input disabled id="city" type="text" className="validate" value={address.city} />
                                <span className="helper-text" data-error="wrong" data-success="right">City</span>
                            </div>
                            <div className="input-field col s6">
                                <input disabled id="street" type="text" className="validate" value={address.street} />
                                <span className="helper-text" data-error="wrong" data-success="right">Street</span>
                            </div>
                            <div className="input-field col s6">
                                <input disabled id="ZIP" type="text" className="validate" value={address.zipcode} />
                                <span className="helper-text" data-error="wrong" data-success="right">ZIP</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export {
    UserDetails
}

