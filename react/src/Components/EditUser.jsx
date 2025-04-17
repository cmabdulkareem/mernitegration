import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditUser() {

  const [user, setUser] = useState({})

  let {id} = useParams()

  useEffect(() => {
    axios.get(`http://localhost:3000/user/${id}`)
        .then((res) => {
            setName(res.data.message.name);
            setEmail(res.data.message.email);
        })
        .catch((err) => {
            toast.error(err.response.data.error);
        })
}, [])


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .patch(`http://localhost:3000/user/update/${id}`, {name, email})
      .then((res) => {
        toast.success(res.data.message);
        alert("Updated")
      })
      .catch((err) => {
        console.error(err);
        
        // toast.error(err.response.data.error);
      });
  }

  
  return (
    <div className="container">
      <div className="row">
        <ToastContainer position="top-center" autoClose={2000} />
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label> <br />
          <input
            type="text"
            id="name"
            placeholder="enter your name here"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <br />
          <label htmlFor="email">Email: </label> <br />
          <input
            type="email"
            id="email"
            placeholder="enter your email here"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <br />
          <label htmlFor="image">Profile Image: </label> <br />
          <input
            type="file"
            name="image"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <input type="submit" className="btn btn-success" value="Update" />
        </form>

        <img src={`http://localhost:3000/${user.name}.jpg`} style={{width: "250px", height: "auto"}} alt="" />
        
      </div>
    </div>
  );
}

export default EditUser;
