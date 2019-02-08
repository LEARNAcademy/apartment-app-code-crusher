import React from "react"
import PropTypes from "prop-types"

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import AllApartments from './pages/AllApartments'
import NaviBar from './pages/NaviBar'

class UnauthenticatedApp extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <NaviBar/>
          <h1>UnauthenticatedApp</h1>
          <Route path="/guest/apartment_list" exact component={AllApartments}/>
        </div>
      </Router>
    );
  }
}

export default UnauthenticatedApp
