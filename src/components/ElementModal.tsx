import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { Element } from '../types/element';

interface ElementModalProps {
  element: Element | null;
  onClose: () => void;
}

function ElementModal({ element, onClose }: ElementModalProps) {
  if (!element) return null;
  
  const modalRef = useRef<HTMLDivElement>(null);
  
  // Effect to handle modal positioning on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (modalRef.current) {
        // Ensure the modal stays in the viewport
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;
        
        // Center the modal in the current viewport
        const modalHeight = modalRef.current.offsetHeight;
        const modalWidth = modalRef.current.offsetWidth;
        
        // Calculate the position to center the modal in the current viewport
        const top = Math.max(0, (viewportHeight - modalHeight) / 2);
        const left = Math.max(0, (viewportWidth - modalWidth) / 2);
        
        // Apply the calculated position
        modalRef.current.style.top = `${top + window.scrollY}px`;
        modalRef.current.style.left = `${left + window.scrollX}px`;
        modalRef.current.style.transform = 'none'; // Remove any transform to use absolute positioning
      }
    };
    
    // Initial positioning
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);
  
  // Effect to handle spotlight animation
  useEffect(() => {
    const handleMouseMove = (ev: MouseEvent) => {
      if (!modalRef.current) return;
      
      const blob = modalRef.current.querySelector('.blob') as HTMLElement;
      const fakeBlob = modalRef.current.querySelector('.fake-blob') as HTMLElement;
      
      if (!blob || !fakeBlob) return;
      
      const rect = modalRef.current.getBoundingClientRect();
      
      // Only show the blob when mouse is inside the card boundaries
      if (
        ev.clientX >= rect.left &&
        ev.clientX <= rect.right &&
        ev.clientY >= rect.top &&
        ev.clientY <= rect.bottom
      ) {
        blob.style.opacity = '1';
        
        blob.animate(
          [{
            transform: `translate(${
              ev.clientX - rect.left - blob.offsetWidth / 2
            }px, ${ev.clientY - rect.top - blob.offsetHeight / 2}px)`
          }],
          {
            duration: 300,
            fill: 'forwards'
          }
        );
      } else {
        blob.style.opacity = '0';
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[1000]">
      <div 
        ref={modalRef}
        className="fixed bg-purple-900/90 rounded-2xl p-6 max-w-lg w-full max-h-[90vh] overflow-hidden border border-purple-700/30 element-spotlight-card group data-[state=open]:!zoom-in-0 data-[state=open]:duration-600 animate-zoom-in z-[1001]"  
        data-state="open"
      >
        <div className="max-h-[calc(90vh-3rem)] overflow-y-auto pr-2">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-white/60 hover:text-white transition-colors z-[1001]"
        >
          <X size={20} />
        </button>

        <div className="flex items-start gap-4 mb-4">
          <div className={`w-24 h-24 rounded-xl bg-gradient-to-br ${getCategoryColor(element.category)} flex flex-col items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
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
        
        {/* Spotlight effect elements */}
        <div className="blob absolute start-0 top-0 h-20 w-20 rounded-full bg-purple-600/60 opacity-0 blur-2xl transition-all duration-300 ease-in-out dark:bg-purple-400/60 pointer-events-none" />
        <div className="fake-blob absolute start-0 top-0 h-20 w-20 rounded-full pointer-events-none" />
      </div>
    </div>
  );
}

export default ElementModal;