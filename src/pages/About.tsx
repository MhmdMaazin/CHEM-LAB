import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import Navbar from '../components/Navbar';

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black p-4">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-3xl mx-auto bg-purple-900/30 backdrop-blur-sm rounded-3xl p-8 border border-purple-700/30">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">About Chem Lab</h1>
            <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full mb-6"></div>
            <p className="text-purple-200 text-lg mb-8">
              A Final Year Academic Project by Mohammed Maazin
            </p>
          </div>

          <div className="space-y-6 text-gray-300">
            <p>
              Chem Lab is an innovative educational platform that combines artificial intelligence with chemistry education. This project was developed as part of my final year academic work, aiming to make chemistry learning more interactive and accessible.
            </p>
            
            <p>
              The platform features an AI-powered chatbot that can answer chemistry-related questions, an interactive periodic table,chemistry reaction simulator, and engaging quizzes to test your knowledge.
            </p>

            <div className="bg-purple-800/30 rounded-xl p-6 mt-8">
              <h2 className="text-xl font-semibold text-white mb-4">Key Features:</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>AI-powered Chemistry Chatbot</li>
                <li>Interactive Periodic Table</li>
                <li>Chemistry Knowledge Quizzes</li>
                <li>User Authentication System</li>
                <li>Chemistry Reaction Simulator</li>
                <li>Responsive Design</li>
              </ul>
            </div>

            <div className="pt-8">
              
              <div className="flex justify-center gap-6">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-400 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohammed-maazin-761790340"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-400 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:mazimaazin@gmail.com"
                  className="text-white hover:text-purple-400 transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <div className="text-center pt-8">
              <a
                href="https://maazin.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
              >
                View My Portfolio
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default About;