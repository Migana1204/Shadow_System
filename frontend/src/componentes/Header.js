import React from 'react';
import logo from '../assets/images/logopag.png';
import { Link } from 'react-router-dom';
import { useProducts } from '../context/context';

export function Header(){
    const { setOpenCar, carProducts } = useProducts()
    return( 
    <header>
        <div className="container-header">
            <img src={logo} className="logo-image" alt=""/>
            <div className="input-container">
                <input className="buscador" type="text" placeholder="Buscar..."/>
                <i className="fa-solid fa-magnifying-glass iconsearch"></i>
            </div>

            <div className="carrito_perfil">
                <Link to="/inicio">Inicio</Link>
                <Link to="/login">Login</Link>
                <div className='carCount'>
                    <h6 className='countProducts'>{carProducts.length}</h6>
                    <i onClick={() => setOpenCar(true)} className="fa-sharp fa-solid fa-cart-shopping"></i>
                </div>
                <p className='separador'>|</p>

                <div className="image-perfil">
                   <Link to='/login'> <img className="perfil-image" src={logo} alt=""></img></Link>
                </div>
            </div>
        </div>
    </header>
    )
}