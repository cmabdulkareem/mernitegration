import { User } from "../models/userModel.js"

export const addUsers = (req, res)=>{
    const {name, email, password} = req.body

    User.create({name, email, password})
        .then((user)=>{
            res.status(200).json({message: "User created succesfully"})
        })
        .catch((err)=>{
            res.status(400).json({error: "Invalid input provided"})
        })
}


