import clsx from 'clsx';
import { GameSymbol } from './game-symbol';

export function GameCell({ onClick, isWinner, disabled, symbol }) {
  return (
    <button
      className={clsx(
        'flex items-center justify-center border border-slate-200 -ml-px -mt-px',
        isWinner && 'bg-orange-600/10',
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {symbol && <GameSymbol symbol={symbol} className="w-5 h-5" />}
    </button>
  );
}
