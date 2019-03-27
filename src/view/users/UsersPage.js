import React, { Component } from "react";

import "./UsersPage.css";
import * as userService from "../../services/userService";
import { UsersPageItem } from "./UsersPageItem";

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

    displayUsers = (users) => {
        const usersList = users.map(user => {
            return <UsersPageItem user={user} key={user.id} />
        })
        return usersList;
    }



    render() {

        const { users } = this.state;

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
                        {this.displayUsers(users)}
                    </table>
                </div>
                <div class="fixed-action-btn">
                    <a class="btn-floating btn-large red">
                        <i class="large material-icons">mode_edit</i>
                    </a>
                </div>

            </>
        )
    }
}

export {
    UsersPage
}
