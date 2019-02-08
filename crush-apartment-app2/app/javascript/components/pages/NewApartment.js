import React from "react"
import PropTypes from "prop-types"

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
        type: '',
        beds: '',
        baths: '',
        pets: '',
        manager: '',
        phone: '',
        email: ''
        }
      }
    }
  render () {
    return (
      <h1>Add a new listing</h1>

    );
  }
}

export default NewApartment
