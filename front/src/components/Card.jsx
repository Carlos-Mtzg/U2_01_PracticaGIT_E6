const Card = ({ id, color, modelo, marca, supplier, onDelete, onView }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-2 border border-gray-200 max-w-xs transition-transform duration-300 hover:scale-110 hover:shadow- hover:shadow-blue-950/30">
            <h2 className="text-xl font-bold text-blue-950 mb-2">{marca} {modelo}</h2>
            <p className="text-gray-700"><span className="font-semibold">Color:</span> {color}</p>
            <p className="text-gray-700"><span className="font-semibold">Proveedor:</span> {supplier?.nombre || 'Sin proveedor'}</p>
            <div className="flex pt-2 justify-end">
                <button
                    className="px-2 cursor-pointer text-blue-700 hover:text-blue-900"
                    title="Ver"
                    onClick={onView}
                >
                    <i className="bi bi-eye"></i>
                </button>
                <button
                    className="px-2 cursor-pointer text-yellow-600 hover:text-yellow-800"
                    title="Modificar"
                    onClick={() => { }}
                >
                    <i className="bi bi-pencil-square"></i>
                </button>
                <button
                    className="px-2 cursor-pointer text-red-700 hover:text-red-900"
                    title="Eliminar"
                    onClick={() => onDelete && onDelete(id)}
                >
                    <i className="bi bi-trash"></i>
                </button>
            </div>
        </div>
    )
}

export default Card