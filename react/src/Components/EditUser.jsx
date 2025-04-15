import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditUser() {

  let {id} = useParams()

  useEffect(() => {
    axios.get(`http://localhost:3000/user/:${id}`)
        .then((res) => {
            setUser(res.data.message);
        })
        .catch((err) => {
            toast.error(err.response.data.error);
        })
}, [])


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    if (image) {
      formData.append("image", image);
    }

    axios
      .post("http://localhost:3000/signup", formData, {
        //end-point provided is for backend route to handle form submission
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setName("")
        setEmail("")
        setPassword("")
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.error);
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
          <label htmlFor="password">Password: </label> <br />
          <input
            type="password"
            id="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <br />
          <label htmlFor="image">Profile Image: </label> <br />
          <input
            type="file"
            name="image"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <input type="submit" className="btn btn-success" value="Register" />
        </form>
      </div>
    </div>
  );
}

export default EditUser;
