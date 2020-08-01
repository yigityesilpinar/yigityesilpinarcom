import styled from 'styled-components'
import lighten from 'polished/lib/color/lighten'

export const Container = styled.div`
  position: relative;
  height: max(2.7vw, 36px);
  > * {
    border-radius: max(1.65vw, 22px);
  }
`

export const Progress = styled.div<{ $percantage: number }>`
  position: absolute;
  background-color: ${({ theme }) => theme.palette.green.light};
  width: ${({ $percantage }) => $percantage}%;
  height: 100%;
  z-index: 1;
`

export const Total = styled.div`
  position: absolute;
  background-color: ${({ theme }) =>
    lighten(0.1)(theme.palette.background.main)};
  height: 100%;
  width: 100%;
`
