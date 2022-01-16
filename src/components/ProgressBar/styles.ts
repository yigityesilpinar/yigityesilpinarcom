import styled from 'styled-components'

export const Progress = styled.div`
  position: absolute;
  height: 100%;
  z-index: 1;
  border-radius: 0.5em;
`

export const Total = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 0.5em;
`

export const ProgressBarContainer = styled.div<{ percantage: number; progressColor: string; totalColor: string }>`
  position: relative;
  height: 0.7em;
  ${Progress} {
    width: ${({ percantage }) => percantage}%;
    background-color: ${({ progressColor }) => progressColor};
  }
  ${Total} {
    background-color: ${({ totalColor }) => totalColor};
  }
`
