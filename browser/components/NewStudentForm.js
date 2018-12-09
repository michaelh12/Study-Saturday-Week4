import React, { Component } from 'react';

export default class NewStudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
    console.log(this.state);
  }
  onSubmit(evt) {
    evt.preventDefault();
    console.log(evt.target);
    this.setState({ firstName: '', lastName: '', email: '' });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            onChange={this.onChange}
            value={this.state.firstName}
          />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            onChange={this.onChange}
            value={this.state.lastName}
          />
        </label>

        <label>
          Email:
          <input
            type="text"
            name="email"
            onChange={this.onChange}
            value={this.state.email}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    );
  }
}
