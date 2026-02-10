import { Deck } from './core';

export const surgeryDeck: Deck = {
  id: 'surgery',
  name: 'Surgical',
  description: 'Surgical conditions & emergencies',
  color: 'from-red-500 to-orange-600',
  cards: [
    {
      id: 's1',
      answer: 'Cholecystitis',
      category: 'HPB Surgery',
      difficulty: 'medium',
      allowedClues: ['RUQ pain', 'Murphy\'s sign', 'gallstones', 'ultrasound'],
      forbiddenClues: ['gallbladder inflammation']
    },
    {
      id: 's2',
      answer: 'Ruptured AAA',
      category: 'Vascular Surgery',
      difficulty: 'hard',
      allowedClues: ['pulsatile mass', 'back pain', 'hypotension', 'emergency theatre'],
      forbiddenClues: ['burst aorta', 'AAA rupture']
    },
    {
      id: 's3',
      answer: 'Perforated Peptic Ulcer',
      category: 'Upper GI Surgery',
      difficulty: 'medium',
      allowedClues: ['rigid abdomen', 'free air', 'peritonitis', 'sudden pain'],
      forbiddenClues: ['burst ulcer']
    },
    {
      id: 's4',
      answer: 'Testicular Torsion',
      category: 'Urology',
      difficulty: 'medium',
      allowedClues: ['absent cremasteric reflex', 'sudden onset', '6 hour window', 'orchidopexy'],
      forbiddenClues: ['twisted testicle']
    },
    {
      id: 's5',
      answer: 'Acute Pancreatitis',
      category: 'HPB Surgery',
      difficulty: 'medium',
      allowedClues: ['amylase raised', 'epigastric pain', 'Grey Turner', 'GET SMASHED'],
      forbiddenClues: ['inflamed pancreas']
    },
    {
      id: 's6',
      answer: 'Inguinal Hernia',
      category: 'General Surgery',
      difficulty: 'easy',
      allowedClues: ['groin lump', 'reducible', 'cough impulse', 'mesh repair'],
      forbiddenClues: ['bulge in groin']
    },
    {
      id: 's7',
      answer: 'Acute Diverticulitis',
      category: 'Colorectal Surgery',
      difficulty: 'medium',
      allowedClues: ['LIF pain', 'Hinchey classification', 'CT abdomen', 'sigmoid'],
      forbiddenClues: ['colon infection']
    }
  ]
};
