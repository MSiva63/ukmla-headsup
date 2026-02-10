'use client';

import React, { useState } from 'react';
import { ChevronRight, Users, BookOpen, Trophy, RotateCcw } from 'lucide-react';
import { UKMLA_DECKS, Deck, ConditionCard } from '@/lib/data/ukmla';

// ============================================================================
// GAME ENGINE - Input & State Management
// ============================================================================

enum InputZone {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT'
}

enum GamePhase {
  LANDING = 'LANDING',
  SETUP = 'SETUP',
  DECK_SELECT = 'DECK_SELECT',
  PLAYING = 'PLAYING',
  ROUND_END = 'ROUND_END'
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function HeadsUpGame() {
  // State
  const [phase, setPhase] = useState<GamePhase>(GamePhase.LANDING);
  const [teams, setTeams] = useState<string[]>([]);
  const [selectedDeck, setSelectedDeck] = useState<Deck | null>(null);
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [shuffledDeck, setShuffledDeck] = useState<ConditionCard[]>([]);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [roundNumber, setRoundNumber] = useState(1);

  // Shuffle function
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Start game with selected deck
  const startGame = (deck: Deck) => {
    setSelectedDeck(deck);
    setShuffledDeck(shuffleArray(deck.cards));
    setCurrentCardIndex(0);
    const initialScores: Record<string, number> = {};
    teams.forEach(team => {
      initialScores[team] = 0;
    });
    setScores(initialScores);
    setPhase(GamePhase.PLAYING);
  };

  // Handle tap input
  const handleTap = (zone: InputZone) => {
    if (zone === InputZone.LEFT) {
      // Correct - award point
      setScores(prev => ({
        ...prev,
        [teams[currentTeamIndex]]: prev[teams[currentTeamIndex]] + 1
      }));
    }
    // Both correct and skip move to next card
    nextCard();
  };

  const nextCard = () => {
    if (currentCardIndex < shuffledDeck.length - 1) {
      setCurrentCardIndex(prev => prev + 1);
    } else {
      // End of round
      setPhase(GamePhase.ROUND_END);
    }
  };

  const nextTeam = () => {
    if (currentTeamIndex < teams.length - 1) {
      setCurrentTeamIndex(prev => prev + 1);
      setCurrentCardIndex(0);
      setShuffledDeck(shuffleArray(selectedDeck!.cards));
      setPhase(GamePhase.PLAYING);
    } else {
      // All teams played this round
      setCurrentTeamIndex(0);
      setRoundNumber(prev => prev + 1);
      setCurrentCardIndex(0);
      setShuffledDeck(shuffleArray(selectedDeck!.cards));
      setPhase(GamePhase.PLAYING);
    }
  };

  const resetGame = () => {
    setPhase(GamePhase.LANDING);
    setTeams([]);
    setSelectedDeck(null);
    setCurrentTeamIndex(0);
    setCurrentCardIndex(0);
    setShuffledDeck([]);
    setScores({});
    setRoundNumber(1);
  };

  // ============================================================================
  // SCREEN COMPONENTS
  // ============================================================================

  // Landing Screen
  if (phase === GamePhase.LANDING) {
    return (
      <div className="h-screen w-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-7xl font-black text-white tracking-tight">
              UKMLA
            </h1>
            <h2 className="text-5xl font-bold text-white/90">
              Heads Up
            </h2>
            <p className="text-2xl text-white/80 font-medium">
              Medical Conditions Game
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white/90 max-w-2xl mx-auto">
            <p className="text-lg leading-relaxed">
              Hold your phone <span className="font-bold">landscape</span>. 
              Don&apos;t look at the screen! 
              Your team asks yes/no questions to help you guess the condition.
            </p>
          </div>

          <button
            onClick={() => setPhase(GamePhase.SETUP)}
            className="bg-white text-purple-600 px-12 py-6 rounded-2xl text-3xl font-bold hover:scale-105 transition-transform shadow-2xl"
          >
            Let&apos;s Play
          </button>
        </div>
      </div>
    );
  }

  // Team Setup Screen
  if (phase === GamePhase.SETUP) {
    return <TeamSetup teams={teams} setTeams={setTeams} onNext={() => setPhase(GamePhase.DECK_SELECT)} />;
  }

  // Deck Selection Screen
  if (phase === GamePhase.DECK_SELECT) {
    return (
      <div className="h-screen w-screen bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center p-8">
        <div className="max-w-6xl w-full space-y-8">
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-4">
              <BookOpen className="w-12 h-12 text-white" />
              <h2 className="text-5xl font-bold text-white">Choose Your Deck</h2>
            </div>
            <p className="text-2xl text-white/80">
              {teams.length} teams ready to play
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {Object.values(UKMLA_DECKS).map((deck) => (
              <button
                key={deck.id}
                onClick={() => startGame(deck)}
                className={`bg-gradient-to-br ${deck.color} p-8 rounded-2xl text-white hover:scale-105 transition-transform shadow-xl`}
              >
                <h3 className="text-3xl font-bold mb-3">{deck.name}</h3>
                <p className="text-xl opacity-90 mb-4">{deck.description}</p>
                <p className="text-lg font-semibold opacity-80">
                  {deck.cards.length} conditions
                </p>
              </button>
            ))}
          </div>

          <button
            onClick={() => setPhase(GamePhase.SETUP)}
            className="w-full bg-white/20 backdrop-blur text-white px-6 py-4 rounded-xl text-xl font-semibold hover:bg-white/30 transition-colors"
          >
            ← Back to Team Setup
          </button>
        </div>
      </div>
    );
  }

  // Playing Screen - The main game interface
  if (phase === GamePhase.PLAYING) {
    const currentCard = shuffledDeck[currentCardIndex];
    const currentTeam = teams[currentTeamIndex];

    return (
      <div className="h-screen w-screen flex relative overflow-hidden">
        {/* LEFT ZONE - Correct */}
        <button
          onClick={() => handleTap(InputZone.LEFT)}
          className="flex-1 bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center relative group active:scale-95 transition-transform"
        >
          <div className="absolute inset-0 bg-black/0 group-active:bg-black/10 transition-colors" />
        </button>

        {/* CENTER CONTENT - Always visible */}
        <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-between p-8">
          {/* Top bar */}
          <div className="w-full flex justify-between items-center">
            <div className="bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full">
              <p className="text-white text-2xl font-bold">
                {currentTeam}
              </p>
            </div>
            <div className="bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full">
              <p className="text-white text-xl font-semibold">
                Round {roundNumber} • {currentCardIndex + 1}/{shuffledDeck.length}
              </p>
            </div>
          </div>

          {/* Center - The condition */}
          <div className="bg-white/95 backdrop-blur rounded-3xl px-16 py-12 shadow-2xl max-w-4xl">
            <h1 className="text-6xl font-black text-gray-900 text-center leading-tight">
              {currentCard.answer}
            </h1>
            <p className="text-2xl text-gray-600 text-center mt-4 font-semibold">
              {currentCard.category}
            </p>
          </div>

          {/* Bottom instructions */}
          <div className="w-full flex justify-between items-end">
            <div className="bg-green-600/90 backdrop-blur-sm px-8 py-4 rounded-2xl">
              <p className="text-white text-2xl font-bold">← TAP LEFT</p>
              <p className="text-white/80 text-lg">Correct</p>
            </div>
            <div className="bg-orange-600/90 backdrop-blur-sm px-8 py-4 rounded-2xl">
              <p className="text-white text-2xl font-bold">TAP RIGHT →</p>
              <p className="text-white/80 text-lg">Skip</p>
            </div>
          </div>
        </div>

        {/* RIGHT ZONE - Skip */}
        <button
          onClick={() => handleTap(InputZone.RIGHT)}
          className="flex-1 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center relative group active:scale-95 transition-transform"
        >
          <div className="absolute inset-0 bg-black/0 group-active:bg-black/10 transition-colors" />
        </button>
      </div>
    );
  }

  // Round End Screen - Scoreboard
  if (phase === GamePhase.ROUND_END) {
    const currentTeam = teams[currentTeamIndex];
    const sortedTeams = [...teams].sort((a, b) => scores[b] - scores[a]);

    return (
      <div className="h-screen w-screen bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center p-8">
        <div className="bg-white rounded-3xl p-10 max-w-4xl w-full space-y-8">
          <div className="text-center space-y-4">
            <Trophy className="w-16 h-16 text-yellow-500 mx-auto" />
            <h2 className="text-5xl font-bold text-gray-800">
              {currentTeam}&apos;s Round Complete!
            </h2>
            <p className="text-2xl text-gray-600">
              Score: <span className="font-bold text-purple-600">{scores[currentTeam]}</span> points
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-6">Leaderboard</h3>
            {sortedTeams.map((team, idx) => (
              <div
                key={team}
                className={`px-8 py-5 rounded-xl flex justify-between items-center ${
                  idx === 0 ? 'bg-gradient-to-r from-yellow-100 to-yellow-200 border-2 border-yellow-400' :
                  idx === 1 ? 'bg-gray-100' :
                  idx === 2 ? 'bg-orange-50' :
                  'bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-gray-400">#{idx + 1}</span>
                  <span className="text-2xl font-semibold text-gray-800">{team}</span>
                </div>
                <span className="text-3xl font-bold text-purple-600">{scores[team]}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <button
              onClick={nextTeam}
              className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-5 rounded-xl text-2xl font-bold hover:shadow-lg transition-shadow"
            >
              {currentTeamIndex < teams.length - 1 ? 'Next Team' : 'Next Round'}
            </button>
            <button
              onClick={resetGame}
              className="bg-gray-200 text-gray-700 px-8 py-5 rounded-xl text-2xl font-bold hover:bg-gray-300 transition-colors flex items-center gap-2"
            >
              <RotateCcw className="w-6 h-6" />
              New Game
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

// ============================================================================
// TEAM SETUP COMPONENT
// ============================================================================

function TeamSetup({ 
  teams, 
  setTeams, 
  onNext 
}: { 
  teams: string[]; 
  setTeams: (teams: string[]) => void; 
  onNext: () => void;
}) {
  const [teamInput, setTeamInput] = useState('');

  const addTeam = () => {
    if (teamInput.trim() && teams.length < 6) {
      setTeams([...teams, teamInput.trim()]);
      setTeamInput('');
    }
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center p-8">
      <div className="bg-white rounded-3xl p-10 max-w-3xl w-full space-y-8">
        <div className="flex items-center gap-4">
          <Users className="w-12 h-12 text-blue-600" />
          <h2 className="text-4xl font-bold text-gray-800">Setup Teams</h2>
        </div>

        <div className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              value={teamInput}
              onChange={(e) => setTeamInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTeam()}
              placeholder="Enter team name"
              className="flex-1 px-6 py-4 text-2xl border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none"
              maxLength={20}
            />
            <button
              onClick={addTeam}
              disabled={teams.length >= 6}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl text-2xl font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Add
            </button>
          </div>

          <p className="text-gray-600 text-lg">
            {teams.length}/6 teams • Need 2-6 teams to play
          </p>
        </div>

        {teams.length > 0 && (
          <div className="space-y-3">
            {teams.map((team, idx) => (
              <div
                key={idx}
                className="bg-blue-50 px-6 py-4 rounded-xl flex justify-between items-center"
              >
                <span className="text-2xl font-semibold text-gray-800">{team}</span>
                <button
                  onClick={() => setTeams(teams.filter((_, i) => i !== idx))}
                  className="text-red-500 hover:text-red-700 text-xl font-bold"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={onNext}
          disabled={teams.length < 2}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-5 rounded-xl text-2xl font-bold hover:shadow-lg transition-shadow disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed"
        >
          Continue to Deck Selection
        </button>
      </div>
    </div>
  );
}
