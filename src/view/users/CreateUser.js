import React, { Component } from "react";
import * as userService from "../../services/userService";
import { UserForm } from "./UserForm";
import { Loader } from "../loader/Loader";

class CreateUser extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    createUser = (body) => {
        this.setState({
            isCreating: true
        });
        userService.createUser(body)
            .then((user) => {
                this.props.history.push("/")
            })
    }

    render() {
        const { isCreating } = this.state;

        if (isCreating) {
            return <Loader text={"Creating user..."} />
        }
        return (
            <>
                <div className="row">
                    <h4>Create user</h4>
                </div>
                <div className="card-panel">
                    <div className="row">
                        <h5>Enter user details</h5>
                    </div>
                    <div className="row">
                        <UserForm onUserCreate={this.createUser} />
                    </div>
                </div>
            </>
        )
    }
}

export {
    CreateUser
}
