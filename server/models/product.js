import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
        trim: true
    },
    price: {
        type: Number,
        require: true
    },
    description: {
        type: String,
        require: true,
        trim: true
    },
    image:{
        url: String,
        public_id: String
    }
})

export default mongoose.model('Product',productSchema)