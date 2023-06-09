import axios, { Axios } from 'axios';

// Products
export const getProductsRequests = async () => await axios.get("/products")
export const createProductRequest = async (product) => {
    const form = new FormData()
    for(let key in product){
        form.append(key,product[key])
    }
    return await axios.post('/products', form, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}
export const deleteProductRequest = async (id) => await axios.delete(`/products/${id}`)
export const getProductRequest = async (id) => await axios.get(`/products/${id}`)
export const updateProductRequest = async (id, newProduct) => await axios.put(`/products/${id}`, newProduct)

// Sales
export const getSalesRequests = async () => await axios.get("/sales")
export const createSaleRequest = async (sale) => await axios.post("/sales", sale)
export const deleteSaleRequest = async (id) => await axios.delete(`/sales/${id}`)
//User
export const validateUserRequest = async (user) => await axios.post("/login",user)
 
