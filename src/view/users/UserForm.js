import React, { Component } from "react";
import { emailValid } from "../../shared/helpers";

class UserForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            error: {
                name: null,
                email: null
            }
        };
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.user !== this.props.user) {
            const { user } = this.props;
            const name = user ? user.name : "";
            const email = user ? user.email : ""

            this.setState({
                name,
                email
            });
        }
    }

    onInputChange = (e) => {
        const { name, value } = e.target;

        const error = {
            ...this.state.error,
            [name]: this.validateInput(name, value)
        }

        this.setState({
            [name]: value,
            error
        });
    }

    getDataBody() {
        const { name, email } = this.state;
        return {
            name, email
        }
    }

    validateInput = (name, value) => {
        if (name === "name") {
            return this.isValidName(value)
        }

        if (name === "email") {
            return this.isValidEmail(value)
        }

        return null
    }

    isValidName = (name) => {
        let error = null
        if (name.length < 3 || name.length > 30) {
            error = "Name must be between 3 anf 30 charachters";
        }

        return error
    }

    isValidEmail = (email) => {
        let error = null

        if (email.length < 3 || email.length > 30) {
            error = "Email must be between 3 anf 30 charachters"
        } else if (!emailValid(email)) {
            error = "Invalid email format"
        }

        return error;
    }

    onClickCreate = (e) => {
        e.preventDefault();
        const body = this.getDataBody()
        this.props.onUserCreate(body)
    }

    onClickUpdate = (e) => {
        e.preventDefault();
        const body = this.getDataBody()
        this.props.onUserUpdate(body)
    }

    renderActionButtons = () => {

        const { error, name, email } = this.state;

        const isEmpty = name.length === 0 || email.length === 0
        const isValid = !error.name && !error.email

        const disabled = isValid ? "" : "disabled"

        return (
            <>
                {this.props.onUserCreate &&
                    <input
                        onClick={this.onClickCreate}
                        type="button"
                        value="Create"
                        className={`btn  ${isEmpty ? "disabled" : disabled}`} />}
                {this.props.onUserUpdate &&
                    <input
                        onClick={this.onClickUpdate}
                        type="button"
                        value="Update"
                        className={`btn ${disabled}`} />}
            </>
        )
    }

    render() {
        const { name, email, error } = this.state;
        return (
            <div className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            onChange={this.onInputChange}
                            value={name}
                            name="name"
                            placeholder="Name"
                            autoComplete="off"
                            id="name"
                            type="text"
                            className="validate" />
                        <span className="helper-text" data-error="wrong" data-success="right">Name</span>
                        {error.name && <h6 className="error red-text">{error.name}</h6>}
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            onChange={this.onInputChange}
                            value={email}
                            placeholder="Email"
                            autoComplete="off"
                            id="email"
                            name="email"
                            type="email"
                            className="validate" />
                        <span className="helper-text" data-error="wrong" data-success="right">Email</span>
                        {error.email && <h6 className="error red-text">{error.email}</h6>}
                    </div>
                </div>
                {this.renderActionButtons()}
            </div>
        )
    }
}

export { UserForm }
