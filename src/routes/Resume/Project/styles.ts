import styled from 'styled-components'

export const ProjectItem = styled.div`
  padding-bottom: 1.5em;
  img {
    padding-right: 0.3em;
  }
`

export const ProjectLinkContainer = styled.a`
  display: flex;
  padding-bottom: 1em;
  color: ${({ theme }) => theme.palette.text.primary};
  :hover {
    opacity: 0.7;
    color: ${({ theme }) => theme.palette.text.primary};
  }
`
