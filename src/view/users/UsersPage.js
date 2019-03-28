import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./UsersPage.css";
import * as userService from "../../services/userService";
import { UsersPageItem } from "./UsersPageItem";
import { Loader } from "../loader/Loader";

class UsersPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    fetchUsers = () => {
        userService.fetchUsers()
            .then(users => {
                this.setState({
                    users
                })
                console.log("USERS", this.state.users);
            })
    }

    componentDidMount() {
        this.fetchUsers()
    }

    renderUsers = (users) => {
        const usersList = users.map(user => {
            return <UsersPageItem user={user} key={user.id} />
        })
        return usersList;
    }

    renderLoading = () => {
        return (
            <>
                <Loader />
                <h5 className="center-align">Loading users...</h5>
            </>
        )
    }

    render() {
        const { users } = this.state;

        if (users.length === 0) {
            return this.renderLoading()
        }

        return (
            <>
                <div className="card-panel">
                    <table className="responsive-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        {this.renderUsers(users)}
                    </table>
                </div>
                <div className="fixed-action-btn">
                    <Link to="users/create" className="btn-floating btn-large blue">
                        <i className="large material-icons">add</i>
                    </Link>
                </div>

            </>
        )
    }
}

export {
    UsersPage
}
