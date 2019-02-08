import React from "react"
import PropTypes from "prop-types"

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import AllApartments from './pages/AllApartments'

class AuthenticatedApp extends React.Component {
  render () {
    return (
        <div>
          <h1>AuthenticatedApp</h1>
        </div>
    )
  }
}

export default AuthenticatedApp
