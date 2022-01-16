import React from 'react'

import { TypographyContainer } from './styles'

export interface Props {
  className?: string
  contrast?: boolean
  variant?: 'h1' | 'h2' | 'h3' | 'body'
}

const Typography: React.FC<Props> = ({ children, variant = 'body', ...props }) => (
  <TypographyContainer variant={variant} {...props}>
    {children}
  </TypographyContainer>
)

export default Typography
