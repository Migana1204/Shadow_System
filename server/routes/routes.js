import { Router } from "express";
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../controllers/products.controllers.js";
import { createSale, deleteSale, getSales } from "../controllers/sales.controllers.js";

const router = Router()

// Products
router.get('/products', getProducts)
router.post('/products', createProduct)
router.put('/products/:id', updateProduct)
router.delete('/products/:id', deleteProduct)
router.get('/products/:id', getProduct)

// Sales
router.get('/sales', getSales)
router.post('/sales', createSale)
router.delete('/sales/:id', deleteSale)

export default router