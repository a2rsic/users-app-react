import { BASE_URL } from "../shared/const";
import { User } from "../entities/User";

const fetchUsers = () => {
    const usersUrl = `${BASE_URL}/users`;

    return fetch(usersUrl)
        .then(response => response.json())
        .then(data => {
            console.log("data", data);
            const users = data.map(user => {
                const { id, name, email, address } = user;
                return new User({ id, name, email, address })
            })
            return users;
        })
}

const fetchUser = (id) => {
    const userUrl = `${BASE_URL}/users/${id}`;

    return fetch(userUrl)
        .then(response => response.json())
        .then(data => {
            return new User(data)
        })
}

const deleteUser = (id) => {
    const deleteUrl = `${BASE_URL}/users/${id}`;

    return fetch(deleteUrl, {
        method: "DELETE",
    })
}

export {
    fetchUsers,
    fetchUser,
    deleteUser
}