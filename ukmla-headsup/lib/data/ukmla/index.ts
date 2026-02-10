import { coreDeck } from './core';
import { paedsDeck } from './paeds';
import { surgeryDeck } from './surgery';
import { finalsDeck } from './finals';

export const UKMLA_DECKS = {
  core: coreDeck,
  paeds: paedsDeck,
  surgery: surgeryDeck,
  finals: finalsDeck
};

export type { ConditionCard, Deck } from './core';
