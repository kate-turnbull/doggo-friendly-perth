import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Routes, Route } from 'react-router-dom'

import MyNav from './MyNav'
import Login from './Login'
import SignUp from './SignUp'
import Walks from './Walks'
import Beaches from './Beaches'
import Home from './Home'

function App() {
    return (
        <div>
            <h1>Take your doggo with you!</h1>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='beaches' element={<Beaches />} />
            </Routes>
        </div>

    )
}

export default App