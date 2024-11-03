import React from 'react'
import SignUp from './components/SignUp'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}

export default App