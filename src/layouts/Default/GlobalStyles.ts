import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
body, body > #root
{
  font-family: Roboto, 'Helvetica Neue', Helvetica, sans-serif;
  min-height: 100vh;
  margin: 0;
}

.ant-select {
  width: 200px;
}

a.active  {
  *  {
    color: ${({ theme }) => theme.palette.primary.main};
  }
}
`

export default GlobalStyles
