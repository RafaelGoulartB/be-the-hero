import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Logon from './pages/Logon'
import Register from './pages/Register'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Logon} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  )
}