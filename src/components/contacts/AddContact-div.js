/*
import React, { Component } from 'react'
import uuid from 'uuid';
import { Consumer } from '../../context';

export default class AddContact extends Component {
  state = {
    name: '',
    email: '', 
    phone: ''
  }

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    const newContact  = {
      id: uuid(),
      name,
      email,
      phone
    }
    dispatch({type: 'ADD_CONTACT', payload: newContact});

    // Clear state
    this.setState({
      name: '',
      email: '', 
      phone: ''
    })
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, phone, email } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Enter name" name="name" className="form-control form-control-lg" value={name} onChange={this.onChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter email" name="email" className="form-control form-control-lg" value={email} onChange={this.onChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="phone" placeholder="Enter phone number" name="phone" className="form-control form-control-lg" value={phone} onChange={this.onChange} />
                  </div>
                  <input type="submit" value="Add Contact" className="btn btn-block btn-light" />
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}
*/