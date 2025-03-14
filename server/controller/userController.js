import { User } from "../models/userModel.js"

export const addUsers = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        console.log({ name, email, password })

        if (!name || !email || !password) {
            // The function stops execution here if any field is missing
            return res.status(400).json({ error: "Provide all details" });
        }

        const user = await User.create({ name, email, password });
        res.status(200).json({ message: "User created successfully" });
    } catch (err) {
        res.status(400).json({ error: "Invalid input provided" });
    }
};


export const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({ message: users });
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findByIdAndDelete(id)
        res.status(200).json({ message: "User deleted succesfully"});
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
};

