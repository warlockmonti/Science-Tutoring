
import React from 'react';

export const COLORS = {
  navy: '#1e3a8a',
  atomGreen: '#a3e635',
  gold: '#eab308',
  white: '#ffffff',
  slate: '#f8fafc'
};

export const SUBJECTS = [
  {
    id: 'biology',
    title: 'Biology',
    description: 'From molecular genetics to ecosystem dynamics. Master the study of life and biological systems.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Radiating Lines */}
        <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="50" y1="5" x2="50" y2="15" />
          <line x1="72" y1="12" x2="66" y2="21" />
          <line x1="88" y1="28" x2="79" y2="34" />
          <line x1="95" y1="50" x2="85" y2="50" />
          <line x1="88" y1="72" x2="79" y2="66" />
          <line x1="72" y1="88" x2="66" y2="79" />
          <line x1="50" y1="95" x2="50" y2="85" />
          <line x1="28" y1="88" x2="34" y2="79" />
          <line x1="12" y1="72" x2="21" y2="66" />
          <line x1="5" y1="50" x2="15" y2="50" />
          <line x1="12" y1="28" x2="21" y2="34" />
          <line x1="28" y1="12" x2="34" y2="21" />
        </g>
        
        {/* Brain Outline */}
        <path 
          d="M50 30C35 30 25 38 25 50C25 58 30 65 38 68C38 75 45 80 55 80C60 80 65 78 68 75C75 75 80 68 80 60C80 45 65 30 50 30Z" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        
        {/* Internal Squiggles */}
        <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none">
          <path d="M40 45C42 43 48 43 50 45" />
          <path d="M55 40C58 38 65 42 63 50" />
          <path d="M35 55C40 58 45 53 42 65" />
          <path d="M50 60C55 62 65 58 68 62" />
          <path d="M60 70C62 68 70 68 72 72" />
        </g>
      </svg>
    )
  },
  {
    id: 'chemistry',
    title: 'Chemistry',
    description: 'Stoichiometry, organic reactions, and thermodynamics. Bridging theory with chemical logic.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Flask Main Body */}
        <path 
          d="M38 20H62M44 20V45L25 80H75L56 45V20" 
          stroke="currentColor" 
          strokeWidth="6" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        {/* Liquid Surface Line */}
        <path 
          d="M34 64H66" 
          stroke="currentColor" 
          strokeWidth="4" 
          strokeLinecap="round" 
        />
        {/* Liquid Fill (Subtle) */}
        <path 
          d="M34 64L28 75H72L66 64H34Z" 
          fill="currentColor" 
          className="opacity-20"
        />
      </svg>
    )
  },
  {
    id: 'physics',
    title: 'Physics',
    description: 'Mechanics, Electromagnetism, and Quantum concepts through the lens of mathematical reasoning.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];
