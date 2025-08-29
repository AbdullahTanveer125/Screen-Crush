"use client";
import { FaFilm, FaSearch, FaUser, FaStar, FaHeart } from 'react-icons/fa';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';


export default function AboutUs() {
  const { data: session } = useSession();
  const [auth, setAuth] = useAuth();

  console.log("======== ssss ======", auth)

  const features = [
    {
      icon: <FaFilm className="text-4xl mb-4 text-blue-400" />,
      title: "Extensive Movie Library",
      description: "Access thousands of movies from various genres and eras."
    },
    {
      icon: <FaSearch className="text-4xl mb-4 text-blue-400" />,
      title: "Smart Search",
      description: "Find exactly what you're looking for with our powerful search."
    },
    {
      icon: <FaUser className="text-4xl mb-4 text-blue-400" />,
      title: "Personalized Experience",
      description: "Login to save favorites and get recommendations."
    },
    {
      icon: <FaStar className="text-4xl mb-4 text-blue-400" />,
      title: "Ratings & Reviews",
      description: "See what others think and share your opinions."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="absolute inset-0 overflow-hidden opacity0">
          <Image 
            src="/about_us.jpg" 
            alt="Movie collage background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 ">
            About <span className="">ScreenCrush</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-blue-0">
            Your ultimate destination for discovering, exploring, and enjoying movies from around the world.
          </p>
          {!session && (
            <Link 
              href="/api/auth/signin" 
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <FaUser className="mr-2" /> Join Now
            </Link>
          )}
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-100 mt-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <Image 
                src="/our_story.jpg" 
                alt="Our story"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-00">
                Our Story
              </h2>
              <p className="text-lg mb-4 text-blue-00">
                ScreenCrush was born from a shared passion for cinema. Founded in 2023 by a group of movie enthusiasts, we set out to create a platform that makes discovering great films effortless and enjoyable.
              </p>
              <p className="text-lg mb-4 text-blue-00">
                What started as a small project has grown into a comprehensive movie database used by thousands of film lovers worldwide.
              </p>
              <p className="text-lg text-blue-">
                We believe that everyone should have access to quality movie information and recommendations tailored to their tastes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-blue-0">
            Why Choose ScreenCrush?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-blue-600/20 p-8 rounded-xl hover:bg-blue-800/30 transition-all duration-300 hover:transform hover:scale-105 flex flex-col items-center justify-center"
              >
                {feature.icon}
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-blue-0">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-800/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-blue-0">
            How It Works
          </h2>
          <div className="flex flex-col space-y-12 md:space-y-0 md:flex-row md:space-x-12 justify-between">
            <div className="flex-1 text-center">
              <div className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Sign Up</h3>
              <p className="text-blue-0">
                Create your free account using Google or GitHub in seconds.
              </p>
            </div>
            <div className="flex-1 text-center">
              <div className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Explore</h3>
              <p className="">
                Browse our extensive movie collection or search for specific titles.
              </p>
            </div>
            <div className="flex-1 text-center">
              <div className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Enjoy</h3>
              <p className="">
                Save favorites, rate movies, and get personalized recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-blue-00">
            Meet The Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Alex Johnson", role: "Founder & CEO", image: "/boy1.jpg" },
              { name: "Abdullah Tanveer", role: "Lead Developer", image: "/boy2.png" },
              { name: "James Wilson", role: "Content Curator", image: "/boy3.jpg" },
              { name: "Sarah Lee", role: "UX Designer", image: "/boy4.jpg" }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-500">
                  <Image 
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object object-cter w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-blue-800">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-800/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-00">
            Ready to Explore Great Movies?
          </h2>
          <p className="text-xl mb-10 text-blue-00">
            Join thousands of movie lovers who use ScreenCrush to discover their next favorite film.
          </p>
          <Link 
            href={session ? "/movies" : "/api/auth/signin"} 
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
          >
            {session ? "Browse Movies" : "Get Started - It's Free"}
          </Link>
        </div>
      </section>
    </div>
  );
}