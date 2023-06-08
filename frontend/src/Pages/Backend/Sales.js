import React, { useEffect } from 'react';
import { useProducts } from '../../context/context';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export const Sales = () => {
    const { sales, getSales, deleteSale } = useProducts()
    const handleDelete = (id) => {
        toast((t) => (
        <div>
            <p className='text-white'>Do you want to delete? <strong>{id}</strong></p>
            <div>
                <button onClick={() => {deleteSale(id); toast.dismiss(t.id);}} className='bg-red-500 hover:bg-red-400 px-3 py-2 text-sm text-white rounded-sm mx-2'>Delete</button>
                <button onClick={() => toast.dismiss(t.id)} className='bg-slate-400 hover:bg-slate-500 px-3 py-2 text-white rounded-sm mx-2'>Cancel</button>
            </div>
        </div>), {
            style: {
                background: '#202020'
            }
        })
    }
    useEffect(()=>{
        getSales();
    }, [])
  return (
    <div className='bg-neutral-900 min-h-screen flex items-center'>
    <div className='px-10 container m-auto'>
      <header className='flex justify-between py-4'>
        <Link to='/backend' className='text-gray-400 text-sm hover:text-gray-300'>Go Back</Link>
      </header>
      <div>
      {sales.map(sale => (
            <ul key={sale._id} role="list" className="divide-y divide-gray-100">
                <li className="flex justify-between gap-x-6 py-5">
                <div className="flex gap-x-4">
                    <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-100">{sale.products.map(products => products + " ")}</p>
                    <p className="text-sm font-semibold leading-6 text-gray-300">{sale.prices.map(price => price + " ")}</p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">Total: {sale.value}</p>
                    </div>
                </div>
                <div className="hidden sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-600">{sale.date}</p>
                    <button onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(sale._id);
                    }} className='bg-red-600 text-sm px-2 py-1 rounded-sm'>Delete</button>
                </div>
                </li>
            </ul>
        ))}
      </div>
    </div>
  </div>
  )
}
