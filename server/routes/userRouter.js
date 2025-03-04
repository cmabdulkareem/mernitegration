import express from "express";
import { addUsers } from "../controller/userController.js";
const router = express.Router()

// this route will add users to the database
router.post('/', addUsers)

export default router;