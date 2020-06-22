import styled from 'styled-components'

export const AppContainer = styled.div`
  position: relative;
  color: #3c4043;
  font-family: Roboto, 'Helvetica Neue', Helvetica, sans-serif;
  line-height: 1.25rem;
  > * {
    box-shadow: ${(props) => props.theme.boxShadow};
    margin-bottom: 20px;
    padding: 10px;
  }
`

export const AppContentContainer = styled.div`
  max-width: 1200px;
  width: 80%;
  height: 100%;
  margin: 20px auto;
`
