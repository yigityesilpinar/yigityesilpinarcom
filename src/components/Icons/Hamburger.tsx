import React from 'react'

import { Container } from './styles'

interface Props {
  className?: string
}

const Hamburger: React.FC<Props> = ({ ...restProps }) => (
    <Container>
      <svg focusable="false" viewBox="0 0 24 24" {...restProps}>
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
      </svg>
    </Container>
  )

export default Hamburger
