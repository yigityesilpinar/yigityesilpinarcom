import React from 'react'
import { projects } from 'src/data'

import { ExperienceListItemSub, ExperienceListItemTitle } from '../styles'
import { ProjectItem, ProjectLinkContainer } from './styles'

import githubIconSrc from 'src/data/assets/github_black.svg'
import languageIconSrc from 'src/data/assets/language_black.svg'

interface ProjectProps {
  project: typeof projects[number]
}

const Project: React.FC<ProjectProps> = ({ project }) => (
  <ProjectItem>
    <ul>
      <li>
        <ExperienceListItemTitle>
          {project.name}
          {project.for === 'self' ? ' (Personal)' : ` at ${project.for}`}
        </ExperienceListItemTitle>
      </li>
    </ul>
    <div style={{ paddingLeft: '2em' }}>{project.role}</div>
    <ExperienceListItemSub style={{ paddingLeft: '2em' }}>
      {project.timePeriod.start} - {project.timePeriod.end || 'until now'}
    </ExperienceListItemSub>
    <div style={{ padding: '1em 0' }}>{project.description}</div>
    <div style={{ paddingBottom: '1em' }}>
      <ExperienceListItemTitle>Technologies: </ExperienceListItemTitle>
      {project.techs}
    </div>
    <div style={{ paddingBottom: '1em' }}>
      <ExperienceListItemTitle>Challenges: </ExperienceListItemTitle>
      {project.challenges}
    </div>
    <div>
      {project.sourceLink && (
        <ProjectLinkContainer href={project.sourceLink} target="_blank">
          <img src={githubIconSrc} />
          <span>{project.sourceLink.replace(/https?:\/\//, '')}</span>
        </ProjectLinkContainer>
      )}
      {project.webLink && (
        <ProjectLinkContainer href={project.webLink} target="_blank">
          <img src={languageIconSrc} />
          <span>{project.webLink.replace(/https?:\/\//, '')}</span>
        </ProjectLinkContainer>
      )}
    </div>
  </ProjectItem>
)

export default Project
