import React, { Component } from "react";

import { UserForm } from "./UserForm";
import * as userService from "../../services/userService";
import { Loader } from "../loader/Loader";


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
        this.setState({
            isUpdating: true
        });
        userService.updateUser(id, body)
            .then(user => {
                this.props.history.push("/")
            })
    }

    render() {
        const { user, isUpdating } = this.state;

        if (isUpdating) {
            return <Loader text={"Updating user..."} />
        }
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
