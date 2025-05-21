import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL_LOCAL;

export async function getAllSupplier() {
    try {
        const response = await axios.get(`${API_URL}suppliers/`);
        return response.data.data;
    } catch (error) {
        console.error('Error al obtener proveedores:', error);
        throw error;
    }
}

export async function getSupplierById(id) {
    try {
        const response = await axios.get(`${API_URL}suppliers/${id}`);
        return response.data.data;
    } catch (error) {
        console.error('Error al obtener proveedor por ID:', error);
        throw error;
    }
}

export async function registerSupplier({ nombre, correo, telefono }) {
    try {
        const response = await axios.post(
            `${API_URL}suppliers/`,
            { nombre, correo, telefono }
        );
        return response.data.data;
    } catch (error) {
        console.error('Error al registrar proveedor:', error);
        throw error;
    }
}

export async function updateSupplier(id, { nombre, correo, telefono }) {
    try {
        const response = await axios.put(
            `${API_URL}suppliers/${id}`,
            { nombre, correo, telefono }
        );
        return response.data.data;
    } catch (error) {
        console.error('Error al actualizar proveedor:', error);
        throw error;
    }
}


export async function deleteSupplier(id) {
    try {
        const response = await axios.delete(`${API_URL}suppliers/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al eliminar proveedor:', error);
        throw error;
    }
}