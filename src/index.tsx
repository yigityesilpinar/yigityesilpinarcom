import React from 'react'
import { hydrate } from 'react-dom'
import { loadableReady } from '@loadable/component'

import App from './App'

loadableReady(() => {
  const root = document.getElementById('root')
  hydrate(<App />, root)
})

// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept()
}
