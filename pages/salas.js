import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import FormularioSala from '../components/FormularioSala';

const Salas = () => {
    const [salas, setSalas] = useState([]);

    useEffect(() => {
        // Simulación de API
        fetch('http://localhost:8080/api/salas')
            .then((res) => res.json())
            .then((data) => setSalas(data));
    }, []);

    const agregarSala = (nuevaSala) => {
        setSalas([...salas, { id: salas.length + 1, ...nuevaSala }]);
    };

    return (
        <div className="card">
            <h2>Gestión de Salas</h2>
            <FormularioSala onSubmit={agregarSala} />
            <DataTable value={salas} responsiveLayout="scroll" className="p-mt-4">
                <Column field="id" header="ID" />
                <Column field="nombre" header="Nombre" />
                <Column
                    header="Acciones"
                    body={() => (
                        <div>
                            <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-mr-2" />
                            <Button icon="pi pi-trash" className="p-button-rounded p-button-danger" />
                        </div>
                    )}
                />
            </DataTable>
        </div>
    );
};

export default Salas;
