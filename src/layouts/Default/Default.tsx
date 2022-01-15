import React from 'react'

import GlobalStyles from './GlobalStyles'
import { AppContainer, RouteContainer } from './styles'

interface Props {}

const DefaulLayout: React.FC<Props> = ({ children }) => (
  <AppContainer>
    <GlobalStyles />
    <RouteContainer>{children}</RouteContainer>
  </AppContainer>
)

export default DefaulLayout
