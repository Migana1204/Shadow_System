import React from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../context/context';

export const ProductCard = ({ product }) => {
    const { deleteProduct } = useProducts()
    const navigate = useNavigate()
    const handleDelete = (id) => {
        toast((t) => (
        <div>
            <p className='text-white'>Do you want to delete? <strong>{id}</strong></p>
            <div>
                <button onClick={() => {deleteProduct(id); toast.dismiss(t.id);}} className='bg-red-500 hover:bg-red-400 px-3 py-2 text-sm text-white rounded-sm mx-2'>Delete</button>
                <button onClick={() => toast.dismiss(t.id)} className='bg-slate-400 hover:bg-slate-500 px-3 py-2 text-white rounded-sm mx-2'>Cancel</button>
            </div>
        </div>), {
            style: {
                background: '#202020'
            }
        })
    }
    return (
    <div onClick={() => navigate(`/backend/products/${product._id}`)} className='bg-zinc-800 text-white rounded-sm shadow-md shadow-black hover:bg-zinc-700 hover:cursor-pointer'>
        <div className='px-4 py-7'>
            <div className='flex justify-between'>
                <h3>{product.name}</h3>
                <button onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(product._id);
                }} className='bg-red-600 text-sm px-2 py-1 rounded-sm'>Delete</button>
            </div>
            <p>{product.description}</p>
            
            <p>Price: {product.price}</p>
        </div>
        {product.image && <img className='object-cover h-90 w-full' src={product.image.url}></img>}
    </div>
  )
}
