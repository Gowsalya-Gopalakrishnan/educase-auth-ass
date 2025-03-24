import React from 'react'
import LandingScreen from './components/features/LandingScreen'
import { Route, Routes } from 'react-router-dom'
import Register from './components/features/Register'
import Login from './components/features/Login'
import Profile from './components/features/Profile'

const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<LandingScreen/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
  )
}

export default App
