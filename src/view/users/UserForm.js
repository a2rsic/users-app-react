import React, { Component } from "react";

class UserForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            error: null
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
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    getDataBody() {
        const { name, email } = this.state;
        return {
            name, email
        }
    }

    isValid = () => {
        let error = null
        const name = this.state.name;
        const email = this.state.email;

        if (name.length < 3 && name.length > 30) {
            error = "Invalid name";
        } else if (email.length < 3 && email.length > 30 && !email.includes("@")) {
            error = "Invalid email"
        }

        return error;
    }

    onClickCreate = (e) => {
        e.preventDefault();
        const error = this.isValid()
        if (error) {
            alert(error)
            return
        }

        const body = this.getDataBody()
        this.props.onUserCreate(body)
    }

    onClickUpdate = (e) => {
        e.preventDefault();
        const error = this.isValid()
        if (error) {
            alert(error)
            return
        }

        const body = this.getDataBody()
        this.props.onUserUpdate(body)
    }

    renderError = () => {
        const { error } = this.state;
        return (
            <>
                {!error && <h6 className="error red-text">{error}</h6>}
            </>
        )
    }

    renderActionButtons = () => {

        const disabled = this.state.error ? "disabled" : ""

        return (
            <>
                {this.props.onUserCreate &&
                    <input
                        onClick={this.onClickCreate}
                        type="button"
                        value="Create"
                        className={`btn ${disabled}`} />}
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

        return (
            <div className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            onChange={this.onInputChange}
                            value={this.state.name}
                            name="name"
                            placeholder="Name"
                            autoComplete="off"
                            id="name"
                            type="text"
                            className="validate" />

                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            onChange={this.onInputChange}
                            value={this.state.email}
                            placeholder="Email"
                            autoComplete="off"
                            id="email"
                            name="email"
                            type="email"
                            className="validate" />
                    </div>
                </div>
                {this.renderError()}
                {this.renderActionButtons()}
            </div>
        )
    }
}

export { UserForm }
