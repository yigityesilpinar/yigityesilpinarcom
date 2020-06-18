import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import loadable from '@loadable/component'

const Home = loadable(() => import('src/routes/Home'))
const Contact = loadable(() => import('src/routes/Contact'))

const AppRoutes: React.FC<unknown> = () => (
  <>
    <div>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
    </div>
    <Switch>
      <Route path="/contact" exact component={Contact} />
      <Route path="/" component={Home} />
    </Switch>
  </>
)

export default AppRoutes
