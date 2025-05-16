# 🔬 ChemLab – AI-Powered Chemistry Learning Platform

ChemLab is an interactive educational platform that leverages AI to enhance the way students learn chemistry. It includes an AI chatbot for answering chemistry-related questions, an interactive periodic table, a quiz module for self-assessment, and a reaction simulator for visual learning.

---

## 📥 Project Files

You can view or download the project files from the link below:

🔗 [View on Google Drive](https://drive.google.com/drive/folders/1GI7hGOrh71P7Cl4hlfJk3MagrpfcAMuz?usp=sharing)

---

## 🚀 Features

- 💬 **AI Chatbot** – Powered by Python (Flask, NLTK, Scikit-learn) for natural language understanding.
- 🧪 **Reaction Simulator** – Visual simulation of basic chemical reactions.
- 🧠 **Interactive Quizzes** – Personalized learning with instant feedback.
- 📚 **Periodic Table** – Clickable and informative periodic table to explore elements.
- 👤 **User Profiles** – Firebase authentication and progress tracking.

---

## 📁 Project Structure:

ChemLab/
│
├── chatbot-training/         # Python backend for chatbot
│   ├── app.py                # Flask API for chatbot response
│   ├── train.py              # Trains TF-IDF model using CSV data
│   ├── predict.py            # CLI test script for chatbot
│   ├── model.pkl             # Saved chatbot model
│   ├── dataset.csv           # Q&A data for training
│   └── download_nltk_data.py # Downloads necessary NLTK datasets
│
├── src/                      # React frontend source
│   ├── components/           # UI components
│   ├── context/              # Global state management
│   ├── data/                 # Data files (e.g., element info)
│   ├── images/               # Assets used in UI
│   ├── pages/                # Page-level components (Home, Quiz, etc.)
│   ├── types/                # TypeScript interfaces
│   ├── App.tsx              # Main App Component
│   ├── main.tsx             # React entry point
│   └── firebase.ts          # Firebase auth config
│
├── index.html
├── package.json             # Frontend dependencies
├── tailwind.config.js       # TailwindCSS config
├── vite.config.ts           # Vite bundler config
├── tsconfig.json            # TypeScript config

---

## ⚙️ Tech Stack

- **Frontend**: React + TypeScript + Tailwind CSS + Vite
- **Backend**: Flask (Python) for AI chatbot
- **AI Libraries**: NLTK, Scikit-learn, Pandas
- **Database/Auth**: Firebase
- **Tools**: Visual Studio Code, GitHub (Version Control)

---

## 📦 Installation & Setup

# 1. Download the project file from Google Drive
Navigate to the project directory: cd chemlab

# 2. Install dependencies for frontend
Install dependencies: npm install

# 3. Start development server
Start the development server: npm run dev

The app will run on http://localhost:5173 (or the port specified by Vite)

---

## 🧪 Running the Flask Backend (Chatbot)

# 1. Backend Setup (Chatbot):
Navigate to the chatbot training directory: cd chatbot-training

# 2. Install Python dependencies:
pip install flask flask-cors pandas numpy scikit-learn nltk

# 3. Download NLTK data:
python download_nltk_data.py

# 4.Train the chatbot model (if not already trained):
python train.py

This will generate model.pkl using dataset.csv.

# 5.Start the Flask server:
python app.py

The Flask server will run on http://localhost:5000

---

## 🌐 Firebase Configuration:

# 1. Set up a Firebase project at https://console.firebase.google.com/

# 2. Enable Authentication (Email/Password, Google Sign-In) and Firestore Database

# 3. Add your Firebase configuration to src/firebase.ts:

export const firebaseConfig = {
  apiKey: "your_api_key",
  authDomain: "your_auth_domain",
  projectId: "your_project_id",
  storageBucket: "your_storage_bucket",
  messagingSenderId: "your_messaging_sender_id",
  appId: "your_app_id"
};

---

## 📄 License

This project is licensed under the MIT License.

---

## ✨ AUTHOR:
Mohammed Maazin  
Final Year Undergraduate - BSc. Computer Science  
ChemLab: AI Chatbot for Chemistry Learning

Supervisor: Ms. Charunika Dampalessa
