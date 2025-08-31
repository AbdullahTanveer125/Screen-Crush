'use client';
export const dynamic = 'force-dynamic'; // ← add this line

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const PaymentSuccess = () => {

    const [auth, setAuth] = useAuth();
    const router = useRouter();
    const searchParams = useSearchParams();
    const sessionId = searchParams.get('session_id');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const verifyPayment = async () => {
            if (!sessionId) return;


            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_HTTP_URL}/payment/verify-session/${sessionId}/${auth.user.email}`);
                if (res.data.success) {
                    toast.success("Payment verified & plan updated!");
                    setAuth((prev) => ({
                        ...prev,
                        user: res.data.user
                    }));
                } else {
                    toast.error("Payment verification failed!");
                }
            } catch (error) {
                console.error(error);
                toast.error("Something went wrong verifying payment.");
            }
            finally { setLoading(false); }


            // const res = await axios.get(`${process.env.NEXT_PUBLIC_HTTP_URL}/payment/verify-session/${sessionId}/${auth.user.email}`);
            // console.log(res.data);

            // if (res.data.success) {
            //     // alert('Payment verified & plan updated!');
            //     toast.success("Payment verified & plan updated!");
            //     setAuth((prev) => ({
            //         ...prev,            // keep previous token, isLoggedIn, etc.
            //         user: res.data.user // only update user
            //     }));

            // }
        };

        verifyPayment();
    }, [sessionId]);

    // useEffect(() => {
    //     if (auth.user?.plan) {
    //         setTimeout(() => router.push('/'), 3000);
    //     }
    // }, [auth?.user]);


    console.log("=== ggggggggggggg auth ====", auth)
    return (
        <div className="text-center">
            {loading ? <p className="text-white">Verifying your payment...</p> : ""}

            <div className="min-h-screen bg-slate-600 flex items-center justify-center">
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
                    <div className="text-center">
                        <svg
                            className="mx-auto h-12 w-12 text-green-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        <h2 className="mt-4 text-2xl font-bold text-white">
                            Payment Successful!
                        </h2>
                        <p className="mt-2 text-gray-300">
                            Thank you for subscribing to our service. Your account has been upgraded.
                        </p>
                        <button
                            onClick={() => router.push('/')}
                            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-white hover:text-blue-600 font-bold transition-colors cursor-pointer"
                        >
                            Go to Dashboard
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccess;
