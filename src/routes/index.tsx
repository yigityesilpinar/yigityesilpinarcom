import React from 'react'
import { Route, Link } from 'react-router-dom'

import Home from 'src/routes/Home'
import Contact from 'src/routes/Contact'

const AppRoutes: React.FC<unknown> = () => (
  <>
    <div>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
    </div>
    <Route path="/" exact component={Home} />
    <Route path="/contact" exact component={Contact} />
  </>
)

export default AppRoutes
