import React from 'react'

const Card = ({ color, modelo, marca, supplier }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-2 border border-gray-200 max-w-xs">
            <h2 className="text-xl font-bold text-blue-950 mb-2">{marca} {modelo}</h2>
            <p className="text-gray-700"><span className="font-semibold">Color:</span> {color}</p>
            <p className="text-gray-700"><span className="font-semibold">Proveedor:</span> {supplier?.nombre || 'Sin proveedor'}</p>
        </div>
    )
}

export default Card