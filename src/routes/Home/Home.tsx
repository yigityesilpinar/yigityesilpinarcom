import React from 'react'

import Typography from 'src/components/Typography'
import ProgressBar from 'src/components/ProgressBar'

import SvgInprogress from './assets/SvgInprogress'
import { Container, Content, BottomAlign } from './styles'

const Home: React.FC = () => (
  <Container>
    <Content>
      <div className="col-1" />
      <div className="col-4">
        <SvgInprogress />
      </div>
      <div className="col-1" />
      <BottomAlign className="col-4">
        <Typography variant="h1">Work in progress</Typography>
        <br />
        <Typography>
          I am currently working on my brand-new personal website. I am really
          excited about it and spending all my free time working on it. I still
          need some more time so please be patient.
        </Typography>
        <br />
        <ProgressBar percantage={40} />
      </BottomAlign>
    </Content>
  </Container>
)

export default Home
