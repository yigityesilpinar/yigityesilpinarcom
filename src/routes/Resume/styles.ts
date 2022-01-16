import styled, { css } from 'styled-components'

// A4 210 x 297 mm
export const ResumePageWrapper = styled.div`
  position: relative;
  width: 60%;
  height: 0;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);
  padding-top: 84.87%;
  margin: 10em auto;
  /* 11pt relative to 210mm a4 width and 60% ResumePageWrapper width */
  font-size: 1.1082vw;
  line-height: 1.4;
`

export const ResumePageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  ul {
    list-style-position: inside;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  li {
    display: flex;
  }
  li:not(:first-child) {
    padding-top: 1em;
  }
`

export const ResumeSubTitle = styled.h2`
  font-weight: 700;
  margin: 0;
  padding: 0;
  padding-bottom: 1.4em;
`

export const ResumePageLeftContainer = styled.div`
  box-sizing: border-box;
  font-size: 0.9em;
  width: 33%;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  display: flex;
  flex-direction: column;
  padding: 6em 2.58em 2.58em 2.58em;
  position: relative;
  ${ResumeSubTitle} {
    color: ${({ theme }) => theme.palette.primary.contrastText};
    padding-bottom: 0.7em;
  }
`

export const ResumePageLeftSectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-evenly;
`

export const ResumePageRightContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex: 1;
  flex-direction: column;
  padding: 5.16em 2.58em 2.58em 2.58em;
  position: relative;
  li:before {
    content: '\\2022';
    font-family: initial;
    display: inline-block;
    margin-right: 1em;
    font-size: 1.5em;
    margin-top: -0.2em;
    height: 1.2em;
  }
`

export const ResumePicture = styled.img`
  margin: 0 auto;
  width: 7.73em;
  height: 7.73em;
`

export const ResumeTitle = styled.h1`
  font-size: 2.55em;
  font-weight: 800;
  margin: 0;
`

export const RightTopBar = styled.div`
  position: absolute;
  height: 2.57em;
  background-color: #eeeeee;
  top: 0;
  left: 0;
  right: 0;
`
export const ResumeSection = styled.div`
  padding-top: 1.8em;
`

export const ExperienceListItemContent = styled.span`
  display: flex;
  flex-direction: column;
`

export const ExperienceListItemTitle = styled.span`
  font-weight: 700;
`

export const ExperienceListItemSub = styled.span`
  color: #bdbdbd;
`

export const LeftContainerListItemContent = styled.a<{ href?: string }>`
  display: flex;
  width: 100%;
  color: ${({ theme }) => theme.palette.primary.contrastText};
  img {
    height: 1.4em;
    margin-right: 0.7em;
    margin-top: 0.1em;
  }

  ${({ href }) =>
    href
      ? css`
          :hover {
            opacity: 0.7;
            color: ${({ theme }) => theme.palette.primary.contrastText};
          }
        `
      : css`
          cursor: default;
          :hover {
            color: ${({ theme }) => theme.palette.primary.contrastText};
          }
        `}
`

export const LanguageContianer = styled.div`
  padding-bottom: 0.7em;
`
export const CyclesContainer = styled.div`
  display: flex;
`

export const Cycle = styled.span<{ isFull?: boolean }>`
  width: 1.2em;
  height: 1.2em;
  border-radius: 50%;
  opacity: 0.5;
  background-color: ${({ theme }) => theme.palette.primary.contrastText};
  margin-right: 0.3em;
  ${({ isFull }) =>
    isFull &&
    css`
      opacity: 1;
    `}
`

export const LanguageTitle = styled.div`
  padding-bottom: 0.4em;
`
