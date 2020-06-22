import * as React from 'react'

import techs from 'src/assets/data/techs.json'
import Typography from 'src/components/Typography'

import { Container, SkillsContainer, SkillContainer } from './styles'

const Techs: React.FC<unknown> = () => (
    <Container>
      <Typography variant="h1">My Skills</Typography>
      <SkillsContainer>
        {techs.map((tech) => (
          <SkillContainer key={tech.id}>
            <Typography variant="h2">{tech.name}</Typography>
            <Typography>rating {(tech.percent * 5) / 100}</Typography>
            <Typography>{tech.name}</Typography>
            {/* <button>Edit</button> */}
          </SkillContainer>
        ))}
      </SkillsContainer>
    </Container>
  )

export default Techs
