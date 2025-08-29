// 'use client';

// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { FiMail, FiPhone, FiUser, FiMessageSquare, FiClock } from 'react-icons/fi';
// import { PulseLoader } from 'react-spinners';
// import { motion } from 'framer-motion';
// import Marquee from "react-fast-marquee";

// export default function Feedbacks() {
//     const [messages, setMessages] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [searchTerm, setSearchTerm] = useState('');

//     useEffect(() => {
//         const fetchContacts = async () => {
//             try {
//                 setLoading(true);
//                 const response = await axios.get('http://localhost:5000/get_contacts');
//                 setMessages(response.data.contacts);
//                 setError(null);
//             } catch (error) {
//                 console.error('Error fetching contacts:', error);
//                 setError('Failed to load messages. Please try again later.');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchContacts();
//     }, []);

//     const filteredMessages = messages.filter(msg =>
//         msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         msg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         msg.comment.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
//             <div className="max-w-7xl mx-auto">
//                 <div className="text-center mb-10">
//                     <motion.h1
//                         initial={{ opacity: 0, y: -20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5 }}
//                         className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-3"
//                     >
//                         Customer <span className="text-blue-600">Messages</span>
//                     </motion.h1>
//                     <motion.p
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ delay: 0.2, duration: 0.5 }}
//                         className="text-lg text-gray-600 max-w-2xl mx-auto"
//                     >
//                         Here's what your customers are saying. Valuable feedback to help you improve.
//                     </motion.p>
//                 </div>

//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.4, duration: 0.5 }}
//                     className="mb-8 max-w-md mx-auto"
//                 >
//                     <div className="relative">
//                         <input
//                             type="text"
//                             placeholder="Search messages..."
//                             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
//                             value={searchTerm}
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                         />
//                         <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
//                             <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                             </svg>
//                         </div>
//                     </div>
//                 </motion.div>

//                 {loading ? (
//                     <div className="flex justify-center items-center h-64">
//                         <PulseLoader color="#3B82F6" size={15} />
//                     </div>
//                 ) : error ? (
//                     <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded">
//                         <div className="flex">
//                             <div className="flex-shrink-0">
//                                 <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
//                                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//                                 </svg>
//                             </div>
//                             <div className="ml-3">
//                                 <p className="text-sm text-red-700">{error}</p>
//                             </div>
//                         </div>
//                     </div>
//                 ) : filteredMessages.length === 0 ? (
//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.5 }}
//                         className="text-center py-12 bg-white rounded-xl shadow-sm"
//                     >
//                         <svg className="mx-auto h-12 w-12 text-gray-400 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                         </svg>
//                         <h3 className="mt-2 text-lg font-medium text-gray-900">No messages found</h3>
//                         <p className="mt-1 text-sm text-gray-500">
//                             {searchTerm ? 'Try a different search term' : 'No messages have been submitted yet.'}
//                         </p>
//                     </motion.div>
//                 ) : (
//                     <div className="pb-10 sm:pb-14 md:pb-16 lg:pb-20 overflow-hidden">
//                         <Marquee
//                             speed={40}
//                             gradient={false}
//                             pauseOnHover={true}
//                             className="w-full"
//                         >
//                             <div className="flex gap-6 p-4 ">
//                                 {filteredMessages.map((msg, idx) => (
//                                     <motion.div
//                                         key={idx}
//                                         initial={{ opacity: 0, x: 100 }}
//                                         animate={{ opacity: 1, x: 0 }}
//                                         transition={{ duration: 0.5 }}
//                                         className="bg-white max-w-72 mx-10 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 min-w-[300px]"
//                                     >
//                                         <div className="p-6 bg-amber-300 h-full">
//                                             <div className="flex items-center mb-4">
//                                                 <div className="bg-blue-100 p-3 rounded-full mr-4">
//                                                     <FiUser className="h-6 w-6 text-blue-600" />
//                                                 </div>
//                                                 <div>
//                                                     <h3 className="text-lg font-semibold text-gray-900">{msg.name}</h3>
//                                                     <p className="text-sm text-gray-500">{new Date(msg.createdAt).toLocaleDateString()}</p>
//                                                 </div>
//                                             </div>

//                                             <div className="space-y-3">
//                                                 <div className="flex items-center text-gray-600">
//                                                     <FiMail className="mr-2 text-blue-500" />
//                                                     <span className="text-sm truncate">{msg.email}</span>
//                                                 </div>
//                                                 {msg.phone && (
//                                                     <div className="flex items-center text-gray-600">
//                                                         <FiPhone className="mr-2 text-blue-500" />
//                                                         <span className="text-sm">{msg.phone}</span>
//                                                     </div>
//                                                 )}
//                                                 <div className="pt-3 border-t border-gray-100">
//                                                     <div className="flex items-start">
//                                                         <FiMessageSquare className="mt-1 mr-2 text-blue-500 flex-shrink-0" />
//                                                         <p className="text-gray-700 text-sm leading-relaxed">{msg.comment}</p>
//                                                     </div>
//                                                 </div>
//                                             </div>

