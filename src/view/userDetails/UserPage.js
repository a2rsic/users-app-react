import React, { Component } from "react";

import * as userService from "../../services/userService";
import { UserDetails } from "./UserDetails";
import { Loader } from "../loader/Loader";

class UserPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null
        }
    }

    componentDidMount() {
        this.fetchUser()
    }

    fetchUser = () => {
        const userId = this.props.match.params.id

        userService.fetchUser(userId)
            .then(user => {
                this.setState({
                    user
                })
            })

    }

    deleteUser = () => {
        const userId = this.props.match.params.id
        this.setState({
            isDeleting: true
        });
        userService.deleteUser(userId)
            .then((response) => {
                this.props.history.push("/")
            })
    }

    renderLoading = (text) => (
        <>
            <Loader />
            <h5 className="center-align">{text}</h5>
        </>
    )

    render() {
        const { user, isDeleting } = this.state;

        if (isDeleting) {
            return this.renderLoading("Deleting user")
        }

        if (!user) {
            return this.renderLoading("Loading user details...")
        }

        return (
            <UserDetails user={user} onDeleteUser={this.deleteUser} />
        )
    }
}

export { UserPage }
