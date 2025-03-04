import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String, unique: true},
    password: {type: String}
})

export const User = mongoose.model("user", UserSchema)

