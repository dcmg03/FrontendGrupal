import React from 'react';
import { Menubar } from 'primereact/menubar';

const Layout = ({ children }) => {
    const items = [
        { label: 'Inicio', icon: 'pi pi-fw pi-home', url: '/' },
        { label: 'Salas', icon: 'pi pi-fw pi-table', url: '/salas' },
        { label: 'Sillas', icon: 'pi pi-fw pi-chair', url: '/sillas' },
        { label: 'Informes', icon: 'pi pi-fw pi-chart-line', url: '/informes' },
    ];

    return (
        <div>
            <Menubar model={items} />
            <main className="p-m-3">{children}</main>
        </div>
    );
};

export default Layout;
