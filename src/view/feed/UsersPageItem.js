import React from "react";
import { Link } from "react-router-dom";

const UsersPageItem = (props) => {
    const { user } = props;
    const { id, name, email, address } = user;
    return (

        <tbody>
            <tr>
                <Link to="/user"><th scope="row">{name}</th></Link>
                <td>{id}</td>
                <td>{email}</td>
                <td>{address.city}</td>
            </tr>
        </tbody>

    )
}

export { UsersPageItem }