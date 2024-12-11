import 'primereact/resources/themes/lara-light-indigo/theme.css'; // Tema de PrimeReact
import 'primereact/resources/primereact.min.css'; // Estilos base de PrimeReact
import 'primeicons/primeicons.css'; // Iconos de PrimeReact
import 'primeflex/primeflex.css'; // Sistema de diseño flexbox de PrimeReact
import '../globals.css'; // Tus estilos personalizados

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
