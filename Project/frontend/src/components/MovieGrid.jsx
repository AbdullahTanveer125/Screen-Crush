import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import { FiSearch, FiX } from 'react-icons/fi';

const MoviesGrid = ({ movies }) => {
    const [displayCount, setDisplayCount] = useState(10);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredMovies, setFilteredMovies] = useState(movies);

    useEffect(() => {
        if (searchQuery.trim() === '') {
            setFilteredMovies(movies);
        } else {
            const filtered = movies.filter(movie =>
                movie.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredMovies(filtered);
            setDisplayCount(10); // Reset display count when searching
        }
    }, [searchQuery, movies]);

    const loadMoreMovies = () => {
        setDisplayCount(prevCount => prevCount + 10);
    };

    const clearSearch = () => {
        setSearchQuery('');
    };

    return (
        <div className="container mx-auto px-4 py-8 mb-20">
            <h1 className="text-3xl font-bold text-black mb-8 text-center">
                <span className='text-blue-500'>Popular</span> Movies
            </h1>

            {/* Attractive Search Input */}
            <div className="relative max-w-md mx-auto mb-8 group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FiSearch className="text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                </div>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search movies..."
                    className="w-full py-3 pl-10 pr-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all duration-200 outline-none"
                />
                {searchQuery && (
                    <button
                        onClick={clearSearch}
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <FiX />
                    </button>
                )}
            </div>

            <div className='text-white text-center mb-4'>
                {filteredMovies?.length > 0 
                    ? `${filteredMovies.length} movies found` 
                    : 'No movies found'}
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                {filteredMovies.slice(0, displayCount).map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
            
            {displayCount < filteredMovies.length && (
                <div className="text-center mt-8">
                    <button 
                        onClick={loadMoreMovies}
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full shadow-md hover:shadow-lg font-bold transition-all duration-200 transform cursor-pointer"
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
};

export default MoviesGrid;