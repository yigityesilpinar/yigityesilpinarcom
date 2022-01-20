import React, { useRef, useState } from 'react'
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'
import { Helmet } from 'react-helmet'

import theme from 'src/styles/theme'
import Typography from 'src/components/Typography'
import { contacts, educations, experiences, languageRatingsIterator, languages, projects, skills } from 'src/data'
import { HomeSectionContainer, HomeSectionRow, HeroContent } from 'src/routes/Home/styles'
import Button from 'src/components/Button'
import ProgressBar from 'src/components/ProgressBar'

import Project from './Project'
import ResumeImgSrc from './assets/resumeImg.png'
import downloadSrc from './assets/download.svg'
import {
  ResumePageWrapper,
  ResumePageContainer,
  ResumePageLeftContainer,
  ResumePageRightContainer,
  ResumeImg,
  ResumeTitle,
  ResumeSubTitle,
  RightTopBar,
  ResumeSection,
  ExperienceListItemContent,
  ExperienceListItemTitle,
  ExperienceListItemSub,
  LeftContainerListItemContentLink,
  Cycle,
  CyclesContainer,
  LanguageTitle,
  LanguageContianer,
  ResumePageLeftSectionsContainer
} from './styles'

const Resume: React.FC<unknown> = () => {
  const [isDownloading, setIsDownloading] = useState(false)
  const resumePageOneRef = useRef<HTMLDivElement>(null)
  const resumePageTwoRef = useRef<HTMLDivElement>(null)
  const resumePageThreeRef = useRef<HTMLDivElement>(null)
  const handlePrint = () => {
    if (
      typeof window !== 'undefined' &&
      resumePageOneRef.current &&
      resumePageTwoRef.current &&
      resumePageThreeRef.current
    ) {
      setIsDownloading(true)
      const doc = new jsPDF('p', 'mm', 'a4')
      //   1 mm = 3.779528 px; 1 px = 0.264583 mm
      const pageOneElem = resumePageOneRef.current
      const pageTwoElem = resumePageTwoRef.current
      const pageThreeElem = resumePageThreeRef.current
      const scale = 1080 / resumePageOneRef.current.offsetWidth
      const html2canvasOptions = {
        scale,
        backgroundColor: '#ffffff'
      }
      html2canvas(pageOneElem, html2canvasOptions)
        .then((pageOneCanvas) => {
          const imgData = pageOneCanvas.toDataURL('image/png')
          const imgProps = doc.getImageProperties(imgData)
          const pdfWidth = doc.internal.pageSize.getWidth()
          const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width
          doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
          doc.setTextColor(theme.palette.primary.main)
          doc.textWithLink('Click to see more details online', pdfWidth - 10, 7.5, {
            url: 'http://www.yigityesilpinar.com/resume',
            align: 'right',
            color: theme.palette.primary.main
          })
          return Promise.resolve()
        })
        .then(() =>
          html2canvas(pageTwoElem, html2canvasOptions).then((pageTwoCanvas) => {
            doc.addPage()
            const imgData = pageTwoCanvas.toDataURL('image/png')
            const imgProps = doc.getImageProperties(imgData)
            const pdfWidth = doc.internal.pageSize.getWidth()
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width
            doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
            return Promise.resolve()
          })
        )
        .then(() =>
          html2canvas(pageThreeElem, html2canvasOptions).then((pageThreeCanvas) => {
            doc.addPage()
            const imgData = pageThreeCanvas.toDataURL('image/png')
            const imgProps = doc.getImageProperties(imgData)
            const pdfWidth = doc.internal.pageSize.getWidth()
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width
            doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
            return Promise.resolve()
          })
        )
        .then(() => {
          doc.save('YigitYesilpinarResume.pdf')
          setIsDownloading(false)
        })
        .catch(() => {
          setIsDownloading(false)
        })
    }
  }
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://yigityesilpinar.com/resume" />
      </Helmet>
      <HomeSectionContainer withoutVerticalPadding>
        <HomeSectionRow>
          <HeroContent>
            <Typography variant="h1">My resume</Typography>
            <Typography variant="h3">created in html and ready to export to pdf</Typography>
            <Typography>
              This way I can keep my CV updated and have the pdf ready whenever someone asks for it.
            </Typography>
          </HeroContent>
        </HomeSectionRow>
        <div style={{ height: '2em' }} />
        <Button isLoading={isDownloading} iconSrc={downloadSrc} onClick={() => handlePrint()} text="Download as pdf" />
      </HomeSectionContainer>
      <ResumePageWrapper ref={resumePageOneRef}>
        <ResumePageContainer>
          <ResumePageLeftContainer>
            <ResumeImg src={ResumeImgSrc} alt="Yigit Yesilpinar" />
            <ResumePageLeftSectionsContainer>
              <ResumeSection>
                I care a lot about code quality, user and developer experience. I am up for challenges and interesting
                projects. I take ownership of the projects and usually deliver more than expected.
              </ResumeSection>
              <ResumeSection>
                <ResumeSubTitle>Contact</ResumeSubTitle>
                <ul>
                  {contacts.map(({ id, text, iconSrc, link }) => (
                    <li key={id}>
                      <LeftContainerListItemContentLink
                        {...(link
                          ? {
                              rel: 'noreferrer',
                              href: link,
                              target: '_blank'
                            }
                          : {
                              as: 'span'
                            })}
                      >
                        <img alt={id} src={iconSrc} />
                        <span>{text}</span>
                      </LeftContainerListItemContentLink>
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
                        <Cycle key={i} isFull={i + 1 <= rating} />
                      ))}
                    </CyclesContainer>
                  </LanguageContianer>
                ))}
              </ResumeSection>
              <ResumeSection>
                <ResumeSubTitle>Hobby</ResumeSubTitle>
                <div>Playing guitar, football, basketball.</div>
              </ResumeSection>
            </ResumePageLeftSectionsContainer>
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
      <ResumePageWrapper ref={resumePageTwoRef}>
        <ResumePageContainer>
          <ResumePageLeftContainer>
            <ResumeSection>
              <ResumeSubTitle>Skills</ResumeSubTitle>
              {skills.map(({ id, name, percantage }) => (
                <div key={id} style={{ paddingBottom: '1em' }}>
                  <div style={{ paddingBottom: '.2em' }}>{name}</div>
                  <ProgressBar percantage={percantage} />
                </div>
              ))}
            </ResumeSection>
          </ResumePageLeftContainer>
          <ResumePageRightContainer>
            <ResumeSection>
              <ResumeSubTitle>Projects</ResumeSubTitle>
              {projects.slice(0, 3).map((project) => (
                <Project key={project.id} project={project} />
              ))}
            </ResumeSection>
          </ResumePageRightContainer>
        </ResumePageContainer>
      </ResumePageWrapper>
      <ResumePageWrapper ref={resumePageThreeRef}>
        <ResumePageContainer>
          <ResumePageLeftContainer />
          <ResumePageRightContainer>
            <ResumeSection>
              <ResumeSubTitle>Projects</ResumeSubTitle>
              {projects.slice(3).map((project) => (
                <Project key={project.id} project={project} />
              ))}
            </ResumeSection>
          </ResumePageRightContainer>
        </ResumePageContainer>
      </ResumePageWrapper>
    </>
  )
}

export default Resume
