'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useAuth } from '@/context/AuthContext';

export default function PaymentSuccess() {
    const router = useRouter();
    const { session_id } = router.query;
    const [auth, setAuth] = useAuth();

    useEffect(() => {
        if (session_id) {
            // Verify payment and update user status
            const verifyPayment = async () => {
                try {
                    const { data } = await axios.post('/api/payment/verify', {
                        sessionId: session_id,
                    });

                    // Update user context with subscription info
                    setAuth({
                        ...auth,
                        user: {
                            ...auth.user,
                            isSubscribed: true,
                            subscription: data.subscription,
                        },
                    });
                } catch (err) {
                    console.error(err);
                }
            };

            verifyPayment();
        }
    }, [session_id]);

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
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
                        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Go to Dashboard
                    </button>
                </div>
            </div>
        </div>
    );
}