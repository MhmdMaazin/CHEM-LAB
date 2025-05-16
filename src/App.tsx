import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Atom } from 'lucide-react';

// Lazy load components
const Home = React.lazy(() => import('./pages/Home'));
const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));
const Services = React.lazy(() => import('./pages/Services'));
const Chatbot = React.lazy(() => import('./pages/Chatbot'));
const PeriodicTable = React.lazy(() => import('./pages/PeriodicTable'));
const Quiz = React.lazy(() => import('./pages/Quiz'));
const About = React.lazy(() => import('./pages/About'));
const ChemistrySimulator = React.lazy(() => import('./pages/ChemistrySimulator')); // Replace VirtualLabs with ChemistrySimulator

// Loading screen component
function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="atom-spin">
        <Atom size={64} className="text-purple-400" />
      </div>
    </div>
  );
}

// Page wrapper for transition animations
function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-enter page-enter-active">
      {children}
    </div>
  );
}

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
        <Route path="/register" element={<PageWrapper><Register /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="/chatbot" element={<PageWrapper><Chatbot /></PageWrapper>} />
        <Route path="/periodic-table" element={<PageWrapper><PeriodicTable /></PageWrapper>} />
        <Route path="/quiz" element={<PageWrapper><Quiz /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/chemistry-simulator" element={<PageWrapper><ChemistrySimulator /></PageWrapper>} /> {/* Replace /virtual-labs with /chemistry-simulator */}
      </Routes>
    </Suspense>
  );
}

export default App;