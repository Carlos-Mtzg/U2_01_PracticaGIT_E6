import React from 'react'
import { Link } from 'react-router-dom'
import logo from '@assets/images/logo.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center pr-8 pl-8 bg-blue-950/90 h-18'>
            <div className='flex items-center gap-5'>
                <img className='h-18' src={logo} alt="Logo de la pagina" />
                <h1 className='text-3xl uppercase font-bold text-white border-l-4 pl-4 border-white'>Vehicles Manager</h1>
            </div>
            <nav>
                <ul className='flex gap-8'>
                    <Link className='text-white uppercase' to={'/'}>Vehiculos</Link>
                    <Link className='text-white uppercase' to={'/proveedores'}>Proveedores</Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header