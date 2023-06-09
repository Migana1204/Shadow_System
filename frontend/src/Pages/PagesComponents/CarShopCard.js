import React from 'react';
import { useProducts } from '../../context/context';

export const CarShopCard = ({ product }) => {
    const { addShopCar, carProducts, setOpen, quickView } = useProducts()
  return (
    <>
        <div onClick={(e) => {setOpen(true); quickView(product._id);}} key={product._id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                {product.image ? <img
                src={product.image.url}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                /> : ''}
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                    <span>{product.name}</span>
                    </h3>
                    
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
            </div>
            <button type='submit' onClick={(e) => {
                if(carProducts.find(item => item._id === product._id)){
                    console.log()
                }else{
                    addShopCar(product);
                }
                e.stopPropagation();
            }} className='flex m-auto text-white px-3 py-2 bg-indigo-500 hover:bg-indigo-600'>Add to Bag</button>
        </div>
    </>
  )
}
