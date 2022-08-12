import App from '@/App'
import '@/index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as Router } from 'react-router-dom'

// TODO: Remove this, but not how shared code is imported inside the renderer folder.
import { helloFromShared } from '../shared/helloFromShared'

helloFromShared()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
