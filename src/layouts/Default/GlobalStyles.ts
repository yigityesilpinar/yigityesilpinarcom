import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
body, body > #root
{
  font-family: 'Open Sans', sans-serif;
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
ol, ul, dl {
    margin: 0;
    padding: 0;
}
`

export default GlobalStyles
