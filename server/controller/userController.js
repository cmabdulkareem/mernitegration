import { User } from "../models/userModel.js"
import {fileURLToPath} from 'url'
import path, {dirname} from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


export const addUsers = (req, res)=>{
    const {name, email, password} = req.body

    User.create({name, email, password})
        .then((user)=>{
            const image = req.files.image
            image.mv(path.join(__dirname, '../public', `${user.name}.jpg`))
            // we are using built in move function from the received image object
            // __dirname means current directory, path.join means to join multiple string to create a path
            res.status(200).json({message: "User created succesfully"})
        })
        .catch((err)=>{
            res.status(400).json({error: "Invalid input provided"})
        })
}

export const getAllUsers = (req, res)=>{
    User.find({})
        .then((users)=>{
            res.status(200).json({message: users})
        })
        .catch((err)=>{
            res.status(500).json({error: "Internal server error"})
        })
}

