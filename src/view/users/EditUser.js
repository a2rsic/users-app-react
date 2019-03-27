import React, { Component } from "react";

const EditUser = () => {
    return (
        <>
            <div className="row">
                <h4>Edit user</h4>
            </div>
            <div className="card-panel">
                <div className="row">
                    <h5>Edit user details</h5>
                </div>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="name" type="text" className="validate" />
                                <label htmlFor="password">Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate" />
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <button className="btn">Create</button>
        </>
    )
}

export {
    EditUser
}
