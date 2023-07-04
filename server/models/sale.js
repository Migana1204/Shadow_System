import mongoose from "mongoose";

const salesSchema = new mongoose.Schema({
    products:[
        {
            type: String,
            require: true
        }
    ],
    prices:[
        {
            type: Number,
            require: true
        }
    ],
    value: {
        type: Number,
        require: true,
        trim: true
    },
    date: {
        type: String,
        require: true
    },
    quantity:[
        {
            type: Number
        }
    ]
})

export default mongoose.model('Sale', salesSchema)