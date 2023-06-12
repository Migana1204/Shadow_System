import React, { useEffect } from 'react';
import { useProducts } from '../context/context';
import { CarShopCard } from './PagesComponents/CarShopCard';
import { ShoppingCar } from './PagesComponents/ShoppingCar';
import { QuickView } from './PagesComponents/QuickView';
import { Carrusel } from '../componentes/Carrusel';
import { Footer } from '../componentes/Footer';
import { Header } from '../componentes/Header';

export const Carrito = () => {
  const { qView, getProducts, products, setOpenCar, openCar, carProducts, open, setOpen } = useProducts()
  
  useEffect(()=>{
    getProducts();
  }, [])
  return (
    <>
      <Header></Header>
      <Carrusel></Carrusel>
      <div className="bg-white m-6 rounded-md overflow-hidden shadow-2xl">
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
          <div className='flex justify-between'>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Productos ({products.length}) </h2>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (<CarShopCard product={product} key={product._id}></CarShopCard>))}
          </div>
        </div>
      </div>
      <ShoppingCar products={carProducts} setOpen={setOpenCar} open={openCar}></ShoppingCar>
      {qView.map(product => <QuickView product={product} open={open} setOpen={setOpen} key={product._id}></QuickView>)}
      <Footer></Footer>
    </>
  )
}

