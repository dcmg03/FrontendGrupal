import React, { useEffect, useState } from 'react';
import { fetchSillas, confirmarReserva } from '../services/api';

const SillaSelector = ({ salaId }) => {
  const [sillas, setSillas] = useState([]);
  const [seleccionadas, setSeleccionadas] = useState([]);

  useEffect(() => {
    const getSillas = async () => {
      const data = await fetchSillas(salaId);
      setSillas(data);
    };
    getSillas();
  }, [salaId]);

  const toggleSilla = (sillaId) => {
    setSeleccionadas((prev) =>
      prev.includes(sillaId) ? prev.filter((id) => id !== sillaId) : [...prev, sillaId]
    );
  };

  const handleConfirmarReserva = async () => {
    await confirmarReserva({ salaId, sillas: seleccionadas });
    alert('Reserva confirmada');
  };

  return (
    <div>
      <h2>Selecciona tus Sillas</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)' }}>
        {sillas.map((silla) => (
          <button
            key={silla.id}
            style={{
              backgroundColor: seleccionadas.includes(silla.id) ? 'green' : silla.ocupada ? 'red' : 'gray',
            }}
            onClick={() => !silla.ocupada && toggleSilla(silla.id)}
          >
            {silla.id}
          </button>
        ))}
      </div>
      <button onClick={handleConfirmarReserva}>Confirmar Reserva</button>
    </div>
  );
};

export default SillaSelector;

