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
                    user,
                    isDeleting: false
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

    render() {
        const { user, isDeleting } = this.state;

        if (isDeleting) {
            return <Loader text={`Deleting user ${user.name}`} />
        }

        if (!user) {
            return < Loader text={"Loading user details..."} />
        }

        return (
            <UserDetails user={user} onDeleteUser={this.deleteUser} />
        )
    }
}

export { UserPage }
