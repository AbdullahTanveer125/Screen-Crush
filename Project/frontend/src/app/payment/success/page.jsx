'use client';
import { useEffect, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useAuth } from '@/context/AuthContext';

// Create a component that uses useSearchParams
function PaymentSuccessContent() {
    const router = useRouter();
    const { useSearchParams } = require('next/navigation');
    const searchParams = useSearchParams();
    const session_id = searchParams.get('session_id');
    const [auth, setAuth] = useAuth();

    useEffect(() => {
        if (session_id) {
            const verifyPayment = async () => {
                try {
                    const { data } = await axios.post('/api/payment/verify', {
                        sessionId: session_id,
                    });

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
    }, [session_id, auth, setAuth]);

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

// Main component with Suspense
export default function PaymentSuccess() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <div className="text-white">Loading...</div>
            </div>
        }>
            <PaymentSuccessContent />
        </Suspense>
    );
}

// Force dynamic rendering to avoid static generation issues
export const dynamic = 'force-dynamic';