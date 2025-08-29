'use client';
import axios from 'axios';
import { useAuth } from '@/context/AuthContext';


const PricingPage = () => {

    const [auth] = useAuth();


    const handleCheckout = async (planId) => {
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_HTTP_URL}/payment/create-checkout-session/${auth.user._id}`, {
                planId: planId,
                email: auth.user.email, // or from your auth
            });
            if(res.data.success){

                window.location.href = res.data.url; // redirect to Stripe Checkout
            }
        } catch (err) {
            console.error(err);
            alert('Failed to redirect to payment');
        }
    };

    return (
        // <div className="text-center p-8">
        //     <h1>Choose a Plan</h1>
        //     <div className="grid grid-cols-3 gap-4">
        //         <div className="p-4 border">
        //             <h2>Basic Plan</h2>
        //             <p>$10/month</p>
        //             <button className='cursor-pointer' 
        //             onClick={() => handleCheckout('basic')}>Pay Now</button>
        //         </div>
        //         <div className="p-4 border">
        //             <h2>Standard Plan</h2>
        //             <p>$20/month</p>
        //             <button className='cursor-pointer'
        //              onClick={() => handleCheckout('standard')}>Pay Now</button>
        //         </div>
        //         <div className="p-4 border">
        //             <h2>Premium Plan</h2>
        //             <p>$30/month</p>
        //             <button className='cursor-pointer'
        //              onClick={() => handleCheckout('premium')}>Pay Now</button>
        //         </div>
        //     </div>
        // </div>












        <div className="min-h-screen bg-gradient-to-br from-gray-300 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 pb-40">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text- sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Choose Your Perfect Plan
                    </h1>
                    <p className="mt-5 max-w-xl mx-auto text-xl ">
                        Start watching with your plan. Cancel anytime.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {/* Basic Plan */}
                    <div className="relative bg-gray-800 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-blue-500/20 hover:border-8 hover:border-blue-600">
                        <div className="p-8">
                            <h2 className="text-2xl font-bold text-white">Basic</h2>
                            <p className="mt-4 text-gray-400">Perfect for casual viewers</p>

                            <div className="mt-8 flex items-baseline">
                                <span className="text-5xl font-extrabold text-white">$4.99</span>
                                <span className="ml-1 text-xl font-semibold text-gray-400">/month</span>
                            </div>

                            <ul className="mt-8 space-y-3">
                                <li className="flex items-center">
                                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="ml-3 text-gray-300">HD available</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="ml-3 text-gray-300">Watch on 1 device</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="ml-3 text-gray-300">Cancel anytime</span>
                                </li>
                            </ul>
                        </div>

                        <div className="px-8 pb-8">
                            <button
                                onClick={() => handleCheckout('basic')}
                                className="cursor-pointer font-bold w-full px-6 py-3 border border-transparent text-base rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-200 shadow-lg"
                            >
                                Subscribe Now
                            </button>
                        </div>
                    </div>

                    {/* Standard Plan - Featured */}
                    <div className="relative bg-gray-800 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-blue-500/20 transform hover:border-8 hover:border-blue-600">
                        {/* <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs font-bold px-3 py-1 transform translate-x-2 -translate-y-2 rotate-12">
                            POPULAR
                        </div> */}
                        <div className="p-8">
                            <h2 className="text-2xl font-bold text-white">Standard</h2>
                            <p className="mt-4 text-gray-400">Great for families</p>

                            <div className="mt-8 flex items-baseline">
                                <span className="text-5xl font-extrabold text-white">$9.99</span>
                                <span className="ml-1 text-xl font-semibold text-gray-400">/month</span>
                            </div>

                            <ul className="mt-8 space-y-3">
                                <li className="flex items-center">
                                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="ml-3 text-gray-300">Full HD available</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="ml-3 text-gray-300">Watch on 4 devices</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="ml-3 text-gray-300">No ads</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="ml-3 text-gray-300">Cancel anytime</span>
                                </li>
                            </ul>
                        </div>

                        <div className="px-8 pb-8">
                            <button
                                onClick={() => handleCheckout('standard')}
                                className="cursor-pointer font-bold w-full px-6 py-3 border border-transparent text-base rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-200 shadow-lg"
                            >
                                Subscribe Now
                            </button>
                        </div>
                    </div>

                    {/* Premium Plan */}
                    <div className="relative bg-gray-800 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-blue-500/20 hover:border-8 hover:border-blue-600">
                        <div className="p-8">
                            <h2 className="text-2xl font-bold text-white">Premium</h2>
                            <p className="mt-4 text-gray-400">For the ultimate experience</p>

                            <div className="mt-8 flex items-baseline">
                                <span className="text-5xl font-extrabold text-white">$14.99</span>
                                <span className="ml-1 text-xl font-semibold text-gray-400">/month</span>
                            </div>

                            <ul className="mt-8 space-y-3">
                                <li className="flex items-center">
                                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="ml-3 text-gray-300">4K Ultra HD</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="ml-3 text-gray-300">Watch on unlimited devices</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="ml-3 text-gray-300">No ads</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="ml-3 text-gray-300">Download videos</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="ml-3 text-gray-300">Cancel anytime</span>
                                </li>
                            </ul>
                        </div>

                        <div className="px-8 pb-8">
                            <button
                                onClick={() => handleCheckout('premium')}
                                className="cursor-pointer font-bold w-full px-6 py-3 border border-transparent text-base rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-200 shadow-lg"
                            >
                                Subscribe Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* <div className="mt-16 text-center">
                    <p>All plans include a 7-day free trial. No credit card required.</p>
                </div> */}
            </div>
        </div>
    );
};

export default PricingPage;
