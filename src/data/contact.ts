export interface Contact {
  id: 'email' | 'place' | 'website' | 'github' | 'linkedin'
  iconSrc: string
  text: string
  link?: string
}

import emailIconSrc from './assets/email.svg'
import placeIconSrc from './assets/place.svg'
import languageIconSrc from './assets/language.svg'
import githubIconSrc from './assets/github.svg'
import linkedinIconSrc from './assets/linkedin.svg'

export const contacts: Contact[] = [
  {
    id: 'email',
    iconSrc: emailIconSrc,
    text: 'yigityesilpinar@gmail.com'
  },
  {
    id: 'place',
    iconSrc: placeIconSrc,
    text: 'Berlin, Germany'
  },
  {
    id: 'website',
    iconSrc: languageIconSrc,
    text: 'yigityesilpinar.com',
    link: 'https://yigityesilpinar.com'
  },
  {
    id: 'github',
    iconSrc: githubIconSrc,
    text: 'github.com/yigityesilpinar',
    link: 'https://github.com/yigityesilpinar'
  },
  {
    id: 'linkedin',
    iconSrc: linkedinIconSrc,
    text: 'linkedin.com/in/yigit-yesilpinar-b031a071/',
    link: 'https://www.linkedin.com/in/yigit-yesilpinar-b031a071/'
  }
]
