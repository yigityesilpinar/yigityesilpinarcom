import React from 'react'

// import AppBar from 'src/components/AppBar'
// TODO: handle menu

import { AppContainer, AppContentContainer, GlobalStyles } from './styles'

interface Props {}

const DefaulLayout: React.FC<Props> = ({ children }) => (
  <AppContainer>
    <GlobalStyles />
    {/* <AppBar /> */}
    <AppContentContainer>{children}</AppContentContainer>
  </AppContainer>
)

export default DefaulLayout
