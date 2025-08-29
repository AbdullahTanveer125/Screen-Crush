
// "use client";
// import Link from 'next/link';
// import { useState, useEffect } from 'react';
// import { FaBars, FaTimes, FaSearch, FaUser } from 'react-icons/fa';
// import { signIn, signOut, useSession } from 'next-auth/react';
// import Image from 'next/image';

// export default function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);
//     const [scrolled, setScrolled] = useState(false);
//     const { data: session } = useSession();

//     // Handle scroll effect
//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 10) {
//                 setScrolled(true);
//             } else {
//                 setScrolled(false);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     // Close mobile menu when clicking a link
//     const closeMobileMenu = () => setIsOpen(false);

//     return (
//         <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black py-2 shadow-lg' : ' py-4'} bg-green-400 border-b-2 border-b-amber-400`}>
//             <div className="max-w- mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="bg-gray-600 flex items-center justify-between h-16">
//                     {/* Left - Logo */}
//                     <div className="flex items-center">
//                         <div className="flex-shrink-0 flex items-center">
//                             <img src="/logo.png" alt="Logo" className="h-8 w-8" />
//                             <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
//                                 Movie Explorer
//                             </span>
//                         </div>
//                     </div>

//                     {/* Center - Links (Desktop) */}
//                     <div className="hidden md:block">
//                         <div className="ml-10 flex items-center space-x-8">
//                             <Link href="/" className="text-white hover:text-pink-400 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
//                                 Home
//                             </Link>
//                             <Link href="/about" className="text-white hover:text-pink-400 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
//                                 About Us
//                             </Link>
//                             <Link href="/contact" className="text-white hover:text-pink-400 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
//                                 Contact Us
//                             </Link>
//                             <Link href="/services" className="text-white hover:text-pink-400 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
//                                 Services
//                             </Link>
//                         </div>
//                     </div>

