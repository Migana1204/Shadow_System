import React from 'react';
import logo from '../assets/images/logopag.png';
import { Link } from 'react-router-dom';
import { useProducts } from '../context/context';

export function Header(){
    const { setOpenCar, carProducts, filter} = useProducts()
    const handleChange = (e) => {
        filter(e.target.value);
    }
    return( 
    <header className='EtiquetaHeader'>
        <div className="container-header rounded-lg shadow-md border-slate-50 border-t-2">
            <img src={logo} className="logo-image" alt=""/>
            <div className="input-container">
                <input className="buscador" type="text" placeholder="Buscar..." onChange={handleChange}/>
                <i className="fa-solid fa-magnifying-glass iconsearch"></i>
            </div>

            <div className="carrito_perfil">
                <Link to="/inicio"><i className="fa-solid fa-house"></i></Link>
                <Link to="/login">Login</Link>
                <div className='carCount'>
                    <h6 className='countProducts flex items-center'>{carProducts.length}</h6>
                    <i onClick={() => setOpenCar(true)} className="fa-sharp fa-solid fa-cart-shopping"></i>
                </div>
                <i className="fa-solid fa-pipe bg-gray-100 w-1 h-20"></i>

                <div className="image-perfil flex items-center justify-center">
                   <Link to='/login'> <img className="perfil-image" src={logo} alt=""></img></Link>
                </div>
                <Link to='/login'><i className="fa-solid fa-caret-down"></i></Link>
                
            </div>
        </div>
    </header>
    )
}