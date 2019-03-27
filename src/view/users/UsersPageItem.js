import React from "react";
import { Link } from "react-router-dom";

const UsersPageItem = (props) => {
    const { user } = props;
    const { id, name, email, address } = user;
    return (
        <tbody>
            <tr>
                <td>{id}</td>
                <td scope="row"><Link to={`/users/${id}`}>{name}</Link></td>
                <td>{email}</td>
                <td>{address.city}</td>
            </tr>
        </tbody>
    )
}

export { UsersPageItem }