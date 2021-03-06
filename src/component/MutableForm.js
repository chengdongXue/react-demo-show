/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

class MutableForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      fruit: 'mango',
    };
    this.changeUserName = this.changeUserName.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.submitMutableForm = this.submitMutableForm.bind(this);
    this.selectFruit = this.selectFruit.bind(this);
  }

  changeUserName(event) {
    this.setState({ username: event.target.value });
  }

  changePassword(event) {
    this.setState({ password: event.target.value });
  }

  submitMutableForm(event) {
    console.log(this.state.username.concat(`~~~ consist of ${this.state.password}`).concat(`!!!!!!!!! ${this.state.fruit}`));
    event.preventDefault();
  }

  selectFruit(event) {
    event.preventDefault();
    this.setState({ fruit: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.submitMutableForm} style={{ marginTop: 20 }}>
        <label>
          User Name:
          <input type="text" id="username" name="username" value={this.state.username} onChange={this.changeUserName} />
        </label>
        <label>
          Password:
          <input type="text" id="password" name="password" value={this.state.password} onChange={this.changePassword} />
        </label>
        <label>
          Popular Style
          <select value={this.state.fruit} onChange={this.selectFruit}>
            <option value="mango">mango</option>
            <option value="apple">apple</option>
            <option value="lime">lime</option>
            <option value="coconut">coconut</option>
          </select>
        </label>
        <label>
          <input type="submit" value="Submit" />
        </label>
      </form>
    );
  }
}

export default MutableForm;
