import { GameSymbol } from './game-symbol';
import styles from './game.module.css';

export function GameCell({ symbol, isWinner, onClick }) {
  return (
    <button
      className={`${styles['cell']} ${isWinner ? styles['cell--win'] : ''}`}
      onClick={onClick}
    >
      <GameSymbol symbol={symbol} />
    </button>
  );
}
