'use client';
import { useRouter } from 'next/router';

export default function PaymentCancel() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
                <div className="text-center">
                    <svg
                        className="mx-auto h-12 w-12 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                    <h2 className="mt-4 text-2xl font-bold text-white">
                        Payment Cancelled
                    </h2>
                    <p className="mt-2 text-gray-300">
                        Your payment was not completed. You can try again anytime.
                    </p>
                    <button
                        onClick={() => router.push('/account')}
                        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Back to Account
                    </button>
                </div>
            </div>
        </div>
    );
}