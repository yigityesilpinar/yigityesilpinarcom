export interface Education {
  id: string
  title: string
  description: string
  sub: string
}

export const educations: Education[] = [
  {
    id: 'ankara-university',
    title: 'Computer Engineering at Ankara University',
    description: '2009 - 2015',
    sub: 'Bachelor’s Degree, Ankara, Turkey'
  },
  {
    id: 'sannio-university',
    title: 'Computer Science at University of Sannio in Benevento',
    description: '2013 -2014',
    sub: 'Student Exchange, Benevento, Italy'
  },
  {
    id: 'denizli-erbakir',
    title: 'Denizli Erbakır Science High School',
    description: '2005 - 2009',
    sub: 'High School, Denizli, Turkey'
  }
]
