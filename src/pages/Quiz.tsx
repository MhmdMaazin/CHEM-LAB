import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { questions } from '../data/questions';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { collection, doc, addDoc } from 'firebase/firestore';
import AlertPopup from '../components/AlertPopup';

interface Question {
  id: number;
  question: string;
  options: {
    id: string;
    text: string;
  }[];
  correctAnswer: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

interface QuizResult {
  score: number;
  total: number;
  difficulty: string;
  date: string;
  time: string;
  userAnswers: { [key: number]: string }; // Store user answers for each question
  questions: Question[]; // Store the questions asked
}

function Quiz() {
  const { currentUser } = useAuth();
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard' | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({}); // Track user answers

  useEffect(() => {
    if (difficulty) {
      const filteredQuestions = questions.filter(q => q.difficulty === difficulty);
      const shuffled = [...filteredQuestions].sort(() => 0.5 - Math.random());
      setSelectedQuestions(shuffled.slice(0, 10));
    }
  }, [difficulty]);

  const handleAnswerSelect = (answerId: string) => {
    setSelectedAnswer(answerId);
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: answerId,
    }));
  };

  const handleNext = async () => {
    if (selectedAnswer === selectedQuestions[currentQuestionIndex].correctAnswer) {
      setCorrectAnswers(prev => prev + 1);
    }

    if (currentQuestionIndex === 9) {
      setQuizCompleted(true);
      if (currentUser) {
        const finalScore = selectedAnswer === selectedQuestions[currentQuestionIndex].correctAnswer ? correctAnswers + 1 : correctAnswers;
        const result: QuizResult = {
          score: finalScore,
          total: 10,
          difficulty: difficulty!,
          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),
          userAnswers: userAnswers,
          questions: selectedQuestions,
        };
        try {
          await addDoc(collection(doc(collection(db, 'userQuizzes'), currentUser.uid), 'results'), result);
        } catch (error) {
          console.error('Error saving quiz result:', error);
        }
      }
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
    }
  };

  const startQuiz = (level: 'easy' | 'medium' | 'hard') => {
    if (!currentUser) {
      setShowAlert(true);
      return;
    }
    setDifficulty(level);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setCorrectAnswers(0);
    setQuizCompleted(false);
    setUserAnswers({}); // Reset user answers
  };

  if (!difficulty) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-gray-900 to-black">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 pt-20">
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <Link to="/chatbot" className="px-6 sm:px-8 py-2 bg-purple-800/50 rounded-full text-white font-medium text-center">
              Chem Lab Chatbot
            </Link>
            <Link to="/periodic-table" className="px-6 sm:px-8 py-2 bg-purple-800/50 rounded-full text-white font-medium text-center">
              Periodic Table
            </Link>
            <Link to="/quiz" className="px-6 sm:px-8 py-2 bg-white rounded-full text-purple-900 font-medium text-center">
              Quizzes
            </Link>
            <Link to="/chemistry-simulator" className="px-6 sm:px-8 py-2 bg-purple-800/50 rounded-full text-white font-medium text-center">
              Chemistry Simulator
            </Link>
          </div>
          <div className="max-w-2xl mx-auto text-center px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Select Difficulty Level</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => startQuiz('easy')}
                className={`px-6 sm:px-8 py-3 rounded-full font-medium text-center ${
                  currentUser
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-green-600/50 text-white/70 cursor-not-allowed'
                } transition-colors`}
              >
                Easy
              </button>
              <button
                onClick={() => startQuiz('medium')}
                className={`px-6 sm:px-8 py-3 rounded-full font-medium text-center ${
                  currentUser
                    ? 'bg-yellow-600 text-white hover:bg-yellow-700'
                    : 'bg-yellow-600/50 text-white/70 cursor-not-allowed'
                } transition-colors`}
              >
                Medium
              </button>
              <button
                onClick={() => startQuiz('hard')}
                className={`px-6 sm:px-8 py-3 rounded-full font-medium text-center ${
                  currentUser
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : 'bg-red-600/50 text-white/70 cursor-not-allowed'
                } transition-colors`}
              >
                Hard
              </button>
            </div>
          </div>
        </main>

        {/* Alert Popup */}
        {showAlert && (
          <AlertPopup
            message="Please log in to start the quiz."
            onClose={() => setShowAlert(false)}
          />
        )}
      </div>
    );
  }

  if (selectedQuestions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (quizCompleted) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-gray-900 to-black">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 pt-20 flex items-center justify-center">
          <div className="max-w-2xl mx-auto text-center px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Quiz Completed!</h2>
            <p className="text-xl sm:text-2xl text-purple-200 mb-8">
              You got {correctAnswers} out of 10 questions correct ({difficulty} level.)
            </p>
            <p className="text-xl sm:text-2xl text-purple-200 mb-8">
            You can see the results in Profile Page.
            </p>
            <button
              onClick={() => {
                setDifficulty(null);
                setQuizCompleted(false);
                setCurrentQuestionIndex(0);
                setSelectedAnswer(null);
                setCorrectAnswers(0);
                setUserAnswers({});
              }}
              className="px-6 sm:px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors text-sm sm:text-base"
            >
              Try Another Level
            </button>
          </div>
        </main>
      </div>
    );
  }

  const currentQuestion = selectedQuestions[currentQuestionIndex];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-gray-900 to-black">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 pt-20">
      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <Link to="/chatbot" className="px-6 sm:px-8 py-2 bg-purple-800/50 rounded-full text-white font-medium text-center">
              Chem Lab Chatbot
            </Link>
            <Link to="/periodic-table" className="px-6 sm:px-8 py-2 bg-purple-800/50 rounded-full text-white font-medium text-center">
              Periodic Table
            </Link>
            <Link to="/quiz" className="px-6 sm:px-8 py-2 bg-white rounded-full text-purple-900 font-medium text-center">
              Quizzes
            </Link>
            <Link to="/chemistry-simulator" className="px-6 sm:px-8 py-2 bg-purple-800/50 rounded-full text-white font-medium text-center">
              Chemistry Simulator
            </Link>
          </div>

        <div className="max-w-2xl mx-auto bg-purple-900/30 backdrop-blur-sm rounded-xl sm:rounded-3xl p-6 sm:p-8 border border-purple-700/30">
          <h2 className="text-xl sm:text-2xl font-semibold text-white text-center mb-6">
            Question {currentQuestionIndex + 1}/10 ({difficulty} level)
          </h2>

          <div className="text-center mb-8">
            <p className="text-base sm:text-lg text-white">
              {currentQuestion.question}
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4 mb-8">
            {currentQuestion.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleAnswerSelect(option.id)}
                className={`w-full p-3 sm:p-4 rounded-xl text-left transition-colors text-sm sm:text-base ${
                  selectedAnswer === option.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-white hover:bg-purple-50'
                }`}
              >
                <span className="inline-block w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-purple-100 text-purple-900 text-center leading-6 sm:leading-8 mr-3">
                  {option.id}
                </span>
                {option.text}
              </button>
            ))}
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleNext}
              disabled={!selectedAnswer}
              className={`px-6 sm:px-8 py-2 rounded-full font-medium text-sm sm:text-base ${
                selectedAnswer
                  ? 'bg-purple-600 text-white hover:bg-purple-700'
                  : 'bg-purple-400 text-white cursor-not-allowed'
              } transition-colors`}
            >
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Quiz;