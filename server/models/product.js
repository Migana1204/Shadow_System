import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
        trim: true
    },
    price: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        trim: true
    },
    image:{
        url: String,
        public_id: String
    },
    quantity:{
        type: Number,
        default: 1
    }
})

export default mongoose.model('Product',productSchema)