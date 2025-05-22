import React from 'react'

const InfoVehicleModal = ({ vehicle, onClose }) => {
    if (!vehicle) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-lg shadow-lg p-6 min-w-[300px] relative">
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                    onClick={onClose}
                >
                    &times;
                </button>
                <h2 className="text-xl font-bold mb-4 text-blue-950">Información del Vehículo</h2>
                <p><span className="font-semibold">Marca:</span> {vehicle.marca}</p>
                <p><span className="font-semibold">Modelo:</span> {vehicle.modelo}</p>
                <p><span className="font-semibold">Color:</span> {vehicle.color}</p>
                <p><span className="font-semibold">Proveedor:</span> {vehicle.supplier?.nombre || 'Sin proveedor'}</p>
            </div>
        </div>
    )
}

export default InfoVehicleModal