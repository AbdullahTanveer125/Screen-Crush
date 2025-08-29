'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LayoutWrapper({ children }) {
    const pathname = usePathname();


    // Define routes where you want to hide navbar and footer
    // const hiddenRoutes = ['/payment-success', '/login', '/register'];//example
    const hiddenRoutes = ['/payment-success', '/login', '/register'];
    const shouldHideLayout = hiddenRoutes.includes(pathname);

    return (
        <>
            {!shouldHideLayout && <Navbar />}
            {children}
            <ToastContainer />
            {!shouldHideLayout && <Footer />}
        </>
    );
}
