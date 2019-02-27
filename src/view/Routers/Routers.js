import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Cards from 'view/Cards'

export default class AppContainer extends Component {

  render() { 
    return (
      <section>

        <Switch>
          <Route exact path="/" component={Cards} />
        </Switch>
      </section>
    )
  }
}