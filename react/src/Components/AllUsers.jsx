import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";

function AllUsers() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/allusers')
            .then((res) => {
                setUsers(res.data.message);
            })
            .catch((err) => {
                toast.error(err.response.data.error);
            })
    }, [])

    return (
        <div className="container">
            <ToastContainer />
            <div className="row">
                {users.length > 0 ?
                    (
                        users.map((u, index) =>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={`http://localhost:3000/${u.name}.jpg`} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Name : {u.name}</h5>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Email : {u.email}</li>
                                </ul>
                                <div className="card-body">
                                    <a href="#" className="card-link">View more</a>
                                </div>
                            </div>
                        )
                    ) :
                    ("No user vailable")}
            </div>
        </div>
    )
}

export default AllUsers
