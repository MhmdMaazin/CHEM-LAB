import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Atom } from 'lucide-react';
// import RippleGrid from '../blocks/Backgrounds/LightRays/LightRays';
import Navbar from '../components/Navbar';
import LightRays from '../blocks/Backgrounds/LightRays/LightRays';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative md:h-screen min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black p-4">
      <div className="absolute inset-0 z-0">
        <LightRays />
      </div>
      <Navbar/>
      
      <main className="container mx-auto px-4 flex items-center justify-center md:h-screen min-h-screen relative z-10">
  <div className="text-center max-w-4xl">
    <h1 className="text-5xl font-bold text-white mb-6">
      Unlock The Secrets Of
      <br />
      <span className="inline-block bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text animate-pulse hover:animate-none transition-all duration-300 cursor-default">
        Chemistry
      </span> With Our AI Chatbot
    </h1>
    
    <p className="text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
      Elevate Your Learning Experience With An Advanced AI Chatbot Designed To
      Answer Your Chemistry-Related Questions, Provide Insights Into The Periodic
      Table, Simulate Chemistry Reactions, Offer Engaging Quizzes And Simplify Complex Concepts.
    </p>

    <button 
      onClick={() => navigate('/services')}
      className="bg-gray-200 bg-opacity-20 hover:bg-opacity-30 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
    >
      GET STARTED
    </button>
  </div>
</main>
    </div>
  );
}

export default Home;