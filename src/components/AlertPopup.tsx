import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

interface AlertPopupProps {
  message: string;
  onClose: () => void;
}

function AlertPopup({ message, onClose }: AlertPopupProps) {
  const animationProps = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 200, friction: 20 },
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <animated.div
        style={animationProps}
        className="bg-gradient-to-br from-purple-900 to-black rounded-xl p-6 w-full max-w-sm border border-purple-700/50 shadow-lg"
      >
        <h2 className="text-xl font-bold text-white mb-4 text-center">Login Required</h2>
        <p className="text-gray-300 text-center mb-6">{message}</p>
        <div className="flex justify-center gap-4">
          <Link
            to="/login"
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Log In
          </Link>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Close
          </button>
        </div>
      </animated.div>
    </div>
  );
}

export default AlertPopup;