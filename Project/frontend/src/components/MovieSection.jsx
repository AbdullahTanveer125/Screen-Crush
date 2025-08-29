"use client";// src/components/MovieSection.js

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function MovieSection() {
    const [movies, setMovies] = useState([]);
    const [visibleMovies, setVisibleMovies] = useState(10);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch movies data (replace with your actual API call)
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                // This is mock data - replace with your API call
                const mockMovies = Array.from({ length: 50 }, (_, i) => ({
                    id: i + 1,
                    title: `Movie Title ${i + 1}`,
                    releaseDate: `2023-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
                    // imageUrl: `https://source.unsplash.com/random/300x450?movie&sig=${i}`,
                    imageUrl: `./movie_poster.jpg`,
                }));

                setMovies(mockMovies);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching movies:', error);
                setIsLoading(false);
            }
        };

        fetchMovies();
    }, []);

    const loadMoreMovies = () => {
        setVisibleMovies(prev => Math.min(prev + 10, movies.length));
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
            </div>
        );
    }

    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                    Popular Movies
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {movies.slice(0, visibleMovies).map((movie) => (
                        <div
                            key={movie.id}
                            className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/20 pb-2"
                        >
                            <div className="aspect-[2/3] relative">
                                <img
                                    src={movie.imageUrl}
                                    alt={movie.title}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />

                                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <div>
                                        <h3 className="text-white font-bold text-lg">{movie.title}</h3>
                                        <p className="text-gray-300 text-sm">{movie.releaseDate}</p>
                                    </div>
                                </div> */}
                                <div className='text-center'>
                                    <h3 className="text-white font-bold text-lg">{movie.title}</h3>
                                    <p className="text-gray-300 text-sm">{movie.releaseDate}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {visibleMovies < movies.length && (
                    <div className="mt-10 text-center">
                        <button
                            onClick={loadMoreMovies}
                            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-pink-500/30 font-medium"
                        >
                            Load More Movies
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}