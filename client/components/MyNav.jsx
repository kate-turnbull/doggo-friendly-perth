import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated } from './Authenticated'

import { Navbar, Nav, Dropdown } from 'rsuite'

function MyNav () {
  const { logout, loginWithRedirect} = useAuth0()

    function handleLogOff (event) {
      event.preventDefault()
      logout()
    }

    function handleLogIn (event) {
      event.preventDefault()
      loginWithRedirect()
    }

    function handleSignUp (event) {
      event.preventDefault()
      loginWithRedirect(
        {
          redirectUri: `${window.location.origin}/signup`
        }
      )
    }


    return(
        <>
        <Navbar>
          <IfAuthenticated>
            <Link to='/' onClick={handleLogOff}>Log Off</Link>
          </IfAuthenticated>
           <Link to='/' onClick={handleSignUp}>Sign Up</Link>
           <Link to ='/' onClick={handleLogIn}>Login</Link>
         </Navbar>
           </>
    )
}

export default MyNav

