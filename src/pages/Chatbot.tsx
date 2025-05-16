import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase.ts';
import { collection, doc, setDoc, onSnapshot } from 'firebase/firestore';
import AlertPopup from '../components/AlertPopup';

interface Message {
  text: string;
  isUser: boolean;
}

function Chatbot() {
  const { currentUser } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load messages from Firestore
  useEffect(() => {
    if (!currentUser) {
      setMessages([]);
      return;
    }

    const userMessagesRef = doc(collection(db, 'userChats'), currentUser.uid);
    const unsubscribe = onSnapshot(userMessagesRef, (doc) => {
      if (doc.exists()) {
        setMessages(doc.data().messages || []);
      } else {
        setMessages([]);
      }
    });

    return () => unsubscribe();
  }, [currentUser]);

  // Save messages to Firestore
  const saveMessagesToFirestore = async (updatedMessages: Message[]) => {
    if (!currentUser) return;
    const userMessagesRef = doc(collection(db, 'userChats'), currentUser.uid);
    await setDoc(userMessagesRef, { messages: updatedMessages }, { merge: true });
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) {
      setShowAlert(true);
      return;
    }
    if (!input.trim()) return;

    const userMessage: Message = { text: input, isUser: true };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setIsTyping(true);

    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();
      const botMessage: Message = { text: data.response, isUser: false };
      const newMessages = [...updatedMessages, botMessage];
      setIsTyping(false);
      setMessages(newMessages);
      await saveMessagesToFirestore(newMessages);
    } catch (error) {
      console.error('Error fetching response:', error);
      const errorMessage: Message = { text: 'Sorry, something went wrong.', isUser: false };
      const newMessages = [...updatedMessages, errorMessage];
      setIsTyping(false);
      setMessages(newMessages);
      await saveMessagesToFirestore(newMessages);
    }

    setInput('');
  };

  const clearChat = async () => {
    if (!currentUser) {
      setShowAlert(true);
      return;
    }
    setMessages([]);
    if (currentUser) {
      const userMessagesRef = doc(collection(db, 'userChats'), currentUser.uid);
      await setDoc(userMessagesRef, { messages: [] }, { merge: true });
    }
  };

  const handleInputFocus = () => {
    if (!currentUser) {
      setShowAlert(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-gray-900 to-black">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 pt-20">
        {/* Navigation Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          <Link to="/chatbot" className="px-6 sm:px-8 py-2 bg-white rounded-full text-purple-900 font-medium text-center">
            Chem Lab Chatbot
          </Link>
          <Link to="/periodic-table" className="px-6 sm:px-8 py-2 bg-purple-800/50 rounded-full text-white font-medium text-center">
            Periodic Table
          </Link>
          <Link to="/quiz" className="px-6 sm:px-8 py-2 bg-purple-800/50 rounded-full text-white font-medium text-center">
            Quizzes
          </Link>
          <Link to="/chemistry-simulator" className="px-6 sm:px-8 py-2 bg-purple-800/50 rounded-full text-white font-medium text-center">
            Chemistry Simulator
          </Link>
        </div>

        <div className="flex-1 flex flex-col h-[calc(100vh-220px)]">
          {/* Initial Message */}
          {messages.length === 0 && !isTyping && (
            <div className="text-center mb-8">
              <div className="w-16 h-16 sm:w-24 sm:h-24 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Chem Lab Chatbot
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base px-4">
                Engage with our AI Chatbots to receive expert guidance tailored to
                your chemistry learning needs. Simplify complex chemical equations.
              </p>
            </div>
          )}

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto mb-6">
            <div className="max-w-3xl mx-auto space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`${message.isUser ? 'text-right' : 'text-left'}`}
                >
                  <div
                    className={`inline-block max-w-[85%] sm:max-w-[80%] px-4 sm:px-6 py-2 sm:py-3 rounded-2xl sm:rounded-3xl ${
                      message.isUser
                        ? 'bg-purple-600 text-white'
                        : 'bg-purple-900/50 text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="text-left">
                  <div
                    className="inline-block max-w-[85%] sm:max-w-[80%] px-4 sm:px-6 py-2 sm:py-3 rounded-2xl sm:rounded-3xl bg-purple-900/50 text-white"
                  >
                    <span className="animate-pulse">Typing...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
        </div>

        {/* Chat Input */}
        <div className="sticky bottom-4 sm:bottom-8">
          <div className="max-w-3xl mx-auto relative flex items-center space-x-2">
            <form onSubmit={handleSendMessage} className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onFocus={handleInputFocus}
                  placeholder="Message Chatbot.."
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-purple-900/30 backdrop-blur-sm rounded-full border border-purple-700/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                  readOnly={!currentUser}
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
                >
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </button>
              </div>
            </form>
            {messages.length > 0 && (
              <button
                onClick={clearChat}
                className="px-4 py-2 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors text-white"
              >
                Clear Chat
              </button>
            )}
          </div>
        </div>
      </main>

      {/* Alert Popup */}
      {showAlert && (
        <AlertPopup
          message="Please log in to interact with the Chem Lab Chatbot."
          onClose={() => setShowAlert(false)}
        />
      )}
    </div>
  );
}

export default Chatbot;