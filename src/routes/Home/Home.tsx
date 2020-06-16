import React from 'react'

import Techs from 'src/components/Techs'

import { Container } from './styles'

const Home: React.FC<unknown> = () => (
    <Container>
      <h1>Welcome to my Personal Pages</h1>
      <Techs />
    </Container>
  )

export default Home
