import axios from 'axios';

const API_URL = 'http://localhost:8080'; // Cambia esto si el backend está en otra URL

// Obtener lista de salas
export const fetchSalas = async () => {
  const response = await axios.get(`${API_URL}/salas`);
  return response.data;
};

// Obtener sillas de una sala específica
export const fetchSillas = async (salaId) => {
  const response = await axios.get(`${API_URL}/salas/${salaId}/sillas`);
  return response.data;
};

// Confirmar una reserva
export const confirmarReserva = async (reservaData) => {
  const response = await axios.post(`${API_URL}/reservas`, reservaData);
  return response.data;
};

// Generar informe
export const fetchInforme = async () => {
  const response = await axios.get(`${API_URL}/informes`);
  return response.data;
};
