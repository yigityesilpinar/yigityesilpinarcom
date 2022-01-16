import React from 'react'

import Header from 'src/components/Header'
import Footer from 'src/components/Footer'

import GlobalStyles from './GlobalStyles'
import { AppContainer, RouteContainer } from './styles'

interface Props {}

const DefaulLayout: React.FC<Props> = ({ children }) => (
  <AppContainer>
    <GlobalStyles />
    <Header />
    <RouteContainer>{children}</RouteContainer>
    <Footer />
  </AppContainer>
)

export default DefaulLayout
