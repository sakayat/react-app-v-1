import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="min-h-screen">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </div>
  )
}

export default App