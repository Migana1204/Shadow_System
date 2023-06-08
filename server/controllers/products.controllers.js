import Product from "../models/product.js"
import { uploadImage, deleteImage } from "../libs/cloudinary.js"
import fs from 'fs-extra'

//Products
export const getProducts =  async (req, res) => {
    try {
        const products = await Product.find()
        res.send(products)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
export const createProduct = async (req, res) => {
    try {
        const {name, description, price} = req.body
        let image;
        if(req.files?.image){
            const result = await uploadImage(req.files.image.tempFilePath)
            image = {
                url: result.secure_url,
                public_id: result.public_id
            }
            fs.remove(req.files.image.tempFilePath)
        }
        const newProduct = new Product({name, description, price, image})
        await newProduct.save()
        return res.json(newProduct)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
export const updateProduct = async (req, res) => {
    try {
        const productUpdated = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})
        return res.send(productUpdated)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
export const deleteProduct = async (req, res) => {
    try {
        const productRemoved = await Product.findByIdAndDelete(req.params.id)
        if(!productRemoved) return res.sendStatus(404)
        if (productRemoved.image.public_id){
            await deleteImage(productRemoved.image.public_id)
        }
        return res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
export const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if(!product) return res.sendStatus(404)
        return res.json(product)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}