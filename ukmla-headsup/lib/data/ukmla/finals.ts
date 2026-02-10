import { Deck } from './core';

export const finalsDeck: Deck = {
  id: 'finals',
  name: 'Finals Favourites',
  description: 'High-yield exam conditions',
  color: 'from-purple-500 to-violet-600',
  cards: [
    {
      id: 'f1',
      answer: 'Giant Cell Arteritis',
      category: 'Rheumatology',
      difficulty: 'hard',
      allowedClues: ['temporal artery', 'jaw claudication', 'ESR >50', 'vision loss'],
      forbiddenClues: ['GCA']
    },
    {
      id: 'f2',
      answer: 'Guillain-Barré Syndrome',
      category: 'Neurology',
      difficulty: 'hard',
      allowedClues: ['ascending paralysis', 'areflexia', 'post-infection', 'respiratory failure'],
      forbiddenClues: ['GBS']
    },
    {
      id: 'f3',
      answer: 'Addisonian Crisis',
      category: 'Endocrine',
      difficulty: 'hard',
      allowedClues: ['hypotension', 'pigmentation', 'hydrocortisone', 'hyponatraemia'],
      forbiddenClues: ['adrenal crisis']
    },
    {
      id: 'f4',
      answer: 'Malignant Hyperthermia',
      category: 'Anaesthetics',
      difficulty: 'hard',
      allowedClues: ['suxamethonium', 'hyperthermia', 'dantrolene', 'muscle rigidity'],
      forbiddenClues: ['anaesthetic reaction']
    },
    {
      id: 'f5',
      answer: 'Neuroleptic Malignant Syndrome',
      category: 'Psychiatry',
      difficulty: 'hard',
      allowedClues: ['antipsychotic', 'rigidity', 'CK raised', 'dantrolene'],
      forbiddenClues: ['NMS', 'medication side effect']
    },
    {
      id: 'f6',
      answer: 'Thyroid Storm',
      category: 'Endocrine',
      difficulty: 'hard',
      allowedClues: ['hyperthyroidism crisis', 'tachycardia', 'propylthiouracil', 'fever'],
      forbiddenClues: ['thyrotoxic crisis']
    },
    {
      id: 'f7',
      answer: 'Pericardial Tamponade',
      category: 'Cardiology',
      difficulty: 'hard',
      allowedClues: ['Beck\'s triad', 'pulsus paradoxus', 'pericardiocentesis', 'muffled heart sounds'],
      forbiddenClues: ['fluid around heart']
    }
  ]
};
