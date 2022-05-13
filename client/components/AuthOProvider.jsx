import React from 'react'
import { ReactDOM } from 'react'
import App from './App'
import { AuthOProvider } from '@auth0/auth0-react'

ReactDOM.render(
  <Auth0Provider
    domain="dev-16vcgw7c.us.auth0.com"
    clientId="5spd1v7AZB9WdqWDLZiXtMZpzs0YW2C0"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
)
