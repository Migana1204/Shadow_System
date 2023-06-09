import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:
        {
            type: String,
            require: true,
            unique: true,
            trim: true

        },
    password:
        {
            type: Number,
            require: true,
            trim: true
        }
})

export default mongoose.model('User', userSchema)