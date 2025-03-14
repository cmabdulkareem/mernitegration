import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

function AllUsers() {
    const API = import.meta.env.VITE_BACKEND_URL

    const [users, setUsers] = useState([])

    //This will be used to get all users from backend
    useEffect(() => {
        axios.get(`${API}/users`)
            .then((res) => {
                setUsers(res.data.message)
            })
            .catch((err) => {
                toast.error(err.response.data.error)
            })
    }, [])

    //This will be used to delete the seleted user from backend
    const handleDelete = (id) => {
        axios.delete(`${API}/delete/${id}`)
            .then((res) => {
                if (window.confirm("are you sure to delete the item?")) {
                    toast.success(res.data.message)
                    setUsers(
                        users.filter(value => value._id !== id)
                    )
                }
            })
            .catch((err) => {
                toast.error(err.response.data.error)
            })
    }

    return (
        <div>
            <ToastContainer />
            <h1>All Users</h1>

            {users.map((value, index) => (
                <div key={index} style={{ display: "inline-block", marginLeft: "20px", width: "200px", height: "200px", paddingLeft: "10px", border: "2px solid #000" }}>
                    <h2>Name : {value.name} </h2>
                    <p>Email : {value.email} </p>
                    <button onClick={() => handleDelete(value._id)}>Delete</button>
                </div>
            ))}



        </div>
    )
}

export default AllUsers
