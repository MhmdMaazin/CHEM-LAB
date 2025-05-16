import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { MultiBackend, TouchTransition, MouseTransition } from 'react-dnd-multi-backend';
import { Beaker, Flame } from 'lucide-react';

// Define the drag item type
const ItemTypes = {
  ELEMENT: 'element',
};

// Configure the multi-backend to support both mouse and touch
const HTML5toTouch = {
  backends: [
    {
      id: 'html5',
      backend: HTML5Backend,
      transition: MouseTransition,
    },
    {
      id: 'touch',
      backend: TouchBackend,
      options: { enableMouseEvents: false, delayTouchStart: 100 },
      transition: TouchTransition,
      preview: true,
    },
  ],
};

// Draggable Element Component
interface ElementProps {
  name: string;
  symbol: string;
}

const DraggableElement: React.FC<ElementProps> = ({ name, symbol }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.ELEMENT,
    item: { symbol },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`p-4 rounded-lg text-white font-medium transition-transform cursor-move touch-none select-none ${
        isDragging ? 'opacity-50 scale-90 shadow-lg border-2 border-purple-400' : 'bg-purple-900/50 hover:bg-purple-900'
      } sm:p-3 text-sm sm:text-base`}
    >
      {name}
    </div>
  );
};

// Drop Target (Flame Area) Component
interface FlameAreaProps {
  onDrop: (symbol: string) => void;
  flameColor: string | null;
}

const FlameArea: React.FC<FlameAreaProps> = ({ onDrop, flameColor }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.ELEMENT,
    drop: (item: { symbol: string }) => {
      console.log('Dropped element:', item.symbol);
      onDrop(item.symbol);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`w-32 h-32 sm:w-40 sm:h-40 rounded-full flex items-center justify-center transition-colors ${
        flameColor || 'bg-gray-500'
      } ${isOver ? 'scale-110' : 'scale-100'} flame-flicker border-2 border-purple-600`}
    >
      <Flame className="w-16 h-16 sm:w-20 sm:h-20 text-white" />
    </div>
  );
};

// Reaction Area Component (for mixing)
const ReactionArea: React.FC<{
  reactionResult: { formula: string; color: string } | null;
}> = ({ reactionResult }) => {
  return (
    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full flex items-center justify-center bg-gray-500 border-2 border-purple-600">
      {reactionResult ? (
        <div
          className={`w-full h-full rounded-full flex items-center justify-center ${reactionResult.color}`}
        >
          <span className="text-white font-semibold text-sm sm:text-base">
            {reactionResult.formula}
          </span>
        </div>
      ) : (
        <Beaker className="w-16 h-16 sm:w-20 sm:h-20 text-white" />
      )}
    </div>
  );
};

