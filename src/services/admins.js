import axios from 'axios';

// URL base del servidor
const BASE_URL = 'http://localhost:3000/admins';

// Obtener todos los administradores
export const getAllAdmins = async () => {
  try {
    const response = await axios.get(BASE_URL);
    if (response.status === 200) {
      return { success: true, data: response.data };
    }
    return { success: false, message: response.data.message };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

// Crear un nuevo administrador
export const createAdmin = async (adminData) => {
  try {
    const response = await axios.post(BASE_URL, adminData);
    if (response.status === 201) {
      return { success: true, data: response.data };
    }
    return { success: false, message: response.data.message };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

// Editar un administrador
export const editAdmin = async (adminId, updatedData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${adminId}`, updatedData);
    if (response.status === 200) {
      return { success: true, data: response.data };
    }
    return { success: false, message: response.data.message };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
