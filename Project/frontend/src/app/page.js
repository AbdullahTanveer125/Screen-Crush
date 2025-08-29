"use client";
import React from 'react'
import { useState, useEffect } from 'react';
import MoviesGrid from '@/components/MovieGrid';

import Image from "next/image";
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import MovieSection from '@/components/MovieSection';
import Footer from '@/components/Footer';
import axios from 'axios';
import ContactUs from './contact_us/page';
import Feedbacks from '@/components/FeedBacks';


import { useSession } from 'next-auth/react';
import { useAuth } from '@/context/AuthContext';
import PricingPlans from '@/components/PricingPlans';
import PricingPage from '@/components/PricingPlans';

import { toast } from 'react-toastify';


function Home() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [call, setCall] = useState(1);



  const { data: session } = useSession();
  const [auth, setAuth] = useAuth();

  console.log("====  ddddd  =====", session)

  // useEffect(() => {
  //   if (session) {
  //     setCall(prev => prev + 1);
  //   }
  // }, [session]);

  // if (session==null) {
  //     setCall(prev => prev + 1);
  //   }

  useEffect(() => {

    if (!session) return; // Exit early if session is null

    console.log("=== vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv =======")
    const syncLogin = async () => {
      if (session?.user && !auth?.token) {
        const res = await axios.post("http://localhost:5000/user/login", {
          email: session.user.email,
          username: session.user.name.replace(/\s/g, "").toLowerCase(),
          image: session.user.image,
        });

        if (res.data?.token && res.data?.user) {
          setAuth({
            token: res.data.token,
            user: res.data.user,
            isLoggedIn: true,
          });
          localStorage.setItem("auth", JSON.stringify({
            token: res.data.token,
            user: res.data.user,
            isLoggedIn: true,
          }));

          toast.success("Login successfully!");
        }
      }
    };

    syncLogin();
  }, [session]);

  useEffect(() => {
    // In a real app, you would fetch from your API endpoint
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/popular-movies');
        console.log("ggggg====", response)
        // const data = await response.json();
        console.log("==== response.data.results ====", response.data.results)
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }



  console.log("========= Auth =========", auth)

  return (
    <div className=''>
      {/* <div>
        <h1>Welcome, {auth?.user?.username}</h1>
      </div> */}
      {/* <Navbar /> */}
      <HeroSection />
      {/* <MovieSection /> */}
      <div className="min-h-screen">
        <MoviesGrid movies={movies} />
      </div>
      <Feedbacks />
      {/* <PricingPlans /> */}
      {/* <PricingPage /> */}
      {auth?.user && <PricingPage />}
      {/* <Footer /> */}
    </div>
  )
}

export default Home