//                     {/* Right - Buttons (Desktop) */}
//                     <div className="hidden md:flex items-center space-x-4">
//                         {session ? (
//                             <div className="flex items-center space-x-4">
//                                 <div className="relative group">
//                                     {session.user?.image ? (
//                                         <Image
//                                             src={session.user.image}
//                                             alt="User profile"
//                                             width={32}
//                                             height={32}
//                                             className="rounded-full cursor-pointer"
//                                         />
//                                     ) : (
//                                         <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer">
//                                             <FaUser className="text-gray-600" />
//                                         </div>
//                                     )}
//                                     <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 hidden group-hover:block">
//                                         <div className="px-4 py-2 text-sm text-gray-700 border-b">
//                                             <p>Signed in as</p>
//                                             <p className="font-medium truncate">{session.user?.email}</p>
//                                         </div>
//                                         <Link
//                                             href="/profile"
//                                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                                             onClick={closeMobileMenu}
//                                         >
//                                             Your Profile
//                                         </Link>
//                                         <button
//                                             onClick={() => signOut()}
//                                             className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                                         >
//                                             Sign out
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         ) : (
//                             <>
//                                 <button
//                                     onClick={() => signIn()}
//                                     className="bg-transparent border border-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer flex items-center gap-2"
//                                 >
//                                     <FaUser size={14} /> Login
//                                 </button>
//                                 <button
//                                     onClick={() => signIn()}
//                                     className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-pink-500/30"
//                                 >
//                                     Sign Up
//                                 </button>
//                             </>
//                         )}
//                     </div>

//                     {/* Mobile menu button */}
//                     <div className="md:hidden flex items-center">
//                         <button
//                             onClick={() => setIsOpen(!isOpen)}
//                             className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-pink-400 focus:outline-none transition duration-300"
//                         >
//                             {isOpen ? (
//                                 <FaTimes className="h-6 w-6" />
//                             ) : (
//                                 <FaBars className="h-6 w-6" />
//                             )}
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             <div
//                 className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
//                     }`}
//             >
//                 <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black bg-opacity-90">
//                     <Link
//                         href="/"
//                         onClick={closeMobileMenu}
//                         className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 transition duration-300"
//                     >
//                         Home
//                     </Link>
//                     <Link
//                         href="/about"
//                         onClick={closeMobileMenu}
//                         className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 transition duration-300"
//                     >
//                         About Us
//                     </Link>
//                     <Link
//                         href="/contact"
//                         onClick={closeMobileMenu}
//                         className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 transition duration-300"
//                     >
//                         Contact Us
//                     </Link>
//                     <Link
//                         href="/services"
//                         onClick={closeMobileMenu}
//                         className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 transition duration-300"
//                     >
//                         Services
//                     </Link>
//                     <div className="px-3 pt-2 pb-3 flex space-x-4">
//                         {session ? (
//                             <>
//                                 <div className="flex items-center space-x-2 text-white">
//                                     {session.user?.image && (
//                                         <Image
//                                             src={session.user.image}
//                                             alt="User profile"
//                                             width={32}
//                                             height={32}
//                                             className="rounded-full"
//                                         />
//                                     )}
//                                     <span>{session.user?.name || session.user?.email}</span>
//                                 </div>
//                                 <button
//                                     onClick={() => signOut()}
//                                     className="bg-transparent border border-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer flex-1 text-center"
//                                 >
//                                     Sign Out
//                                 </button>
//                             </>
//                         ) : (
//                             <>
//                                 <button
//                                     onClick={() => signIn()}
//                                     className="bg-transparent border border-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer flex-1 text-center"
//                                 >
//                                     Login
//                                 </button>
//                                 <button
//                                     onClick={() => signIn()}
//                                     className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 cursor-pointer flex-1 text-center"
//                                 >
//                                     Sign Up
//                                 </button>
//                             </>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// }






















































// // "use client";// src/components/Navbar.js

// // import Link from 'next/link';
// // import { useSession, signIn, signOut } from 'next-auth/react';

// // import { FaBars, FaTimes, FaSearch, FaUser } from 'react-icons/fa';
// // import { useState, useEffect } from 'react';



// // export default function Navbar() {
// //     const [isOpen, setIsOpen] = useState(false);
// //     const [scrolled, setScrolled] = useState(false);
// //     const { data: session } = useSession();
// //     // Handle scroll effect
// //     useEffect(() => {
// //         const handleScroll = () => {
// //             if (window.scrollY > 10) {
// //                 setScrolled(true);
// //             } else {
// //                 setScrolled(false);
// //             }
// //         };

// //         window.addEventListener('scroll', handleScroll);
// //         return () => window.removeEventListener('scroll', handleScroll);
// //     }, []);

// //     // Close mobile menu when clicking a link
// //     const closeMobileMenu = () => setIsOpen(false);

// //     return (
// //         <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black py-2 shadow-lg' : ' py-4'} bg-green-400 border-b-2 border-b-amber-400`}>
// //             <div className="max-w- mx-auto px-4 sm:px-6 lg:px-8">
// //                 <div className="bg-gray-600 flex items-center justify-between h-16">
// //                     {/* Left - Logo */}
// //                     <div className="flex items-center">
// //                         <div className="flex-shrink-0 flex items-center">
// //                             <img src="/logo.png" alt="Logo" className="h-8 w-8" />
// //                             <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
// //                                 Movie Explorer
// //                             </span>
// //                         </div>
// //                     </div>

// //                     {/* Center - Links (Desktop) */}
// //                     <div className="hidden md:block">
// //                         <div className="ml-10 flex items-center space-x-8">
// //                             <Link href="/" className="text-white hover:text-pink-400 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
// //                                 Home
// //                             </Link>
// //                             <Link href="/about" className="text-white hover:text-pink-400 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
// //                                 About Us
// //                             </Link>
// //                             <Link href="/contact" className="text-white hover:text-pink-400 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
// //                                 Contact Us
// //                             </Link>
// //                             <Link href="/services" className="text-white hover:text-pink-400 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
// //                                 Services
// //                             </Link>
// //                             {/* <div className="relative">
// //                                 <input
// //                                     type="text"
// //                                     placeholder="Search..."
// //                                     className="bg-gray-800 text-white px-4 py-1 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 w-40 md:w-64 transition-all duration-300"
// //                                 />
// //                                 <FaSearch className="absolute right-3 top-2 text-gray-400" />
// //                             </div> */}
// //                         </div>
// //                     </div>

// //                     {/* Right - Buttons (Desktop) */}
// //                     {/* <div className="hidden md:flex items-center space-x-4">
// //                         <button className="bg-transparent border border-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer flex items-center gap-2">
// //                             <FaUser size={14} /> Login
// //                         </button>
// //                         <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-pink-500/30">
// //                             Sign Up
// //                         </button>
// //                     </div> */}
// //                     {session ? (
// //                         <>
// //                             <span className="text-white">Hi, {session.user.name}</span>
// //                             <button
// //                                 onClick={() => signOut()}
// //                                 className="bg-red-500 text-white px-4 py-1 rounded-full hover:bg-red-600"
// //                             >
// //                                 Sign Out
// //                             </button>
// //                         </>
// //                     ) : (
// //                         <>
// //                             <div className=''>
// //                                 <button
// //                                     onClick={() => signIn()}
// //                                     className="bg-transparent border border-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition"
// //                                 >
// //                                     Login
// //                                 </button>
// //                                 <button
// //                                     onClick={() => signIn()}
// //                                     className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full hover:from-purple-600 hover:to-pink-600 transition"
// //                                 >
// //                                     Sign Up
// //                                 </button>
// //                             </div>
// //                         </>
// //                     )}












// //                     {/* Mobile menu button */}
// //                     <div className="md:hidden flex items-center">
// //                         <button
// //                             onClick={() => setIsOpen(!isOpen)}
// //                             className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-pink-400 focus:outline-none transition duration-300"
// //                         >
// //                             {isOpen ? (
// //                                 <FaTimes className="h-6 w-6" />
// //                             ) : (
// //                                 <FaBars className="h-6 w-6" />
// //                             )}
// //                         </button>
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* Mobile Menu */}
// //             <div
// //                 className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
// //                     }`}
// //             >
// //                 <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black bg-opacity-90">
// //                     <Link
// //                         href="/"
// //                         onClick={closeMobileMenu}
// //                         className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 transition duration-300"
// //                     >
// //                         Home
// //                     </Link>
// //                     <Link
// //                         href="/about"
// //                         onClick={closeMobileMenu}
// //                         className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 transition duration-300"
// //                     >
// //                         About Us
// //                     </Link>
// //                     <Link
// //                         href="/contact"
// //                         onClick={closeMobileMenu}
// //                         className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 transition duration-300"
// //                     >
// //                         Contact Us
// //                     </Link>
// //                     <Link
// //                         href="/services"
// //                         onClick={closeMobileMenu}
// //                         className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 transition duration-300"
// //                     >
// //                         Services
// //                     </Link>
// //                     {/* <div className="px-3 py-2">
// //                         <div className="relative">
// //                             <input
// //                                 type="text"
// //                                 placeholder="Search..."
// //                                 className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 w-full"
// //                             />
// //                             <FaSearch className="absolute right-3 top-3 text-gray-400" />
// //                         </div>
// //                     </div> */}
// //                     <div className="px-3 pt-2 pb-3 flex space-x-4">
// //                         <button className="bg-transparent border border-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer flex-1 text-center">
// //                             Login
// //                         </button>
// //                         <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 cursor-pointer flex-1 text-center">
// //                             Sign Up
// //                         </button>
// //                     </div>
// //                 </div>
// //             </div>
// //         </nav>
// //     );
// // }


















































































