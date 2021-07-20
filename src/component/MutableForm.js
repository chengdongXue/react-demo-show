import React, { Component } from 'react';

class MutableForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.changeUserName = this.changeUserName.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.submitMutableForm = this.submitMutableForm.bind(this);
    }

    changeUserName(event) {
        this.setState({username: event.target.value});
    }

    changePassword(event) {
        this.setState({password: event.target.value});
    }

    submitMutableForm(event) {
        console.log(this.state.username.concat(`~~~ consist of ${this.state.password}`));
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.submitMutableForm}>
                <label>User Name:
                    <input type="text" id="username" name="username" value={this.state.username} onChange={this.changeUserName}></input>
                </label>
                <label>Password:
                    <input type="text" id="password" name="password" value={this.state.password} onChange={this.changePassword}></input>
                </label>
                <label>
                    <input type="submit" value="Submit"></input>
                </label>
            </form>
        )
    }
}

export default MutableForm;