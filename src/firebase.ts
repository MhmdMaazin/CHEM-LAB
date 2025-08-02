import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: "import.meta.env.VITE_FIREBASE_API_KEY",
  authDomain: "import.meta.env.VITE_FIREBASE_AUTH_DOMAIN",
  projectId: "import.meta.env.VITE_FIREBASE_PROJECT_ID",
  storageBucket: "import.meta.env.VITE_FIREBASE_STORAGE_BUCKET",
  messagingSenderId: "import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID",
  appId: "import.meta.env.VITE_FIREBASE_APP_ID",
  measurementId: "import.meta.env.VITE_FIREBASE_MEASUREMENT_ID"
};

// Validate configuration
if (!firebaseConfig.apiKey || firebaseConfig.apiKey === 'your_firebase_api_key_here') {
  console.error('Firebase API key is not configured. Please check your .env file.');
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Initialize Firestore
const db = getFirestore(app);

export { auth, db, googleProvider };