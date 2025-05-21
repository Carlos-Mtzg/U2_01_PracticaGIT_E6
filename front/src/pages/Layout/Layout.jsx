import { Outlet } from 'react-router-dom';
import Header from '@pages/layout/Header';
import Footer from '@pages/layout/Footer';

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout