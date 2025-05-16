import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Atom, Menu, X, Pen, BarChart2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { doc, getDoc, setDoc, collection, getDocs } from 'firebase/firestore';

// Predefined avatars (you can replace these with actual image URLs or local assets)
const avatars = [
  'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1742882181~exp=1742885781~hmac=79ec7a0105ee07370c035874f1a788ce8d8ba5252b6a6b7e47fad5fd60d34c1d&w=740',
  'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671140.jpg?t=st=1742885662~exp=1742889262~hmac=2e79f191c7e3489f5d7c429d825140766271d246acab99927509dd93aae3f7a0&w=740',
  'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671151.jpg?t=st=1742885694~exp=1742889294~hmac=2da27dc79779b8c322e1313227a63a62e22ff78ae8d8ec16a3c0feb8228db183&w=740',
  'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671138.jpg?t=st=1742885713~exp=1742889313~hmac=38032389e29228cc50a7dae2075ba605629b149e8694f7eaca13159dc9cbaa2c&w=740',
  'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?t=st=1742885738~exp=1742889338~hmac=7a3386dc7b6c442c183281595dba267ca5566cf1e7cf0a37588ba9033eb66b67&w=740',
  'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671134.jpg?t=st=1742885858~exp=1742889458~hmac=016c8a0a9f719fe0251fabb8576707425dcbb3062ec4c952f9d479f035c72378&w=740',
  'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg?t=st=1742885878~exp=1742889478~hmac=e41679aa146f399acb109db30eddd4402bb2eabbe084e5c977833da76277d2d9&w=740',
  'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671136.jpg?t=st=1742885899~exp=1742889499~hmac=f21947bbd690373c4778e2b65b6b2fd4e2e150d3125d37e7fe256fe315ef3b44&w=740',
];

interface QuizResult {
  score: number;
  total: number;
  difficulty: string;
  date: string;
  time: string;
  userAnswers?: { [key: number]: string };
  questions?: {
    id: number;
    question: string;
    options: { id: string; text: string }[];
    correctAnswer: string;
  }[];
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
  const [isEditingNames, setIsEditingNames] = useState(false);
  const [isAvatarSelectionOpen, setIsAvatarSelectionOpen] = useState(false);
  const [isStatsOpen, setIsStatsOpen] = useState(false); // New state for stats section
  const [selectedQuizIndex, setSelectedQuizIndex] = useState<number | null>(null);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [newFirstName, setNewFirstName] = useState('');
  const [newLastName, setNewLastName] = useState('');
  const [quizHistory, setQuizHistory] = useState<QuizResult[]>([]);
  const [profilePicture, setProfilePicture] = useState<string | null>(null);

