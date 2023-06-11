import React from 'react';
import { useProducts } from '../../context/context';

export const CarShopCard = ({ product }) => {
    const { addShopCar, carProducts, setOpen, quickView } = useProducts()
  return (
    <>
        <div className='ContainerCard group relative rounded-lg shadow-2xl overflow-hidden w-65 h-100'>
            <div onClick={(e) => {setOpen(true); quickView(product._id);}} key={product._id} className='flex flex-col 
            justify-center items-center'>
                <div className="aspect-auto overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    {product.image ? <img
                    src={product.image.url}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    /> : ''}
                </div>
                <div className="mt-3 mb-3 flex justify-between items-center w-60">
                    <p className="text-2xl font-medium text-gray-900">
                        {product.name}
                    </p>

                    <p className="text-lg font-medium text-gray-700">
                        ${product.price}
                    </p>
                </div>

            </div>
                <button type='submit' onClick={(e) => {
                    if(carProducts.find(item => item._id === product._id)){
                        console.log()
                    }else{
                        addShopCar(product);
                    }
                    e.stopPropagation();
                }} className='w-full text-white px-3 py-2 bg-indigo-500 hover:bg-indigo-600'>Comprar</button>
        </div>
    </>
  )
}
