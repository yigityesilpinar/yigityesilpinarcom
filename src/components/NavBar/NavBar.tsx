import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import Hamburger from 'src/components/Icons/Hamburger'
import { navLinks } from 'src/routes/config'

import { Container, LinksContainer } from './styles'

const NavBar = () => (
    <Container>
      <Hamburger />
      <LinksContainer>
        {navLinks.map((config) => (
          <RouterLink key={config.path as string} to={config.path as string}>
            {config.displayName}
          </RouterLink>
        ))}
      </LinksContainer>
    </Container>
  )

export default NavBar
