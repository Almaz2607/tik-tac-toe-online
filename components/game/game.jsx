import { GameCell } from './game-cell';
import { GameInfo } from './game-info';
import { useGameState } from './use-game-state';
import styles from './game.module.css';
import { ResetButton } from './reset-button';

export function Game() {
  const {
    cells,
    currentStep,
    winnerSymbol,
    isDraw,
    getWinnerCell,
    toggleCell,
    resetGame,
  } = useGameState();

  return (
    <div className="flex flex-col items-center w-40 mx-auto my-24 p-5 border border-black">
      <GameInfo
        isDraw={isDraw}
        winnerSymbol={winnerSymbol}
        currentStep={currentStep}
      />
      <div className="grid pt-px pl-px grid-cols-[repeat(3,_30px)] grid-rows-[repeat(3,_30px)]">
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            symbol={symbol}
            isWinner={getWinnerCell(index)}
            onClick={() => toggleCell(index)}
          />
        ))}
      </div>
     <ResetButton onClick={resetGame} />
    </div>
  );
}
