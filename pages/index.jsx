import { useState } from 'react';
import {
  GameField,
  GameInfo,
  GameTitle,
  UseGameState,
} from '../components/game';
import { Header } from '../components/header';

export default function HomePage() {
  const [playersCount] = useState(4);
  const { cells, currentMove, nextMove, handleCellClick } =
    UseGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="w-max mx-auto pt-6">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          playersCount={playersCount}
          currentMove={currentMove}
          className="mt-4"
        />
        <GameField
          className="mt-6"
          cells={cells}
          currentMove={currentMove}
          nextMove={nextMove}
          handleCellClick={handleCellClick}
        />
      </main>
    </div>
  );
}
