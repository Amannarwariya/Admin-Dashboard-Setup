import React from 'react'
import Header from './Component/layouts/Header'
import Home from './Component/Home'
import Footer from './Component/layouts/Footer'
import Sidebar from './Component/layouts/Sidebar'
import { Router, Routes, Route } from 'react-router-dom'
import UserDisplay from './Component/user/UserDisplay'
import AddUser from './Component/user/AddUser'

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/userDisplay" element={<UserDisplay />} />
        <Route path="/addUser" element={<AddUser />} />

      </Routes>

      <Footer />
    </>
  )
}

export default App