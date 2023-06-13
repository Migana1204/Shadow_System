import React from 'react'

export function Footer() {
  return (
    <footer className="footerCont mx-auto max-w-2xl px-1 py-1 sm:px-1 sm:py-1 lg:max-w-7xl lg:px-1 shadow-2xl rounded-md flex mt-4 mb-4 bg-black justify-evenly text-white">
      <div className="info text-center flex flex-col justify-center items-center">
        <h4 className='text-xl font-medium'>¿Qué somos?</h4>
        <p className='text-lg'>Página de venta de multimedia con alta calidad y un excelente servicio y atención al cliente.</p>
        <div className="icons w-60 text-3xl mt-3 mb-3">
          <i className="fa-brands fa-facebook mx-3 hover:text-indigo-500 transition duration-100 cursor-pointer"></i>
          <i className="fa-brands fa-instagram mx-3 hover:text-indigo-500 duration-100 cursor-pointer"></i>
          <i className="fa-brands fa-github mx-3 hover:text-indigo-500 duration-100 cursor-pointer"></i>
          <i className="fa-brands fa-whatsapp  mx-3 hover:text-indigo-500 duration-100 cursor-pointer"></i>

        </div>
      </div>

    </footer>
    )
}
