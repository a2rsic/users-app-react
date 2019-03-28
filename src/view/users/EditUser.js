import React, { Component } from "react";

import { UserForm } from "./UserForm";
import * as userService from "../../services/userService";


class EditUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        userService.fetchUser(id)
            .then((user) => {
                this.setState({
                    user
                });
            })
    }

    updateUser = (body) => {
        const id = this.props.match.params.id;
        userService.updateUser(id, body)
            .then(user => {
                this.props.history.push("/")
            })
    }

    render() {
        const { user } = this.state;
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
                        <UserForm user={user} onUserUpdate={this.updateUser} />
                    </div>
                </div>
            </>
        )
    }
}

export {
    EditUser
}
