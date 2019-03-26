import { BASE_URL } from "../shared/const";
import { User } from "../entities/User";

const fetchUsers = () => {
    const usersUrl = BASE_URL + "/users";

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

export {
    fetchUsers
}