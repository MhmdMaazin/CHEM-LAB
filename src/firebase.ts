import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration (replace with your config)
const firebaseConfig = {
  apiKey: "AIzaSyAmQ1-6v69r0nwiJf-aFOd_-qWQwkD2gZE",
  authDomain: "chemlab-66404.firebaseapp.com",
  projectId: "chemlab-66404",
  storageBucket: "chemlab-66404.firebasestorage.app",
  messagingSenderId: "16553317865",
  appId: "1:16553317865:web:21355775cd049de0572778",
  measurementId: "G-8CQMV64W0L"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Initialize Firestore
const db = getFirestore(app);

export { auth, db, googleProvider};