import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

export default props => (
    <Router>
        <Switch>
            <Route exact path='/' component={ <h2>a</h2> }/>
            <Route component={ <h2>a</h2> } />
        </Switch>
    </Router>
)
