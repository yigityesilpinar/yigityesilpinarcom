export interface Skill {
  id: string
  name: string
  percantage: number
  highlight?: string
  version?: string
}

export const skills: Skill[] = [
  {
    id: 'typescript',
    name: 'Typescript',
    percantage: 100,
    // eslint-disable-next-line @typescript-eslint/quotes
    highlight: "Can't do without it."
  },
  {
    id: 'react',
    name: 'React',
    percantage: 100,
    highlight: 'First choice UI library, loving hooks'
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    percantage: 80
  },
  {
    id: 'webpack',
    name: 'Webpack',
    percantage: 80
  },
  { id: 'graphql', name: 'GraphQL', percantage: 90 },
  {
    id: 'docker',
    name: 'Docker',
    percantage: 75
  },
  {
    id: 'ci-cd',
    name: 'CI/CD',
    percantage: 85
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    percantage: 55
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    percantage: 60
  },
  {
    id: 'swift',
    name: 'Swift',
    percantage: 50
  },
  {
    id: 'jest',
    name: 'Jest',
    percantage: 70
  }
]
