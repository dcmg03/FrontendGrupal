import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

const FormularioSala = ({ onSubmit }) => {
    const [visible, setVisible] = useState(false);
    const [nombre, setNombre] = useState('');

    const guardarSala = () => {
        onSubmit({ nombre });
        setVisible(false);
        setNombre('');
    };

    return (
        <>
            <Button label="Nueva Sala" icon="pi pi-plus" onClick={() => setVisible(true)} />
            <Dialog header="Nueva Sala" visible={visible} onHide={() => setVisible(false)}>
                <div className="p-fluid">
                    <div className="p-field">
                        <label htmlFor="nombre">Nombre de la Sala</label>
                        <InputText id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>
                    <Button label="Guardar" icon="pi pi-check" onClick={guardarSala} />
                </div>
            </Dialog>
        </>
    );
};

export default FormularioSala;
