import { useState, useEffect } from 'react'
import { deleteSupplier, getAllSupplier } from '../../Services/ApiSuppliers'
import AddSupplierModal from '../../components/AddSupplierModal'
import UpdateSupplierModal from '../../components/UpdateSupplierModal'

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [showUpdateModal, setShowUpdateModal] = useState(false)
  const [selectedSupplier, setSelectedSupplier] = useState(null)

  const fetchSuppliers = () => {
    getAllSupplier()
      .then(data => setSuppliers(data))
      .catch(() => setSuppliers([]))
  }

  useEffect(() => {
    fetchSuppliers()
  }, [])

  const handleDelete = async (id) => {
    if (window.confirm('¿Seguro que deseas eliminar este proveedor?')) {
      try {
        await deleteSupplier(id)
        fetchSuppliers()
      } catch (error) {
        console.log('Error al eliminar proveedor' + error)
      }
    }
  }

  const handleEdit = (supplier) => {
    setSelectedSupplier(supplier)
    setShowUpdateModal(true)
  }

  return (
    <>
      <div className='flex justify-between pb-8'>
        <h1 className='text-3xl text-blue-950 font-bold uppercase'>Proveedores</h1>
        <button className='border-2 border-blue-950 rounded-2xl px-8 py-2 cursor-pointer uppercase font-bold text-blue-950 hover:bg-blue-950 hover:text-white transition-all' onClick={() => setShowModal(true)}>
          Agregar<i className="bi bi-plus-circle ms-4 font-bold"></i>
        </button>
      </div>
      <table className='min-w-full rounded-lg'>
        <thead>
          <tr>
            <th className='py-2 px-4 text-blue-950 uppercase font-bold border-b-[0.1rem] max-w-3'>#</th>
            <th className='py-2 px-4 text-blue-950 uppercase font-bold border-b-[0.1rem]'>Nombre</th>
            <th className='py-2 px-4 text-blue-950 uppercase font-bold border-b-[0.1rem]'>Correo</th>
            <th className='py-2 px-4 text-blue-950 uppercase font-bold border-b-[0.1rem]'>Teléfono</th>
            <th className='py-2 px-4 text-blue-950 uppercase font-bold border-b-[0.1rem]'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map(supplier => (
            <tr className='hover:bg-blue-950/10 transition' key={supplier.supplierId}>
              <td className='py-4 px-4 text-center font-bold text-blue-950'>{supplier.supplierId}</td>
              <td className='py-4 px-4 text-center'>{supplier.nombre}</td>
              <td className='py-4 px-4 text-center'>{supplier.correo}</td>
              <td className='py-4 px-4 text-center'>{supplier.telefono}</td>
              <td className='py-4 px-4 text-center'>
                <button className='cursor-pointer px-2' onClick={() => handleEdit(supplier)}>
                  <i className="bi bi-pencil-square"></i>
                </button>
                <button className='cursor-pointer px-2 text-red-800' onClick={() => handleDelete(supplier.supplierId)}>
                  <i className="bi bi-trash"></i>
                </button>
                <button className='cursor-pointer px-2'>
                  <i className="bi bi-eye"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && <AddSupplierModal onClose={() => setShowModal(false)} onRegister={fetchSuppliers} />}
      {showUpdateModal && selectedSupplier && (
        <UpdateSupplierModal
          supplier={selectedSupplier}
          onClose={() => setShowUpdateModal(false)}
          onUpdate={fetchSuppliers}
        />
      )}
    </>
  )
}

export default Suppliers