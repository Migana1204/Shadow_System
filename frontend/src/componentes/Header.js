import React, { useState } from 'react';
import logo from '../assets/images/logopag.png';
import { Link } from 'react-router-dom';
import { useProducts } from '../context/context';
import userImg from "../assets/images/userImg.png";
import adminImg from "../assets/images/adminImg.png"

export function Header(){
    const { setOpenCar, carProducts, filter} = useProducts()
    const handleChange = (e) => {
        filter(e.target.value);
    }

    const [MostrarImg, setMostrarImg] = useState(true)
    
    
    return( 
        <header className='EtiquetaHeader'>
        <div className="container-header rounded-lg shadow-md border-slate-50 border-t-2">
            <img src={logo} className="logo-image" alt=""/>
            <div className="input-container">
                <input className="buscador" type="text" placeholder="Buscar..." onChange={handleChange} />
                <i className="fa-solid fa-magnifying-glass iconsearch hover:text-indigo-500"></i>
            </div>

            <div className="carrito_perfil">
                <Link to="/inicio"><i className="fa-solid fa-house hover:bg-indigo-500 py-2 px-2 rounded-full"></i></Link>
                <div className='carCount'>
                    
                    <i onClick={() => setOpenCar(true)} className="fa-sharp fa-solid fa-cart-shopping hover:bg-indigo-500 py-2 px-2 rounded-full -tracking-[-0.2em] "><span className='font-normal'>{carProducts.length}</span></i>
                </div>
                <i className="fa-solid fa-pipe bg-gray-100 w-1 h-20"></i>

                <Link to='/login'>
                    <div className='flex'>
                        <div className="image-perfil flex items-center justify-center hover:border-black hover:border-2">
                            {MostrarImg ? 
                            (<img 
                                className="perfil-image bg-black" 
                                src={userImg} 
                                alt="Iniciar sesión"
                                onMouseEnter={()=>setMostrarImg(false)}
                            ></img>)
                            :
                            (<img 
                                className='perfil-image' 
                                src={adminImg} 
                                alt ="Admin"
                                onMouseLeave={()=>setMostrarImg(true)}
                            ></img>)}
                        </div>
                    </div>
                </Link>

                
            </div>
        </div>
    </header>
    )
}