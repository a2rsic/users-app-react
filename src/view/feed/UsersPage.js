import React, { Component } from "react";

import "./UsersPage.css";
import * as userService from "../../services/userService";
import { UsersPageItem } from "./UsersPageItem";

class UsersPage extends Component {
    constructor(props) {
        super(props)
        this.State = {
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

    displayUsers = (users) => {
        const usersList = users.map(user => {
            return <UsersPageItem user={user} key={user.id} />
        })
        return usersList;
    }



    render() {
        // if (!this.state.users) {
        //     return <h2>Loading...</h2>
        // }
        // const { users } = this.state;
        // console.log("U", this.state.users);


        return (
            <div className="container">
                <button className="create-button">Create User</button>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Users</th>
                            <th scope="col">ID</th>
                            <th scope="col">Email</th>
                            <th scope="col">City</th>
                        </tr>
                    </thead>
                    {/* {this.displayUsers(users)} */}
                </table >
            </div>
        )
    }
}

export {
    UsersPage
}
