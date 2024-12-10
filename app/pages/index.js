import React, { useState } from 'react';
import SalaList from '../components/SalaList';
import SillaSelector from '../components/SillaSelector';

const Home = () => {
  const [salaSeleccionada, setSalaSeleccionada] = useState(null);

  return (
    <div>
      {!salaSeleccionada ? (
        <SalaList onSalaSelect={setSalaSeleccionada} />
      ) : (
        <SillaSelector salaId={salaSeleccionada} />
      )}
    </div>
  );
};

export default Home;
