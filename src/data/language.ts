export interface Language {
  id: string
  title: string
  rating: number
}

export const languageRatingsIterator = [...new Array(5).keys()]
export const languages: Language[] = [
  {
    id: 'english',
    title: 'English',
    rating: 5
  },
  {
    id: 'turkish',
    title: 'Turkish (native)',
    rating: 5
  },
  {
    id: 'polish',
    title: 'Polish',
    rating: 3
  },
  {
    id: 'italian',
    title: 'Italian',
    rating: 3
  },
  {
    id: 'german',
    title: 'German',
    rating: 2
  }
]
