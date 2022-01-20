import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import defaultTheme from 'src/styles/theme'
import Layout from 'src/layouts/Default'
import appRoutes from 'src/routes/config'

const AppRoutes: React.FC<unknown> = () => (
  <ThemeProvider theme={defaultTheme}>
    <Layout>
      <Switch>
        {appRoutes.map((routeProps, index) => (
          <Route key={index} {...routeProps} />
        ))}
        <Redirect to="/" />
      </Switch>
    </Layout>
  </ThemeProvider>
)

export default AppRoutes
