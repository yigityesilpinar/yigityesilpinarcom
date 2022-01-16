import React from 'react'

import Typography from 'src/components/Typography'
import ProgressBar from 'src/components/ProgressBar'

import heroImgSrc from './assets/hero-img.png'
import aboutMe from './assets/about-me-img.png'
import { HomeSectionContainer, HomeSectionRow, HeroContent, HeroImg, AboutMeImg, AboutMeContent } from './styles'

const Home: React.FC = () => (
  <>
    <HomeSectionContainer withoutVerticalPadding>
      <HomeSectionRow>
        <HeroContent>
          <Typography variant="h1">Senior Frontend Developer</Typography>
          <Typography variant="h3">in transistion to Full-stack Developer</Typography>
          <Typography>
            Hi! My name is Yiğit Yeşilpınar. I’m passionate developer who is always up for a challenge and on the
            mission to develop my skills. Explore my website and let me know if you have any interesting projects where
            I might help.
          </Typography>
        </HeroContent>
        <HeroImg src={heroImgSrc} />
      </HomeSectionRow>
    </HomeSectionContainer>
    <HomeSectionContainer>
      <HomeSectionRow center>
        <AboutMeImg src={aboutMe} />
        <AboutMeContent>
          <Typography variant="h2">About me</Typography>
          <Typography>
            I was born in Denizli, Turkey. I gained expeirence in companies in different coutries: Turkey, Spain, Poland
            and currenlty in Berlin. I’m always open to interesting projects that can help me to grow.
          </Typography>
          <Typography>
            Personally, I like to play guitar and spend time with family &amp; friends. I can talk about soccer and
            basketball all day long!
          </Typography>
        </AboutMeContent>
      </HomeSectionRow>
    </HomeSectionContainer>
  </>
)

export default Home
