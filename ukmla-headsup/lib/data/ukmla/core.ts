export interface ConditionCard {
  id: string;
  answer: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  allowedClues: string[];
  forbiddenClues: string[];
}

export interface Deck {
  id: string;
  name: string;
  description: string;
  color: string;
  cards: ConditionCard[];
}

export const coreDeck: Deck = {
  id: 'core',
  name: 'Core UKMLA',
  description: 'Essential conditions for UKMLA',
  color: 'from-blue-500 to-indigo-600',
  cards: [
    {
      id: 'c1',
      answer: 'Myocardial Infarction',
      category: 'Cardiology',
      difficulty: 'medium',
      allowedClues: ['ECG changes', 'troponin', 'chest pain', 'STEMI'],
      forbiddenClues: ['heart attack', 'MI']
    },
    {
      id: 'c2',
      answer: 'Pneumonia',
      category: 'Respiratory',
      difficulty: 'easy',
      allowedClues: ['consolidation', 'CXR', 'crackles', 'fever'],
      forbiddenClues: ['lung infection']
    },
    {
      id: 'c3',
      answer: 'Diabetic Ketoacidosis',
      category: 'Endocrine',
      difficulty: 'medium',
      allowedClues: ['ketones', 'hyperglycemia', 'acidosis', 'Kussmaul'],
      forbiddenClues: ['DKA', 'diabetes emergency']
    },
    {
      id: 'c4',
      answer: 'Acute Appendicitis',
      category: 'Surgery',
      difficulty: 'easy',
      allowedClues: ['RIF pain', 'McBurney\'s point', 'rebound tenderness'],
      forbiddenClues: ['appendix']
    },
    {
      id: 'c5',
      answer: 'Pulmonary Embolism',
      category: 'Respiratory',
      difficulty: 'hard',
      allowedClues: ['D-dimer', 'CTPA', 'DVT', 'pleuritic pain'],
      forbiddenClues: ['PE', 'clot in lung']
    },
    {
      id: 'c6',
      answer: 'Stroke (Ischaemic)',
      category: 'Neurology',
      difficulty: 'medium',
      allowedClues: ['FAST', 'hemiplegia', 'thrombolysis', 'CT head'],
      forbiddenClues: ['CVA', 'brain attack']
    },
    {
      id: 'c7',
      answer: 'Meningitis',
      category: 'Neurology',
      difficulty: 'medium',
      allowedClues: ['neck stiffness', 'photophobia', 'lumbar puncture', 'Kernig\'s'],
      forbiddenClues: ['brain infection']
    },
    {
      id: 'c8',
      answer: 'Heart Failure',
      category: 'Cardiology',
      difficulty: 'medium',
      allowedClues: ['ejection fraction', 'orthopnoea', 'BNP', 'ankle edema'],
      forbiddenClues: ['weak heart', 'HF']
    },
    {
      id: 'c9',
      answer: 'Chronic Obstructive Pulmonary Disease',
      category: 'Respiratory',
      difficulty: 'easy',
      allowedClues: ['spirometry', 'barrel chest', 'smoking', 'FEV1'],
      forbiddenClues: ['COPD', 'emphysema alone']
    },
    {
      id: 'c10',
      answer: 'Sepsis',
      category: 'Emergency',
      difficulty: 'medium',
      allowedClues: ['qSOFA', 'lactate', 'SIRS', 'hypotension'],
      forbiddenClues: ['blood infection']
    },
    {
      id: 'c11',
      answer: 'Acute Kidney Injury',
      category: 'Renal',
      difficulty: 'medium',
      allowedClues: ['creatinine rise', 'oliguria', 'pre-renal', 'urea'],
      forbiddenClues: ['AKI', 'kidney failure']
    },
    {
      id: 'c12',
      answer: 'Asthma Exacerbation',
      category: 'Respiratory',
      difficulty: 'easy',
      allowedClues: ['wheeze', 'peak flow', 'salbutamol', 'breathlessness'],
      forbiddenClues: ['asthma attack']
    },
    {
      id: 'c13',
      answer: 'Upper GI Bleed',
      category: 'Gastroenterology',
      difficulty: 'medium',
      allowedClues: ['haematemesis', 'melaena', 'endoscopy', 'Rockall score'],
      forbiddenClues: ['stomach bleeding', 'UGIB']
    },
    {
      id: 'c14',
      answer: 'Atrial Fibrillation',
      category: 'Cardiology',
      difficulty: 'medium',
      allowedClues: ['irregularly irregular', 'CHA2DS2-VASc', 'anticoagulation'],
      forbiddenClues: ['AF', 'A-fib']
    },
    {
      id: 'c15',
      answer: 'Acute Coronary Syndrome',
      category: 'Cardiology',
      difficulty: 'hard',
      allowedClues: ['unstable angina', 'troponin', 'NSTEMI', 'PCI'],
      forbiddenClues: ['ACS', 'heart attack']
    },
    {
      id: 'c16',
      answer: 'Hypertensive Emergency',
      category: 'Cardiology',
      difficulty: 'hard',
      allowedClues: ['end-organ damage', 'BP >180/120', 'papilloedema'],
      forbiddenClues: ['high blood pressure crisis']
    },
    {
      id: 'c17',
      answer: 'Anaphylaxis',
      category: 'Emergency',
      difficulty: 'easy',
      allowedClues: ['adrenaline IM', 'urticaria', 'airway swelling', 'hypotension'],
      forbiddenClues: ['severe allergic reaction']
    },
    {
      id: 'c18',
      answer: 'Cellulitis',
      category: 'Dermatology',
      difficulty: 'easy',
      allowedClues: ['erythema', 'warmth', 'flucloxacillin', 'spreading'],
      forbiddenClues: ['skin infection']
    },
    {
      id: 'c19',
      answer: 'Hypoglycaemia',
      category: 'Endocrine',
      difficulty: 'easy',
      allowedClues: ['glucose <4', 'sweating', 'confusion', 'glucagon'],
      forbiddenClues: ['low blood sugar', 'hypo']
    },
    {
      id: 'c20',
      answer: 'Bowel Obstruction',
      category: 'Surgery',
      difficulty: 'medium',
      allowedClues: ['absent bowel sounds', 'distension', 'vomiting', 'AXR'],
      forbiddenClues: ['blocked intestine']
    }
  ]
};
