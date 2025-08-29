"use client";
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation'; // ✅ Correct for App Router

import Link from 'next/link';
import Image from 'next/image';

const MovieCard = ({ movie }) => {

    const router = useRouter();

    // const handleDetailsClick = () => {
    //     router.push({
    //         pathname: `/movie/${movie.id}`,
    //         query: { id: movie.id }, // Optional for dynamic route
    //     }, undefined, {
    //         shallow: true,
    //     });

    //     // Save movie data to localStorage (optional if you can't pass state)
    //     if (typeof window !== "undefined") {
    //         localStorage.setItem('selectedMovie', JSON.stringify(movie));
    //     }
    // };
    const handleDetailsClick = () => {
        if (typeof window !== "undefined") {
            localStorage.setItem('selectedMovie', JSON.stringify(movie));
        }

        router.push(`/movie/${movie.id}`); // ✅ Must be a string path in App Router
    };

    // console.log("fff=====",movie)

    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : '/movie_poster.jpg';

    return (
        <div className="relative group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
            <div className="aspect-[2/3] relative">
                {/* <div className='text-white'>lllllllll</div> */}
                {/* <Image
                    src={posterUrl}
                    alt={movie.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                /> */}
                <Image
                    src={posterUrl}
                    alt={movie.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                    unoptimized // ✅ Skip optimization
                />


                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
                    {/* <Link
                        href={`/movie/${movie.id}`}
                        className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    > */}
                    <button
                        onClick={handleDetailsClick}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full text-sm md:text-base transition-colors duration-200 cursor-pointer">
                        See Details
                    </button>
                    {/* </Link> */}
                </div>
            </div>

            <div className="p-3 bg-gradient-to-b from-gray-900 to-gray-800">
                <h3 className="text-white font-semibold text-sm md:text-base line-clamp-1">
                    {movie.title}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm">
                    {new Date(movie.release_date).getFullYear() || 'Coming soon'}
                </p>
            </div>
        </div>
    );
};

export default MovieCard;