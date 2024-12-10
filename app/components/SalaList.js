import React, { useEffect, useState } from 'react';
import { fetchSalas } from '../services/api';

const SalaList = ({ onSalaSelect }) => {
  const [salas, setSalas] = useState([]);

  useEffect(() => {
    const getSalas = async () => {
      const data = await fetchSalas();
      setSalas(data);
    };
    getSalas();
  }, []);

  return (
    <div>
      <h1>Salas Disponibles</h1>
      <ul>
        {salas.map((sala) => (
          <li key={sala.id} onClick={() => onSalaSelect(sala.id)}>
            {sala.nombre} - Capacidad: {sala.capacidad}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SalaList;
