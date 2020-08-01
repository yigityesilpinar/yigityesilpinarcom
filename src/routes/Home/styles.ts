import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  @media screen and (max-width: ${({ theme }) => theme.mobileBreakPoint}) {
    align-items: flex-start;
  }
`

export const Content = styled.div`
  display: flex;
  @media screen and (max-width: ${({ theme }) => theme.mobileBreakPoint}) {
    flex-direction: column;
    align-items: center;
    [class*='col-'] {
      width: 80%;
    }
    .col-1 {
      display: none;
    }
  }
`

export const BottomAlign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
