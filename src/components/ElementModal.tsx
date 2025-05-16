import React from 'react';
import { X } from 'lucide-react';
import { Element } from '../types/element';

interface ElementModalProps {
  element: Element | null;
  onClose: () => void;
}

function ElementModal({ element, onClose }: ElementModalProps) {
  if (!element) return null;

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Nonmetal': 'from-emerald-400 to-emerald-600',
      'Noble Gas': 'from-blue-400 to-blue-600',
      'Alkali Metal': 'from-red-400 to-red-600',
      'Alkaline Earth Metal': 'from-orange-400 to-orange-600',
      'Metalloid': 'from-teal-400 to-teal-600',
      'Halogen': 'from-cyan-400 to-cyan-600',
      'Transition Metal': 'from-yellow-400 to-yellow-600',
      'Post-Transition Metal': 'from-green-400 to-green-600',
      'Lanthanide': 'from-pink-400 to-pink-600',
      'Actinide': 'from-purple-400 to-purple-600',
    };
    return colors[category] || 'from-gray-400 to-gray-600';
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[1000] p-4">
      <div className="bg-purple-900/90 rounded-2xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto relative border border-purple-700/30">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-white/60 hover:text-white transition-colors z-[1001]"
        >
          <X size={20} />
        </button>

        <div className="flex items-start gap-4 mb-4">
          <div className={`w-24 h-24 rounded-xl bg-gradient-to-br ${getCategoryColor(element.category)} flex flex-col items-center justify-center shadow-lg`}>
            <span className="text-xs text-white/80">{element.atomicNumber}</span>
            <span className="text-4xl font-bold text-white">{element.symbol}</span>
            <span className="text-xs text-white/80">{element.atomicMass}</span>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-1">{element.name}</h2>
            <p className="text-purple-200 text-sm">{element.category}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-purple-800/30 rounded-lg p-3">
            <p className="text-purple-200 text-xs">Atomic Number</p>
            <p className="text-lg font-semibold text-white">{element.atomicNumber}</p>
          </div>
          <div className="bg-purple-800/30 rounded-lg p-3">
            <p className="text-purple-200 text-xs">Atomic Mass</p>
            <p className="text-lg font-semibold text-white">{element.atomicMass}</p>
          </div>
          <div className="bg-purple-800/30 rounded-lg p-3">
            <p className="text-purple-200 text-xs">Block</p>
            <p className="text-lg font-semibold text-white">{element.block}</p>
          </div>
          <div className="bg-purple-800/30 rounded-lg p-3">
            <p className="text-purple-200 text-xs">Electron Configuration</p>
            <p className="text-lg font-semibold text-white">{element.electronConfiguration}</p>
          </div>
        </div>

        <div className="bg-purple-800/30 rounded-lg p-3">
          <p className="text-purple-200 text-xs mb-1">Description</p>
          <p className="text-sm leading-relaxed text-white">{element.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ElementModal;