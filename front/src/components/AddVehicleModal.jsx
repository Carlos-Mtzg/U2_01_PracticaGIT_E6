import React, {useEffect, useState} from 'react';
import {getAllVehicles, registerVehicle} from "../Services/ApiVehicles.jsx";
import {getAllSupplier} from "../Services/ApiSuppliers.jsx";


function AddVehicleModal({onClose, onRegister}) {
    const [color, setColor] = useState('')
    const [modelo, setModelo] = useState('')
    const [marca, setMarca] = useState('')
    const [suppliers, setSuppliers] = useState([])
    const [provedorId, setProvedorId] = useState('')

    useEffect(() => {
        getAllSupplier().then(data => setSuppliers(data || []))
            .catch(() => setSuppliers([]))
    }, []);



    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await registerVehicle({ color, modelo, marca, provedorId })
            onRegister()
            onClose()

        } catch (error) {
            console.log(error)
            throw new Error('Error al registrar el vehículo')
        }
    }

    return (
        <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 max-h-full bg-black/40">
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow-sm">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t bg-blue-950">
                        <h3 className="text-xl font-semibold text-white">
                            Registrar Proveedor
                        </h3>
                    </div>
                    <form className="p-4 md:p-5 space-y-4" onSubmit={handleSubmit}>
                        <label htmlFor="color">Color:</label>
                        <input
                            type="text"
                            name='color'
                            className="w-full border rounded px-3 py-2"
                            placeholder="Color"
                            value={color}
                            onChange={e => setColor(e.target.value)}
                            required
                        />

                        <label htmlFor="modelop">Modelo:</label>
                        <input
                            type="text"
                            name='modelo'
                            className="w-full border rounded px-3 py-2"
                            placeholder="Modelo"
                            value={modelo}
                            onChange={e => setModelo(e.target.value)}
                            required
                        />

                        <label htmlFor="marca">Marca:</label>
                        <input
                            type="text"
                            name='marca'
                            className="w-full border rounded px-3 py-2"
                            placeholder="Marca"
                            value={marca}
                            onChange={e => setMarca(e.target.value)}
                            required
                        />

                        <label htmlFor="proveedor">Proveedor:</label>
                        <select
                            name="proveedor"
                            className="w-full border rounded px-3 py-2"
                            value={provedorId}
                            onChange={(e) => setProvedorId(e.target.value)}
                            required
                        >
                            <option value="" disabled>Seleccione un proveedor</option>
                            {suppliers && suppliers.map((supplier) => (
                                <option key={supplier.supplierId} value={supplier.supplierId}>
                                    {supplier.nombre}
                                </option>
                            ))}
                        </select>

                        <div className="flex gap-4 justify-end pt-4">
                            <button
                                type="button"
                                className="px-6 py-2 cursor-pointer text-white bg-gray-300 rounded-full"
                                onClick={onClose}
                            >
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                className="px-6 py-2 cursor-pointer text-white bg-blue-950 rounded-full"
                            >
                                Confirmar
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddVehicleModal;