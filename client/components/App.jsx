import React from 'react'
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import MyNav from './MyNav'
import Login from './Login'
import SignUp from './SignUp'

function App () {
    return (
      <BrowserRouter>
      <div>
          <h1>Welcome to my app!!</h1>
          <Routes>
              <Route element={<MyNav/>}>
              <Route path='/' element={<Login/>}/>
              <Route path='signup' element={<SignUp/>}/>
              </Route>
          </Routes>
      </div>
          </BrowserRouter>
    )
}

export default App