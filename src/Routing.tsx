import React, { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Tasks } from './tasks'
import { PageNotFound } from './PageNotFound'
import { Home } from './Home'

export const Routing: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/tasks' component={Tasks}/>
        <Route component={PageNotFound}/>
      </Switch>
    </BrowserRouter>
  )
}
