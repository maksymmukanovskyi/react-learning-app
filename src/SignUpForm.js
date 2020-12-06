import React, { Component } from 'react';
const INITIAL_STATE = {
    login: '',
    email: '',
    password: '',
    agreed: false,
    gender: null,
    age: '',
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
handleAgreeChange = ({target}) => {
    const {checked} = target;
    this.setState({ agreed: checked});
}

handleSubmit = e => {
    e.preventDefault();
    const {login, email, password, agreed, gender, age} = this.state;
    console.log(
        `
        Login: ${login},
        Email: ${email},
        Password: ${password},
        Agreed: ${agreed},
        Gender: ${gender},
        Age: ${age}
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
    const {login, email, password, agreed, gender, age} = this.state;

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
        <label>
            Agreed to terms
            <input
                type="checkbox"
                checked={agreed}
                onChange={this.handleAgreeChange}
            />
        </label>
        <section>
            <h2>Choose your gender</h2>
            <label>
            Male
            <input
                type="radio"
                checked={gender === 'male'}
                name="gender"
                value="male"
                onChange={this.handleChange}
            />
        </label>
        <label>
            Female
            <input
                type="radio"
                checked={gender === 'female'}
                name="gender"
                value="female"
                onChange={this.handleChange}
            />
        </label>
        
        </section>
        <section>
            <h2>Choose your age</h2>
            <select name="age" value={age} onChange={this.handleChange}>
                <option value="" disabled>...</option>
                <option value="18-25">18-25</option>
                <option value="26-35">26-35</option>
                <option value="36+">36+</option>
            </select>
        </section>

        <button disabled={!agreed}>Sign up as {login}</button>
        </form>
    )
}

}