"use client";
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes, FaSearch, FaUser } from 'react-icons/fa';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

import { toast } from 'react-toastify';

import { useAuth } from '@/context/AuthContext';

export default function Navbar() {

    const [auth, setAuth] = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);
    const { data: session } = useSession();
    const dropdownRef = useRef(null);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking a link
    const closeMobileMenu = () => setIsOpen(false);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setUserDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    const toggleUserDropdown = () => {
        setUserDropdownOpen(!userDropdownOpen);
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-300 py-2 shadow-lg' : 'bg-white py-2'} border-b-4 border-b-blue-500 backdrop-blur-md`}>
            <div className="max-w- mx-auto px-4 sm:px-6 lg:px-8">
                <div className=" flex items-center justify-between h-16 rounded-full px-7">
                    {/* Left - Logo */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <img src="/logo.png" alt="Logo" className="h-12 w-12" />
                            <span className="ml-2 text-xl font-extrabold text-blue-600">
                                Screen Crush
                            </span>
                        </div>
                    </div>

                    {/* Center - Links (Desktop) */}
                    <div className="hidden md:block text-black">
                        <div className="ml-10 flex items-center space-x-8">
                            <Link href="/" className=" hover:text-white hover:bg-blue-600  px-3 py-2 rounded-md transition duration-300 text-blue-600 font-bold">
                                Home
                            </Link>
                            <Link href="/about_us" className=" hover:text-white hover:bg-blue-600 px-3 py-2 rounded-md  transition duration-300 text-blue-600 font-bold">
                                About Us
                            </Link>
                            <Link href="/contact_us" className=" hover:text-white hover:bg-blue-600 px-3 py-2 rounded-md  text-blue-600 font-bold transition duration-300">
                                Contact Us
                            </Link>
                            <Link href="/cartPage" className=" hover:text-white hover:bg-blue-600 px-3 py-2 rounded-md  text-blue-600 font-bold transition duration-300">
                                Cart
                            </Link>
                        </div>
                    </div>

                    {/* Right - Buttons (Desktop) */}
                    <div className="hidden md:flex items-center space-x-4">
                        {session ? (
                            <div className="flex items-center space-x-4" ref={dropdownRef}>
                                <div className="relative">
                                    {session.user?.image ? (
                                        <button onClick={toggleUserDropdown} className="focus:outline-none">
                                            <Image
                                                src={session.user.image}
                                                alt="User profile"
                                                width={32}
                                                height={32}
                                                className="rounded-full cursor-pointer"
                                            />
                                        </button>
                                    ) : (
                                        <button
                                            onClick={toggleUserDropdown}
                                            className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer focus:outline-none"
                                        >
                                            <FaUser className="text-gray-600" />
                                        </button>
                                    )}
                                    {userDropdownOpen && (
                                        <div className="bg-slate-200 absolute right-0 mt-2 w-48  rounded-md shadow-lg py-1 z-50">
                                            <div className="px-4 py-2 text-sm text-gray-700 border-b">
                                                <p className='text-blue-500'>Signed in as</p>
                                                <p className="font-medium truncate">{session.user?.email}</p>
                                            </div>
                                            {/* <Link
                                                href="/profile"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                onClick={() => {
                                                    closeMobileMenu();
                                                    setUserDropdownOpen(false);
                                                }}
                                            >
                                                Your Profile
                                            </Link> */}
                                            <button
                                                onClick={() => {
                                                    signOut();
                                                    setUserDropdownOpen(false);
                                                    // Clear auth context and localStorage
                                                    setAuth({
                                                        user: null,
                                                        token: '',
                                                        isLoggedIn: false,
                                                    });

                                                    localStorage.removeItem('auth');

                                                    toast.success("Logout successfully!");
                                                }}
                                                className="mt-5 block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer text-center"
                                            >
                                                Sign out
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <>
                                <button
                                    onClick={() => signIn()}
                                    className="bg-blue-500 px-5 py-2 border-2 border-blue-500 rounded-full text-white hover:bg-white hover:text-black hover:border-black transition-all duration-300 cursor-pointer flex items-center gap-2"
                                >
                                    <FaUser size={14} /> Login
                                </button>
                                {/* <button
                                    onClick={() => signIn()}
                                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-pink-500/30"
                                >
                                    Sign Up
                                </button> */}
                            </>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-whi hover:text-pink-400 focus:outline-none transition duration-300"
                        >
                            {isOpen ? (
                                <FaTimes className="h-6 w-6" />
                            ) : (
                                <FaBars className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black bg-opacity-90">
                    <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 transition duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        href="/about_us"
                        onClick={closeMobileMenu}
                        className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 transition duration-300"
                    >
                        About Us
                    </Link>
                    <Link
                        href="/contact_us"
                        onClick={closeMobileMenu}
                        className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 transition duration-300"
                    >
                        Contact Us
                    </Link>
                    <Link
                        href="/services"
                        onClick={closeMobileMenu}
                        className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 transition duration-300"
                    >
                        Services
                    </Link>
                    <div className="px-3 pt-2 pb-3 flex space-x-4">
                        {session ? (
                            <>
                                <div className='text-center w-full'>
                                    <div className="flex items-center space-x-2 text-white">
                                        {session.user?.image && (
                                            <Image
                                                src={session.user.image}
                                                alt="User profile"
                                                width={32}
                                                height={32}
                                                className="rounded-full"
                                            />
                                        )}
                                        <span className=''>{session.user?.name || session.user?.email}</span>
                                    </div>
                                    <button
                                        onClick={() => {
                                            signOut(); // From NextAuth

                                            // Clear auth context and localStorage
                                            setAuth({
                                                user: null,
                                                token: '',
                                                isLoggedIn: false,
                                            });

                                            localStorage.removeItem('auth');

                                            toast.success("Logout successfully!");
                                        }}

                                        className="text-white bg-transparent border border-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer flex-1 text-center mt-5"
                                    >
                                        Sign Out
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <button
                                    onClick={() => signIn()}
                                    className="bg-transparent text-white border border-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer flex-1 text-center"
                                >
                                    Login
                                </button>
                                {/* <button
                                    onClick={() => signIn()}
                                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 cursor-pointer flex-1 text-center"
                                >
                                    Sign Up
                                </button> */}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}