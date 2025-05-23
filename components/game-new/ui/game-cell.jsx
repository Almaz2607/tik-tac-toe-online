import clsx from 'clsx';
import { GameSymbol } from './game-symbol';
import { memo } from 'react';

export const GameCell = memo(function GameCell({
  onClick,
  isWinner,
  disabled,
  symbol,
  index,
}) {
  return (
    <button
      className={clsx(
        'flex items-center justify-center border border-slate-200 -ml-px -mt-px',
        isWinner && 'bg-orange-600/10',
      )}
      onClick={() => onClick(index)}
      disabled={disabled}
    >
      {symbol && <GameSymbol symbol={symbol} className="w-5 h-5" />}
    </button>
  );
});
