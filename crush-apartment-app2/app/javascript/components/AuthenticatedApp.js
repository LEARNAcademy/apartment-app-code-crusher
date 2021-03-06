import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import AllApartments from './pages/AllApartments'
import NewApartment from './pages/NewApartment'
import NaviBar from './pages/NaviBar'

class AuthenticatedApp extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <NaviBar/>
          <h1>AuthenticatedApp</h1>
          <Route path="/member/apartment_list" exact component={AllApartments}/>
          <Route path="/member/new_apartment" exact component={NewApartment}/>
        </div>
      </Router>
    )
  }
}

export default AuthenticatedApp
