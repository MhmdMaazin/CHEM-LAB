import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, Table, FileText, Beaker } from 'lucide-react';
import Navbar from '../components/Navbar';

function Services() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black p-4">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-20 md:pt-32 pb-12 md:pb-20">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Explore Chemistry With AI
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-sm md:text-base px-4">
            Engage With Our AI Chatbot To Discover Detailed Insights Into The Periodic
            Table, Master Chemical Equations, And Get Answers To Your Chemistry-
            Related Questions In Real Time Also Simulate Chemistry Reactions, And Offer Engaging Quizzes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto px-4">
          {/* Chatbot Card */}
          <div 
            onClick={() => navigate('/chatbot')}
            className="bg-purple-950/50 rounded-2xl md:rounded-3xl p-6 md:p-8 cursor-pointer hover:bg-purple-900/50 transition-all duration-300 transform hover:-translate-y-1 group"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-600/20 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:bg-purple-600/30 transition-colors">
              <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">
              Chem Lab Chatbot
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Engage with our AI chatbots to receive expert guidance tailored to your chemistry learning needs. Simplify complex chemical equations.
            </p>
          </div>

          {/* Periodic Table Card */}
          <div 
            onClick={() => navigate('/periodic-table')}
            className="bg-purple-950/50 rounded-2xl md:rounded-3xl p-6 md:p-8 cursor-pointer hover:bg-purple-900/50 transition-all duration-300 transform hover:-translate-y-1 group"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-600/20 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:bg-purple-600/30 transition-colors">
              <Table className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">
              Periodic Table
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Get comprehensive insights into elements, their properties, and real-world applications to elevate your understanding of chemistry.
            </p>
          </div>

          {/* Quizzes Card */}
          <div 
            onClick={() => navigate('/quiz')}
            className="bg-purple-950/50 rounded-2xl md:rounded-3xl p-6 md:p-8 cursor-pointer hover:bg-purple-900/50 transition-all duration-300 transform hover:-translate-y-1 group"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-600/20 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:bg-purple-600/30 transition-colors">
              <FileText className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">
              Quizzes
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Put your chemistry skills to the test with our engaging and educational quizzes, designed to help you master concepts.
            </p>
          </div>

          {/* Chemistry Simulator Card */}
          <div 
            onClick={() => navigate('/chemistry-simulator')}
            className="bg-purple-950/50 rounded-2xl md:rounded-3xl p-6 md:p-8 cursor-pointer hover:bg-purple-900/50 transition-all duration-300 transform hover:-translate-y-1 group lg:col-start-2 lg:col-span-1"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-600/20 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:bg-purple-600/30 transition-colors">
              <Beaker className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">
              Chemistry Simulator
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Mix elements to create compounds with unique colors, or burn them to observe their flame colors in an interactive simulator.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Services;