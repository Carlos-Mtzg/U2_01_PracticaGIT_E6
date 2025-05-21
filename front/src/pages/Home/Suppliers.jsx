import React from 'react'

const Suppliers = () => {
  return (
    <div className='flex justify-between'>
      <h1 className='text-3xl text-blue-950 font-bold uppercase'>Proveedores</h1>
      <button className='border-2 border-blue-950 rounded-2xl px-8 py-2 cursor-pointer uppercase font-bold text-blue-950 hover:bg-blue-950 hover:text-white transition-all'>
        Agregar
      </button>
    </div>
  )
}

export default Suppliers