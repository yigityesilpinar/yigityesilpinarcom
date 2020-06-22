import React from 'react'

import AppBar from 'src/components/AppBar'

import { AppContainer, AppContentContainer } from './styles'

interface Props {}

const DefaulLayout: React.FC<Props> = ({ children }) => (
    <AppContainer>
      <AppBar />
      <AppContentContainer>{children}</AppContentContainer>
    </AppContainer>
  )

export default DefaulLayout
