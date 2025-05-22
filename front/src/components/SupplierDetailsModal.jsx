import { useEffect, useState } from 'react'
import { getVehicleOfSupplier } from '../Services/ApiSuppliers'

const SupplierDetailsModal = ({ supplier, onClose }) => {
    const [vehicles, setVehicles] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                setLoading(true)
                const data = await getVehicleOfSupplier(supplier.supplierId)
                setVehicles(data || [])
            } catch (error) {
                console.error('Error:', error)
                setVehicles([])
            } finally {
                setLoading(false)
            }
        }
        fetchVehicles()
    }, [supplier.supplierId])

    return (
        <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 max-h-full bg-black/40">
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow-sm">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t bg-blue-950">
                        <h3 className="text-xl font-semibold text-white">
                            Detalles del Proveedor
                        </h3>
                    </div>
                    <div className="p-4 md:p-5 space-y-4">

                        <div className="space-y-2">
                            <p><strong>Nombre:</strong> {supplier.nombre}</p>
                            <p><strong>Correo:</strong> {supplier.correo}</p>
                            <p><strong>Teléfono:</strong> {supplier.telefono}</p>
                        </div>


                        <div className="mt-6">
                            <h3 className="text-xl font-semibold text-blue-950 mb-4">Vehículos</h3>
                            {loading ? (
                                <p>Cargando vehículos...</p>
                            ) : vehicles && vehicles.length > 0 ? (
                                <div className="space-y-4">
                                    {vehicles.map((vehicle) => (
                                        <div key={vehicle.vehicleId} className="border rounded px-3 py-2">
                                            <p><strong>Marca:</strong> {vehicle.marca}</p>
                                            <p><strong>Modelo:</strong> {vehicle.modelo}</p>
                                            <p><strong>Color:</strong> {vehicle.color}</p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p>No hay vehículos registrados para este proveedor</p>
                            )}
                        </div>

                        <div className="flex gap-4 justify-end pt-4">
                            <button
                                type="button"
                                className="px-6 py-2 cursor-pointer text-white bg-gray-300 rounded-full"
                                onClick={onClose}
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupplierDetailsModal