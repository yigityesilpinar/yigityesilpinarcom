import React from 'react'

import { Container, Progress, Total } from './styles'

interface Props {
  className?: string
  percantage: number
}
const ProgressBar: React.FC<Props> = ({ className, percantage }) => (
  <Container className={className}>
    <Total />
    <Progress $percantage={percantage} />
  </Container>
)

export default ProgressBar
