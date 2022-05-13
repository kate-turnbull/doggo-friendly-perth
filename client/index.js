import React from 'react'
import { Auth0Provider } from '@auth0/auth0-react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import ReactDOM from 'react-dom'
import App from './components/App'
import Walks from './components/Walks'
import Beaches from './components/Beaches'
import MyNav from './components/MyNav'
import { render } from 'react-dom'

const root = ReactDOM.createRoot(document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)