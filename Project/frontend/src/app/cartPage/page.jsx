'use client';

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import axios from "axios";
import Image from "next/image";
import { FiTrash2, FiShoppingCart } from "react-icons/fi";
import { motion } from "framer-motion";
import { toast } from 'react-toastify';

const CartPage = () => {

    const [auth] = useAuth();
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const [total, setTotal] = useState(0);

    const fetchCart = async () => {
        try {
            const userId = auth?.user?._id;
            if (!userId) return;

            const res = await axios.get(`${process.env.NEXT_PUBLIC_HTTP_URL}/cart/${userId}`);
            if (res.data.success) {
                setCart(res.data.cart);
                calculateTotal(res.data.cart);
            } else {
                toast.error("Failed to fetch cart items");
            }
        } catch (err) {
            console.error("Error fetching cart:", err);
            toast.error("Error fetching cart items");
        } finally {
            setLoading(false);
        }
    };

    const calculateTotal = (cartItems) => {
        const sum = cartItems.reduce((acc, item) => acc + (item.movie.price || 9.99), 0);
        setTotal(sum.toFixed(2));
    };

    const removeFromCart = async (movieId) => {
        try {
            const res = await axios.delete(`${process.env.NEXT_PUBLIC_HTTP_URL}/cart/${auth.user._id}/${movieId}`);
            if (res.data.success) {
                setCart(cart.filter(item => item.movie.id !== movieId));
                calculateTotal(cart.filter(item => item.movie.id !== movieId));
                // ✅ Refresh the page to get latest cart
                // router.refresh();
                toast.success("Item removed from cart");
                
            } else {
                toast.error("Failed to remove item");
            }
        } catch (err) {
            console.error("Error removing item:", err);
            toast.error("Error removing item");
        }
    };

    const checkout = () => {
        toast.success("Checkout functionality would be implemented here!");
        // Implement your checkout logic
    };

    useEffect(() => {
        fetchCart();
    }, [auth]);

    if (loading) return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8 pt-40">
            <div className="max-w-7xl mx-auto mt-24">
                <h1 className="text-3xl font-bold mb-6 text-center">
                    <span className="text-blue-400">Your</span> Shopping Cart
                </h1>

                {cart.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col items-center justify-center py-20"
                    >
                        <FiShoppingCart className="text-6xl text-gray-600 mb-4" />
                        <p className="text-xl text-gray-400">Your cart is empty</p>
                        <p className="text-gray-500 mt-2">Start adding some movies!</p>
                    </motion.div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-6">
                            {cart.map((item) => (
                                <motion.div
                                    key={item._id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col sm:flex-row"
                                >
                                    <div className="sm:w-1/3 relative">
                                        <Image
                                            src={`https://image.tmdb.org/t/p/w500${item.movie.poster_path}`}
                                            alt={item.movie.title}
                                            width={300}
                                            height={450}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-6 sm:w-2/3 flex flex-col">
                                        <div className="flex justify-between items-start">
                                            <h2 className="text-xl font-bold mb-2">{item.movie.title}</h2>
                                            <button
                                                onClick={() => removeFromCart(item.movie.id)}
                                                className="text-red-400 hover:text-red-600 hover:bg-gray-500 rounded-b-full p-1 transition-colors cursor-pointer"
                                            >
                                                <FiTrash2 size={20} />
                                            </button>
                                        </div>
                                        <p className="text-sm text-gray-400 mb-2">
                                            Release: {new Date(item.movie.release_date).toLocaleDateString()}
                                        </p>
                                        <p className="text-gray-300 mb-4 flex-grow">
                                            {item.movie.overview.slice(0, 300)}...
                                        </p>
                                        <div className="flex justify-between items-center">
                                            <span className="text-lg font-bold text-blue-400">
                                                Popularity: <span className="text-white">{item.movie.popularity || 9.99}</span>
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* <div className="lg:col-span-1">
                            <div className="bg-gray-800 rounded-xl p-6 sticky top-6">
                                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                                <div className="space-y-4">
                                    <div className="flex justify-between">
                                        <span>Subtotal ({cart.length} items)</span>
                                        <span>${total}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Shipping</span>
                                        <span>Free</span>
                                    </div>
                                    <div className="border-t border-gray-700 my-2"></div>
                                    <div className="flex justify-between text-lg font-bold">
                                        <span>Total</span>
                                        <span>${total}</span>
                                    </div>
                                    <button
                                        onClick={checkout}
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-bold transition-all duration-200 mt-6"
                                    >
                                        Proceed to Checkout
                                    </button>
                                </div>
                            </div>
                        </div> */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;