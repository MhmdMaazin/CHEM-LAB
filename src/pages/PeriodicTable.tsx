import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import ElementModal from '../components/ElementModal';
import { elements } from '../data/elements';
import { Element } from '../types/element';
import { Search } from 'lucide-react';

function PeriodicTable() {
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [highlightedElement, setHighlightedElement] = useState<number | null>(null);
  const elementRefs = useRef<(HTMLButtonElement | null)[]>([]);

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

  const grid: (Element | null)[][] = Array(10).fill(null).map(() => Array(18).fill(null));
  const lanthanides = elements.filter(el => el.atomicNumber >= 57 && el.atomicNumber <= 71);
  const actinides = elements.filter(el => el.atomicNumber >= 89 && el.atomicNumber <= 103);

  elements.forEach(element => {
    if (element.group && element.period) {
      if ((element.atomicNumber >= 57 && element.atomicNumber <= 71) ||
          (element.atomicNumber >= 89 && element.atomicNumber <= 103)) {
        return;
      }
      grid[element.period - 1][element.group - 1] = element;
    }
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (!query) {
      setHighlightedElement(null);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const matchedElement = elements.find(
      el =>
        el.name.toLowerCase().includes(lowerQuery) ||
        el.symbol.toLowerCase().includes(lowerQuery) ||
        el.atomicNumber.toString() === lowerQuery
    );

    if (matchedElement) {
      setHighlightedElement(matchedElement.atomicNumber);
      const elementIndex = elements.findIndex(el => el.atomicNumber === matchedElement.atomicNumber);
      if (elementRefs.current[elementIndex]) {
        elementRefs.current[elementIndex]?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        });
      }
    } else {
      setHighlightedElement(null);
    }
  };

  const renderElement = (element: Element | null, isCompact: boolean = false, index: number = -1) => {
    if (!element) return null;
    const isHighlighted = highlightedElement === element.atomicNumber;
    return (
      <button
        ref={(el) => {
          if (index >= 0) elementRefs.current[index] = el;
        }}
        onClick={() => setSelectedElement(element)}
        className={`w-full aspect-square p-1 sm:p-2 rounded-lg bg-gradient-to-br ${getCategoryColor(element.category)} hover:scale-105 transition-transform shadow-lg ${
          isHighlighted ? 'border-4 border-white-400' : ''
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full text-white">
          <span className="text-[8px] sm:text-xs opacity-80">{element.atomicNumber}</span>
          <span className="text-sm sm:text-lg font-bold">{element.symbol}</span>
          {!isCompact && <span className="text-[8px] sm:text-xs opacity-80">{element.atomicMass}</span>}
        </div>
      </button>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-gray-900 to-black">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 pt-20">
        {/* Navigation Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          <Link to="/chatbot" className="px-6 sm:px-8 py-2 bg-purple-800/50 rounded-full text-white font-medium text-center">
            Chem Lab Chatbot
          </Link>
          <Link to="/periodic-table" className="px-6 sm:px-8 py-2 bg-white rounded-full text-purple-900 font-medium text-center">
            Periodic Table
          </Link>
          <Link to="/quiz" className="px-6 sm:px-8 py-2 bg-purple-800/50 rounded-full text-white font-medium text-center">
            Quizzes
          </Link>
          <Link to="/chemistry-simulator" className="px-6 sm:px-8 py-2 bg-purple-800/50 rounded-full text-white font-medium text-center">
            Chemistry Simulator
          </Link>
        </div>

        {/* Title and Search Bar */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white">Periodic Table</h1>
              <p className="text-purple-200">of Elements</p>
            </div>
            <div className="relative mt-4 sm:mt-0">
              <input
                type="text"
                placeholder="Search elements (e.g., Hydrogen, H, 1)"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 pr-4 py-2 bg-purple-800/50 border border-purple-700/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
        </div>

        {/* Periodic Table Grid */}
        <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl sm:rounded-3xl p-4 sm:p-8 border border-purple-700/30 overflow-x-auto">
          <div className="min-w-[900px] sm:min-w-[1200px] space-y-6 sm:space-y-10">
            {/* Main Periodic Table */}
            <div className="grid grid-cols-18 gap-1 sm:gap-2">
              {grid.map((row, rowIndex) => (
                <React.Fragment key={rowIndex}>
                  {row.map((element, colIndex) => {
                    if (rowIndex === 5 && colIndex === 2) {
                      return (
                        <div key={`${rowIndex}-${colIndex}`} className="w-full aspect-square p-1 sm:p-2 rounded-lg bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-white text-xs sm:text-sm font-semibold">
                          57-71
                        </div>
                      );
                    }
                    if (rowIndex === 6 && colIndex === 2) {
                      return (
                        <div key={`${rowIndex}-${colIndex}`} className="w-full aspect-square p-1 sm:p-2 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-xs sm:text-sm font-semibold">
                          89-103
                        </div>
                      );
                    }
                    return (
                      <div key={`${rowIndex}-${colIndex}`}>
                        {renderElement(element, false, elements.findIndex(el => el?.atomicNumber === element?.atomicNumber))}
                      </div>
                    );
                  })}
                </React.Fragment>
              ))}
            </div>

            {/* Lanthanides Row */}
            <div className="grid grid-cols-15 gap-1 sm:gap-2 pl-[12.5%]">
              {lanthanides.map((element) => (
                <div key={element.atomicNumber}>
                  {renderElement(element, true, elements.findIndex(el => el.atomicNumber === element.atomicNumber))}
                </div>
              ))}
            </div>

            {/* Actinides Row */}
            <div className="grid grid-cols-15 gap-1 sm:gap-2 pl-[12.5%]">
              {actinides.map((element) => (
                <div key={element.atomicNumber}>
                  {renderElement(element, true, elements.findIndex(el => el.atomicNumber === element.atomicNumber))}
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 text-xs sm:text-sm">
              {Object.entries(getCategoryColor).map(([category]) => (
                <div key={category} className="flex items-center gap-2">
                  <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded bg-gradient-to-br ${getCategoryColor(category)}`} />
                  <span className="text-white">{category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Element Modal */}
      {selectedElement && (
        <ElementModal
          element={selectedElement}
          onClose={() => setSelectedElement(null)}
        />
      )}
    </div>
  );
}

export default PeriodicTable;