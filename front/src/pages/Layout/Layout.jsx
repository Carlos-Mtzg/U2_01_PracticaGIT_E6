import { Outlet } from 'react-router-dom';
import Header from '@pages/layout/Header';
import Footer from '@pages/layout/Footer';

const Layout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <div className='grow p-8'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout