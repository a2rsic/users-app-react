import React, { Component } from "react";

import * as userService from "../../services/userService";
import { UserDetails } from "./UserDetails";

class UserPage extends Component {
    constructor(props) {
        super(props)
        this.setState = {
            user: null
        }
    }

    fetchUser = () => {
        const userId = this.props.match.params.id
        userService.fetchUser(userId)
        // .then(user => {
        //     this.setState({
        //         user
        //     })
        // })

    }

    componentDidMount() {
        this.fetchUser()
    }

    render() {
        return (
            <UserDetails />
        )
    }
}

export { UserPage }
