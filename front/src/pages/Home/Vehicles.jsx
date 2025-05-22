import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import { deleteVehicle, getAllVehicles } from '../../Services/ApiVehicles'
import InfoVehicleModal from '../../components/InfoVehicleModal'

const Vehicles = () => {
    const [vehicles, setVehicles] = useState([])
    const [showInfoModal, setShowInfoModal] = useState(false)
    const [selectedVehicle, setSelectedVehicle] = useState(null)

    useEffect(() => {
        getAllVehicles()
            .then(data => setVehicles(data))
            .catch(() => setVehicles([]))
    }, [])

    const handleDelete = async (id) => {
        if (window.confirm('¿Seguro que deseas eliminar este proveedor?')) {
            try {
                await deleteVehicle(id)
                setVehicles(vehicles.filter(vehicle => vehicle.vehicleId !== id))
            } catch (error) {
                console.log(error)
            }
        }
    }

    const handleView = (vehicle) => {
        setSelectedVehicle(vehicle)
        setShowInfoModal(true)
    }

    return (
        <div>
            <div className='flex justify-between mb-8'>
                <h1 className='text-3xl text-blue-950 font-bold uppercase'>Vehículos</h1>
                <button className='border-2 border-blue-950 rounded-2xl px-8 py-2 cursor-pointer uppercase font-bold text-blue-950 hover:bg-blue-950 hover:text-white transition-all'>
                    Agregar
                </button>
            </div>
            <div className="flex flex-wrap gap-6">
                {vehicles.map(vehicle => (
                    <Card
                        key={vehicle.vehicleId}
                        id={vehicle.vehicleId}
                        color={vehicle.color}
                        modelo={vehicle.modelo}
                        marca={vehicle.marca}
                        supplier={vehicle.supplier}
                        onDelete={handleDelete}
                        onView={() => handleView(vehicle)}
                    />
                ))}
            </div>
            {showInfoModal && selectedVehicle && (
                <InfoVehicleModal
                    vehicle={selectedVehicle}
                    onClose={() => setShowInfoModal(false)}
                />
            )}
        </div>
    )
}

export default Vehicles