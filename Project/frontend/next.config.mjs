/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // 👈 needed for Docker standalone build
  images: {
    domains: ['lh3.googleusercontent.com', 'image.tmdb.org'],
  },
};



export default nextConfig;
