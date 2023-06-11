import React from 'react'

export function Footer() {
  return (
    <footer className="footerCont mx-auto max-w-2xl px-1 py-1 sm:px-1 sm:py-1 lg:max-w-7xl lg:px-1 shadow-2xl rounded-md flex mt-4 mb-4 bg-black justify-evenly text-white">
      <div className="info text-center flex flex-col justify-center items-center">
        <h4 className='text-xl font-medium'>¿Qué somos?</h4>
        <p className='text-lg'>Pagina de venta de multimedia de alta calidad, con un excelente servicio y atención al cliente.</p>
        <div className="icons w-60 text-3xl mt-3 mb-3">
          <i className="fa-brands fa-facebook ml-3 mr-3 hover:text-cyan-300 transition duration-100"></i>
          <i className="fa-brands fa-instagram ml-3 mr-3 hover:text-cyan-300 duration-100"></i>
          <i className="fa-brands fa-github ml-3 mr-3 hover:text-cyan-300 duration-100"></i>
          <i className="fa-brands fa-whatsapp ml-3 mr-3 hover:text-cyan-300 duration-100"></i>

        </div>
      </div>

    </footer>
    )
}
