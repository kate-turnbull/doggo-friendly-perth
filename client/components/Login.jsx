import React from 'react'

import { useAuth0 } from '@auth0/auth0-react'

function Login () {
    const { loginWithRedirect } = useAuth0()

    function handleRedirect () {
        loginWithRedirect(
           )
    }
    return (
        <>
        {handleRedirect}
        </>
    )

}

export default Login