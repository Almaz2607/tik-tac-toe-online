import { useState } from 'react';
import {
  GameField,
  GameInfo,
  GameTitle,
  UseGameState,
} from '../components/game';
import { Header } from '../components/header';
import { GameSymbol } from '../components/game/game-symbol';
import { UiModal } from '../components/uikit/ui-modal';
import { UiButton } from '../components/uikit/ui-button';

export default function HomePage() {
  const [playersCount] = useState(4);
  const {
    cells,
    currentMove,
    nextMove,
    winnerSequence,
    winnerSymbol,
    handleCellClick,
    handlePlayerTimeOver,
  } = UseGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="w-max mx-auto pt-6">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          className="mt-4"
          playersCount={playersCount}
          currentMove={currentMove}
          isWinner={!!winnerSymbol}
          onPlayerTimeOver={handlePlayerTimeOver}
        />
        {winnerSymbol && (
          <div className="my-4">
            <GameSymbol symbol={winnerSymbol} />
          </div>
        )}
        <UiModal
          width="md"
          isOpen={winnerSymbol}
          onClose={() => console.log('close')}
        >
          <UiModal.Header>Игра завершена!</UiModal.Header>
          <UiModal.Body>
            <div className="text-xl">
              Победитель: <span className="text-teal-600">Jonaskakar</span>
            </div>
          </UiModal.Body>
          <UiModal.Footer>
            <UiButton variant="outline" size="md">
              Вернуться
            </UiButton>
            <UiButton variant="primary" size="md">
              Играть снова
            </UiButton>
          </UiModal.Footer>
        </UiModal>
        <GameField
          className="mt-6"
          cells={cells}
          currentMove={currentMove}
          nextMove={nextMove}
          handleCellClick={handleCellClick}
          winnerSequence={winnerSequence}
          winnerSymbol={winnerSymbol}
        />
      </main>
    </div>
  );
}
