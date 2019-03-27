import React, { Component } from "react";

import * as userService from "../../services/userService";
import { UserDetails } from "./UserDetails";

class UserPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null
        }
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

    componentDidMount() {
        this.fetchUser()
    }

    render() {
        const { user } = this.state;
        if (!user) {
            return <h2>loading...</h2>
        }
        console.log("USER", user);
        return (
            <UserDetails user={user} />
        )
    }
}

export { UserPage }
