import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL_LOCAL;

export async function getAllVehicles() {
    try {
        const response = await axios.get(`${API_URL}vehicles`)
        return response.data.data
    } catch (error) {
        console.error('Error al obtener vehículos:', error)
        throw error
    }
}

export async function registerVehicle({ color, modelo, marca, supplier }) {
    try {
        const response = await axios.post(
            `${API_URL}vehicles`,
            { color, modelo, marca, supplier }
        )
        return response.data
    } catch (error) {
        console.error('Error al registrar vehículo:', error)
        throw error
    }
}

export async function deleteVehicle(vehicleId) {
    try {
        const response = await axios.delete(`${API_URL}vehicles/${vehicleId}`)
        return response.data
    } catch (error) {
        console.error('Error al eliminar vehículo:', error)
        throw error
    }
}
