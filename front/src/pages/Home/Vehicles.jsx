import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import { getAllVehicles } from '../../Services/ApiVehicles'
import AddVehicleModal from "@components/AddVehicleModal.jsx";

const Vehicles = () => {
    const [vehicles, setVehicles] = useState([])
    const [showModal, setShowModal] = useState(false)

    const fetchVehicles = () => {
        getAllVehicles()
            .then(data => setVehicles(data))
            .catch(() => setVehicles([]))
    }

    useEffect(() => {
        fetchVehicles()
    }, []);


    return (
        <>
            <div>
                <div className='flex justify-between mb-8'>
                    <h1 className='text-3xl text-blue-950 font-bold uppercase'>Vehículos</h1>
                    <button onClick={() => setShowModal(true)} className='border-2 border-blue-950 rounded-2xl px-8 py-2 cursor-pointer uppercase font-bold text-blue-950 hover:bg-blue-950 hover:text-white transition-all'>
                        Agregar
                    </button>
                </div>
                <div className="flex flex-wrap gap-6">
                    {vehicles.map(vehicle => (
                        <Card
                            key={vehicle.vehicleId}
                            color={vehicle.color}
                            modelo={vehicle.modelo}
                            marca={vehicle.marca}
                            supplier={vehicle.supplier}
                        />
                    ))}
                </div>
            </div>
            {showModal && <AddVehicleModal onClose={() => setShowModal(false)} onRegister={fetchVehicles} />}
        </>
    )
}

export default Vehicles