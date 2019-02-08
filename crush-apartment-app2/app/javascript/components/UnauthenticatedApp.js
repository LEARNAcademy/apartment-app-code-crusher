import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import AllApartments from './pages/AllApartments'

class UnauthenticatedApp extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <h1>UnauthenticatedApp</h1>
          <Route path="/apartment_list" exact component={AllApartments}/>
        </div>
      </Router>
    );
  }
}

export default UnauthenticatedApp
