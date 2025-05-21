import { useState } from 'react'
import { updateSupplier } from '../Services/ApiSuppliers'

const UpdateSupplierModal = ({ onClose, onUpdate, supplier }) => {
    const [nombre, setNombre] = useState(supplier.nombre)
    const [correo, setCorreo] = useState(supplier.correo)
    const [telefono, setTelefono] = useState(supplier.telefono)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await updateSupplier(supplier.supplierId, { nombre, correo, telefono })
            if (onUpdate) onUpdate()
            onClose()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 max-h-full bg-black/40">
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow-sm">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t bg-blue-950">
                        <h3 className="text-xl font-semibold text-white">
                            Actualizar Proveedor
                        </h3>
                    </div>
                    <form className="p-4 md:p-5 space-y-4" onSubmit={handleSubmit}>
                        <label htmlFor="name">Nombre:</label>
                        <input
                            type="text"
                            name='name'
                            className="w-full border rounded px-3 py-2"
                            placeholder="Nombre"
                            value={nombre}
                            onChange={e => setNombre(e.target.value)}
                            required
                        />
                        <label htmlFor="email">Correo Electrónico:</label>
                        <input
                            type="email"
                            name='email'
                            className="w-full border rounded px-3 py-2"
                            placeholder="Correo"
                            value={correo}
                            onChange={e => setCorreo(e.target.value)}
                            required
                        />
                        <label htmlFor="phone">Teléfono:</label>
                        <input
                            type="text"
                            name='phone'
                            className="w-full border rounded px-3 py-2"
                            placeholder="Teléfono"
                            value={telefono}
                            onChange={e => setTelefono(e.target.value)}
                            required
                        />
                        <div className="flex gap-4 justify-end pt-4">
                            <button type="button" className="px-6 py-2 cursor-pointer text-white bg-gray-300 rounded-full" onClick={onClose}>
                                Cancelar
                            </button>
                            <button type="submit" className="px-6 py-2 cursor-pointer text-white bg-blue-950 rounded-full">
                                Confirmar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateSupplierModal