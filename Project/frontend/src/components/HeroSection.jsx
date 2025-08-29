"use client";// src/components/Hero.js


export default function HeroSection() {





  return (
    <section className="relative h-screen">
      
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/background.mp4"
        autoPlay
        loop
        muted
        playsInline
        ref={(video) => {
          if (video) video.playbackRate = 0.3; // Adjust between 0.1 (slowest) to 1.0 (normal)
        }}
      />


      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-00 bg-opacity-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
        <h1 className="text-3xl md:text-6xl font-bold mb-4">Join the Screen Crush Community</h1>
        <p className="text-sm md:text-lg max-w-xl mb-6">Step into the world of cinema like never before. From blockbuster hits to hidden indie gems, Screen Crush brings you the ultimate movie-watching experience.</p>
        <button className="bg-white font-bold text-black px-6 py-2 rounded transition">Explore it</button>
      </div>
    </section>
  );
}
