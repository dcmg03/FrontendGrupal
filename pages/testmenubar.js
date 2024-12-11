import React from 'react';
import { Menubar } from 'primereact/menubar';

const TestMenubar = () => {
    const items = [
        { label: 'Inicio', icon: 'pi pi-fw pi-home', url: '/' },
        { label: 'Salas', icon: 'pi pi-fw pi-table', url: '/salas' },
        { label: 'Sillas', icon: 'pi pi-fw pi-chair', url: '/sillas' },
        { label: 'Informes', icon: 'pi pi-fw pi-chart-line', url: '/informes' },
    ];

    return (
        <div>
            <Menubar model={items} />
        </div>
    );
};

export default TestMenubar;
