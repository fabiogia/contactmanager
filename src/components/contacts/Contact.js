import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Contact extends Component {
  state = { showContactInfo: false };

  onShowClick() {
      this.setState({ showContactInfo: !this.state.showContactInfo })
  }

  onDeleteClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      // .then(res => dispatch({type: 'DELETE_CONTACT', payload: id}))
    dispatch({type: 'DELETE_CONTACT', payload: id})
  }

  onEditClick = async (id, dispatch) => {
  }

  render() {
    const { id, name, email, phone } = this.props.contact;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>{name} 
                <i onClick={this.onShowClick.bind(this)} className={"fas fa-sort-" + (this.state.showContactInfo ? "down" : "up") } style={{cursor:'pointer', marginLeft:'10px'}}></i>
                <i onClick={this.onDeleteClick.bind(this, id, dispatch)} className="fas fa-times" style={{cursor:'pointer', float:'right', color:'red'}}></i>
                <Link to={`contact/edit/${id}`}><i onClick={this.onEditClick.bind(this, id, dispatch)} className="fas fa-pencil-alt" style={{cursor:'pointer', float:'right', color:'black', marginRight: '1rem'}}></i></Link>
              </h4>
              {this.state.showContactInfo ? (<ul className="list-group ">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
              </ul>): null}
              
            </div>
          )
        }}
      </Consumer>
    )
  }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
}