import React, { useRef } from 'react'
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'

import theme from 'src/styles/theme'
import { contacts, educations, experiences, languageRatingsIterator, languages } from 'src/data'

import resumePictureSrc from './assets/resumePicture.png'
import {
  ResumePageWrapper,
  ResumePageContainer,
  ResumePageLeftContainer,
  ResumePageRightContainer,
  ResumePicture,
  ResumeTitle,
  ResumeSubTitle,
  RightTopBar,
  ResumeSection,
  ExperienceListItemContent,
  ExperienceListItemTitle,
  ExperienceListItemSub,
  LeftContainerListItemContent,
  Cycle,
  CyclesContainer,
  LanguageTitle,
  LanguageContianer
} from './styles'

//
const Resume: React.FC<unknown> = () => {
  const resumePageRef = useRef<HTMLDivElement>(null)
  const handlePrint = () => {
    if (typeof window !== 'undefined' && resumePageRef.current) {
      const doc = new jsPDF('p', 'mm', 'a4')
      //   1 mm = 3.779528 px; 1 px = 0.264583 mm
      html2canvas(resumePageRef.current, {
        ignoreElements: (elem) => elem.classList.contains('react-resizable-handle')
      }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png')
        const imgProps = doc.getImageProperties(imgData)
        const pdfWidth = doc.internal.pageSize.getWidth()
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width
        doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
        doc.textWithLink('Click to see more details online', pdfWidth - 10, 5, {
          url: 'https://yigityesilpinar.com/resume',
          align: 'right',
          color: theme.palette.primary.main
        })
        doc.save('YigitYesilpinarResume.pdf')
      })
    }
  }
  return (
    <>
      <button onClick={() => handlePrint()}>test</button>
      <ResumePageWrapper ref={resumePageRef}>
        <ResumePageContainer>
          <ResumePageLeftContainer>
            <ResumePicture src={resumePictureSrc} />
            <ResumeSection>
              <ResumeSubTitle>Contact</ResumeSubTitle>
              <ul>
                {contacts.map(({ id, text, iconSrc }) => (
                  <li key={id}>
                    <LeftContainerListItemContent>
                      <img src={iconSrc} />
                      <span>{text}</span>
                    </LeftContainerListItemContent>
                  </li>
                ))}
              </ul>
            </ResumeSection>
            <ResumeSection>
              <ResumeSubTitle>Languages</ResumeSubTitle>
              {languages.map(({ id, rating, title }) => (
                <LanguageContianer key={id}>
                  <LanguageTitle>{title}</LanguageTitle>
                  <CyclesContainer>
                    {languageRatingsIterator.map((i) => (
                      <Cycle isFull={i + 1 <= rating} />
                    ))}
                  </CyclesContainer>
                </LanguageContianer>
              ))}
            </ResumeSection>
            <ResumeSection>
              <ResumeSubTitle>Hobby</ResumeSubTitle>
              <div>Playing guitar, football, basketball.</div>
            </ResumeSection>
          </ResumePageLeftContainer>
          <ResumePageRightContainer>
            <RightTopBar />
            <ResumeTitle>Yiğit Yeşilpınar</ResumeTitle>
            <ResumeSubTitle style={{ paddingBottom: 0 }}>Senior Fronted Developer</ResumeSubTitle>
            <p>Born in Denizli, Turkey 1990</p>
            <ResumeSection>
              <ResumeSubTitle>Experience</ResumeSubTitle>
              <ul>
                {experiences.map((experience) => (
                  <li key={experience.id}>
                    <ExperienceListItemContent>
                      <ExperienceListItemTitle>{experience.title}</ExperienceListItemTitle>
                      <span>{experience.description}</span>
                      <ExperienceListItemSub>{experience.sub}</ExperienceListItemSub>
                    </ExperienceListItemContent>
                  </li>
                ))}
              </ul>
            </ResumeSection>
            <ResumeSection>
              <ResumeSubTitle>Education</ResumeSubTitle>
              <ul>
                {educations.map((education) => (
                  <li key={education.id}>
                    <ExperienceListItemContent>
                      <ExperienceListItemTitle>{education.title}</ExperienceListItemTitle>
                      <span>{education.description}</span>
                      <ExperienceListItemSub>{education.sub}</ExperienceListItemSub>
                    </ExperienceListItemContent>
                  </li>
                ))}
              </ul>
            </ResumeSection>
          </ResumePageRightContainer>
        </ResumePageContainer>
      </ResumePageWrapper>
    </>
  )
}

export default Resume
