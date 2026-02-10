import { Deck } from './core';

export const paedsDeck: Deck = {
  id: 'paeds',
  name: 'Paediatrics',
  description: 'Common childhood conditions',
  color: 'from-pink-500 to-rose-600',
  cards: [
    {
      id: 'p1',
      answer: 'Bronchiolitis',
      category: 'Paediatric Respiratory',
      difficulty: 'medium',
      allowedClues: ['RSV', 'wheeze in infant', 'nasal flaring', 'under 2 years'],
      forbiddenClues: ['baby breathing problem']
    },
    {
      id: 'p2',
      answer: 'Kawasaki Disease',
      category: 'Paediatric Cardiology',
      difficulty: 'hard',
      allowedClues: ['fever >5 days', 'strawberry tongue', 'coronary aneurysm', 'conjunctivitis'],
      forbiddenClues: ['Japanese disease']
    },
    {
      id: 'p3',
      answer: 'Croup',
      category: 'Paediatric Respiratory',
      difficulty: 'easy',
      allowedClues: ['barking cough', 'stridor', 'dexamethasone', 'viral'],
      forbiddenClues: ['seal bark']
    },
    {
      id: 'p4',
      answer: 'Febrile Convulsion',
      category: 'Paediatric Neurology',
      difficulty: 'medium',
      allowedClues: ['seizure with fever', '6 months to 5 years', 'usually benign'],
      forbiddenClues: ['temperature fit']
    },
    {
      id: 'p5',
      answer: 'Intussusception',
      category: 'Paediatric Surgery',
      difficulty: 'hard',
      allowedClues: ['redcurrant jelly stool', 'target sign', 'air enema', 'colicky pain'],
      forbiddenClues: ['telescoping bowel']
    },
    {
      id: 'p6',
      answer: 'Epiglottitis',
      category: 'Paediatric Emergency',
      difficulty: 'hard',
      allowedClues: ['drooling', 'tripod position', 'Hib', 'cherry red'],
      forbiddenClues: ['throat swelling']
    },
    {
      id: 'p7',
      answer: 'Neonatal Jaundice',
      category: 'Neonatology',
      difficulty: 'medium',
      allowedClues: ['bilirubin', 'phototherapy', 'kernicterus', 'yellow skin'],
      forbiddenClues: ['yellow baby']
    },
    {
      id: 'p8',
      answer: 'Gastroenteritis',
      category: 'Paediatric GI',
      difficulty: 'easy',
      allowedClues: ['diarrhoea', 'vomiting', 'dehydration', 'rotavirus'],
      forbiddenClues: ['tummy bug', 'stomach flu']
    }
  ]
};
