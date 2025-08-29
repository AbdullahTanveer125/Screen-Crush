
// src/app/layout.js
import './globals.css';

import { AuthProvider } from '../context/AuthContext'; // adjust path

// import { Inter } from 'next/font/google';
import { Nunito } from 'next/font/google';
import Providers from '../components/Providers'; // <- make sure path is correct

import LayoutWrapper from '@/components/LayoutWrapper'; // new wrapper component

// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';

// import { ToastContainer } from 'react-toastify';
// const inter = Inter({ subsets: ['latin'] });
const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // optional: customize as needed
  variable: '--font-nunito',
});


export const metadata = {
  title: 'Screen Crush',
  description: 'Explore movies, shows, and more.',
};



export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={nunito.className}>
        <AuthProvider>
          <Providers>
            
            <LayoutWrapper>{children}</LayoutWrapper>
    
          </Providers>
        </AuthProvider>

        
      </body>
    </html>
  );
}
