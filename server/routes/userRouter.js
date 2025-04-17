import express from "express";
import { addUsers, getAllUsers, editUser, updateUser } from "../controller/userController.js";
const router = express.Router()

// this route will add users to the database
router.post('/signup', addUsers)

// this route will read all users from database
router.get('/allusers', getAllUsers)

// this router will help us to show user in edit page
router.get('/user/:id', editUser)

// this router will help us update user
router.patch('/user/update/:id', updateUser)

export default router;