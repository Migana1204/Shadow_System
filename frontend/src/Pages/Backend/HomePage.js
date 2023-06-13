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
          <Link to='/backend/new' className='text-white px-3 py-2 bg-indigo-500 hover:bg-indigo-600'>Crear nuevo producto</Link>
        </div>
      </div>
    </>
  )
  return (
    <>
      <header className='h-16 w-screen fixed flex justify-evenly items-center basis-0' style={{backgroundColor:'rgba(255, 255, 255, 0.164)'}}>
        <Link to="/inicio"><i className="fa-solid fa-house text-white text-lg bg-indigo-500 hover:bg-indigo-600 px-4 py-3 rounded-full flex flex-grow basis-0"></i></Link>
        <Link to='/backend/sales' className='text-white px-3 py-2 text-sm hover:text-gray-300 flex bg-indigo-500 hover:bg-indigo-600'>Ir a las ventas</Link>
        
      </header>
      <div className='bg-neutral-900 min-h-screen flex items-center'>
        <div className='px-10 container m-auto'>
          <header className='flex justify-between py-4'>
            <h1 className='text-2xl text-gray-300 font-bold'>Productos ({products.length})</h1>
          </header>
          <div className='grid grid-cols-3 gap-2'>
            {products.map(product => (<ProductCard product={product} key={product._id}></ProductCard>))}
            <Link to='/backend/new' className='text-white px-3 py-2 bg-indigo-500 hover:bg-indigo-600 w-52 h-16 flex justify-center items-center top-32 left-32 mx-auto my-auto'>Crear nuevo producto</Link>

          </div>
        </div>
      </div>
    </>
  )
}