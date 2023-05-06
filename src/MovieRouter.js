import React from 'react'

import { Route, Routes } from 'react-router-dom'

import ContactUs from './Pages/ContactUs'
import AboutUs from './Pages/AboutUs'
import App from './App'
import NavBar from './components/NavBar/NavBar'
import Description from './Pages/Description'
import Error from './Pages/Error'
import Trailer from './Pages/Trailer'

const MovieRouter = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={< App/>}/>
        <Route  path="/*" element={< Error/>}/>
        <Route  path="/ContactUs" element={<ContactUs/>}/>
        <Route  path="/AboutUs" element={<AboutUs/>}/>
        <Route  path='/Description/:id' element={<Description/>}/>
        <Route  path='/Trailer/:id' element={<Trailer/>}/>

      </Routes>
    </div>
  )
}

export default MovieRouter