import React from "react";

const UsersPageItem = (props) => {
    const { user } = props;
    const { id, name, email, address } = user;
    return (

        <tbody>
            <tr>
                <a href="/user"><th scope="row">{name}</th></a>
                <td>{id}</td>
                <td>{email}</td>
                <td>{address.city}</td>
            </tr>
        </tbody>

    )
}

export { UsersPageItem }