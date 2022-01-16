import styled, { css } from 'styled-components'

export const HomeSectionContainer = styled.div<{ withoutVerticalPadding?: boolean }>`
  padding-left: 7.625em;
  ${({ withoutVerticalPadding }) =>
    !withoutVerticalPadding &&
    css`
      padding-top: 13em;
      padding-bottom: 13em;
    `}
`

export const HomeSectionRow = styled.div<{ center?: boolean }>`
  display: flex;
  ${({ center }) =>
    center &&
    css`
      align-items: center;
    `}
`
export const HeroContent = styled.div`
  padding-top: 10em;

  h1 {
    width: 50%;
  }
  h5 {
    width: 50%;
  }
`

export const HeroImg = styled.img`
  width: 21.375em;
`

export const AboutMeImg = styled.img`
  width: 13em;
  height: 13em;
`

export const AboutMeContent = styled.div`
  padding-left: 9em;
  width: 36em;
  h5 + h5 {
    margin-top: 2em;
  }
`
