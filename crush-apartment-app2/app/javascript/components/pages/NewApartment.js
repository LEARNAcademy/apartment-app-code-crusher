import React from "react"
import PropTypes from "prop-types"
import {Redirect, BrowserRouter as Router, Route, Link} from 'react-router-dom'

class NewApartment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      responseOk: false,
      apartmentAttributes: {
        price: '',
        list_date: '',
        avail_date: '',
        address_1: '',
        address_2: '',
        city: '',
        state: '',
        zip: '',
        dwelling: '',
        beds: '',
        baths: '',
        pets: '',
        manager: '',
        phone: '',
        email: ''
        }
      }
    }

handleSubmit = (event) => {
  // const { apartmentAttribute, responseOk } = this.state
  event.preventDefault()
  console.log("Submitted!");
  fetch('/apartments.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({apartment: this.state.apartmentAttributes})
    })
    .then((response) => {
      this.setState({responseOk: true})
    })
  }

handleChange = (event) => {
  const { apartmentAttributes } = this.state
  apartmentAttributes[event.target.name] = event.target.value
  this.setState({apartmentAttributes: apartmentAttributes})
}


  render () {
    const { apartmentAttributes, responseOk} = this.state
    return (
      <div>
        {responseOk &&
        <Redirect to="/member/apartment_list" />
        }
        <h1>Create an apartment listing</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="price">Price</label>
          <input
            type="text"
            name="price"
            value={apartmentAttributes.price}
            onChange={this.handleChange}
          />
          <label htmlFor="avail_date">Available Date</label>
          <input
            type="text"
            name="avail_date"
            value={apartmentAttributes.avail_date}
            onChange={this.handleChange}
          />
          <label htmlFor="address_1">Street Address</label>
          <input
            type="text"
            name="address_1"
            value={apartmentAttributes.address_1}
            onChange={this.handleChange}
          />
          <label htmlFor="address_2">Apartment/Unit Number</label>
          <input
            type="text"
            name="address_2"
            value={apartmentAttributes.address_2}
            onChange={this.handleChange}
          />
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            value={apartmentAttributes.city}
            onChange={this.handleChange}
          />
          <label htmlFor="state">State</label>
          <input
            type="text"
            name="state"
            value={apartmentAttributes.state}
            onChange={this.handleChange}
          />
          <label htmlFor="zip">ZIP</label>
          <input
            type="text"
            name="zip"
            value={apartmentAttributes.zip}
            onChange={this.handleChange}
          />
          <label htmlFor="dwelling">Type</label>
          <input
            type="text"
            name="dwelling"
            value={apartmentAttributes.dwelling}
            onChange={this.handleChange}
          />
          <label htmlFor="beds">Beds</label>
          <input
            type="text"
            name="beds"
            value={apartmentAttributes.beds}
            onChange={this.handleChange}
          />
          <label htmlFor="baths">Baths</label>
          <input
            type="text"
            name="baths"
            value={apartmentAttributes.baths}
            onChange={this.handleChange}
          />
          <label htmlFor="pets">Pets</label>
          <input
            type="text"
            name="pets"
            value={apartmentAttributes.pets}
            onChange={this.handleChange}
          />
          <label htmlFor="manager">Property Manager</label>
          <input
            type="text"
            name="manager"
            value={apartmentAttributes.manager}
            onChange={this.handleChange}
          />
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            value={apartmentAttributes.phone}
            onChange={this.handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={apartmentAttributes.email}
            onChange={this.handleChange}
          />
          <button type="submit">Create</button>
        </form>
        <Link to="/member/apartment_list">Apartment List</Link>
      </div>
    );
  }
}

export default NewApartment