function ChemistrySimulator() {
  // List of elements (expanded)
  const elements = [
    { name: 'Hydrogen (H)', symbol: 'H' },
    { name: 'Oxygen (O)', symbol: 'O' },
    { name: 'Sodium (Na)', symbol: 'Na' },
    { name: 'Chlorine (Cl)', symbol: 'Cl' },
    { name: 'Potassium (K)', symbol: 'K' },
    { name: 'Carbon (C)', symbol: 'C' },
    { name: 'Lithium (Li)', symbol: 'Li' },
    { name: 'Calcium (Ca)', symbol: 'Ca' },
    { name: 'Strontium (Sr)', symbol: 'Sr' },
    { name: 'Barium (Ba)', symbol: 'Ba' },
    { name: 'Copper (Cu)', symbol: 'Cu' },
    { name: 'Iron (Fe)', symbol: 'Fe' },
    { name: 'Sulfur (S)', symbol: 'S' },
    { name: 'Nitrogen (N)', symbol: 'N' },
    { name: 'Aluminum (Al)', symbol: 'Al' },
    { name: 'Zinc (Zn)', symbol: 'Zn' },
    { name: 'Silver (Ag)', symbol: 'Ag' },
    { name: 'Lead (Pb)', symbol: 'Pb' },
  ];

  // State for selected elements to mix
  const [selectedElements, setSelectedElements] = useState<string[]>([]);
  // State for reaction result (compound and color)
  const [reactionResult, setReactionResult] = useState<{
    formula: string;
    color: string;
  } | null>(null);
  // State for flame test (element and flame color)
  const [flameTestResult, setFlameTestResult] = useState<{
    element: string;
    color: string;
  } | null>(null);

  // Reaction rules: Define what happens when elements are mixed (keys in alphabetical order)
  const reactionRules: { [key: string]: { formula: string; color: string } } = {
    // Existing reactions
    'H+O': { formula: 'H₂O', color: 'bg-blue-400' },
    'Cl+Na': { formula: 'NaCl', color: 'bg-gray-200' },
    'C+O': { formula: 'CO₂', color: 'bg-gray-300' },
    'Cl+K': { formula: 'KCl', color: 'bg-white' },
    'Cl+Li': { formula: 'LiCl', color: 'bg-gray-100' },
    'Ca+O': { formula: 'CaO', color: 'bg-gray-200' },
    'Cu+O': { formula: 'CuO', color: 'bg-black' },
    'Mg+O': { formula: 'MgO', color: 'bg-white' },
    'Cl+Sr': { formula: 'SrCl₂', color: 'bg-gray-300' },
    'Ba+Cl': { formula: 'BaCl₂', color: 'bg-gray-200' },
    // Hydrogen reactions
    'H+S': { formula: 'H₂S', color: 'bg-yellow-200' }, // Hydrogen Sulfide
    'H+N': { formula: 'NH₃', color: 'bg-blue-200' }, // Ammonia
    // Oxygen reactions
    'Al+O': { formula: 'Al₂O₃', color: 'bg-gray-100' }, // Aluminum Oxide
    'Fe+O': { formula: 'Fe₂O₃', color: 'bg-red-400' }, // Iron(III) Oxide
    'O+S': { formula: 'SO₂', color: 'bg-yellow-300' }, // Sulfur Dioxide
    'N+O': { formula: 'NO', color: 'bg-gray-300' }, // Nitric Oxide
    'O+Zn': { formula: 'ZnO', color: 'bg-white' }, // Zinc Oxide
    'O+Pb': { formula: 'PbO', color: 'bg-yellow-400' }, // Lead(II) Oxide
    // Chlorine reactions
    'Cl+Fe': { formula: 'FeCl₂', color: 'bg-green-200' }, // Iron(II) Chloride
    'Cl+Zn': { formula: 'ZnCl₂', color: 'bg-white' }, // Zinc Chloride
    'Ag+Cl': { formula: 'AgCl', color: 'bg-white' }, // Silver Chloride
    'Cl+Pb': { formula: 'PbCl₂', color: 'bg-white' }, // Lead(II) Chloride
    // Carbon reactions
    'C+S': { formula: 'CS₂', color: 'bg-yellow-500' }, // Carbon Disulfide
    // Sulfur reactions
    'Cu+S': { formula: 'CuS', color: 'bg-black' }, // Copper(II) Sulfide
    'Fe+S': { formula: 'FeS', color: 'bg-black' }, // Iron(II) Sulfide
    // Nitrogen reactions
    'K+N': { formula: 'K₃N', color: 'bg-gray-200' }, // Potassium Nitride
    'Ca+N': { formula: 'Ca₃N₂', color: 'bg-gray-300' }, // Calcium Nitride
    // Miscellaneous reactions
    'Al+Cl': { formula: 'AlCl₃', color: 'bg-white' }, // Aluminum Chloride
    'Ba+S': { formula: 'BaS', color: 'bg-white' }, // Barium Sulfide
    'O+Sr': { formula: 'SrO', color: 'bg-gray-200' }, // Strontium Oxide
    // Additional reactions for variety
    'Li+O': { formula: 'Li₂O', color: 'bg-white' }, // Lithium Oxide
    'K+O': { formula: 'K₂O', color: 'bg-white' }, // Potassium Oxide
    'Na+O': { formula: 'Na₂O', color: 'bg-white' }, // Sodium Oxide
    'C+Ca': { formula: 'CaC₂', color: 'bg-gray-400' }, // Calcium Carbide
    'Mg+S': { formula: 'MgS', color: 'bg-white' }, // Magnesium Sulfide
    'Al+S': { formula: 'Al₂S₃', color: 'bg-yellow-200' }, // Aluminum Sulfide
    'Cu+Cl': { formula: 'CuCl₂', color: 'bg-green-300' }, // Copper(II) Chloride
  };

  // Flame test colors: Define flame colors for each element
  const flameColors: { [key: string]: string } = {
    Na: 'bg-yellow-500', // Sodium: Yellow flame
    K: 'bg-purple-500', // Potassium: Purple flame
    H: 'bg-red-300', // Hydrogen: Pale red flame
    Cl: 'bg-green-500', // Chlorine: Greenish flame (simplified)
    O: 'bg-blue-300', // Oxygen: Pale blue (simplified)
    C: 'bg-orange-500', // Carbon: Orange flame
    Li: 'bg-red-600', // Lithium: Red flame
    Ca: 'bg-orange-600', // Calcium: Brick-red flame
    Sr: 'bg-red-700', // Strontium: Crimson red flame
    Ba: 'bg-green-600', // Barium: Green flame
    Cu: 'bg-green-500', // Copper: Green flame
    Mg: 'bg-white', // Magnesium: Bright white flame
    Fe: 'bg-amber-500', // Iron: Gold sparks (simplified)
    S: 'bg-blue-500', // Sulfur: Blue flame
    N: 'bg-orange-400', // Nitrogen: Orange (simplified)
    Al: 'bg-white', // Aluminum: White flame
    Zn: 'bg-green-400', // Zinc: Greenish flame
    Ag: 'bg-white', // Silver: White flame (simplified)
    Pb: 'bg-blue-400', // Lead: Blue flame
  };

  // Handle element selection for mixing
  const handleElementSelect = (symbol: string) => {
    if (selectedElements.includes(symbol)) {
      setSelectedElements(selectedElements.filter((el) => el !== symbol));
    } else if (selectedElements.length < 2) {
      setSelectedElements([...selectedElements, symbol]);
    }
  };

  // Handle mixing elements
  const handleMix = () => {
    if (selectedElements.length !== 2) {
      alert('Please select exactly two elements to mix.');
      return;
    }

    const key = selectedElements.sort().join('+');
    console.log('Selected elements:', selectedElements);
    console.log('Generated key:', key);
    console.log('Available reaction rules:', Object.keys(reactionRules));
    const result = reactionRules[key] || { formula: 'No reaction', color: 'bg-gray-500' };
    console.log('Reaction result:', result);
    setReactionResult(result);
  };

  // Reset the reaction result
  const handleResetReaction = () => {
    setSelectedElements([]);
    setReactionResult(null);
  };

  // Handle dropping an element into the flame
  const handleDrop = (symbol: string) => {
    const color = flameColors[symbol] || 'bg-gray-500';
    setFlameTestResult({ element: symbol, color });
    if ('vibrate' in navigator) {
      navigator.vibrate(50);
    }
  };

  // Reset the flame test
  const handleResetFlame = () => {
    setFlameTestResult(null);
  };

  return (
    <DndProvider backend={MultiBackend} options={HTML5toTouch}>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-gray-900 to-black">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 pt-20">
            {/* Navigation Tabs */}
                    <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
                      <Link to="/chatbot" className="px-6 sm:px-8 py-2 bg-purple-800/50 rounded-full text-white font-medium text-center">
                        Chem Lab Chatbot
                      </Link>
                      <Link to="/periodic-table" className="px-6 sm:px-8 py-2 bg-purple-800/50 rounded-full text-white font-medium text-center">
                        Periodic Table
                      </Link>
                      <Link to="/quiz" className="px-6 sm:px-8 py-2 bg-purple-800/50 rounded-full text-white font-medium text-center">
                        Quizzes
                      </Link>
                      <Link to="/chemistry-simulator" className="px-6 sm:px-8 py-2 bg-white rounded-full text-purple-900 font-medium text-center">
                        Chemistry Simulator
                      </Link>
                    </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
            Chemistry Simulator
          </h2>

          {/* Element Selection for Mixing */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-xl font-semibold text-white mb-4">Mix Elements</h3>
            <p className="text-gray-300 text-center mb-6">
              Select two elements and mix them to see their reaction and color !
            </p>
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
              {/* Elements List */}
              <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {elements.map((element) => (
                  <button
                    key={element.symbol}
                    onClick={() => handleElementSelect(element.symbol)}
                    className={`p-4 rounded-lg text-white font-medium transition-colors touch-none select-none ${
                      selectedElements.includes(element.symbol)
                        ? 'bg-purple-600'
                        : 'bg-purple-900/50 hover:bg-purple-900'
                    } sm:p-3 text-sm sm:text-base`}
                  >
                    {element.name}
                  </button>
                ))}
              </div>

              {/* Reaction Area */}
              <div className="flex-1 flex flex-col items-center">
                <p className="text-gray-300 mb-2">Reaction Area</p>
                <ReactionArea reactionResult={reactionResult} />
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={handleMix}
                    className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    disabled={selectedElements.length !== 2}
                  >
                    Mix Elements
                  </button>
                  <button
                    onClick={handleResetReaction}
                    className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>

            {/* Reaction Result Details */}
            {reactionResult && (
              <div className="mt-6 p-4 bg-purple-900/30 rounded-lg text-center">
                <h4 className="text-lg font-semibold text-white mb-2">Reaction Result</h4>
                <p className="text-gray-300">{reactionResult.formula}</p>
              </div>
            )}
          </div>

          {/* Flame Test Section with Drag-and-Drop */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">Flame Test</h3>
            <p className="text-gray-300 text-center mb-6">
              Drag an element into the flame to see its flame color!
            </p>
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
              {/* Elements List */}
              <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {elements.map((element) => (
                  <DraggableElement
                    key={element.symbol}
                    name={element.name}
                    symbol={element.symbol}
                  />
                ))}
              </div>

              {/* Flame Area */}
              <div className="flex-1 flex flex-col items-center">
                <p className="text-gray-300 mb-2">Flame Area</p>
                <FlameArea
                  onDrop={handleDrop}
                  flameColor={flameTestResult?.color || null}
                />
                <button
                  onClick={handleResetFlame}
                  className="mt-4 px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Reset Flame
                </button>
              </div>
            </div>

            {/* Flame Test Result Details */}
            {flameTestResult && (
              <div className="mt-6 p-4 bg-purple-900/30 rounded-lg text-center">
                <h4 className="text-lg font-semibold text-white mb-2">Flame Test Result</h4>
                <p className="text-gray-300">
                  {flameTestResult.element} burns with a{' '}
                  {flameTestResult.color
                    .replace('bg-', '')
                    .replace('-500', '')
                    .replace('-300', '')
                    .replace('-600', '')
                    .replace('-700', '')
                    .replace('-400', '')}{' '}
                  flame
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </DndProvider>
  );
}

export default ChemistrySimulator;