// Define the Question type to match the interface in Quiz.tsx
export type Question = {
  id: number;
  question: string;
  options: { id: string; text: string }[];
  correctAnswer: string;
  difficulty: 'easy' | 'medium' | 'hard';
};

export const questions: Question[] = [
  // Easy Questions (100 questions)
  {
    id: 1,
    question: "What is the atomic number of Carbon?",
    options: [
      { id: 'A', text: '12' },
      { id: 'B', text: '6' },
      { id: 'C', text: '8' },
      { id: 'D', text: '14' }
    ],
    correctAnswer: 'B',
    difficulty: 'easy'
  },
  {
    id: 2,
    question: "Which of these is a noble gas?",
    options: [
      { id: 'A', text: 'Nitrogen' },
      { id: 'B', text: 'Chlorine' },
      { id: 'C', text: 'Helium' },
      { id: 'D', text: 'Oxygen' }
    ],
    correctAnswer: 'C',
    difficulty: 'easy'
  },
  {
    id: 3,
    question: "What is the chemical symbol for Iron?",
    options: [
      { id: 'A', text: 'Fe' },
      { id: 'B', text: 'Ir' },
      { id: 'C', text: 'In' },
      { id: 'D', text: 'I' }
    ],
    correctAnswer: 'A',
    difficulty: 'easy'
  },
  {
    id: 4,
    question: "What is the chemical formula for sulfuric acid?",
    options: [
      { id: 'A', text: 'H2SO4' },
      { id: 'B', text: 'HCl' },
      { id: 'C', text: 'NaOH' },
      { id: 'D', text: 'CH3COOH' }
    ],
    correctAnswer: 'A',
    difficulty: 'easy'
  },
  {
    id: 5,
    question: "Which element has the chemical symbol 'Fe'?",
    options: [
      { id: 'A', text: 'Fluorine' },
      { id: 'B', text: 'Francium' },
      { id: 'C', text: 'Iron' },
      { id: 'D', text: 'Fermium' }
    ],
    correctAnswer: 'C',
    difficulty: 'easy'
  },
  {
    id: 6,
    question: "What is the pH of a neutral solution?",
    options: [
      { id: 'A', text: '0' },
      { id: 'B', text: '7' },
      { id: 'C', text: '14' },
      { id: 'D', text: '10' }
    ],
    correctAnswer: 'B',
    difficulty: 'easy'
  },
  {
    id: 7,
    question: "Which of these is an alkali metal?",
    options: [
      { id: 'A', text: 'Sodium' },
      { id: 'B', text: 'Calcium' },
      { id: 'C', text: 'Aluminum' },
      { id: 'D', text: 'Magnesium' }
    ],
    correctAnswer: 'A',
    difficulty: 'easy'
  },
  {
    id: 8,
    question: "What type of bond is formed between sodium and chlorine in table salt?",
    options: [
      { id: 'A', text: 'Covalent bond' },
      { id: 'B', text: 'Hydrogen bond' },
      { id: 'C', text: 'Ionic bond' },
      { id: 'D', text: 'Metallic bond' }
    ],
    correctAnswer: 'C',
    difficulty: 'easy'
  },
  {
    id: 9,
    question: "Which of these is the lightest element?",
    options: [
      { id: 'A', text: 'Helium' },
      { id: 'B', text: 'Hydrogen' },
      { id: 'C', text: 'Carbon' },
      { id: 'D', text: 'Lithium' }
    ],
    correctAnswer: 'B',
    difficulty: 'easy'
  },
  {
    id: 10,
    question: "What is the molecular formula for glucose?",
    options: [
      { id: 'A', text: 'C6H12O6' },
      { id: 'B', text: 'CH3COOH' },
      { id: 'C', text: 'C12H22O11' },
      { id: 'D', text: 'C2H5OH' }
    ],
    correctAnswer: 'A',
    difficulty: 'easy'
  },
  {
    id: 11,
    question: "Which element is essential for nuclear fusion in stars?",
    options: [
      { id: 'A', text: 'Carbon' },
      { id: 'B', text: 'Helium' },
      { id: 'C', text: 'Hydrogen' },
      { id: 'D', text: 'Oxygen' }
    ],
    correctAnswer: 'C',
    difficulty: 'easy'
  },
  {
    id: 12,
    question: "What is the charge of an electron?",
    options: [
      { id: 'A', text: 'Positive' },
      { id: 'B', text: 'Negative' },
      { id: 'C', text: 'Neutral' },
      { id: 'D', text: 'Variable' }
    ],
    correctAnswer: 'B',
    difficulty: 'easy'
  },
  {
    id: 13,
    question: "Which of these is not a state of matter?",
    options: [
      { id: 'A', text: 'Plasma' },
      { id: 'B', text: 'Gas' },
      { id: 'C', text: 'Energy' },
      { id: 'D', text: 'Solid' }
    ],
    correctAnswer: 'C',
    difficulty: 'easy'
  },
  {
    id: 14,
    question: "What is the most abundant gas in Earth's atmosphere?",
    options: [
      { id: 'A', text: 'Oxygen' },
      { id: 'B', text: 'Carbon dioxide' },
      { id: 'C', text: 'Nitrogen' },
      { id: 'D', text: 'Hydrogen' }
    ],
    correctAnswer: 'C',
    difficulty: 'easy'
  },
  {
    id: 15,
    question: "Which of these is a halogen?",
    options: [
      { id: 'A', text: 'Neon' },
      { id: 'B', text: 'Chlorine' },
      { id: 'C', text: 'Sodium' },
      { id: 'D', text: 'Calcium' }
    ],
    correctAnswer: 'B',
    difficulty: 'easy'
  },
  {
    id: 16,
    question: "What is the atomic mass unit (amu) approximately equal to?",
    options: [
      { id: 'A', text: 'Mass of a proton' },
      { id: 'B', text: 'Mass of an electron' },
      { id: 'C', text: 'Mass of a carbon-12 atom/12' },
      { id: 'D', text: 'Mass of a neutron' }
    ],
    correctAnswer: 'C',
    difficulty: 'easy'
  },
  {
    id: 17,
    question: "What is the chemical symbol for Gold?",
    options: [
      { id: 'A', text: 'Au' },
      { id: 'B', text: 'Ag' },
      { id: 'C', text: 'Al' },
      { id: 'D', text: 'Ar' }
    ],
    correctAnswer: 'A',
    difficulty: 'easy'
  },
  {
    id: 18,
    question: "Which element is a liquid at room temperature?",
    options: [
      { id: 'A', text: 'Iron' },
      { id: 'B', text: 'Mercury' },
      { id: 'C', text: 'Gold' },
      { id: 'D', text: 'Silver' }
    ],
    correctAnswer: 'B',
    difficulty: 'easy'
  },
  {
    id: 19,
    question: "What gas do plants use for photosynthesis?",
    options: [
      { id: 'A', text: 'Oxygen' },
      { id: 'B', text: 'Nitrogen' },
      { id: 'C', text: 'Carbon dioxide' },
      { id: 'D', text: 'Hydrogen' }
    ],
    correctAnswer: 'C',
    difficulty: 'easy'
  },
  {
    id: 20,
    question: "What is the chemical formula for water?",
    options: [
      { id: 'A', text: 'H2O' },
      { id: 'B', text: 'CO2' },
      { id: 'C', text: 'NaCl' },
      { id: 'D', text: 'H2SO4' }
    ],
    correctAnswer: 'A',
    difficulty: 'easy'
  },
  {
    id: 21,
    question: "Which element has the chemical symbol 'O'?",
    options: [
      { id: 'A', text: 'Osmium' },
      { id: 'B', text: 'Oxygen' },
      { id: 'C', text: 'Oganesson' },
      { id: 'D', text: 'Ozone' }
    ],
    correctAnswer: 'B',
    difficulty: 'easy'
  },
  {
    id: 22,
    question: "What is the atomic number of Hydrogen?",
    options: [
      { id: 'A', text: '1' },
      { id: 'B', text: '2' },
      { id: 'C', text: '3' },
      { id: 'D', text: '4' }
    ],
    correctAnswer: 'A',
    difficulty: 'easy'
  },
  {
    id: 23,
    question: "Which of these elements is a metal?",
    options: [
      { id: 'A', text: 'Sulfur' },
      { id: 'B', text: 'Copper' },
      { id: 'C', text: 'Chlorine' },
      { id: 'D', text: 'Neon' }
    ],
    correctAnswer: 'B',
    difficulty: 'easy'
  },
  {
    id: 24,
    question: "What is the common name for NaCl?",
    options: [
      { id: 'A', text: 'Sugar' },
      { id: 'B', text: 'Salt' },
      { id: 'C', text: 'Vinegar' },
      { id: 'D', text: 'Baking soda' }
    ],
    correctAnswer: 'B',
    difficulty: 'easy'
  },
  {
    id: 25,
    question: "Which element is used in pencils?",
    options: [
      { id: 'A', text: 'Carbon' },
      { id: 'B', text: 'Lead' },
      { id: 'C', text: 'Iron' },
      { id: 'D', text: 'Silver' }
    ],
    correctAnswer: 'A',
    difficulty: 'easy'
  },
  {
    id: 26,
    question: "What is the chemical symbol for Silver?",
    options: [
      { id: 'A', text: 'Si' },
      { id: 'B', text: 'Ag' },
      { id: 'C', text: 'Au' },
      { id: 'D', text: 'Al' }
    ],
    correctAnswer: 'B',
    difficulty: 'easy'
  },
  {
    id: 27,
    question: "What gas is produced by plants during photosynthesis?",
    options: [
      { id: 'A', text: 'Carbon dioxide' },
      { id: 'B', text: 'Oxygen' },
      { id: 'C', text: 'Nitrogen' },
      { id: 'D', text: 'Helium' }
    ],
    correctAnswer: 'B',
    difficulty: 'easy'
  },
  {
    id: 28,
    question: "What is the chemical symbol for Sodium?",
    options: [
      { id: 'A', text: 'Na' },
      { id: 'B', text: 'So' },
      { id: 'C', text: 'Sd' },
      { id: 'D', text: 'Sn' }
    ],
    correctAnswer: 'A',
    difficulty: 'easy'
  },
  {
    id: 29,
    question: "Which element has the chemical symbol 'C'?",
    options: [
      { id: 'A', text: 'Calcium' },
      { id: 'B', text: 'Carbon' },
      { id: 'C', text: 'Chlorine' },
      { id: 'D', text: 'Copper' }
    ],
    correctAnswer: 'B',
    difficulty: 'easy'
  },
  {
    id: 30,
    question: "What is the atomic number of Oxygen?",
    options: [
      { id: 'A', text: '6' },
      { id: 'B', text: '7' },
      { id: 'C', text: '8' },
      { id: 'D', text: '9' }
    ],
    correctAnswer: 'C',
    difficulty: 'easy'
  },
  {
    id: 31,
    question: "Which of these is a non-metal?",
    options: [
      { id: 'A', text: 'Iron' },
      { id: 'B', text: 'Sulfur' },
      { id: 'C', text: 'Aluminum' },
      { id: 'D', text: 'Magnesium' }
    ],
    correctAnswer: 'B',
    difficulty: 'easy'
  },
  {
    id: 32,
    question: "What is the chemical formula for carbon dioxide?",
    options: [
      { id: 'A', text: 'CO' },
      { id: 'B', text: 'CO2' },
      { id: 'C', text: 'C2O' },
      { id: 'D', text: 'C2O2' }
    ],
    correctAnswer: 'B',
    difficulty: 'easy'
  },
  {
    id: 33,
    question: "Which element is known as the 'king of metals'?",
    options: [
      { id: 'A', text: 'Silver' },
      { id: 'B', text: 'Gold' },
      { id: 'C', text: 'Iron' },
      { id: 'D', text: 'Copper' }
    ],
    correctAnswer: 'B',
    difficulty: 'easy'
  },
  {
    id: 34,
    question: "What is the state of water at room temperature?",
    options: [
      { id: 'A', text: 'Solid' },
      { id: 'B', text: 'Liquid' },
      { id: 'C', text: 'Gas' },
      { id: 'D', text: 'Plasma' }
    ],
    correctAnswer: 'B',
    difficulty: 'easy'
  },
  {
    id: 35,
    question: "Which element has the chemical symbol 'N'?",
    options: [
      { id: 'A', text: 'Neon' },
      { id: 'B', text: 'Nickel' },
      { id: 'C', text: 'Nitrogen' },
      { id: 'D', text: 'Sodium' }
    ],
    correctAnswer: 'C',
    difficulty: 'easy'
  },
  {
    id: 36,
    question: "What is the common name for H2O?",
    options: [
      { id: 'A', text: 'Salt' },
      { id: 'B', text: 'Sugar' },
      { id: 'C', text: 'Water' },
      { id: 'D', text: 'Vinegar' }
    ],
    correctAnswer: 'C',
    difficulty: 'easy'
  },
  {
    id: 37,
    question: "What is the chemical symbol for Potassium?",
    options: [
      { id: 'A', text: 'P' },
      { id: 'B', text: 'K' },
      { id: 'C', text: 'Po' },
      { id: 'D', text: 'Pt' }
    ],
    correctAnswer: 'B',
    difficulty: 'easy'
  },
  {
    id: 38,
    question: "Which element has the chemical symbol 'S'?",
    options: [
      { id: 'A', text: 'Sodium' },
      { id: 'B', text: 'Sulfur' },
      { id: 'C', text: 'Silver' },
      { id: 'D', text: 'Silicon' }
    ],
    correctAnswer: 'B',
    difficulty: 'easy'
  },
  {
    id: 39,
    question: "What is the atomic number of Helium?",
    options: [
      { id: 'A', text: '1' },
      { id: 'B', text: '2' },
      { id: 'C', text: '3' },
      { id: 'D', text: '4' }
    ],
    correctAnswer: 'B',
    difficulty: 'easy'
  },
  {
    id: 40,
    question: "Which of these is an alkaline earth metal?",
    options: [
      { id: 'A', text: 'Sodium' },
      { id: 'B', text: 'Magnesium' },
      { id: 'C', text: 'Chlorine' },
      { id: 'D', text: 'Sulfur' }
    ],
    correctAnswer: 'B',
    difficulty: 'easy'
  },
  {
    id: 41,
    question: "What is the chemical formula for table sugar?",
    options: [
      { id: 'A', text: 'C6H12O6' },
      { id: 'B', text: 'C12H22O11' },
      { id: 'C', text: 'NaCl' },
      { id: 'D', text: 'H2O' }
    ],
    correctAnswer: 'B',
    difficulty: 'easy'
  },
  {
    id: 42,
    question: "Which element is a gas at room temperature?",
    options: [
      { id: 'A', text: 'Iron' },
      { id: 'B', text: 'Oxygen' },
      { id: 'C', text: 'Gold' },
      { id: 'D', text: 'Mercury' }
    ],
    correctAnswer: 'B',
    difficulty: 'easy'
  },
  {
    id: 43,
    question: "What is the charge of a proton?",
    options: [
      { id: 'A', text: 'Positive' },
      { id: 'B', text: 'Negative' },
      { id: 'C', text: 'Neutral' },
      { id: 'D', text: 'Variable' }
    ],
    correctAnswer: 'A',
    difficulty: 'easy'
  },
  {
    id: 44,
    question: "Which of these is a metalloid?",
    options: [
      { id: 'A', text: 'Silicon' },
      { id: 'B', text: 'Iron' },
      { id: 'C', text: 'Oxygen' },
      { id: 'D', text: 'Sodium' }
    ],
    correctAnswer: 'A',
    difficulty: 'easy'
  },
  {
    id: 45,
    question: "What is the chemical symbol for Calcium?",
    options: [
      { id: 'A', text: 'Ca' },
      { id: 'B', text: 'Cl' },
      { id: 'C', text: 'Cu' },
      { id: 'D', text: 'Co' }
    ],
    correctAnswer: 'A',
    difficulty: 'easy'
  },
  {
    id: 46,
    question: "Which element has the chemical symbol 'F'?",
    options: [
      { id: 'A', text: 'Iron' },
      { id: 'B', text: 'Fluorine' },
      { id: 'C', text: 'Francium' },
      { id: 'D', text: 'Fermium' }
    ],
    correctAnswer: 'B',
    difficulty: 'easy'
  },
  {
    id: 47,
    question: "What is the atomic number of Nitrogen?",
    options: [
      { id: 'A', text: '5' },
      { id: 'B', text: '6' },
      { id: 'C', text: '7' },
      { id: 'D', text: '8' }
    ],
    correctAnswer: 'C',
    difficulty: 'easy'
  },
  {
    id: 48,
    question: "Which of these is a solid at room temperature?",
    options: [
      { id: 'A', text: 'Oxygen' },
      { id: 'B', text: 'Iron' },
      { id: 'C', text: 'Mercury' },
      { id: 'D', text: 'Helium' }
    ],
    correctAnswer: 'B',
    difficulty: 'easy'
  },
  {
    id: 49,
    question: "What is the chemical formula for hydrochloric acid?",
    options: [
      { id: 'A', text: 'HCl' },
      { id: 'B', text: 'H2SO4' },
      { id: 'C', text: 'NaOH' },
      { id: 'D', text: 'CH3COOH' }
    ],
    correctAnswer: 'A',
    difficulty: 'easy'
  },
  {
    id: 50,
    question: "Which element has the chemical symbol 'Al'?",
    options: [
      { id: 'A', text: 'Argon' },
      { id: 'B', text: 'Aluminum' },
      { id: 'C', text: 'Arsenic' },
      { id: 'D', text: 'Antimony' }
    ],
    correctAnswer: 'B',
    difficulty: 'easy'
  },
  {
    id: 51,
    question: "What is the atomic number of Sodium?",
    options: [
      { id: 'A', text: '9' },
      { id: 'B', text: '10' },
      { id: 'C', text: '11' },
      { id: 'D', text: '12' }
    ],
    correctAnswer: 'C',
    difficulty: 'easy'
  },
  {
    id: 52,
    question: "Which of these elements is a noble gas?",
    options: [
      { id: 'A', text: 'Argon' },
      { id: 'B', text: 'Fluorine' },
      { id: 'C', text: 'Sulfur' },
      { id: 'D', text: 'Calcium' }
    ],
    correctAnswer: 'A',
    difficulty: 'easy'
  },
  {
    id: 53,
    question: "What is the chemical symbol for Magnesium?",
    options: [
      { id: 'A', text: 'Mg' },
      { id: 'B', text: 'Mn' },
      { id: 'C', text: 'Mo' },
      { id: 'D', text: 'Ma' }
    ],
    correctAnswer: 'A',
    difficulty: 'easy'
  },
  {
    id: 54,
    question: "Which element has the chemical symbol 'Cl'?",
    options: [
      { id: 'A', text: 'Calcium' },
      { id: 'B', text: 'Chlorine' },
      { id: 'C', text: 'Carbon' },
      { id: 'D', text: 'Copper' }
    ],
    correctAnswer: 'B',
    difficulty: 'easy'
  },
  {
    id: 55,
    question: "What is the atomic number of Fluorine?",
    options: [
      { id: 'A', text: '7' },
      { id: 'B', text: '8' },
      { id: 'C', text: '9' },
      { id: 'D', text: '10' }
    ],
    correctAnswer: 'C',
    difficulty: 'easy'
  },
  {
    id: 56,
    question: "Which of these is a transition metal?",
    options: [
      { id: 'A', text: 'Sodium' },
      { id: 'B', text: 'Iron' },
      { id: 'C', text: 'Sulfur' },
      { id: 'D', text: 'Neon' }
    ],
    correctAnswer: 'B',
    difficulty: 'easy'
  },
  {
    id: 57,
    question: "What is the chemical formula for methane?",
    options: [
      { id: 'A', text: 'CH4' },
      { id: 'B', text: 'C2H6' },
      { id: 'C', text: 'C3H8' },
      { id: 'D', text: 'C4H10' }
    ],
    correctAnswer: 'A',
    difficulty: 'easy'
  },
  {
    id: 58,
    question: "Which element has the chemical symbol 'P'?",
    options: [
      { id: 'A', text: 'Potassium' },
      { id: 'B', text: 'Phosphorus' },
      { id: 'C', text: 'Platinum' },
      { id: 'D', text: 'Palladium' }
    ],
    correctAnswer: 'B',
    difficulty: 'easy'
  },
  {
    id: 59,
    question: "What is the atomic number of Lithium?",
    options: [
      { id: 'A', text: '1' },
      { id: 'B', text: '2' },
      { id: 'C', text: '3' },
      { id: 'D', text: '4' }
    ],
    correctAnswer: 'C',
    difficulty: 'easy'
  },
  {
    id: 60,
    question: "Which of these is a liquid at room temperature?",
    options: [
      { id: 'A', text: 'Bromine' },
      { id: 'B', text: 'Iron' },
      { id: 'C', text: 'Sulfur' },
      { id: 'D', text: 'Helium' }
    ],
    correctAnswer: 'A',
    difficulty: 'easy'
  },
  {
    id: 61,
    question: "What is the chemical symbol for Boron?",
    options: [
      { id: 'A', text: 'B' },
      { id: 'B', text: 'Br' },
      { id: 'C', text: 'Be' },
      { id: 'D', text: 'Ba' }
    ],
    correctAnswer: 'A',
    difficulty: 'easy'
  },
  {
    id: 62,
    question: "Which element has the chemical symbol 'K'?",
    options: [
      { id: 'A', text: 'Krypton' },
      { id: 'B', text: 'Potassium' },
      { id: 'C', text: 'Calcium' },
      { id: 'D', text: 'Krypton' }
    ],
    correctAnswer: 'B',
    difficulty: 'easy'
  },
  {
    id: 63,
    question: "What is the atomic number of Boron?",
    options: [
      { id: 'A', text: '3' },
      { id: 'B', text: '4' },
      { id: 'C', text: '5' },
      { id: 'D', text: '6' }
    ],
    correctAnswer: 'C',
    difficulty: 'easy'
  },
  {
    id: 64,
    question: "Which of these is a halogen?",
    options: [
      { id: 'A', text: 'Bromine' },
      { id: 'B', text: 'Magnesium' },
      { id: 'C', text: 'Argon' },
      { id: 'D', text: 'Calcium' }
    ],
    correctAnswer: 'A',
    difficulty: 'easy'
  },
  {
    id: 65,
    question: "What is the chemical formula for ammonia?",
    options: [
      { id: 'A', text: 'NH3' },
      { id: 'B', text: 'N2H4' },
      { id: 'C', text: 'NO2' },
      { id: 'D', text: 'N2O' }
    ],
    correctAnswer: 'A',
    difficulty: 'easy'
  },
  {
    id: 66,
    question: "Which element has the chemical symbol 'Si'?",
    options: [
      { id: 'A', text: 'Silver' },
      { id: 'B', text: 'Silicon' },
      { id: 'C', text: 'Sulfur' },
      { id: 'D', text: 'Sodium' }
    ],
    correctAnswer: 'B',
    difficulty: 'easy'
  },
  {
    id: 67,
    question: "What is the atomic number of Magnesium?",
    options: [
      { id: 'A', text: '10' },
      { id: 'B', text: '11' },
      { id: 'C', text: '12' },
      { id: 'D', text: '13' }
    ],
    correctAnswer: 'C',
    difficulty: 'easy'
  },
  {
    id: 68,
    question: "Which of these elements is a noble gas?",
    options: [
      { id: 'A', text: 'Krypton' },
      { id: 'B', text: 'Bromine' },
      { id: 'C', text: 'Sulfur' },
      { id: 'D', text: 'Calcium' }
    ],
    correctAnswer: 'A',
    difficulty: 'easy'
  },
  {
    id: 69,
    question: "What is the chemical symbol for Phosphorus?",
    options: [
      { id: 'A', text: 'P' },
      { id: 'B', text: 'Ph' },
      { id: 'C', text: 'Po' },
      { id: 'D', text: 'Pt' }
    ],
    correctAnswer: 'A',
    difficulty: 'easy'
  },
  {
    id: 70,
    question: "Which element has the chemical symbol 'Br'?",
    options: [
      { id: 'A', text: 'Boron' },
      { id: 'B', text: 'Bromine' },
      { id: 'C', text: 'Beryllium' },
      { id: 'D', text: 'Barium' }
    ],
    correctAnswer: 'B',
    difficulty: 'easy'
  },
  {
    id: 71,
    question: "What is the atomic number of Silicon?",
    options: [
      { id: 'A', text: '12' },
      { id: 'B', text: '13' },
      { id: 'C', text: '14' },
      { id: 'D', text: '15' }
    ],
    correctAnswer: 'C',
    difficulty: 'easy'
  },
  {
    id: 72,
    question: "Which of these is a metal?",
    options: [
      { id: 'A', text: 'Sulfur' },
      { id: 'B', text: 'Zinc' },
      { id: 'C', text: 'Chlorine' },
      { id: 'D', text: 'Neon' }
    ],
    correctAnswer: 'B',
    difficulty: 'easy'
  },
  {
    id: 73,
    question: "What is the chemical formula for ethanol?",
    options: [
      { id: 'A', text: 'C2H5OH' },
      { id: 'B', text: 'CH3OH' },
      { id: 'C', text: 'C3H7OH' },
      { id: 'D', text: 'C4H9OH' }
    ],
    correctAnswer: 'A',
    difficulty: 'easy'
  },
  {
    id: 74,
    question: "Which element has the chemical symbol 'Ar'?",
    options: [
      { id: 'A', text: 'Argon' },
      { id: 'B', text: 'Arsenic' },
      { id: 'C', text: 'Aluminum' },
      { id: 'D', text: 'Antimony' }
    ],
    correctAnswer: 'A',
    difficulty: 'easy'
  },
  {
    id: 75,
    question: "What is the atomic number of Phosphorus?",
    options: [
      { id: 'A', text: '13' },
      { id: 'B', text: '14' },
      { id: 'C', text: '15' },
      { id: 'D', text: '16' }
    ],
    correctAnswer: 'C',
    difficulty: 'easy'
  },
  {
    id: 76,
    question: "Which of these is a non-metal?",
    options: [
      { id: 'A', text: 'Iron' },
      { id: 'B', text: 'Oxygen' },
      { id: 'C', text: 'Aluminum' },
      { id: 'D', text: 'Magnesium' }
    ],
    correctAnswer: 'B',
    difficulty: 'easy'
  },
  {
    id: 77,
    question: "What is the chemical symbol for Beryllium?",
    options: [
      { id: 'A', text: 'Be' },
      { id: 'B', text: 'B' },
      { id: 'C', text: 'Br' },
      { id: 'D', text: 'Ba' }
    ],
    correctAnswer: 'A',
    difficulty: 'easy'
  },
  {
    id: 78,
    question: "Which element has the chemical symbol 'I'?",
    options: [
      { id: 'A', text: 'Iron' },
      { id: 'B', text: 'Iodine' },
      { id: 'C', text: 'Indium' },
      { id: 'D', text: 'Iridium' }
    ],
    correctAnswer: 'B',
    difficulty: 'easy'
  },
  {
    id: 79,
    question: "What is the atomic number of Beryllium?",
    options: [
      { id: 'A', text: '2' },
      { id: 'B', text: '3' },
      { id: 'C', text: '4' },
      { id: 'D', text: '5' }
    ],
    correctAnswer: 'C',
    difficulty: 'easy'
  },
  {
    id: 80,
    question: "Which of these is a halogen?",
    options: [
      { id: 'A', text: 'Iodine' },
      { id: 'B', text: 'Magnesium' },
      { id: 'C', text: 'Argon' },
      { id: 'D', text: 'Calcium' }
    ],
    correctAnswer: 'A',
    difficulty: 'easy'
  },
  {
    id: 81,
    question: "What is the chemical formula for sodium hydroxide?",
    options: [
      { id: 'A', text: 'NaOH' },
      { id: 'B', text: 'NaCl' },
      { id: 'C', text: 'Na2CO3' },
      { id: 'D', text: 'NaHCO3' }
    ],
    correctAnswer: 'A',
    difficulty: 'easy'
  },
  {
    id: 82,
    question: "Which element has the chemical symbol 'Ne'?",
    options: [
      { id: 'A', text: 'Neon' },
      { id: 'B', text: 'Nickel' },
      { id: 'C', text: 'Nitrogen' },
      { id: 'D', text: 'Sodium' }
    ],
    correctAnswer: 'A',
    difficulty: 'easy'
  },
  {
    id: 83,
    question: "What is the atomic number of Aluminum?",
    options: [
      { id: 'A', text: '11' },
      { id: 'B', text: '12' },
      { id: 'C', text: '13' },
      { id: 'D', text: '14' }
    ],
    correctAnswer: 'C',
    difficulty: 'easy'
  },
  {
    id: 84,
    question: "Which of these elements is a noble gas?",
    options: [
      { id: 'A', text: 'Xenon' },
      { id: 'B', text: 'Bromine' },
      { id: 'C', text: 'Sulfur' },
      { id: 'D', text: 'Calcium' }
    ],
    correctAnswer: 'A',
    difficulty: 'easy'
  },
  {
    id: 85,
    question: "What is the chemical symbol for Sulfur?",
    options: [
      { id: 'A', text: 'S' },
      { id: 'B', text: 'Su' },
      { id: 'C', text: 'Sl' },
      { id: 'D', text: 'Sr' }
    ],
    correctAnswer: 'A',
    difficulty: 'easy'
  },
  {
    id: 86,
    question: "Which element has the chemical symbol 'Xe'?",
    options: [
      { id: 'A', text: 'Xenon' },
      { id: 'B', text: 'Xerium' },
      { id: 'C', text: 'Xanthium' },
      { id: 'D', text: 'Xylene' }
    ],
    correctAnswer: 'A',
    difficulty: 'easy'
  },
  {
    id: 87,
    question: "What is the atomic number of Sulfur?",
    options: [
      { id: 'A', text: '14' },
      { id: 'B', text: '15' },
      { id: 'C', text: '16' },
      { id: 'D', text: '17' }
    ],
    correctAnswer: 'C',
    difficulty: 'easy'
  },
  {
    id: 88,
    question: "Which of these is a metal?",
    options: [
      { id: 'A', text: 'Sulfur' },
      { id: 'B', text: 'Copper' },
      { id: 'C', text: 'Chlorine' },
      { id: 'D', text: 'Neon' }
    ],
    correctAnswer: 'B',
    difficulty: 'easy'
  },
  {
    id: 89,
    question: "What is the chemical formula for baking soda?",
    options: [
      { id: 'A', text: 'NaHCO3' },
      { id: 'B', text: 'NaCl' },
      { id: 'C', text: 'NaOH' },
      { id: 'D', text: 'Na2CO3' }
    ],
    correctAnswer: 'A',
    difficulty: 'easy'
  },
  {
    id: 90,
    question: "Which element has the chemical symbol 'Kr'?",
    options: [
      { id: 'A', text: 'Krypton' },
      { id: 'B', text: 'Potassium' },
      { id: 'C', text: 'Krypton' },
      { id: 'D', text: 'Krypton' }
    ],
    correctAnswer: 'A',
    difficulty: 'easy'
  },
  {
    id: 91,
    question: "What is the atomic number of Chlorine?",
    options: [
      { id: 'A', text: '15' },
      { id: 'B', text: '16' },
      { id: 'C', text: '17' },
      { id: 'D', text: '18' }
    ],
    correctAnswer: 'C',
    difficulty: 'easy'
  },
  {
    id: 92,
    question: "Which of these is a non-metal?",
    options: [
      { id: 'A', text: 'Iron' },
      { id: 'B', text: 'Sulfur' },
      { id: 'C', text: 'Aluminum' },
      { id: 'D', text: 'Magnesium' }
    ],
    correctAnswer: 'B',
    difficulty: 'easy'
  },
  {
    id: 93,
    question: "What is the chemical symbol for Lithium?",
    options: [
      { id: 'A', text: 'Li' },
      { id: 'B', text: 'L' },
      { id: 'C', text: 'La' },
      { id: 'D', text: 'Le' }
    ],
    correctAnswer: 'A',
    difficulty: 'easy'
  },
  {
    id: 94,
    question: "Which element has the chemical symbol 'Rn'?",
    options: [
      { id: 'A', text: 'Radon' },
      { id: 'B', text: 'Radium' },
      { id: 'C', text: 'Rubidium' },
      { id: 'D', text: 'Ruthenium' }
    ],
    correctAnswer: 'A',
    difficulty: 'easy'
  },
  {
    id: 95,
    question: "What is the atomic number of Argon?",
    options: [
      { id: 'A', text: '16' },
      { id: 'B', text: '17' },
      { id: 'C', text: '18' },
      { id: 'D', text: '19' }
    ],
    correctAnswer: 'C',
    difficulty: 'easy'
  },
  {
    id: 96,
    question: "Which of these is a metal?",
    options: [
      { id: 'A', text: 'Sulfur' },
      { id: 'B', text: 'Nickel' },
      { id: 'C', text: 'Chlorine' },
      { id: 'D', text: 'Neon' }
    ],
    correctAnswer: 'B',
    difficulty: 'easy'
  },
  {
    id: 97,
    question: "What is the chemical formula for vinegar (acetic acid)?",
    options: [
      { id: 'A', text: 'CH3COOH' },
      { id: 'B', text: 'C2H5OH' },
      { id: 'C', text: 'HCl' },
      { id: 'D', text: 'H2SO4' }
    ],
    correctAnswer: 'A',
    difficulty: 'easy'
  },
  {
    id: 98,
    question: "Which element has the chemical symbol 'He'?",
    options: [
      { id: 'A', text: 'Hydrogen' },
      { id: 'B', text: 'Helium' },
      { id: 'C', text: 'Hafnium' },
      { id: 'D', text: 'Holmium' }
    ],
    correctAnswer: 'B',
    difficulty: 'easy'
  },
  {
    id: 99,
    question: "What is the atomic number of Potassium?",
    options: [
      { id: 'A', text: '17' },
      { id: 'B', text: '18' },
      { id: 'C', text: '19' },
      { id: 'D', text: '20' }
    ],
    correctAnswer: 'C',
    difficulty: 'easy'
  },
  {
    id: 100,
    question: "What is the pH of a neutral solution?",
    options: [
      { id: 'A', text: '0' },
      { id: 'B', text: '7' },
      { id: 'C', text: '14' },
      { id: 'D', text: '10' }
    ],
    correctAnswer: 'B',
    difficulty: 'easy'
  },
  {
    id: 101,
    question: "What type of bond is formed between sodium and chlorine in table salt?",
    options: [
      { id: 'A', text: 'Covalent bond' },
      { id: 'B', text: 'Hydrogen bond' },
      { id: 'C', text: 'Ionic bond' },
      { id: 'D', text: 'Metallic bond' }
    ],
    correctAnswer: 'C',
    difficulty: 'medium'
  },
  {
    id: 102,
    question: "What is the molecular formula for glucose?",
    options: [
      { id: 'A', text: 'C6H12O6' },
      { id: 'B', text: 'CH3COOH' },
      { id: 'C', text: 'C12H22O11' },
      { id: 'D', text: 'C2H5OH' }
    ],
    correctAnswer: 'A',
    difficulty: 'medium'
  },
  {
    id: 103,
    question: "Which gas, discovered on the sun before Earth, is the second most abundant element in the universe?",
    options: [
      { id: 'A', text: 'Hydrogen' },
      { id: 'B', text: 'Helium' },
      { id: 'C', text: 'Oxygen' },
      { id: 'D', text: 'Nitrogen' }
    ],
    correctAnswer: 'B',
    difficulty: 'medium'
  },
  {
    id: 104,
    question: "What is the primary source of energy for Earth's climate system?",
    options: [
      { id: 'A', text: 'Geothermal heat' },
      { id: 'B', text: 'Solar radiation' },
      { id: 'C', text: 'Tidal forces' },
      { id: 'D', text: 'Nuclear fusion' }
    ],
    correctAnswer: 'B',
    difficulty: 'medium'
  },
  {
    id: 105,
    question: "What is the oxidation state of oxygen in H2O?",
    options: [
      { id: 'A', text: '+2' },
      { id: 'B', text: '-2' },
      { id: 'C', text: '0' },
      { id: 'D', text: '+1' }
    ],
    correctAnswer: 'B',
    difficulty: 'medium'
  },
  {
    id: 106,
    question: "Which of these elements has the highest electronegativity?",
    options: [
      { id: 'A', text: 'Sodium' },
      { id: 'B', text: 'Fluorine' },
      { id: 'C', text: 'Carbon' },
      { id: 'D', text: 'Magnesium' }
    ],
    correctAnswer: 'B',
    difficulty: 'medium'
  },
  {
    id: 107,
    question: "What is the molar mass of CO2 (in g/mol)?",
    options: [
      { id: 'A', text: '28' },
      { id: 'B', text: '32' },
      { id: 'C', text: '44' },
      { id: 'D', text: '48' }
    ],
    correctAnswer: 'C',
    difficulty: 'medium'
  },
  {
    id: 108,
    question: "What type of reaction is 2H2 + O2 → 2H2O?",
    options: [
      { id: 'A', text: 'Decomposition' },
      { id: 'B', text: 'Synthesis' },
      { id: 'C', text: 'Single replacement' },
      { id: 'D', text: 'Double replacement' }
    ],
    correctAnswer: 'B',
    difficulty: 'medium'
  },
  {
    id: 109,
    question: "Which of these is a strong acid?",
    options: [
      { id: 'A', text: 'CH3COOH' },
      { id: 'B', text: 'HNO3' },
      { id: 'C', text: 'H2CO3' },
      { id: 'D', text: 'HF' }
    ],
    correctAnswer: 'B',
    difficulty: 'medium'
  },
  {
    id: 110,
    question: "What is the electron configuration of a sodium atom (Na)?",
    options: [
      { id: 'A', text: '1s² 2s² 2p⁶ 3s¹' },
      { id: 'B', text: '1s² 2s² 2p⁶ 3s²' },
      { id: 'C', text: '1s² 2s² 2p⁵' },
      { id: 'D', text: '1s² 2s² 2p⁶ 3p¹' }
    ],
    correctAnswer: 'A',
    difficulty: 'medium'
  },
  {
    id: 111,
    question: "What is the name of the compound Fe2O3?",
    options: [
      { id: 'A', text: 'Iron(II) oxide' },
      { id: 'B', text: 'Iron(III) oxide' },
      { id: 'C', text: 'Ferric oxide' },
      { id: 'D', text: 'Both B and C' }
    ],
    correctAnswer: 'D',
    difficulty: 'medium'
  },
  {
    id: 112,
    question: "What is the pH of a 0.01 M solution of HCl?",
    options: [
      { id: 'A', text: '1' },
      { id: 'B', text: '2' },
      { id: 'C', text: '3' },
      { id: 'D', text: '4' }
    ],
    correctAnswer: 'B',
    difficulty: 'medium'
  },
  {
    id: 113,
    question: "Which element is in Group 2 and Period 3 of the periodic table?",
    options: [
      { id: 'A', text: 'Magnesium' },
      { id: 'B', text: 'Sodium' },
      { id: 'C', text: 'Aluminum' },
      { id: 'D', text: 'Calcium' }
    ],
    correctAnswer: 'A',
    difficulty: 'medium'
  },
  {
    id: 114,
    question: "What gas is produced when an acid reacts with a carbonate?",
    options: [
      { id: 'A', text: 'Oxygen' },
      { id: 'B', text: 'Hydrogen' },
      { id: 'C', text: 'Carbon dioxide' },
      { id: 'D', text: 'Nitrogen' }
    ],
    correctAnswer: 'C',
    difficulty: 'medium'
  },
  {
    id: 115,
    question: "What is the shape of a methane (CH4) molecule?",
    options: [
      { id: 'A', text: 'Linear' },
      { id: 'B', text: 'Trigonal planar' },
      { id: 'C', text: 'Tetrahedral' },
      { id: 'D', text: 'Bent' }
    ],
    correctAnswer: 'C',
    difficulty: 'medium'
  },
  {
    id: 116,
    question: "Which of these is a weak base?",
    options: [
      { id: 'A', text: 'NaOH' },
      { id: 'B', text: 'KOH' },
      { id: 'C', text: 'NH3' },
      { id: 'D', text: 'Ca(OH)2' }
    ],
    correctAnswer: 'C',
    difficulty: 'medium'
  },
  {
    id: 117,
    question: "What is the hybridization of the carbon atom in CO2?",
    options: [
      { id: 'A', text: 'sp' },
      { id: 'B', text: 'sp²' },
      { id: 'C', text: 'sp³' },
      { id: 'D', text: 'sp³d' }
    ],
    correctAnswer: 'A',
    difficulty: 'medium'
  },
  {
    id: 118,
    question: "What is the product when sodium reacts with water?",
    options: [
      { id: 'A', text: 'Sodium chloride' },
      { id: 'B', text: 'Sodium hydroxide' },
      { id: 'C', text: 'Sodium oxide' },
      { id: 'D', text: 'Sodium sulfate' }
    ],
    correctAnswer: 'B',
    difficulty: 'medium'
  },
  {
    id: 119,
    question: "What is the boiling point of water in Celsius at standard pressure?",
    options: [
      { id: 'A', text: '0°C' },
      { id: 'B', text: '50°C' },
      { id: 'C', text: '100°C' },
      { id: 'D', text: '150°C' }
    ],
    correctAnswer: 'C',
    difficulty: 'medium'
  },
  {
    id: 120,
    question: "Which element forms a basic oxide?",
    options: [
      { id: 'A', text: 'Sulfur' },
      { id: 'B', text: 'Carbon' },
      { id: 'C', text: 'Sodium' },
      { id: 'D', text: 'Nitrogen' }
    ],
    correctAnswer: 'C',
    difficulty: 'medium'
  },
  {
    id: 121,
    question: "What is the molar mass of NaCl (in g/mol)?",
    options: [
      { id: 'A', text: '35.5' },
      { id: 'B', text: '58.5' },
      { id: 'C', text: '74.5' },
      { id: 'D', text: '85.5' }
    ],
    correctAnswer: 'B',
    difficulty: 'medium'
  },
  {
    id: 122,
    question: "What type of reaction is represented by CH4 + 2O2 → CO2 + 2H2O?",
    options: [
      { id: 'A', text: 'Combustion' },
      { id: 'B', text: 'Decomposition' },
      { id: 'C', text: 'Synthesis' },
      { id: 'D', text: 'Displacement' }
    ],
    correctAnswer: 'A',
    difficulty: 'medium'
  },
  {
    id: 123,
    question: "What is the conjugate base of H2SO4?",
    options: [
      { id: 'A', text: 'HSO4⁻' },
      { id: 'B', text: 'SO4²⁻' },
      { id: 'C', text: 'H3SO4⁺' },
      { id: 'D', text: 'OH⁻' }
    ],
    correctAnswer: 'A',
    difficulty: 'medium'
  },
  {
    id: 124,
    question: "Which element is in the same period as chlorine but in Group 1?",
    options: [
      { id: 'A', text: 'Sodium' },
      { id: 'B', text: 'Potassium' },
      { id: 'C', text: 'Lithium' },
      { id: 'D', text: 'Rubidium' }
    ],
    correctAnswer: 'B',
    difficulty: 'medium'
  },
  {
    id: 125,
    question: "What is the name of the compound CaCO3?",
    options: [
      { id: 'A', text: 'Calcium carbonate' },
      { id: 'B', text: 'Calcium chloride' },
      { id: 'C', text: 'Calcium oxide' },
      { id: 'D', text: 'Calcium sulfate' }
    ],
    correctAnswer: 'A',
    difficulty: 'medium'
  },
  {
    id: 126,
    question: "What gas is produced during the electrolysis of water?",
    options: [
      { id: 'A', text: 'Nitrogen' },
      { id: 'B', text: 'Carbon dioxide' },
      { id: 'C', text: 'Hydrogen' },
      { id: 'D', text: 'Helium' }
    ],
    correctAnswer: 'C',
    difficulty: 'medium'
  },
  {
    id: 127,
    question: "What is the shape of an ammonia (NH3) molecule?",
    options: [
      { id: 'A', text: 'Linear' },
      { id: 'B', text: 'Trigonal pyramidal' },
      { id: 'C', text: 'Tetrahedral' },
      { id: 'D', text: 'Bent' }
    ],
    correctAnswer: 'B',
    difficulty: 'medium'
  },
  {
    id: 128,
    question: "Which of these is a strong base?",
    options: [
      { id: 'A', text: 'NH3' },
      { id: 'B', text: 'KOH' },
      { id: 'C', text: 'CH3NH2' },
      { id: 'D', text: 'H2O' }
    ],
    correctAnswer: 'B',
    difficulty: 'medium'
  },
  {
    id: 129,
    question: "What is the hybridization of the nitrogen atom in NH3?",
    options: [
      { id: 'A', text: 'sp' },
      { id: 'B', text: 'sp²' },
      { id: 'C', text: 'sp³' },
      { id: 'D', text: 'sp³d' }
    ],
    correctAnswer: 'C',
    difficulty: 'medium'
  },
  {
    id: 130,
    question: "What is the product when magnesium reacts with oxygen?",
    options: [
      { id: 'A', text: 'Magnesium chloride' },
      { id: 'B', text: 'Magnesium oxide' },
      { id: 'C', text: 'Magnesium hydroxide' },
      { id: 'D', text: 'Magnesium sulfate' }
    ],
    correctAnswer: 'B',
    difficulty: 'medium'
  },
  {
    id: 131,
    question: "What is the freezing point of water in Celsius at standard pressure?",
    options: [
      { id: 'A', text: '0°C' },
      { id: 'B', text: '100°C' },
      { id: 'C', text: '-10°C' },
      { id: 'D', text: '50°C' }
    ],
    correctAnswer: 'A',
    difficulty: 'medium'
  },
  {
    id: 132,
    question: "Which element forms an acidic oxide?",
    options: [
      { id: 'A', text: 'Sodium' },
      { id: 'B', text: 'Magnesium' },
      { id: 'C', text: 'Sulfur' },
      { id: 'D', text: 'Calcium' }
    ],
    correctAnswer: 'C',
    difficulty: 'medium'
  },
  {
    id: 133,
    question: "What is the molar mass of H2SO4 (in g/mol)?",
    options: [
      { id: 'A', text: '98' },
      { id: 'B', text: '82' },
      { id: 'C', text: '64' },
      { id: 'D', text: '110' }
    ],
    correctAnswer: 'A',
    difficulty: 'medium'
  },
  {
    id: 134,
    question: "What type of reaction is represented by 2NaCl → 2Na + Cl2?",
    options: [
      { id: 'A', text: 'Synthesis' },
      { id: 'B', text: 'Decomposition' },
      { id: 'C', text: 'Combustion' },
      { id: 'D', text: 'Displacement' }
    ],
    correctAnswer: 'B',
    difficulty: 'medium'
  },
  {
    id: 135,
    question: "What is the conjugate acid of OH⁻?",
    options: [
      { id: 'A', text: 'H2O' },
      { id: 'B', text: 'H3O⁺' },
      { id: 'C', text: 'O²⁻' },
      { id: 'D', text: 'H⁺' }
    ],
    correctAnswer: 'A',
    difficulty: 'medium'
  },
  {
    id: 136,
    question: "Which element is in Group 17 and Period 2 of the periodic table?",
    options: [
      { id: 'A', text: 'Fluorine' },
      { id: 'B', text: 'Chlorine' },
      { id: 'C', text: 'Bromine' },
      { id: 'D', text: 'Iodine' }
    ],
    correctAnswer: 'A',
    difficulty: 'medium'
  },
  {
    id: 137,
    question: "What is the name of the compound Na2SO4?",
    options: [
      { id: 'A', text: 'Sodium sulfide' },
      { id: 'B', text: 'Sodium sulfate' },
      { id: 'C', text: 'Sodium sulfite' },
      { id: 'D', text: 'Sodium chloride' }
    ],
    correctAnswer: 'B',
    difficulty: 'medium'
  },
  {
    id: 138,
    question: "What gas is produced when zinc reacts with hydrochloric acid?",
    options: [
      { id: 'A', text: 'Oxygen' },
      { id: 'B', text: 'Carbon dioxide' },
      { id: 'C', text: 'Hydrogen' },
      { id: 'D', text: 'Nitrogen' }
    ],
    correctAnswer: 'C',
    difficulty: 'medium'
  },
  {
    id: 139,
    question: "What is the shape of a water (H2O) molecule?",
    options: [
      { id: 'A', text: 'Linear' },
      { id: 'B', text: 'Trigonal planar' },
      { id: 'C', text: 'Tetrahedral' },
      { id: 'D', text: 'Bent' }
    ],
    correctAnswer: 'D',
    difficulty: 'medium'
  },
  {
    id: 140,
    question: "Which of these is a weak acid?",
    options: [
      { id: 'A', text: 'HCl' },
      { id: 'B', text: 'HNO3' },
      { id: 'C', text: 'CH3COOH' },
      { id: 'D', text: 'H2SO4' }
    ],
    correctAnswer: 'C',
    difficulty: 'medium'
  },
  {
    id: 141,
    question: "What is the hybridization of the oxygen atom in H2O?",
    options: [
      { id: 'A', text: 'sp' },
      { id: 'B', text: 'sp²' },
      { id: 'C', text: 'sp³' },
      { id: 'D', text: 'sp³d' }
    ],
    correctAnswer: 'C',
    difficulty: 'medium'
  },
  {
    id: 142,
    question: "What is the product when calcium reacts with water?",
    options: [
      { id: 'A', text: 'Calcium chloride' },
      { id: 'B', text: 'Calcium hydroxide' },
      { id: 'C', text: 'Calcium oxide' },
      { id: 'D', text: 'Calcium sulfate' }
    ],
    correctAnswer: 'B',
    difficulty: 'medium'
  },
  {
    id: 143,
    question: "What is the boiling point of ethanol in Celsius at standard pressure?",
    options: [
      { id: 'A', text: '78°C' },
      { id: 'B', text: '100°C' },
      { id: 'C', text: '50°C' },
      { id: 'D', text: '120°C' }
    ],
    correctAnswer: 'A',
    difficulty: 'medium'
  },
  {
    id: 144,
    question: "Which element forms a neutral oxide?",
    options: [
      { id: 'A', text: 'Sulfur' },
      { id: 'B', text: 'Carbon' },
      { id: 'C', text: 'Nitrogen' },
      { id: 'D', text: 'Calcium' }
    ],
    correctAnswer: 'B',
    difficulty: 'medium'
  },
  {
    id: 145,
    question: "What is the molar mass of NH3 (in g/mol)?",
    options: [
      { id: 'A', text: '14' },
      { id: 'B', text: '17' },
      { id: 'C', text: '28' },
      { id: 'D', text: '32' }
    ],
    correctAnswer: 'B',
    difficulty: 'medium'
  },
  {
    id: 146,
    question: "What type of reaction is represented by Zn + CuSO4 → ZnSO4 + Cu?",
    options: [
      { id: 'A', text: 'Synthesis' },
      { id: 'B', text: 'Decomposition' },
      { id: 'C', text: 'Single replacement' },
      { id: 'D', text: 'Double replacement' }
    ],
    correctAnswer: 'C',
    difficulty: 'medium'
  },
  {
    id: 147,
    question: "What is the conjugate base of NH4⁺?",
    options: [
      { id: 'A', text: 'NH3' },
      { id: 'B', text: 'NH2⁻' },
      { id: 'C', text: 'H3O⁺' },
      { id: 'D', text: 'OH⁻' }
    ],
    correctAnswer: 'A',
    difficulty: 'medium'
  },
  {
    id: 148,
    question: "Which element is in Group 1 and Period 4 of the periodic table?",
    options: [
      { id: 'A', text: 'Sodium' },
      { id: 'B', text: 'Potassium' },
      { id: 'C', text: 'Lithium' },
      { id: 'D', text: 'Rubidium' }
    ],
    correctAnswer: 'B',
    difficulty: 'medium'
  },
  {
    id: 149,
    question: "What is the name of the compound MgCl2?",
    options: [
      { id: 'A', text: 'Magnesium chloride' },
      { id: 'B', text: 'Magnesium chlorate' },
      { id: 'C', text: 'Magnesium carbonate' },
      { id: 'D', text: 'Magnesium oxide' }
    ],
    correctAnswer: 'A',
    difficulty: 'medium'
  },
  {
    id: 150,
    question: "What gas is produced when sodium carbonate reacts with hydrochloric acid?",
    options: [
      { id: 'A', text: 'Oxygen' },
      { id: 'B', text: 'Carbon dioxide' },
      { id: 'C', text: 'Hydrogen' },
      { id: 'D', text: 'Nitrogen' }
    ],
    correctAnswer: 'B',
    difficulty: 'medium'
  },
  {
    id: 151,
    question: "What is the shape of a carbon dioxide (CO2) molecule?",
    options: [
      { id: 'A', text: 'Linear' },
      { id: 'B', text: 'Trigonal planar' },
      { id: 'C', text: 'Tetrahedral' },
      { id: 'D', text: 'Bent' }
    ],
    correctAnswer: 'A',
    difficulty: 'medium'
  },
  {
    id: 152,
    question: "Which of these is a strong acid?",
    options: [
      { id: 'A', text: 'H2CO3' },
      { id: 'B', text: 'HCl' },
      { id: 'C', text: 'HF' },
      { id: 'D', text: 'CH3COOH' }
    ],
    correctAnswer: 'B',
    difficulty: 'medium'
  },
  {
    id: 153,
    question: "What is the hybridization of the carbon atom in CH4?",
    options: [
      { id: 'A', text: 'sp' },
      { id: 'B', text: 'sp²' },
      { id: 'C', text: 'sp³' },
      { id: 'D', text: 'sp³d' }
    ],
    correctAnswer: 'C',
    difficulty: 'medium'
  },
  {
    id: 154,
    question: "What is the product when aluminum reacts with oxygen?",
    options: [
      { id: 'A', text: 'Aluminum chloride' },
      { id: 'B', text: 'Aluminum oxide' },
      { id: 'C', text: 'Aluminum hydroxide' },
      { id: 'D', text: 'Aluminum sulfate' }
    ],
    correctAnswer: 'B',
    difficulty: 'medium'
  },
  {
    id: 155,
    question: "What is the boiling point of methanol in Celsius at standard pressure?",
    options: [
      { id: 'A', text: '65°C' },
      { id: 'B', text: '78°C' },
      { id: 'C', text: '100°C' },
      { id: 'D', text: '120°C' }
    ],
    correctAnswer: 'A',
    difficulty: 'medium'
  },
  {
    id: 156,
    question: "Which element forms an amphoteric oxide?",
    options: [
      { id: 'A', text: 'Sulfur' },
      { id: 'B', text: 'Aluminum' },
      { id: 'C', text: 'Sodium' },
      { id: 'D', text: 'Calcium' }
    ],
    correctAnswer: 'B',
    difficulty: 'medium'
  },
  {
    id: 157,
    question: "What is the molar mass of CaCO3 (in g/mol)?",
    options: [
      { id: 'A', text: '60' },
      { id: 'B', text: '80' },
      { id: 'C', text: '100' },
      { id: 'D', text: '120' }
    ],
    correctAnswer: 'C',
    difficulty: 'medium'
  },
  {
    id: 158,
    question: "What type of reaction is represented by NaCl + AgNO3 → NaNO3 + AgCl?",
    options: [
      { id: 'A', text: 'Synthesis' },
      { id: 'B', text: 'Decomposition' },
      { id: 'C', text: 'Single replacement' },
      { id: 'D', text: 'Double replacement' }
    ],
    correctAnswer: 'D',
    difficulty: 'medium'
  },
  {
    id: 159,
    question: "What is the conjugate acid of HCO3⁻?",
    options: [
      { id: 'A', text: 'H2CO3' },
      { id: 'B', text: 'CO3²⁻' },
      { id: 'C', text: 'H3O⁺' },
      { id: 'D', text: 'OH⁻' }
    ],
    correctAnswer: 'A',
    difficulty: 'medium'
  },
  {
    id: 160,
    question: "Which element is in Group 18 and Period 3 of the periodic table?",
    options: [
      { id: 'A', text: 'Helium' },
      { id: 'B', text: 'Neon' },
      { id: 'C', text: 'Argon' },
      { id: 'D', text: 'Krypton' }
    ],
    correctAnswer: 'C',
    difficulty: 'medium'
  },
  {
    id: 161,
    question: "What is the name of the compound K2CO3?",
    options: [
      { id: 'A', text: 'Potassium carbonate' },
      { id: 'B', text: 'Potassium chloride' },
      { id: 'C', text: 'Potassium oxide' },
      { id: 'D', text: 'Potassium sulfate' }
    ],
    correctAnswer: 'A',
    difficulty: 'medium'
  },
  {
    id: 162,
    question: "What gas is produced when magnesium reacts with sulfuric acid?",
    options: [
      { id: 'A', text: 'Oxygen' },
      { id: 'B', text: 'Carbon dioxide' },
      { id: 'C', text: 'Hydrogen' },
      { id: 'D', text: 'Nitrogen' }
    ],
    correctAnswer: 'C',
    difficulty: 'medium'
  },
  {
    id: 163,
    question: "What is the shape of a sulfur dioxide (SO2) molecule?",
    options: [
      { id: 'A', text: 'Linear' },
      { id: 'B', text: 'Trigonal planar' },
      { id: 'C', text: 'Tetrahedral' },
      { id: 'D', text: 'Bent' }
    ],
    correctAnswer: 'D',
    difficulty: 'medium'
  },
  {
    id: 164,
    question: "Which of these is a weak base?",
    options: [
      { id: 'A', text: 'NaOH' },
      { id: 'B', text: 'KOH' },
      { id: 'C', text: 'CH3NH2' },
      { id: 'D', text: 'Ca(OH)2' }
    ],
    correctAnswer: 'C',
    difficulty: 'medium'
  },
  {
    id: 165,
    question: "What is the hybridization of the sulfur atom in SO2?",
    options: [
      { id: 'A', text: 'sp' },
      { id: 'B', text: 'sp²' },
      { id: 'C', text: 'sp³' },
      { id: 'D', text: 'sp³d' }
    ],
    correctAnswer: 'B',
    difficulty: 'medium'
  },
  {
    id: 166,
    question: "What is the product when potassium reacts with oxygen?",
    options: [
      { id: 'A', text: 'Potassium chloride' },
      { id: 'B', text: 'Potassium oxide' },
      { id: 'C', text: 'Potassium hydroxide' },
      { id: 'D', text: 'Potassium sulfate' }
    ],
    correctAnswer: 'B',
    difficulty: 'medium'
  },
  {
    id: 167,
    question: "What is the boiling point of acetone in Celsius at standard pressure?",
    options: [
      { id: 'A', text: '56°C' },
      { id: 'B', text: '78°C' },
      { id: 'C', text: '100°C' },
      { id: 'D', text: '120°C' }
    ],
    correctAnswer: 'A',
    difficulty: 'medium'
  },
  {
    id: 168,
    question: "Which element forms a basic oxide?",
    options: [
      { id: 'A', text: 'Sulfur' },
      { id: 'B', text: 'Carbon' },
      { id: 'C', text: 'Potassium' },
      { id: 'D', text: 'Nitrogen' }
    ],
    correctAnswer: 'C',
    difficulty: 'medium'
  },
  {
    id: 169,
    question: "What is the molar mass of KCl (in g/mol)?",
    options: [
      { id: 'A', text: '39' },
      { id: 'B', text: '58.5' },
      { id: 'C', text: '74.5' },
      { id: 'D', text: '85.5' }
    ],
    correctAnswer: 'C',
    difficulty: 'medium'
  },
  {
    id: 170,
    question: "What type of reaction is represented by C6H12O6 → 2C2H5OH + 2CO2?",
    options: [
      { id: 'A', text: 'Fermentation' },
      { id: 'B', text: 'Combustion' },
      { id: 'C', text: 'Synthesis' },
      { id: 'D', text: 'Displacement' }
    ],
    correctAnswer: 'A',
    difficulty: 'medium'
  },
  {
    id: 171,
    question: "What is the conjugate base of HPO4²⁻?",
    options: [
      { id: 'A', text: 'H2PO4⁻' },
      { id: 'B', text: 'PO4³⁻' },
      { id: 'C', text: 'H3PO4' },
      { id: 'D', text: 'OH⁻' }
    ],
    correctAnswer: 'B',
    difficulty: 'medium'
  },
  {
    id: 172,
    question: "Which element is in Group 14 and Period 2 of the periodic table?",
    options: [
      { id: 'A', text: 'Carbon' },
      { id: 'B', text: 'Silicon' },
      { id: 'C', text: 'Germanium' },
      { id: 'D', text: 'Tin' }
    ],
    correctAnswer: 'A',
    difficulty: 'medium'
  },
  {
    id: 173,
    question: "What is the name of the compound FeCl3?",
    options: [
      { id: 'A', text: 'Iron(II) chloride' },
      { id: 'B', text: 'Iron(III) chloride' },
      { id: 'C', text: 'Ferric chloride' },
      { id: 'D', text: 'Both B and C' }
    ],
    correctAnswer: 'D',
    difficulty: 'medium'
  },
  {
    id: 174,
    question: "What gas is produced when calcium carbonate is heated?",
    options: [
      { id: 'A', text: 'Oxygen' },
      { id: 'B', text: 'Carbon dioxide' },
      { id: 'C', text: 'Hydrogen' },
      { id: 'D', text: 'Nitrogen' }
    ],
    correctAnswer: 'B',
    difficulty: 'medium'
  },
  {
    id: 175,
    question: "What is the shape of a boron trifluoride (BF3) molecule?",
    options: [
      { id: 'A', text: 'Linear' },
      { id: 'B', text: 'Trigonal planar' },
      { id: 'C', text: 'Tetrahedral' },
      { id: 'D', text: 'Bent' }
    ],
    correctAnswer: 'B',
    difficulty: 'medium'
  },
  {
    id: 176,
    question: "Which of these is a strong acid?",
    options: [
      { id: 'A', text: 'H2SO4' },
      { id: 'B', text: 'H2CO3' },
      { id: 'C', text: 'HF' },
      { id: 'D', text: 'CH3COOH' }
    ],
    correctAnswer: 'A',
    difficulty: 'medium'
  },
  {
    id: 177,
    question: "What is the hybridization of the boron atom in BF3?",
    options: [
      { id: 'A', text: 'sp' },
      { id: 'B', text: 'sp²' },
      { id: 'C', text: 'sp³' },
      { id: 'D', text: 'sp³d' }
    ],
    correctAnswer: 'B',
    difficulty: 'medium'
  },
  {
    id: 178,
    question: "What is the product when sodium reacts with chlorine?",
    options: [
      { id: 'A', text: 'Sodium chloride' },
      { id: 'B', text: 'Sodium oxide' },
      { id: 'C', text: 'Sodium hydroxide' },
      { id: 'D', text: 'Sodium sulfate' }
    ],
    correctAnswer: 'A',
    difficulty: 'medium'
  },
  {
    id: 179,
    question: "What is the boiling point of benzene in Celsius at standard pressure?",
    options: [
      { id: 'A', text: '56°C' },
      { id: 'B', text: '80°C' },
      { id: 'C', text: '100°C' },
      { id: 'D', text: '120°C' }
    ],
    correctAnswer: 'B',
    difficulty: 'medium'
  },
  {
    id: 180,
    question: "Which element forms an acidic oxide?",
    options: [
      { id: 'A', text: 'Sodium' },
      { id: 'B', text: 'Magnesium' },
      { id: 'C', text: 'Nitrogen' },
      { id: 'D', text: 'Calcium' }
    ],
    correctAnswer: 'C',
    difficulty: 'medium'
  },
  {
    id: 181,
    question: "What is the molar mass of NaOH (in g/mol)?",
    options: [
      { id: 'A', text: '23' },
      { id: 'B', text: '40' },
      { id: 'C', text: '58' },
      { id: 'D', text: '74' }
    ],
    correctAnswer: 'B',
    difficulty: 'medium'
  },
  {
    id: 182,
    question: "What type of reaction is represented by 2H2O2 → 2H2O + O2?",
    options: [
      { id: 'A', text: 'Synthesis' },
      { id: 'B', text: 'Decomposition' },
      { id: 'C', text: 'Combustion' },
      { id: 'D', text: 'Displacement' }
    ],
    correctAnswer: 'B',
    difficulty: 'medium'
  },
  {
    id: 183,
    question: "What is the conjugate acid of NH3?",
    options: [
      { id: 'A', text: 'NH4⁺' },
      { id: 'B', text: 'NH2⁻' },
      { id: 'C', text: 'H3O⁺' },
      { id: 'D', text: 'OH⁻' }
    ],
    correctAnswer: 'A',
    difficulty: 'medium'
  },
  {
    id: 184,
    question: "Which element is in Group 16 and Period 2 of the periodic table?",
    options: [
      { id: 'A', text: 'Oxygen' },
      { id: 'B', text: 'Sulfur' },
      { id: 'C', text: 'Selenium' },
      { id: 'D', text: 'Tellurium' }
    ],
    correctAnswer: 'A',
    difficulty: 'medium'
  },
  {
    id: 185,
    question: "What is the name of the compound Al2(SO4)3?",
    options: [
      { id: 'A', text: 'Aluminum sulfide' },
      { id: 'B', text: 'Aluminum sulfate' },
      { id: 'C', text: 'Aluminum sulfite' },
      { id: 'D', text: 'Aluminum chloride' }
    ],
    correctAnswer: 'B',
    difficulty: 'medium'
  },
  {
    id: 186,
    question: "What gas is produced when iron reacts with hydrochloric acid?",
    options: [
      { id: 'A', text: 'Oxygen' },
      { id: 'B', text: 'Carbon dioxide' },
      { id: 'C', text: 'Hydrogen' },
      { id: 'D', text: 'Nitrogen' }
    ],
    correctAnswer: 'C',
    difficulty: 'medium'
  },
  {
    id: 187,
    question: "What is the shape of a phosphorus trichloride (PCl3) molecule?",
    options: [
      { id: 'A', text: 'Linear' },
      { id: 'B', text: 'Trigonal pyramidal' },
      { id: 'C', text: 'Tetrahedral' },
      { id: 'D', text: 'Bent' }
    ],
    correctAnswer: 'B',
    difficulty: 'medium'
  },
  {
    id: 188,
    question: "Which of these is a weak acid?",
    options: [
      { id: 'A', text: 'HCl' },
      { id: 'B', text: 'HNO3' },
      { id: 'C', text: 'H2CO3' },
      { id: 'D', text: 'H2SO4' }
    ],
    correctAnswer: 'C',
    difficulty: 'medium'
  },
  {
    id: 189,
    question: "What is the hybridization of the phosphorus atom in PCl3?",
    options: [
      { id: 'A', text: 'sp' },
      { id: 'B', text: 'sp²' },
      { id: 'C', text: 'sp³' },
      { id: 'D', text: 'sp³d' }
    ],
    correctAnswer: 'C',
    difficulty: 'medium'
  },
  {
    id: 190,
    question: "What is the product when magnesium reacts with chlorine?",
    options: [
      { id: 'A', text: 'Magnesium chloride' },
      { id: 'B', text: 'Magnesium oxide' },
      { id: 'C', text: 'Magnesium hydroxide' },
      { id: 'D', text: 'Magnesium sulfate' }
    ],
    correctAnswer: 'A',
    difficulty: 'medium'
  },
  {
    id: 191,
    question: "What is the boiling point of toluene in Celsius at standard pressure?",
    options: [
      { id: 'A', text: '80°C' },
      { id: 'B', text: '111°C' },
      { id: 'C', text: '100°C' },
      { id: 'D', text: '120°C' }
    ],
    correctAnswer: 'B',
    difficulty: 'medium'
  },
  {
    id: 192,
    question: "Which element forms a neutral oxide?",
    options: [
      { id: 'A', text: 'Sulfur' },
      { id: 'B', text: 'Nitrogen' },
      { id: 'C', text: 'Carbon' },
      { id: 'D', text: 'Calcium' }
    ],
    correctAnswer: 'C',
    difficulty: 'medium'
  },
  {
    id: 193,
    question: "What is the molar mass of CH4 (in g/mol)?",
    options: [
      { id: 'A', text: '12' },
      { id: 'B', text: '16' },
      { id: 'C', text: '28' },
      { id: 'D', text: '32' }
    ],
    correctAnswer: 'B',
    difficulty: 'medium'
  },
  {
    id: 194,
    question: "What type of reaction is represented by 2KClO3 → 2KCl + 3O2?",
    options: [
      { id: 'A', text: 'Synthesis' },
      { id: 'B', text: 'Decomposition' },
      { id: 'C', text: 'Combustion' },
      { id: 'D', text: 'Displacement' }
    ],
    correctAnswer: 'B',
    difficulty: 'medium'
  },
  {
    id: 195,
    question: "What is the conjugate base of HSO4⁻?",
    options: [
      { id: 'A', text: 'H2SO4' },
      { id: 'B', text: 'SO4²⁻' },
      { id: 'C', text: 'H3SO4⁺' },
      { id: 'D', text: 'OH⁻' }
    ],
    correctAnswer: 'B',
    difficulty: 'medium'
  },
  {
    id: 196,
    question: "Which element is in Group 15 and Period 2 of the periodic table?",
    options: [
      { id: 'A', text: 'Nitrogen' },
      { id: 'B', text: 'Phosphorus' },
      { id: 'C', text: 'Arsenic' },
      { id: 'D', text: 'Antimony' }
    ],
    correctAnswer: 'A',
    difficulty: 'medium'
  },
  {
    id: 197,
    question: "What is the name of the compound CuSO4?",
    options: [
      { id: 'A', text: 'Copper(I) sulfate' },
      { id: 'B', text: 'Copper(II) sulfate' },
      { id: 'C', text: 'Copper sulfite' },
      { id: 'D', text: 'Copper chloride' }
    ],
    correctAnswer: 'B',
    difficulty: 'medium'
  },
  {
    id: 198,
    question: "What gas is produced when sodium bicarbonate is heated?",
    options: [
      { id: 'A', text: 'Oxygen' },
      { id: 'B', text: 'Carbon dioxide' },
      { id: 'C', text: 'Hydrogen' },
      { id: 'D', text: 'Nitrogen' }
    ],
    correctAnswer: 'B',
    difficulty: 'medium'
  },
  {
    id: 199,
    question: "What is the shape of a sulfur hexafluoride (SF6) molecule?",
    options: [
      { id: 'A', text: 'Tetrahedral' },
      { id: 'B', text: 'Trigonal bipyramidal' },
      { id: 'C', text: 'Octahedral' },
      { id: 'D', text: 'Square planar' }
    ],
    correctAnswer: 'C',
    difficulty: 'medium'
  },
  {
    id: 200,
    question: "Which of these is a strong base?",
    options: [
      { id: 'A', text: 'NH3' },
      { id: 'B', text: 'CH3NH2' },
      { id: 'C', text: 'NaOH' },
      { id: 'D', text: 'H2O' }
    ],
    correctAnswer: 'C',
    difficulty: 'medium'
  },
  {
    id: 201,
    question: "What is the atomic mass unit (amu) approximately equal to?",
    options: [
      { id: 'A', text: 'Mass of a proton' },
      { id: 'B', text: 'Mass of an electron' },
      { id: 'C', text: 'Mass of a carbon-12 atom divided by 12' },
      { id: 'D', text: 'Mass of a neutron' }
    ],
    correctAnswer: 'C',
    difficulty: 'hard'
  },
  {
    id: 202,
    question: "Which scientist proposed the quantum theory?",
    options: [
      { id: 'A', text: 'Albert Einstein' },
      { id: 'B', text: 'Max Planck' },
      { id: 'C', text: 'Niels Bohr' },
      { id: 'D', text: 'Werner Heisenberg' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 203,
    question: "What is the name of the process where a solid turns directly into a gas?",
    options: [
      { id: 'A', text: 'Evaporation' },
      { id: 'B', text: 'Sublimation' },
      { id: 'C', text: 'Condensation' },
      { id: 'D', text: 'Deposition' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 204,
    question: "What is the primary source of energy for Earth's climate system?",
    options: [
      { id: 'A', text: 'Geothermal heat' },
      { id: 'B', text: 'Solar radiation' },
      { id: 'C', text: 'Tidal forces' },
      { id: 'D', text: 'Nuclear fusion' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 205,
    question: "What is the oxidation state of chlorine in ClO₄⁻?",
    options: [
      { id: 'A', text: '+5' },
      { id: 'B', text: '+7' },
      { id: 'C', text: '+3' },
      { id: 'D', text: '-1' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 206,
    question: "Which of these elements has the highest ionization energy?",
    options: [
      { id: 'A', text: 'Helium' },
      { id: 'B', text: 'Fluorine' },
      { id: 'C', text: 'Neon' },
      { id: 'D', text: 'Lithium' }
    ],
    correctAnswer: 'A',
    difficulty: 'hard'
  },
  {
    id: 207,
    question: "What is the equilibrium constant expression for the reaction 2A + B ⇌ 3C?",
    options: [
      { id: 'A', text: 'K = [C]³ / ([A]²[B])' },
      { id: 'B', text: 'K = ([A]²[B]) / [C]³' },
      { id: 'C', text: 'K = [C] / ([A][B])' },
      { id: 'D', text: 'K = ([A][B]) / [C]' }
    ],
    correctAnswer: 'A',
    difficulty: 'hard'
  },
  {
    id: 208,
    question: "What type of hybridization does the central atom in SF₆ exhibit?",
    options: [
      { id: 'A', text: 'sp³d' },
      { id: 'B', text: 'sp³d²' },
      { id: 'C', text: 'sp³' },
      { id: 'D', text: 'sp²' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 209,
    question: "What is the pH of a 0.001 M solution of H₂SO₄, assuming complete dissociation?",
    options: [
      { id: 'A', text: '1' },
      { id: 'B', text: '2' },
      { id: 'C', text: '3' },
      { id: 'D', text: '4' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 210,
    question: "What is the electron configuration of Fe³⁺?",
    options: [
      { id: 'A', text: '[Ar] 3d⁵' },
      { id: 'B', text: '[Ar] 4s² 3d³' },
      { id: 'C', text: '[Ar] 4s¹ 3d⁵' },
      { id: 'D', text: '[Ar] 3d⁶' }
    ],
    correctAnswer: 'A',
    difficulty: 'hard'
  },
  {
    id: 211,
    question: "What is the IUPAC name for CH₃CH₂COOH?",
    options: [
      { id: 'A', text: 'Ethanoic acid' },
      { id: 'B', text: 'Propanoic acid' },
      { id: 'C', text: 'Butanoic acid' },
      { id: 'D', text: 'Methanoic acid' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 212,
    question: "What is the standard enthalpy change for the formation of CO₂(g) if the reaction is C(s) + O₂(g) → CO₂(g), ΔH = -393.5 kJ/mol?",
    options: [
      { id: 'A', text: '-393.5 kJ/mol' },
      { id: 'B', text: '+393.5 kJ/mol' },
      { id: 'C', text: '0 kJ/mol' },
      { id: 'D', text: '-787 kJ/mol' }
    ],
    correctAnswer: 'A',
    difficulty: 'hard'
  },
  {
    id: 213,
    question: "Which of these compounds exhibits optical isomerism?",
    options: [
      { id: 'A', text: 'CH₃CH₃' },
      { id: 'B', text: 'CH₃CH(OH)CH₃' },
      { id: 'C', text: 'CH₃CH₂CH₂Cl' },
      { id: 'D', text: 'CH₃CHClCH₃' }
    ],
    correctAnswer: 'D',
    difficulty: 'hard'
  },
  {
    id: 214,
    question: "What is the rate law for a reaction that is first order in A and second order in B?",
    options: [
      { id: 'A', text: 'Rate = k[A][B]' },
      { id: 'B', text: 'Rate = k[A]²[B]' },
      { id: 'C', text: 'Rate = k[A][B]²' },
      { id: 'D', text: 'Rate = k[A]²[B]²' }
    ],
    correctAnswer: 'C',
    difficulty: 'hard'
  },
  {
    id: 215,
    question: "What is the hybridization of the central atom in XeF₄?",
    options: [
      { id: 'A', text: 'sp³' },
      { id: 'B', text: 'sp³d' },
      { id: 'C', text: 'sp³d²' },
      { id: 'D', text: 'sp²' }
    ],
    correctAnswer: 'C',
    difficulty: 'hard'
  },
  {
    id: 216,
    question: "What is the Ksp expression for Ag₂CrO₄?",
    options: [
      { id: 'A', text: 'Ksp = [Ag⁺][CrO₄²⁻]' },
      { id: 'B', text: 'Ksp = [Ag⁺]²[CrO₄²⁻]' },
      { id: 'C', text: 'Ksp = [Ag⁺][CrO₄²⁻]²' },
      { id: 'D', text: 'Ksp = [Ag⁺]²[CrO₄²⁻]²' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 217,
    question: "What is the shape of the XeF₄ molecule?",
    options: [
      { id: 'A', text: 'Tetrahedral' },
      { id: 'B', text: 'Square planar' },
      { id: 'C', text: 'Octahedral' },
      { id: 'D', text: 'Trigonal bipyramidal' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 218,
    question: "What is the oxidation state of manganese in KMnO₄?",
    options: [
      { id: 'A', text: '+5' },
      { id: 'B', text: '+6' },
      { id: 'C', text: '+7' },
      { id: 'D', text: '+8' }
    ],
    correctAnswer: 'C',
    difficulty: 'hard'
  },
  {
    id: 219,
    question: "Which of these is an example of a zero-order reaction?",
    options: [
      { id: 'A', text: 'Decomposition of NH₃ on a Pt surface' },
      { id: 'B', text: 'Radioactive decay' },
      { id: 'C', text: 'Reaction of H₂ and I₂ to form HI' },
      { id: 'D', text: 'Decomposition of N₂O₅' }
    ],
    correctAnswer: 'A',
    difficulty: 'hard'
  },
  {
    id: 220,
    question: "What is the bond order of O₂⁺ according to molecular orbital theory?",
    options: [
      { id: 'A', text: '1.5' },
      { id: 'B', text: '2.0' },
      { id: 'C', text: '2.5' },
      { id: 'D', text: '3.0' }
    ],
    correctAnswer: 'C',
    difficulty: 'hard'
  },
  {
    id: 221,
    question: "What is the IUPAC name for CH₃CH₂CH₂CHO?",
    options: [
      { id: 'A', text: 'Butanal' },
      { id: 'B', text: 'Propanal' },
      { id: 'C', text: 'Pentanal' },
      { id: 'D', text: 'Ethanal' }
    ],
    correctAnswer: 'A',
    difficulty: 'hard'
  },
  {
    id: 222,
    question: "What is the standard Gibbs free energy change for a reaction if ΔH = -50 kJ/mol and ΔS = -150 J/mol·K at 298 K?",
    options: [
      { id: 'A', text: '-5.25 kJ/mol' },
      { id: 'B', text: '-94.75 kJ/mol' },
      { id: 'C', text: '+5.25 kJ/mol' },
      { id: 'D', text: '-44.75 kJ/mol' }
    ],
    correctAnswer: 'A',
    difficulty: 'hard'
  },
  {
    id: 223,
    question: "Which of these compounds exhibits geometric isomerism?",
    options: [
      { id: 'A', text: 'CH₃CH₂CH₃' },
      { id: 'B', text: 'CH₃CH=CHCH₃' },
      { id: 'C', text: 'CH₃CH₂CH₂Cl' },
      { id: 'D', text: 'CH₃CH₂OH' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 224,
    question: "What is the half-life of a first-order reaction with a rate constant of 0.693 s⁻¹?",
    options: [
      { id: 'A', text: '1 s' },
      { id: 'B', text: '2 s' },
      { id: 'C', text: '0.5 s' },
      { id: 'D', text: '1.44 s' }
    ],
    correctAnswer: 'A',
    difficulty: 'hard'
  },
  {
    id: 225,
    question: "What is the hybridization of the central atom in ICl₅?",
    options: [
      { id: 'A', text: 'sp³' },
      { id: 'B', text: 'sp³d' },
      { id: 'C', text: 'sp³d²' },
      { id: 'D', text: 'sp²' }
    ],
    correctAnswer: 'C',
    difficulty: 'hard'
  },
  {
    id: 226,
    question: "What is the Ksp expression for PbCl₂?",
    options: [
      { id: 'A', text: 'Ksp = [Pb²⁺][Cl⁻]' },
      { id: 'B', text: 'Ksp = [Pb²⁺][Cl⁻]²' },
      { id: 'C', text: 'Ksp = [Pb²⁺]²[Cl⁻]' },
      { id: 'D', text: 'Ksp = [Pb²⁺]²[Cl⁻]²' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 227,
    question: "What is the shape of the ICl₅ molecule?",
    options: [
      { id: 'A', text: 'Square pyramidal' },
      { id: 'B', text: 'Trigonal bipyramidal' },
      { id: 'C', text: 'Octahedral' },
      { id: 'D', text: 'Tetrahedral' }
    ],
    correctAnswer: 'A',
    difficulty: 'hard'
  },
  {
    id: 228,
    question: "What is the oxidation state of sulfur in S₂O₃²⁻?",
    options: [
      { id: 'A', text: '+2' },
      { id: 'B', text: '+4' },
      { id: 'C', text: '+6' },
      { id: 'D', text: '+3' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 229,
    question: "Which of these is an example of a second-order reaction?",
    options: [
      { id: 'A', text: 'Decomposition of NH₃ on a Pt surface' },
      { id: 'B', text: 'Radioactive decay' },
      { id: 'C', text: 'Reaction of NO and O₂ to form NO₂' },
      { id: 'D', text: 'Decomposition of N₂O₅' }
    ],
    correctAnswer: 'C',
    difficulty: 'hard'
  },
  {
    id: 230,
    question: "What is the bond order of N₂ according to molecular orbital theory?",
    options: [
      { id: 'A', text: '1.5' },
      { id: 'B', text: '2.0' },
      { id: 'C', text: '2.5' },
      { id: 'D', text: '3.0' }
    ],
    correctAnswer: 'D',
    difficulty: 'hard'
  },
  {
    id: 231,
    question: "What is the IUPAC name for CH₃COCH₂CH₃?",
    options: [
      { id: 'A', text: 'Propanone' },
      { id: 'B', text: 'Butanone' },
      { id: 'C', text: 'Pentanone' },
      { id: 'D', text: 'Ethanone' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 232,
    question: "What is the standard entropy change for the reaction 2H₂(g) + O₂(g) → 2H₂O(l) if S°(H₂) = 130.7 J/mol·K, S°(O₂) = 205.2 J/mol·K, and S°(H₂O) = 69.9 J/mol·K?",
    options: [
      { id: 'A', text: '-326.6 J/mol·K' },
      { id: 'B', text: '-163.3 J/mol·K' },
      { id: 'C', text: '+326.6 J/mol·K' },
      { id: 'D', text: '+163.3 J/mol·K' }
    ],
    correctAnswer: 'A',
    difficulty: 'hard'
  },
  {
    id: 233,
    question: "Which of these compounds can form hydrogen bonds with itself?",
    options: [
      { id: 'A', text: 'CH₃CH₂CH₃' },
      { id: 'B', text: 'CH₃OCH₃' },
      { id: 'C', text: 'CH₃CH₂OH' },
      { id: 'D', text: 'CH₃CH₂Cl' }
    ],
    correctAnswer: 'C',
    difficulty: 'hard'
  },
  {
    id: 234,
    question: "What is the half-life of a second-order reaction with a rate constant of 0.02 L/mol·s and an initial concentration of 0.1 M?",
    options: [
      { id: 'A', text: '50 s' },
      { id: 'B', text: '500 s' },
      { id: 'C', text: '5 s' },
      { id: 'D', text: '250 s' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 235,
    question: "What is the hybridization of the central atom in PCl₅?",
    options: [
      { id: 'A', text: 'sp³' },
      { id: 'B', text: 'sp³d' },
      { id: 'C', text: 'sp³d²' },
      { id: 'D', text: 'sp²' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 236,
    question: "What is the Ksp expression for Ca₃(PO₄)₂?",
    options: [
      { id: 'A', text: 'Ksp = [Ca²⁺]³[PO₄³⁻]²' },
      { id: 'B', text: 'Ksp = [Ca²⁺][PO₄³⁻]' },
      { id: 'C', text: 'Ksp = [Ca²⁺]²[PO₄³⁻]³' },
      { id: 'D', text: 'Ksp = [Ca²⁺]³[PO₄³⁻]' }
    ],
    correctAnswer: 'A',
    difficulty: 'hard'
  },
  {
    id: 237,
    question: "What is the shape of the PCl₅ molecule?",
    options: [
      { id: 'A', text: 'Tetrahedral' },
      { id: 'B', text: 'Trigonal bipyramidal' },
      { id: 'C', text: 'Octahedral' },
      { id: 'D', text: 'Square planar' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 238,
    question: "What is the oxidation state of nitrogen in N₂O?",
    options: [
      { id: 'A', text: '+1' },
      { id: 'B', text: '+2' },
      { id: 'C', text: '+3' },
      { id: 'D', text: '+4' }
    ],
    correctAnswer: 'A',
    difficulty: 'hard'
  },
  {
    id: 239,
    question: "Which of these reactions follows first-order kinetics?",
    options: [
      { id: 'A', text: 'Decomposition of NH₃ on a Pt surface' },
      { id: 'B', text: 'Decomposition of N₂O₅' },
      { id: 'C', text: 'Reaction of NO and O₂ to form NO₂' },
      { id: 'D', text: 'Reaction of H₂ and I₂ to form HI' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 240,
    question: "What is the bond order of CO according to molecular orbital theory?",
    options: [
      { id: 'A', text: '1.5' },
      { id: 'B', text: '2.0' },
      { id: 'C', text: '2.5' },
      { id: 'D', text: '3.0' }
    ],
    correctAnswer: 'D',
    difficulty: 'hard'
  },
  {
    id: 241,
    question: "What is the IUPAC name for (CH₃)₂CHCH₂OH?",
    options: [
      { id: 'A', text: 'Propan-1-ol' },
      { id: 'B', text: 'Propan-2-ol' },
      { id: 'C', text: '2-Methylpropan-1-ol' },
      { id: 'D', text: 'Butan-1-ol' }
    ],
    correctAnswer: 'C',
    difficulty: 'hard'
  },
  {
    id: 242,
    question: "What is the cell potential for the reaction Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s) if E°(Zn²⁺/Zn) = -0.76 V and E°(Cu²⁺/Cu) = +0.34 V?",
    options: [
      { id: 'A', text: '0.42 V' },
      { id: 'B', text: '1.10 V' },
      { id: 'C', text: '-1.10 V' },
      { id: 'D', text: '-0.42 V' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 243,
    question: "Which of these compounds can undergo a nucleophilic substitution reaction?",
    options: [
      { id: 'A', text: 'CH₃CH₃' },
      { id: 'B', text: 'CH₃CH₂Cl' },
      { id: 'C', text: 'CH₃CH=CH₂' },
      { id: 'D', text: 'CH₃CHO' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 244,
    question: "What is the activation energy of a reaction if its rate constant doubles when the temperature increases from 300 K to 310 K? (R = 8.314 J/mol·K)",
    options: [
      { id: 'A', text: '52.9 kJ/mol' },
      { id: 'B', text: '26.5 kJ/mol' },
      { id: 'C', text: '105.8 kJ/mol' },
      { id: 'D', text: '13.2 kJ/mol' }
    ],
    correctAnswer: 'A',
    difficulty: 'hard'
  },
  {
    id: 245,
    question: "What is the hybridization of the central atom in BrF₅?",
    options: [
      { id: 'A', text: 'sp³' },
      { id: 'B', text: 'sp³d' },
      { id: 'C', text: 'sp³d²' },
      { id: 'D', text: 'sp²' }
    ],
    correctAnswer: 'C',
    difficulty: 'hard'
  },
  {
    id: 246,
    question: "What is the Ksp expression for Ag₃PO₄?",
    options: [
      { id: 'A', text: 'Ksp = [Ag⁺][PO₄³⁻]' },
      { id: 'B', text: 'Ksp = [Ag⁺]³[PO₄³⁻]' },
      { id: 'C', text: 'Ksp = [Ag⁺][PO₄³⁻]³' },
      { id: 'D', text: 'Ksp = [Ag⁺]³[PO₄³⁻]³' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 247,
    question: "What is the shape of the BrF₅ molecule?",
    options: [
      { id: 'A', text: 'Square pyramidal' },
      { id: 'B', text: 'Trigonal bipyramidal' },
      { id: 'C', text: 'Octahedral' },
      { id: 'D', text: 'Tetrahedral' }
    ],
    correctAnswer: 'A',
    difficulty: 'hard'
  },
  {
    id: 248,
    question: "What is the oxidation state of chromium in Cr₂O₇²⁻?",
    options: [
      { id: 'A', text: '+3' },
      { id: 'B', text: '+4' },
      { id: 'C', text: '+6' },
      { id: 'D', text: '+7' }
    ],
    correctAnswer: 'C',
    difficulty: 'hard'
  },
  {
    id: 249,
    question: "Which of these reactions follows zero-order kinetics?",
    options: [
      { id: 'A', text: 'Decomposition of N₂O₅' },
      { id: 'B', text: 'Reaction of NO and O₂ to form NO₂' },
      { id: 'C', text: 'Photochemical reaction of H₂ and Cl₂' },
      { id: 'D', text: 'Radioactive decay' }
    ],
    correctAnswer: 'C',
    difficulty: 'hard'
  },
  {
    id: 250,
    question: "What is the bond order of NO⁺ according to molecular orbital theory?",
    options: [
      { id: 'A', text: '1.5' },
      { id: 'B', text: '2.0' },
      { id: 'C', text: '2.5' },
      { id: 'D', text: '3.0' }
    ],
    correctAnswer: 'D',
    difficulty: 'hard'
  },
  {
    id: 251,
    question: "What is the IUPAC name for CH₃CH₂CH₂COOH?",
    options: [
      { id: 'A', text: 'Propan-1-oic acid' },
      { id: 'B', text: 'Butanoic acid' },
      { id: 'C', text: 'Pentanoic acid' },
      { id: 'D', text: 'Ethanoic acid' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 252,
    question: "What is the equilibrium constant for the reaction H₂(g) + I₂(g) ⇌ 2HI(g) if at equilibrium [H₂] = 0.1 M, [I₂] = 0.1 M, and [HI] = 0.8 M?",
    options: [
      { id: 'A', text: '64' },
      { id: 'B', text: '8' },
      { id: 'C', text: '16' },
      { id: 'D', text: '4' }
    ],
    correctAnswer: 'A',
    difficulty: 'hard'
  },
  {
    id: 253,
    question: "Which of these compounds can undergo an electrophilic addition reaction?",
    options: [
      { id: 'A', text: 'CH₃CH₂CH₃' },
      { id: 'B', text: 'CH₃CH=CH₂' },
      { id: 'C', text: 'CH₃CH₂Cl' },
      { id: 'D', text: 'CH₃CHO' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 254,
    question: "What is the pH of a buffer solution made by mixing 0.1 M CH₃COOH (Ka = 1.8 × 10⁻⁵) and 0.2 M CH₃COONa?",
    options: [
      { id: 'A', text: '4.44' },
      { id: 'B', text: '4.74' },
      { id: 'C', text: '5.04' },
      { id: 'D', text: '5.34' }
    ],
    correctAnswer: 'C',
    difficulty: 'hard'
  },
  {
    id: 255,
    question: "What is the hybridization of the central atom in IF₇?",
    options: [
      { id: 'A', text: 'sp³d' },
      { id: 'B', text: 'sp³d²' },
      { id: 'C', text: 'sp³d³' },
      { id: 'D', text: 'sp³' }
    ],
    correctAnswer: 'C',
    difficulty: 'hard'
  },
  {
    id: 256,
    question: "What is the Ksp expression for BaSO₄?",
    options: [
      { id: 'A', text: 'Ksp = [Ba²⁺][SO₄²⁻]' },
      { id: 'B', text: 'Ksp = [Ba²⁺]²[SO₄²⁻]' },
      { id: 'C', text: 'Ksp = [Ba²⁺][SO₄²⁻]²' },
      { id: 'D', text: 'Ksp = [Ba²⁺]²[SO₄²⁻]²' }
    ],
    correctAnswer: 'A',
    difficulty: 'hard'
  },
  {
    id: 257,
    question: "What is the shape of the IF₇ molecule?",
    options: [
      { id: 'A', text: 'Pentagonal bipyramidal' },
      { id: 'B', text: 'Square pyramidal' },
      { id: 'C', text: 'Octahedral' },
      { id: 'D', text: 'Trigonal bipyramidal' }
    ],
    correctAnswer: 'A',
    difficulty: 'hard'
  },
  {
    id: 258,
    question: "What is the oxidation state of iron in [Fe(CN)₆]³⁻?",
    options: [
      { id: 'A', text: '+2' },
      { id: 'B', text: '+3' },
      { id: 'C', text: '+4' },
      { id: 'D', text: '+5' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 259,
    question: "Which of these reactions follows second-order kinetics?",
    options: [
      { id: 'A', text: 'Decomposition of N₂O₅' },
      { id: 'B', text: 'Hydrolysis of an ester in basic medium' },
      { id: 'C', text: 'Radioactive decay' },
      { id: 'D', text: 'Photochemical reaction of H₂ and Cl₂' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 260,
    question: "What is the bond order of O₂²⁻ according to molecular orbital theory?",
    options: [
      { id: 'A', text: '1.0' },
      { id: 'B', text: '1.5' },
      { id: 'C', text: '2.0' },
      { id: 'D', text: '2.5' }
    ],
    correctAnswer: 'A',
    difficulty: 'hard'
  },
  {
    id: 261,
    question: "What is the IUPAC name for CH₃CH₂CH(OH)CH₃?",
    options: [
      { id: 'A', text: 'Butan-1-ol' },
      { id: 'B', text: 'Butan-2-ol' },
      { id: 'C', text: 'Propan-2-ol' },
      { id: 'D', text: '2-Methylpropan-1-ol' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 262,
    question: "What is the standard cell potential for the reaction 2Ag⁺(aq) + Cu(s) → 2Ag(s) + Cu²⁺(aq) if E°(Ag⁺/Ag) = +0.80 V and E°(Cu²⁺/Cu) = +0.34 V?",
    options: [
      { id: 'A', text: '0.46 V' },
      { id: 'B', text: '1.14 V' },
      { id: 'C', text: '-0.46 V' },
      { id: 'D', text: '-1.14 V' }
    ],
    correctAnswer: 'A',
    difficulty: 'hard'
  },
  {
    id: 263,
    question: "Which of these compounds can undergo a nucleophilic acyl substitution reaction?",
    options: [
      { id: 'A', text: 'CH₃CH₂CH₃' },
      { id: 'B', text: 'CH₃COCl' },
      { id: 'C', text: 'CH₃CH=CH₂' },
      { id: 'D', text: 'CH₃CH₂OH' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 264,
    question: "What is the pOH of a solution with a [H⁺] of 1 × 10⁻⁹ M?",
    options: [
      { id: 'A', text: '5' },
      { id: 'B', text: '7' },
      { id: 'C', text: '9' },
      { id: 'D', text: '11' }
    ],
    correctAnswer: 'A',
    difficulty: 'hard'
  },
  {
    id: 265,
    question: "What is the hybridization of the central atom in SO₄²⁻?",
    options: [
      { id: 'A', text: 'sp²' },
      { id: 'B', text: 'sp³' },
      { id: 'C', text: 'sp³d' },
      { id: 'D', text: 'sp³d²' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 266,
    question: "What is the Ksp expression for Fe(OH)₃?",
    options: [
      { id: 'A', text: 'Ksp = [Fe³⁺][OH⁻]' },
      { id: 'B', text: 'Ksp = [Fe³⁺][OH⁻]³' },
      { id: 'C', text: 'Ksp = [Fe³⁺]³[OH⁻]' },
      { id: 'D', text: 'Ksp = [Fe³⁺]³[OH⁻]³' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 267,
    question: "What is the shape of the SO₄²⁻ ion?",
    options: [
      { id: 'A', text: 'Tetrahedral' },
      { id: 'B', text: 'Trigonal pyramidal' },
      { id: 'C', text: 'Bent' },
      { id: 'D', text: 'Trigonal planar' }
    ],
    correctAnswer: 'A',
    difficulty: 'hard'
  },
  {
    id: 268,
    question: "What is the oxidation state of phosphorus in P₂O₅?",
    options: [
      { id: 'A', text: '+3' },
      { id: 'B', text: '+4' },
      { id: 'C', text: '+5' },
      { id: 'D', text: '+6' }
    ],
    correctAnswer: 'C',
    difficulty: 'hard'
  },
  {
    id: 269,
    question: "Which of these reactions follows first-order kinetics?",
    options: [
      { id: 'A', text: 'Hydrolysis of an ester in basic medium' },
      { id: 'B', text: 'Radioactive decay' },
      { id: 'C', text: 'Reaction of NO and O₂ to form NO₂' },
      { id: 'D', text: 'Photochemical reaction of H₂ and Cl₂' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 270,
    question: "What is the bond order of CN⁻ according to molecular orbital theory?",
    options: [
      { id: 'A', text: '1.5' },
      { id: 'B', text: '2.0' },
      { id: 'C', text: '2.5' },
      { id: 'D', text: '3.0' }
    ],
    correctAnswer: 'D',
    difficulty: 'hard'
  },
  {
    id: 271,
    question: "What is the IUPAC name for CH₃CH₂COCH₂CH₃?",
    options: [
      { id: 'A', text: 'Pentan-3-one' },
      { id: 'B', text: 'Pentan-2-one' },
      { id: 'C', text: 'Butan-2-one' },
      { id: 'D', text: 'Hexan-3-one' }
    ],
    correctAnswer: 'A',
    difficulty: 'hard'
  },
  {
    id: 272,
    question: "What is the equilibrium constant for the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g) if at equilibrium [N₂] = 0.2 M, [H₂] = 0.3 M, and [NH₃] = 0.4 M?",
    options: [
      { id: 'A', text: '1.48' },
      { id: 'B', text: '2.96' },
      { id: 'C', text: '0.74' },
      { id: 'D', text: '5.93' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 273,
    question: "Which of these compounds can undergo an electrophilic aromatic substitution reaction?",
    options: [
      { id: 'A', text: 'C₆H₅CH₃' },
      { id: 'B', text: 'CH₃CH₂CH₃' },
      { id: 'C', text: 'CH₃CH=CH₂' },
      { id: 'D', text: 'CH₃CHO' }
    ],
    correctAnswer: 'A',
    difficulty: 'hard'
  },
  {
    id: 274,
    question: "What is the pH of a solution with a [OH⁻] of 1 × 10⁻⁵ M?",
    options: [
      { id: 'A', text: '5' },
      { id: 'B', text: '7' },
      { id: 'C', text: '9' },
      { id: 'D', text: '11' }
    ],
    correctAnswer: 'C',
    difficulty: 'hard'
  },
  {
    id: 275,
    question: "What is the hybridization of the central atom in ClO₄⁻?",
    options: [
      { id: 'A', text: 'sp²' },
      { id: 'B', text: 'sp³' },
      { id: 'C', text: 'sp³d' },
      { id: 'D', text: 'sp³d²' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 276,
    question: "What is the Ksp expression for Mg(OH)₂?",
    options: [
      { id: 'A', text: 'Ksp = [Mg²⁺][OH⁻]' },
      { id: 'B', text: 'Ksp = [Mg²⁺][OH⁻]²' },
      { id: 'C', text: 'Ksp = [Mg²⁺]²[OH⁻]' },
      { id: 'D', text: 'Ksp = [Mg²⁺]²[OH⁻]²' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 277,
    question: "What is the shape of the ClO₄⁻ ion?",
    options: [
      { id: 'A', text: 'Tetrahedral' },
      { id: 'B', text: 'Trigonal pyramidal' },
      { id: 'C', text: 'Bent' },
      { id: 'D', text: 'Trigonal planar' }
    ],
    correctAnswer: 'A',
    difficulty: 'hard'
  },
  {
    id: 278,
    question: "What is the oxidation state of carbon in C₂O₄²⁻?",
    options: [
      { id: 'A', text: '+2' },
      { id: 'B', text: '+3' },
      { id: 'C', text: '+4' },
      { id: 'D', text: '+5' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 279,
    question: "Which of these reactions follows zero-order kinetics?",
    options: [
      { id: 'A', text: 'Decomposition of N₂O₅' },
      { id: 'B', text: 'Hydrolysis of an ester in basic medium' },
      { id: 'C', text: 'Decomposition of NH₃ on a Pt surface' },
      { id: 'D', text: 'Radioactive decay' }
    ],
    correctAnswer: 'C',
    difficulty: 'hard'
  },
  {
    id: 280,
    question: "What is the bond order of NO according to molecular orbital theory?",
    options: [
      { id: 'A', text: '1.5' },
      { id: 'B', text: '2.0' },
      { id: 'C', text: '2.5' },
      { id: 'D', text: '3.0' }
    ],
    correctAnswer: 'C',
    difficulty: 'hard'
  },
  {
    id: 281,
    question: "What is the IUPAC name for CH₃CH₂CH₂CH₂CHO?",
    options: [
      { id: 'A', text: 'Butanal' },
      { id: 'B', text: 'Pentanal' },
      { id: 'C', text: 'Hexanal' },
      { id: 'D', text: 'Propanal' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 282,
    question: "What is the equilibrium constant for the reaction CO(g) + 2H₂(g) ⇌ CH₃OH(g) if at equilibrium [CO] = 0.1 M, [H₂] = 0.2 M, and [CH₃OH] = 0.5 M?",
    options: [
      { id: 'A', text: '62.5' },
      { id: 'B', text: '25' },
      { id: 'C', text: '12.5' },
      { id: 'D', text: '5' }
    ],
    correctAnswer: 'A',
    difficulty: 'hard'
  },
  {
    id: 283,
    question: "Which of these compounds can undergo a nucleophilic addition reaction?",
    options: [
      { id: 'A', text: 'CH₃CH₂CH₃' },
      { id: 'B', text: 'CH₃CHO' },
      { id: 'C', text: 'CH₃CH₂Cl' },
      { id: 'D', text: 'C₆H₅CH₃' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 284,
    question: "What is the pH of a solution with a [H⁺] of 2.5 × 10⁻⁴ M?",
    options: [
      { id: 'A', text: '3.60' },
      { id: 'B', text: '4.00' },
      { id: 'C', text: '4.40' },
      { id: 'D', text: '5.00' }
    ],
    correctAnswer: 'A',
    difficulty: 'hard'
  },
  {
    id: 285,
    question: "What is the hybridization of the central atom in NO₃⁻?",
    options: [
      { id: 'A', text: 'sp' },
      { id: 'B', text: 'sp²' },
      { id: 'C', text: 'sp³' },
      { id: 'D', text: 'sp³d' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 286,
    question: "What is the Ksp expression for Al(OH)₃?",
    options: [
      { id: 'A', text: 'Ksp = [Al³⁺][OH⁻]' },
      { id: 'B', text: 'Ksp = [Al³⁺][OH⁻]³' },
      { id: 'C', text: 'Ksp = [Al³⁺]³[OH⁻]' },
      { id: 'D', text: 'Ksp = [Al³⁺]³[OH⁻]³' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 287,
    question: "What is the shape of the NO₃⁻ ion?",
    options: [
      { id: 'A', text: 'Tetrahedral' },
      { id: 'B', text: 'Trigonal pyramidal' },
      { id: 'C', text: 'Bent' },
      { id: 'D', text: 'Trigonal planar' }
    ],
    correctAnswer: 'D',
    difficulty: 'hard'
  },
  {
    id: 288,
    question: "What is the oxidation state of sulfur in SO₃²⁻?",
    options: [
      { id: 'A', text: '+2' },
      { id: 'B', text: '+4' },
      { id: 'C', text: '+6' },
      { id: 'D', text: '+5' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 289,
    question: "Which of these reactions follows second-order kinetics?",
    options: [
      { id: 'A', text: 'Decomposition of N₂O₅' },
      { id: 'B', text: 'Saponification of an ester' },
      { id: 'C', text: 'Radioactive decay' },
      { id: 'D', text: 'Decomposition of NH₃ on a Pt surface' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 290,
    question: "What is the bond order of O₂⁻ according to molecular orbital theory?",
    options: [
      { id: 'A', text: '1.0' },
      { id: 'B', text: '1.5' },
      { id: 'C', text: '2.0' },
      { id: 'D', text: '2.5' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 291,
    question: "What is the IUPAC name for (CH₃)₃CCH₂OH?",
    options: [
      { id: 'A', text: '2-Methylbutan-1-ol' },
      { id: 'B', text: '3-Methylbutan-1-ol' },
      { id: 'C', text: '2,2-Dimethylpropan-1-ol' },
      { id: 'D', text: 'Pentan-1-ol' }
    ],
    correctAnswer: 'C',
    difficulty: 'hard'
  },
  {
    id: 292,
    question: "What is the standard cell potential for the reaction Mg(s) + 2Ag⁺(aq) → Mg²⁺(aq) + 2Ag(s) if E°(Mg²⁺/Mg) = -2.37 V and E°(Ag⁺/Ag) = +0.80 V?",
    options: [
      { id: 'A', text: '1.57 V' },
      { id: 'B', text: '3.17 V' },
      { id: 'C', text: '-1.57 V' },
      { id: 'D', text: '-3.17 V' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 293,
    question: "Which of these compounds can undergo a condensation reaction?",
    options: [
      { id: 'A', text: 'CH₃CH₂CH₃' },
      { id: 'B', text: 'CH₃COOH' },
      { id: 'C', text: 'CH₃CH=CH₂' },
      { id: 'D', text: 'C₆H₅CH₃' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 294,
    question: "What is the pH of a solution with a [OH⁻] of 4 × 10⁻³ M?",
    options: [
      { id: 'A', text: '9.60' },
      { id: 'B', text: '10.60' },
      { id: 'C', text: '11.60' },
      { id: 'D', text: '12.60' }
    ],
    correctAnswer: 'C',
    difficulty: 'hard'
  },
  {
    id: 295,
    question: "What is the hybridization of the central atom in PO₄³⁻?",
    options: [
      { id: 'A', text: 'sp²' },
      { id: 'B', text: 'sp³' },
      { id: 'C', text: 'sp³d' },
      { id: 'D', text: 'sp³d²' }
    ],
    correctAnswer: 'B',
    difficulty: 'hard'
  },
  {
    id: 296,
    question: "What is the Ksp expression for PbSO₄?",
    options: [
      { id: 'A', text: 'Ksp = [Pb²⁺][SO₄²⁻]' },
      { id: 'B', text: 'Ksp = [Pb²⁺]²[SO₄²⁻]' },
      { id: 'C', text: 'Ksp = [Pb²⁺][SO₄²⁻]²' },
      { id: 'D', text: 'Ksp = [Pb²⁺]²[SO₄²⁻]²' }
    ],
    correctAnswer: 'A',
    difficulty: 'hard'
  },
  {
    id: 297,
    question: "What is the shape of the PO₄³⁻ ion?",
    options: [
      { id: 'A', text: 'Tetrahedral' },
      { id: 'B', text: 'Trigonal pyramidal' },
      { id: 'C', text: 'Bent' },
      { id: 'D', text: 'Trigonal planar' }
    ],
    correctAnswer: 'A',
    difficulty: 'hard'
  },
  {
    id: 298,
    question: "What is the oxidation state of nitrogen in NO₂⁻?",
    options: [
      { id: 'A', text: '+1' },
      { id: 'B', text: '+2' },
      { id: 'C', text: '+3' },
      { id: 'D', text: '+4' }
    ],
    correctAnswer: 'C',
    difficulty: 'hard'
  },
  {
    id: 299,
    question: "Which of these reactions follows first-order kinetics?",
    options: [
      { id: 'A', text: 'Saponification of an ester' },
      { id: 'B', text: 'Decomposition of NH₃ on a Pt surface' },
      { id: 'C', text: 'Radioactive decay' },
      { id: 'D', text: 'Reaction of NO and O₂ to form NO₂' }
    ],
    correctAnswer: 'C',
    difficulty: 'hard'
  },
  {
    id: 300,
    question: "What is the bond order of N₂⁺ according to molecular orbital theory?",
    options: [
      { id: 'A', text: '1.5' },
      { id: 'B', text: '2.0' },
      { id: 'C', text: '2.5' },
      { id: 'D', text: '3.0' }
    ],
    correctAnswer: 'C',
    difficulty: 'hard'
  },
];