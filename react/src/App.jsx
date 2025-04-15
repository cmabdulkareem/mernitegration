import React from 'react'
import AddUser from './Components/AddUser'
import AllUsers from './Components/AllUsers'
import Home from './Components/Home'
import EditUser from './Components/EditUser'
import Error404 from './Components/Error404'
import MaleUsers from './Components/MaleUsers'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/adduser' element={<AddUser />} />
        <Route path='/findusers' element={<AllUsers />}>
          <Route path='male' element={<MaleUsers />} />
        </Route>
        <Route path='/edituser/:id' element={<EditUser />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </div>
  )
}

export default App
