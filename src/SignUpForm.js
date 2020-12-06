import React, { Component } from 'react';
const INITIAL_STATE = {
    login: '',
    email: '',
    password: '',
}

export default class SignUpForm extends Component{
state = {
    ...INITIAL_STATE
};

handleChange = ({ target }) => {
    const {name, value} = target;
    this.setState({
        [name]: value
    });
};

handleSubmit = e => {
    e.preventDefault();
    const {login, email, password} = this.state;
    console.log(
        `
        Login: ${login},
        Email: ${email},
        Password: ${password}
        `
    );
    this.reset();
}

reset = () => {
    this.setState({
        ...INITIAL_STATE
    })
}

render(){
    const {login, email, password} = this.state;

    return (
        <form onSubmit = {this.handleSubmit}>
        <label>
            Login
            <input
                type="text"
                name = "login"
                placeholder="Enter login"
                value={login}
                onChange={this.handleChange}
            />
        </label>
        <label>
            Email
            <input
                type="email"
                name = "email"
                placeholder="Enter email"
                value={email}
                onChange={this.handleChange}
            />
        </label>
        <label>
            Password
            <input
                type="password"
                name = "password"
                placeholder="Enter password"
                value={password}
                onChange={this.handleChange}
            />
        </label>
        <button>Sign up as {login}</button>
        </form>
    )
}

}
