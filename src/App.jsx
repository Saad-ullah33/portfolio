import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from "./pages/home.jsx"
import Footer from "./pages/footer.jsx"
import "@fontsource/caveat"; 

function App() {
  return (
    <>
      <NavBar />

      {/* Only one route because everything is on Home */}
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
            <Footer />

    </>
  )
}

export default App
