import { GameSymbol } from './game-symbol';

export function GameInfo({ isDraw, winnerSymbol, currentStep }) {
  if (isDraw) {
    return <div className='mb-2.5'>Draw</div>;
  }

  if (winnerSymbol) {
    return (
      <div className='mb-2.5'>
        Winner: <GameSymbol symbol={winnerSymbol} />
      </div>
    );
  }

  return (
    <div className='mb-2.5'>
      Step: <GameSymbol symbol={currentStep} />
    </div>
  );
}
