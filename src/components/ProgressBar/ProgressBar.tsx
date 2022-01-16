import React from 'react'

import { ProgressBarContainer, Progress, Total } from './styles'

interface Props {
  className?: string
  percantage: number
  progressColor?: string
  totalColor?: string
}
const ProgressBar: React.FC<Props> = ({
  className,
  percantage,
  progressColor = '#fff',
  totalColor = 'rgba(255,255,255,.5)'
}) => (
  <ProgressBarContainer
    className={className}
    percantage={percantage}
    totalColor={totalColor}
    progressColor={progressColor}
  >
    <Total />
    <Progress />
  </ProgressBarContainer>
)

export default ProgressBar
