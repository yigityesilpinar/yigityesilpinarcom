import React from 'react'

import Typography from 'src/components/Typography'

import heroImgSrc from './assets/hero-img.png'
import aboutMe from './assets/about-me-img.png'
import { HomeSectionContainer, HomeSectionRow, HeroContent, HeroImg, AboutMeImg, AboutMeContent } from './styles'

const Home: React.FC = () => (
  <>
    <HomeSectionContainer withoutVerticalPadding>
      <HomeSectionRow>
        <HeroContent>
          <Typography variant="h1">Senior Frontend Developer</Typography>
          <Typography variant="h3">with experience of Full Stack development</Typography>
          <Typography>
            Hi! My name is Yiğit Yeşilpınar. I am a passionate developer who is always up for a challenge. I care a lot
            about code quality, user and developer experience. Explore my website and let me know if you have any
            interesting projects where I might help.
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
            I was born in Denizli, Turkey. I gained experience in companies in different countries: Turkey, Spain,
            Poland and currently in Germany. I enjoy learning more about different cultures and new things.
          </Typography>
          <Typography>
            Personally, I like playing guitar, spending time with family and friends. I can talk about programming,
            football or basketball all day long!
          </Typography>
        </AboutMeContent>
      </HomeSectionRow>
    </HomeSectionContainer>
  </>
)

export default Home
