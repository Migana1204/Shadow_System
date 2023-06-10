import { useState, createContext, useContext } from "react";
import { getProductRequest, createProductRequest, deleteProductRequest, getProductsRequests, updateProductRequest, getSalesRequests, createSaleRequest, deleteSaleRequest, validateUserRequest } from "../api/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";


const productContext = createContext()

export const useProducts = () => {

    const context = useContext(productContext)
    return context
}

export const Provider = ({ children }) => {
    const navigate = useNavigate()
    const [products, setProducts] = useState([]);
    const [sales, setSales] = useState([]);
    const [carProducts, setCarProducts] = useState([]);
    const [qView, setqView] = useState([])
    const [open, setOpen] = useState(false);
    const [openCar, setOpenCar] = useState(false);
    const getProducts = async () => {
        const res = await getProductsRequests();
        setProducts(res.data)
    }
    const createProduct = async (product) => {
        const res = await createProductRequest(product)
        setProducts([...products, res.data])
    }
    const deleteProduct = async (id) => {
        const res = await deleteProductRequest(id)
        if (res.status === 204) {
            setProducts(products.filter((product) => product._id !== id))
        }
    }
    const getProduct = async (id) => {
        const res = await getProductRequest(id)
        return res.data
    }
    const updateProduct = async (id, newProduct) => {
        const res = await updateProductRequest(id, newProduct)
        setProducts(products.map(product => product._id === id ? res.data : product))
    }
    const getSales = async () => {
        const res = await getSalesRequests();
        setSales(res.data)
    }
    const createSale = async (sale) => {
        const res = await createSaleRequest(sale);
        setSales([...sales, res.data])
    }
    const deleteSale = async (id) => {
        const res = await deleteSaleRequest(id);
        if (res.status === 204) {
            setSales(sales.filter((sale) => sale._id !== id))
        }
    }
    const addShopCar = async (producto) => {
        setCarProducts([...carProducts, producto]);
    }
    const removeShopCar = async (id) => {
        setCarProducts(carProducts.filter((product) => product._id !== id))
    }
    const quickView = async (id) => {
        setqView(products.filter((product) => product._id === id))
    }
    const dropShopCar = () => {
        setCarProducts([])
    }
    const validateUser = async (user) => {
        const res = await validateUserRequest(user);
        console.log(res.data);
        if (res.data === "Concedido") {
            toast.success("Acceso Concedido")
            navigate("/backend")
        }
        if (res.data === "Malo") {
            return toast.error("CORREO Y/O CONTRASEÑA INCORRECTOS")
        }
    }
    return (
        <productContext.Provider value={{
            products,
            qView,
            open,
            openCar,
            carProducts,
            sales,
            setOpenCar,
            getProducts,
            createProduct,
            deleteProduct,
            getProduct,
            updateProduct,
            getSales,
            createSale,
            addShopCar,
            removeShopCar,
            quickView,
            dropShopCar,
            setOpen,
            deleteSale,
            validateUser

        }}>
            {children}
        </productContext.Provider>
    )
}