//                                             <div className="mt-4 flex items-center text-xs text-gray-400">
//                                                 <FiClock className="mr-1" />
//                                                 <span>{new Date(msg.createdAt).toLocaleTimeString()}</span>
//                                             </div>
//                                         </div>
//                                     </motion.div>
//                                 ))}
//                             </div>
//                         </Marquee>
//                     </div>
//                 )}

//                 {!loading && filteredMessages.length > 0 && (
//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ delay: 0.2, duration: 0.5 }}
//                         className="mt-8 text-center text-sm text-gray-500"
//                     >
//                         Showing {filteredMessages.length} of {messages.length} messages
//                     </motion.div>
//                 )}
//             </div>
//         </div>
//     );
// }





















































'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { FiMail, FiPhone, FiUser, FiMessageSquare, FiClock } from 'react-icons/fi';
import { PulseLoader } from 'react-spinners';
import { motion } from 'framer-motion';
import Marquee from "react-fast-marquee";

export default function Feedbacks() {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:5000/get_contacts');
                setMessages(response.data.contacts);
                setError(null);
            } catch (error) {
                console.error('Error fetching contacts:', error);
                setError('Failed to load messages. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchContacts();
    }, []);

    const filteredMessages = messages.filter(msg =>
        msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        msg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        msg.comment.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8 overflow-hidden pt-10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-3"
                    >
                        Customer <span className="text-blue-600">Messages</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        Here's what your customers are saying. Valuable feedback to help you improve.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mb-8 max-w-md mx-auto"
                >
                    {/* Search Filter */}
                    {/* <div className="relative">
                        <input
                            type="text"
                            placeholder="Search messages..."
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div> */}
                </motion.div>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <PulseLoader color="#3B82F6" size={15} />
                    </div>
                ) : error ? (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-red-700">{error}</p>
                            </div>
                        </div>
                    </div>
                ) : filteredMessages.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center py-12 bg-white rounded-xl shadow-sm"
                    >
                        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="mt-2 text-lg font-medium text-gray-900">No messages found</h3>
                        <p className="mt-1 text-sm text-gray-500">
                            {searchTerm ? 'Try a different search term' : 'No messages have been submitted yet.'}
                        </p>
                    </motion.div>
                ) : (
                    <div className="pb-10 sm:pb-14 md:pb-16 lg:pb-20 overflow-hidden">
                        <Marquee
                            speed={40}
                            gradient={false}
                            pauseOnHover={true}
                            className="w-full"
                        >
                            <div className="flex gap-6 p-4">
                                {filteredMessages.map((msg, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="bg-white max-w-72 mx-10 max-rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 min-w-[300px]"
                                    >
                                        <div className="p-6">
                                            <div className="flex items-center mb-4">
                                                <div className="bg-blue-100 p-3 rounded-full mr-4">
                                                    <FiUser className="h-6 w-6 text-blue-600" />
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-semibold text-gray-900">{msg.name}</h3>
                                                    <p className="text-sm text-gray-500">{new Date(msg.createdAt).toLocaleDateString()}</p>
                                                </div>
                                            </div>

                                            <div className="space-y-3">
                                                <div className="flex items-center text-gray-600">
                                                    <FiMail className="mr-2 text-blue-500" />
                                                    <span className="text-sm truncate">{msg.email}</span>
                                                </div>
                                                {msg.phone && (
                                                    <div className="flex items-center text-gray-600">
                                                        <FiPhone className="mr-2 text-blue-500" />
                                                        <span className="text-sm">{msg.phone}</span>
                                                    </div>
                                                )}
                                                <div className="pt-3 border-t border-gray-100">
                                                    <div className="flex items-start">
                                                        <FiMessageSquare className="mt-1 mr-2 text-blue-500 flex-shrink-0" />
                                                        <p className="text-gray-700 text-sm leading-relaxed">{msg.comment}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <div className="mt-4 flex items-center text-xs text-gray-400">
                                                <FiClock className="mr-1" />
                                                <span>{new Date(msg.createdAt).toLocaleTimeString()}</span>
                                            </div> */}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </Marquee>
                    </div>
                )}

                {/* {!loading && filteredMessages.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="mt-8 text-center text-sm text-gray-500"
                    >
                        Showing {filteredMessages.length} of {messages.length} messages
                    </motion.div>
                )} */}
            </div>
        </div>
    );
}