import React, { useEffect, useState } from 'react';
import { fetchInforme } from '../services/api';

const Informe = () => {
  const [informe, setInforme] = useState({});

  useEffect(() => {
    const getInforme = async () => {
      const data = await fetchInforme();
      setInforme(data);
    };
    getInforme();
  }, []);

  return (
    <div>
      <h1>Informe de Ventas</h1>
      <p>Boletas Vendidas: {informe.boletasVendidas}</p>
      <p>Total Ventas: {informe.totalVentas}</p>
      <p>Porcentaje de Ocupación: {informe.porcentajeOcupacion}%</p>
    </div>
  );
};

export default Informe;
