import { Address } from "./Address";

class User {
    constructor({ id, name, email, address }) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.address = new Address(address)
    }
}

export { User }