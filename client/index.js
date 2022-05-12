import React from 'react'
import { render } from 'react-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import { Provider } from 'react-redux'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
    render(
        <Auth0Provider
        domain="dev-16vcgw7c.us.auth0.com"
        clientId="5spd1v7AZB9WdqWDLZiXtMZpzs0YW2C0"
        redirectUri={window.location.origin}
      >
        <App />,
        </Auth0Provider>,
        document.getElementById('app')
    )
})