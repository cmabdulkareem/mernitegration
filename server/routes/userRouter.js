import express from "express";
import { addUsers, getAllUsers } from "../controller/userController.js";
const router = express.Router()

// this route will add users to the database
router.post('/signup', addUsers)

// this route will read all users from database
router.get('/allusers', getAllUsers)


export default router;