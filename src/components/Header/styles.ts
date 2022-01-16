import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 5em;
  padding-left: 7.625em;
  a {
    display: flex;
    height: 100%;
    align-items: center;
    position: relative;
    color: ${({ theme }) => theme.palette.text.primary};
    padding: 0 1.5em;
    :hover {
      opacity: 0.7;
    }
    &:first-child {
      padding-left: 0;
      &:after {
        content: '';
        position: absolute;
        border-bottom: 1px solid black;
        bottom: 0;
        left: -7.625em;
        width: 0;
        opacity: 0;
        transition: all 0.6s ease-in-out;
      }
    }
    &:not(:first-child):after {
      content: '';
      position: absolute;
      border-bottom: 1px solid black;
      bottom: 0;
      left: 0;
      right: 0;
      width: 0;
      transition: all 0.6s ease-in-out;
      opacity: 0;
    }
    &.active:after {
      opacity: 1;
      width: 100%;
    }
    &.active:first-child:after {
      width: calc(100% + 7.625em);
    }
  }
`
