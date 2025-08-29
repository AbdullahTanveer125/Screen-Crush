'use client'
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { FaHeart } from "react-icons/fa";
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { useAuth } from '@/context/AuthContext';
import { toast } from 'react-toastify';

// ✅ Server Component - accepts `params` directly
const MovieDetails = () => {

    const { data: session } = useSession();
    const [auth, setAuth] = useAuth();
    const params = useParams();
    const movieId = params.id;

    // const { id } = params;
    // console.log("zzzzzzzzzzz=======", auth.user._id)
    // const searchParams = useSearchParams();
    // const movie1 = searchParams.get('movie');
    // console.log("wwwwwww=========", movie1)
    // console.log("oooooooooooo=========", searchParams)


    const [movie2, setMovie] = useState(null);

    

    const handleAddToFavorite = async () => {
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_HTTP_URL}/user/favorite`, {
                userId: auth.user._id,
                movie: movie2,
            });

            if (res.data.success) {
                // alert(res.data.message);
                toast.success("Added to favorites!");
            } else {
                alert("Failed to add favorite.");
            }
        } catch (err) {
            console.error("Error adding to favorite:", err);
            alert("Something went wrong.");
        }
    };


    useEffect(() => {
        const storedMovie = localStorage.getItem('selectedMovie');
        if (storedMovie) {
            setMovie(JSON.parse(storedMovie));
        } else {
            // fallback: fetch data from API using movieId
        }
    }, [movieId]);

    console.log("LLLLLLLLLLLL========", movie2)

    if (!movie2) return <p className="text-white">Loading...</p>;






    // Dummy movie (replace with real fetch later)
    const movie = {
        id: "11",
        title: "Sample Movie",
        overview: "This is a sample movie overview.",
        poster_path: "/sample-poster.jpg",
        backdrop_path: "/sample-backdrop.jpg",
        release_date: "2023-01-01",
        vote_average: 7.5,
        genres: [{ id: 1, name: "Action" }, { id: 2, name: "Adventure" }],
        runtime: 120
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white pt-20">
            {/* Backdrop */}
            <div className="relative h-64 md:h-96 w-full">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
                <Image
                    src={`https://image.tmdb.org/t/p/w500${movie2.backdrop_path} || `}
                    alt={movie2.title}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Movie content */}
            <div className="container mx-auto px-4 py-8 relative z-20 -mt-16 md:-mt-24">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Poster */}
                    <div className="w-full md:w-1/3 lg:w-1/4">
                        <div className="rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src={`https://image.tmdb.org/t/p/w500${movie2.poster_path}`}
                                alt={movie2.title}
                                width={500}
                                height={750}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    {/* Details */}
                    <div className="w-full md:w-2/3 lg:w-3/4">
                        <h1 className="text-3xl md:text-4xl font-bold mb-2">{movie2.title}</h1>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="bg-red-600 text-white px-2 py-1 rounded text-sm">
                                {/* {new Date(movie2.release_date).getFullYear()} */}
                                {movie2.release_date}
                            </span>
                            <span className="text-yellow-400">
                                ★ {movie2.vote_average.toFixed(1)}
                            </span>
                            <span>{movie.runtime} min</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {movie.genres.map((genre) => (
                                <span key={genre.id} className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">
                                    {genre.name}
                                </span>
                            ))}
                        </div>
                        <h2 className="text-xl font-semibold mb-2">Overview</h2>
                        <p className="text-gray-300 mb-6">{movie2.overview}</p>
                        <button className="bg-red-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-200">
                            Watch Trailer
                        </button>
                        {/* <div className='mt-4 '>
                            <button className='bg-white text-blue-900 font-bold px-3 py-2 rounded-full flex flex-row justify-center items-center gap-2 cursor-pointer'> <FaHeart /> Add to favirote</button>
                        </div> */}
                        {session && (
                            <button
                                onClick={handleAddToFavorite}
                                className="w-40 mt-3 bg-white text-blue-900 font-bold px-3 py-2 rounded-full flex flex-row justify-center items-center gap-2 cursor-pointer"
                            >
                                <FaHeart /> Add to favirote
                            </button>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
