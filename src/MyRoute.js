import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import IncrementDecrement from './hooks/IncrementDecrement'
import HomePage from './pages/HomePage'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Test from './hooks/Test'

const MyRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />

        {/* hooks */}
        <Route path='/increment' element={<IncrementDecrement />} />

        <Route path='/hooks' element={<Test />} />
      </Routes>
    </Router>
  )
}

export default MyRoute