  // Prevent background scrolling when popup is open
  useEffect(() => {
    if (isProfilePopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isProfilePopupOpen]);

  useEffect(() => {
    const fetchUserData = async () => {
      if (currentUser) {
        const userDocRef = doc(db, 'users', currentUser.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const data = userDoc.data();
          setFirstName(data.firstName || '');
          setLastName(data.lastName || '');
          setNewFirstName(data.firstName || '');
          setNewLastName(data.lastName || '');
          setProfilePicture(data.profilePicture || null);
        } else {
          await setDoc(userDocRef, { firstName: '', lastName: '', profilePicture: null });
        }

        const quizResultsRef = collection(doc(collection(db, 'userQuizzes'), currentUser.uid), 'results');
        const quizSnapshot = await getDocs(quizResultsRef);
        const history: QuizResult[] = [];
        quizSnapshot.forEach(doc => {
          history.push(doc.data() as QuizResult);
        });

        // Sort quiz history by date and time (latest to earliest)
        history.sort((a, b) => {
          const [dayA, monthA, yearA] = a.date.split('/').map(Number);
          const [hourA, minuteA, secondA] = a.time.split(':').map(Number);
          const [dayB, monthB, yearB] = b.date.split('/').map(Number);
          const [hourB, minuteB, secondB] = b.time.split(':').map(Number);

          const dateA = new Date(yearA, monthA - 1, dayA, hourA, minuteA, secondA);
          const dateB = new Date(yearB, monthB - 1, dayB, hourB, minuteB, secondB);

          return dateB.getTime() - dateA.getTime();
        });

        setQuizHistory(history);
      }
    };
    fetchUserData();
  }, [currentUser]);

  // Calculate profile statistics
  const calculateStats = () => {
    const totalQuizzes = quizHistory.length;
    const totalScore = quizHistory.reduce((sum, quiz) => sum + (quiz.score / quiz.total) * 100, 0);
    const averageScore = totalQuizzes > 0 ? (totalScore / totalQuizzes).toFixed(1) : 0;
    const highestScore = quizHistory.length > 0 ? Math.max(...quizHistory.map(quiz => (quiz.score / quiz.total) * 100)) : 0;

    // Calculate favorite difficulty (most frequently taken)
    const difficultyCounts: { [key: string]: number } = {};
    quizHistory.forEach(quiz => {
      difficultyCounts[quiz.difficulty] = (difficultyCounts[quiz.difficulty] || 0) + 1;
    });
    const favoriteDifficulty = Object.keys(difficultyCounts).reduce((a, b) =>
      difficultyCounts[a] > difficultyCounts[b] ? a : b, 'N/A'
    );

    return {
      totalQuizzes,
      averageScore,
      highestScore,
      favoriteDifficulty,
    };
  };

  const stats = calculateStats();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      setIsMenuOpen(false);
      setIsProfilePopupOpen(false);
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  const handleNameChange = async () => {
    if (currentUser) {
      try {
        const userDocRef = doc(db, 'users', currentUser.uid);
        const trimmedFirstName = newFirstName.trim();
        const trimmedLastName = newLastName.trim();
        await setDoc(userDocRef, { firstName: trimmedFirstName, lastName: trimmedLastName }, { merge: true });
        setFirstName(trimmedFirstName);
        setLastName(trimmedLastName);
        setIsEditingNames(false);
      } catch (err) {
        console.error('Failed to update name:', err);
      }
    }
  };

  const handleAvatarSelect = async (avatar: string) => {
    if (currentUser) {
      try {
        setProfilePicture(avatar);
        const userDocRef = doc(db, 'users', currentUser.uid);
        await setDoc(userDocRef, { profilePicture: avatar }, { merge: true });
        setIsAvatarSelectionOpen(false);
      } catch (err) {
        console.error('Failed to update avatar:', err);
      }
    }
  };

  const userInitial = currentUser?.displayName
    ? currentUser.displayName.charAt(0).toUpperCase()
    : currentUser?.email?.charAt(0).toUpperCase() || 'U';

  return (
    <nav className="fixed w-full top-0 bg-transparent backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Atom className="w-8 h-8 md:w-10 md:h-10 text-purple-400" />
            <span className="font-merienda text-white text-xl md:text-2xl tracking-wide hover:text-purple-300 transition-colors">
              CHEM LAB
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-purple-300 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-bree text-white hover:text-purple-300 transition-colors">
              Home
            </Link>
            <Link to="/about" className="font-bree text-white hover:text-purple-300 transition-colors">
              About
            </Link>
            <Link to="/services" className="font-bree text-white hover:text-purple-300 transition-colors">
              Services
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {currentUser ? (
              <>
                <button
                  onClick={() => setIsProfilePopupOpen(true)}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white font-bree"
                >
                  {profilePicture ? (
                    <img
                      src={profilePicture}
                      alt="Profile"
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    userInitial
                  )}
                </button>
                <button
                  onClick={handleLogout}
                  className="font-bree text-white hover:text-purple-300 transition-colors flex items-center gap-2"
                >
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="font-bree text-white hover:text-purple-300 transition-colors">
                  Log In
                </Link>
                <Link 
                  to="/register" 
                  className="font-bree bg-white text-purple-900 px-4 py-2 rounded-lg hover:bg-purple-100 transition-colors"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black bg-opacity-95 backdrop-blur-sm">
            <div className="px-4 pt-2 pb-4 space-y-3">
              <Link 
                to="/" 
                className="block font-bree text-white hover:text-purple-300 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block font-bree text-white hover:text-purple-300 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className="block font-bree text-white hover:text-purple-300 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <div className="pt-2 border-t border-gray-700">
                {currentUser ? (
                  <>
                    <button
                      onClick={() => {
                        setIsProfilePopupOpen(true);
                        setIsMenuOpen(false);
                      }}
                      className="block font-bree text-white hover:text-purple-300 transition-colors py-2 w-full text-left"
                    >
                      <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white font-bree">
                          {profilePicture ? (
                            <img
                              src={profilePicture}
                              alt="Profile"
                              className="w-full h-full rounded-full object-cover"
                            />
                          ) : (
                            userInitial
                          )}
                        </div>
                        <span className="font-bree text-white">{currentUser.displayName || currentUser.email}</span>
                      </div>
                    </button>
                    <button
                      onClick={handleLogout}
                      className="block font-bree text-white hover:text-purple-300 transition-colors py-2 w-full text-left"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link 
                      to="/login" 
                      className="block font-bree text-white hover:text-purple-300 transition-colors py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Log In
                    </Link>
                    <Link 
                      to="/register" 
                      className="block font-bree text-white hover:text-purple-300 transition-colors py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Profile Popup */}
        {isProfilePopupOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 min-h-screen p-6">
            <div className="bg-white rounded-xl w-full max-w-4xl max-h-[80vh] overflow-y-auto shadow-lg">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      setIsProfilePopupOpen(false);
                      setIsEditingNames(false);
                      setSelectedQuizIndex(null);
                      setIsAvatarSelectionOpen(false);
                      setIsStatsOpen(false);
                    }}
                    className="text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    <X size={24} />
                  </button>
                  <h2 className="text-xl font-bree text-gray-800 font-semibold"> {firstName} {lastName}</h2>
                </div>
                <button
                  onClick={() => setIsStatsOpen(!isStatsOpen)}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-bree text-sm"
                >
                  <BarChart2 size={16} />
                  {isStatsOpen ? 'Hide Statistics' : 'View Statistics'}
                </button>
              </div>

              {/* Profile Section */}
              <div className="p-6">
                {/* Statistics Section */}
                {isStatsOpen && (
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <h3 className="text-lg font-bree text-gray-800 mb-4">Profile Statistics</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-white rounded-lg shadow-sm">
                        <p className="font-bree text-gray-600 text-sm">Total Quizzes Taken</p>
                        <p className="font-bree text-gray-800 text-lg">{stats.totalQuizzes}</p>
                      </div>
                      <div className="p-4 bg-white rounded-lg shadow-sm">
                        <p className="font-bree text-gray-600 text-sm">Average Score</p>
                        <p className="font-bree text-gray-800 text-lg">{stats.averageScore}%</p>
                      </div>
                      <div className="p-4 bg-white rounded-lg shadow-sm">
                        <p className="font-bree text-gray-600 text-sm">Highest Score</p>
                        <p className="font-bree text-gray-800 text-lg">{stats.highestScore}%</p>
                      </div>
                      <div className="p-4 bg-white rounded-lg shadow-sm">
                        <p className="font-bree text-gray-600 text-sm">Favorite Difficulty</p>
                        <p className="font-bree text-gray-800 text-lg capitalize">{stats.favoriteDifficulty}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Left Column: User Info */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bree text-gray-800 mb-4">Profile Details</h3>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative">
                        {profilePicture ? (
                          <img
                            src={profilePicture}
                            alt="Profile"
                            className="w-20 h-20 rounded-full object-cover border-2 border-purple-600"
                          />
                        ) : (
                          <div className="w-20 h-20 rounded-full bg-purple-600 flex items-center justify-center text-white text-2xl font-bree border-2 border-purple-600">
                            {userInitial}
                          </div>
                        )}
                        <button
                          onClick={() => setIsAvatarSelectionOpen(true)}
                          className="absolute bottom-0 right-0 bg-purple-600 rounded-full p-2 text-white hover:bg-purple-700 transition-colors"
                        >
                          <Pen size={16} />
                        </button>
                      </div>
                      <div>
                        <p className="font-bree text-gray-800">User Name: <span className="text-green-500">{firstName} {lastName}</span></p>
                        <p className="font-bree text-gray-600 text-sm">User ID: {currentUser?.uid.slice(0, 6) || 'Not set'}</p>
                      </div>
                    </div>

                    {/* Avatar Selection */}
                    {isAvatarSelectionOpen && (
                      <div className="mb-4">
                        <h3 className="text-md font-bree text-gray-800 mb-2">Select an Avatar</h3>
                        <div className="grid grid-cols-4 gap-2">
                          {avatars.map((avatar, index) => (
                            <button
                              key={index}
                              onClick={() => handleAvatarSelect(avatar)}
                              className={`w-16 h-16 rounded-full overflow-hidden border-2 ${
                                profilePicture === avatar ? 'border-purple-600' : 'border-gray-300'
                              } hover:border-purple-400 transition-colors`}
                            >
                              <img
                                src={avatar}
                                alt={`Avatar ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </button>
                          ))}
                        </div>
                        <button
                          onClick={() => setIsAvatarSelectionOpen(false)}
                          className="mt-2 text-purple-600 hover:text-purple-800 font-bree text-sm"
                        >
                          Cancel
                        </button>
                      </div>
                    )}

                    {/* User Info */}
                    <div className="space-y-4">
                      <div>
                        <label className="block font-bree text-gray-600 text-sm mb-1">Email</label>
                        <p className="font-bree text-gray-800">{currentUser?.email || 'Not set'}</p>
                      </div>

                      <div>
                        <label className="block font-bree text-gray-600 text-sm mb-1">First Name</label>
                        {isEditingNames ? (
                          <input
                            type="text"
                            value={newFirstName}
                            onChange={(e) => setNewFirstName(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 font-bree"
                          />
                        ) : (
                          <p className="font-bree text-gray-800">{firstName || 'Not set'}</p>
                        )}
                      </div>

                      <div>
                        <label className="block font-bree text-gray-600 text-sm mb-1">Last Name</label>
                        {isEditingNames ? (
                          <input
                            type="text"
                            value={newLastName}
                            onChange={(e) => setNewLastName(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 font-bree"
                          />
                        ) : (
                          <p className="font-bree text-gray-800">{lastName || 'Not set'}</p>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        {isEditingNames ? (
                          <div className="flex gap-2">
                            <button
                              onClick={handleNameChange}
                              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-bree"
                            >
                              Save
                            </button>
                            <button
                              onClick={() => {
                                setIsEditingNames(false);
                                setNewFirstName(firstName);
                                setNewLastName(lastName);
                              }}
                              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition-colors font-bree"
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setIsEditingNames(true)}
                            className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-bree"
                          >
                            <Pen size={16} />
                            Edit Name
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Quiz History */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bree text-gray-800 mb-4">Quiz History</h3>
                    {quizHistory.length > 0 ? (
                      selectedQuizIndex === null ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {quizHistory.map((result, index) => {
                            const percentage = (result.score / result.total) * 100;
                            return (
                              <div
                                key={index}
                                onClick={() => setSelectedQuizIndex(index)}
                                className="flex items-center gap-3 cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                              >
                                {/* Circular Progress Indicator */}
                                <div className="relative w-16 h-16">
                                  <svg className="w-full h-full" viewBox="0 0 36 36">
                                    <path
                                      className="text-gray-200"
                                      d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="3"
                                    />
                                    <path
                                      className="text-purple-600"
                                      d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="3"
                                      strokeDasharray={`${percentage}, 100`}
                                    />
                                  </svg>
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-gray-800 font-bree text-sm">{Math.round(percentage)}%</span>
                                  </div>
                                </div>
                                <div>
                                  <p className="font-bree text-gray-800 text-sm">{result.date} {result.time}</p>
                                  <p className="font-bree text-gray-600 text-xs">{result.difficulty}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <button
                            onClick={() => setSelectedQuizIndex(null)}
                            className="text-purple-600 hover:text-purple-800 transition-colors font-bree text-sm mb-2"
                          >
                            ← Back to Quiz History
                          </button>
                          <h4 className="text-md font-bree text-gray-800">
                            Quiz on {quizHistory[selectedQuizIndex].date} {quizHistory[selectedQuizIndex].time} ({quizHistory[selectedQuizIndex].difficulty})
                          </h4>
                          {quizHistory[selectedQuizIndex].questions?.map((question, qIndex) => (
                            <div key={qIndex} className="bg-gray-100 p-4 rounded-lg">
                              <p className="text-gray-800 font-bree text-sm mb-1">
                                <span className="font-semibold">Q{qIndex + 1}:</span> {question.question}
                              </p>
                              <p className="text-gray-600 font-bree text-xs">
                                <span className="font-semibold">Correct Answer:</span>{' '}
                                {question.options.find(opt => opt.id === question.correctAnswer)?.text}
                              </p>
                              <p className="text-gray-600 font-bree text-xs">
                                <span className="font-semibold">Your Answer:</span>{' '}
                                {question.options.find(opt => opt.id === quizHistory[selectedQuizIndex].userAnswers?.[qIndex])?.text || 'Not answered'}
                              </p>
                            </div>
                          ))}
                        </div>
                      )
                    ) : (
                      <p className="font-bree text-gray-600 text-sm">No quiz history available.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;