import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import universal from 'react-universal-component'
// import Home from 'src/routes/Home'
// import Contact from 'src/routes/Contact'

const Home = universal((props) => import('src/routes/Home'))
const Contact = universal((props) => import('src/routes/Contact'))

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
