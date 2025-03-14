import React from 'react'
import AddUser from './Components/AddUser'
import AllUsers from './Components/AllUsers'
import Error404 from './Components/Error404'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/users' element={<AllUsers />}/>
        <Route path='/' element={<AddUser/>} />
        <Route path='*' element={<Error404/>} />
      </Routes>
    </div>
  )
}

export default App
