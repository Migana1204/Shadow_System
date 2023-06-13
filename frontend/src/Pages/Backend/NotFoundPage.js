import React from 'react'
import { Link } from 'react-router-dom'


export const NotFoundPage = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center flex-col'>
        <h1 className='text-9xl mb-20'>:/</h1>
      <div className='mb-10 text-center flex justify-center items-center flex-col'>
        <h1 className='font-medium'>Página no encontrada quieres volver al inicio?</h1>
        <Link to="/inicio"><i className="fa-solid w-min fa-house text-white text-lg bg-indigo-500 hover:bg-indigo-600 px-4 py-3 rounded-full"></i></Link>
      </div>
    </div>
  )
}
