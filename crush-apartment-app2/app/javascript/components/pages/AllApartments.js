import React from "react"
import PropTypes from "prop-types"

class AllApartments extends React.Component {
  constructor(props){
    super()
    this.state = {
      apartments: []
    }
  }

componentDidMount() {
  fetch("/apartments.json")
  .then((response) => response.json())
  .then((apartments) => {
    this.setState({apartments: apartments})
  })
}

render () {
  return (
    <div>
      <h1>Apartment List</h1>
      <table>
        <tbody>
          <tr>
            <th>Available Date</th>
            <th>Rent</th>
            <th>Type</th>
            <th>Beds</th>
            <th>Baths</th>
            <th>City</th>
          </tr>

          {this.state.apartments.map((apartment, index) => {
            return(
              <tr key={index}>
                <td>{apartment.avail_date}</td>
                <td>{apartment.price}</td>
                <td>{apartment.type}</td>
                <td>{apartment.beds}</td>
                <td>{apartment.baths}</td>
                <td>{apartment.city}, {apartment.state}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>

    );
  }
}

export default AllApartments
