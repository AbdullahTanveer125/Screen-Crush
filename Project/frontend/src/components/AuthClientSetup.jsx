'use client';

import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';

const AuthClientSetup = () => {
    const { data: session } = useSession();
    const [auth, setAuth] = useAuth();

    useEffect(() => {
        // You can inject user info from session here, or from localStorage token
        const storedAuth = localStorage.getItem("auth");
        if (storedAuth) {
            setAuth(JSON.parse(storedAuth));
        }
    }, [session]);

    return null;
};

export default AuthClientSetup;
