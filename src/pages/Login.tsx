import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { auth, googleProvider, db } from '../firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import Lottie from 'lottie-react';
import chemistryAnimation from '../animations/chemistry-experiment.json'; // Adjust the path to your animation file

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Check if user document exists in Firestore
      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists()) {
        // Extract first name and last name from email
        let firstName = '';
        let lastName = '';

        if (user.email) {
          const emailParts = user.email.split('@')[0].split('.');
          firstName = emailParts[0] || '';
          lastName = emailParts.length > 1 ? emailParts[1] : '';
        }

        // Save user data to Firestore
        await setDoc(userDocRef, {
          firstName,
          lastName,
          email: user.email,
        });
      }

      navigate('/');
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const user = userCredential.user;

      // Check if user document exists in Firestore
      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists()) {
        // Extract first name and last name from displayName or email
        let firstName = '';
        let lastName = '';

        if (user.displayName) {
          const nameParts = user.displayName.split(' ');
          firstName = nameParts[0] || '';
          lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : '';
        } else if (user.email) {
          const emailParts = user.email.split('@')[0].split('.');
          firstName = emailParts[0] || '';
          lastName = emailParts.length > 1 ? emailParts[1] : '';
        }

        // Save user data to Firestore
        await setDoc(userDocRef, {
          firstName,
          lastName,
          email: user.email,
        });
      }

      navigate('/');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black p-4">
      {/* Back Button */}
      <div className="absolute top-4 left-4">
        <Link to="/" className="text-white hover:text-gray-300 flex items-center gap-2">
          <ArrowLeft className="h-4 w-4 mr-2" />
          <span className="font-bree">Back to Home</span>
        </Link>
      </div>

      {/* Container */}
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-opacity-30 rounded-lg shadow-lg">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12 text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center md:text-left">
            Sign In to <br /> Chem Lab
          </h1>
          <p className="text-gray-400 text-center md:text-left">
            If you don't have an account, you can{' '}
            <Link to="/register" className="text-blue-400 hover:text-blue-300">
              Register here!
            </Link>
          </p>

          {/* Lottie Animation */}
          <div className="mt-8 hidden md:block w-[300px] h-[300px]">
            <Lottie animationData={chemistryAnimation} loop={true} />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12 bg-black bg-opacity-40 rounded-lg shadow-md">
          <div className="w-full max-w-[320px] space-y-4">
            {/* Error Message */}
            {error && (
              <div className="text-red-500 text-sm text-center">
                {error}
              </div>
            )}

            {/* Email Input */}
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-4 bg-transparent border border-gray-500 text-white placeholder-gray-400 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
            />

            {/* Password Input */}
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-6 py-4 bg-transparent border border-gray-500 text-white placeholder-gray-400 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>


            {/* Sign In Button */}
            <button
              onClick={handleEmailLogin}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 rounded-xl transition-colors"
            >
              Sign In
            </button>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 text-gray-400 bg-black rounded-xl">Or continue with</span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="flex justify-center">
              <button
                onClick={handleGoogleLogin}
                className="flex items-center justify-center w-64 p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors gap-2"
              >
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-6 h-6" />
                <span className="text-white text-sm">Sign in with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;