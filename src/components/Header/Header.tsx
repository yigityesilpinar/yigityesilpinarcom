import React from 'react'
import { NavLink } from 'react-router-dom'

import { navLinks } from 'src/routes/config'

import { HeaderContainer } from './styles'

const Header: React.FC = () => (
  <HeaderContainer>
    {navLinks.map((config) => (
      <NavLink activeClassName="active" key={config.path as string} to={config.path as string} exact={config.exact}>
        {config.displayName}
      </NavLink>
    ))}
  </HeaderContainer>
)

export default Header
