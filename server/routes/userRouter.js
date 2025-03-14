import express from "express";
import { addUsers, getUsers, deleteUser } from "../controller/userController.js";
const router = express.Router()

// this route will add users to the database
router.post('/', addUsers)
router.get('/users', getUsers)
router.delete('/delete/:id', deleteUser)

export default router;