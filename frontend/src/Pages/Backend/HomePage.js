import React, { useEffect } from 'react';
import { useProducts } from '../../context/context';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { ProductCard } from '../PagesComponents/ProductCard';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  const { getProducts, products } = useProducts()
  useEffect(() => {
    getProducts()
  }, [])
  if(products.length === 0) return (
    <>
      <div className='bg-neutral-900 min-h-screen flex items-center'>
        <div className='px-10 m-auto'>
          <AiOutlineLoading3Quarters className='text-white animate-spin h-48 w-48'></AiOutlineLoading3Quarters>
          <br></br>
          <br></br>
          <Link to='/backend/new' className='text-white px-3 py-2 bg-indigo-500 hover:bg-indigo-600'>Create New Product</Link>
        </div>
      </div>
    </>
  )
  return (
    <div className='bg-neutral-900 min-h-screen flex items-center'>
      <div className='px-10 container m-auto'>
        <Link to='/inicio' className='text-white px-3 py-2 bg-gray-500 hover:bg-gray-600'>Home</Link>
        <header className='flex justify-between py-4'>
          <h1 className='text-2xl text-gray-300 font-bold'>Products ({products.length})</h1>
          <Link to='/backend/sales' className='text-gray-400 text-sm hover:text-gray-300'>Go to Sales</Link>
          <Link to='/backend/new' className='text-white px-3 py-2 bg-indigo-500 hover:bg-indigo-600'>Create New Product</Link>
        </header>
        <div className='grid grid-cols-3 gap-2'>
          {products.map(product => (<ProductCard product={product} key={product._id}></ProductCard>))}
        </div>
      </div>
    </div>
  )
}