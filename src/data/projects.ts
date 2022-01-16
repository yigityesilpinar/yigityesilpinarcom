export interface Project {
  id: string
  name: string
  description: string
  role: string
  challenges: string
  timePeriod: {
    start: string
    end: string | undefined
  }
  techs: string
  for: 'self' | 'Wirtualna Polska' | 'Storecast'
  status: 'inProgress' | 'done'
  sourceLink: string | undefined
  webLink: string | undefined
}
export const projects: Project[] = [
  {
    id: 'yigityesilpinarcom',
    name: 'Yigityesilpinar.com',
    challenges: 'Dynamic resume in HTML exported to PDF',
    description: 'Personal website of Yigit Yesilpinar, Software Engineer',
    techs: 'Typescript, React, Webpack, Express, Docker, CI & CD with github workflows',
    for: 'self',
    status: 'inProgress',
    role: 'Frontend Developer',
    timePeriod: {
      start: 'January 2022',
      end: undefined
    },
    sourceLink: 'https://github.com/yigityesilpinar/yigityesilpinarcom',
    webLink: 'http://www.yigityesilpinar.com'
  },
  {
    id: 'perfAnalytics',
    name: 'PerfAnalytics',
    challenges: 'Dynamic resume in HTML exported to PDF',
    description:
      'A case study to collect performance metrics of a website with PerfAnalyticsJS client-side library, store with PerfAnalyticsAPI and visualize with PerfAnalyticsDashboard',
    techs: 'Typescript, React, Webpack, Express, PostgreSQL, Docker, CI & CD with github workflows',
    for: 'self',
    status: 'inProgress',
    role: 'Fullstack Developer',
    timePeriod: {
      start: 'December 2022',
      end: 'December 2022'
    },
    sourceLink: 'https://github.com/yigityesilpinar/PerfAnalyticsDashboard',
    webLink: 'https://yy-perf-analytics-dashboard.herokuapp.com'
  },
  {
    id: 'wppilot',
    name: 'WP Pilot',
    for: 'Wirtualna Polska',
    challenges:
      'Browser compatability; a wide range of target auidence, supporting IE10, scale; around 500k simultaneous users at peak',
    status: 'done',
    role: 'Frontend Developer',
    description: 'Polish internet television platform',
    techs: 'Typescript, React, Webpack, Express, MobX, Docker, GitLab CI/CD',
    timePeriod: {
      start: 'May 2017',
      end: 'September 2019'
    },
    sourceLink: undefined,
    webLink: 'https://pilot.wp.pl/tv/'
  },
  {
    id: 'queueme',
    name: 'QueueMe',
    description:
      'Queueing and appointment booking solutions with an administration interface for B2B customers, web and mobile applications for the end user',
    challenges: `Localisation: supporting 4 different languages and targeting customers from different countries
    Hybrid (mobile webview Android/iOS) development and compatability`,
    sourceLink: undefined,
    for: 'Storecast',
    role: 'Fullstack Developer (Frontend, Mobile and Backend)',
    status: 'inProgress',
    techs: 'Typescript, React, Express, Kotlin, Spring, Apollo CLient, Graphql API, PostgreSQL, Swift, Docker, Jenkins',
    timePeriod: {
      start: 'June 2020',
      end: undefined
    },
    webLink: 'https://queueme.de/'
  }
  // https://ngtv.storecast.de/
]
