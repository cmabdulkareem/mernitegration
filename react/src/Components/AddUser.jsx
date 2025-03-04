import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'

function AddUser() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        axios.post('http://localhost:3000', {name, email, password})
            .then((res)=>{
                toast.success(res.data.message)
            })
            .catch((err)=>{
                toast.error(err.response.data.error)
            })
    }



    return (
        <div>
            <ToastContainer position="top-center" autoClose={2000}/>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    id="name"
                    placeholder='enter your name here'
                    onChange={(e)=>setName(e.target.value)}
                    value={name}
                /><br />
                <label htmlFor="email">Email: </label>
                <input
                    type="email"
                    id="email"
                    placeholder='enter your email here'
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                /><br />
                <label htmlFor="password">Password: </label>
                <input 
                    type="password" 
                    id="password" 
                    placeholder='password' 
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                /><br />
                <input type="submit" value="Register" />
            </form>
        </div>
    )
}

export default AddUser
