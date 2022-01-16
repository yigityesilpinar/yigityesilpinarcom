import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  height: 4.5em;
  background-color: ${({ theme }) => theme.palette.text.primary};
  padding-left: 7.625em;
  padding-right: 3em;
`

export const FooterLinksContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`

export const FooterLink = styled.a`
  img {
    height: 2.5em;
  }
  :not(:first-child){
    margin-left: 1em;
  }
`
