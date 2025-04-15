import { useState } from 'react';
import { GAME_SYMBOLS } from './constants';
import { computeWinner, getNextMove } from './model';

export function UseGameState(playersCount) {
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
  }));

  const winnerSequence = computeWinner(cells);
  const nextMove = getNextMove(currentMove, playersCount);

  function handleCellClick(index) {
    setGameState((lastGameState) => {
      if (lastGameState.cells[index]) return lastGameState;

      return {
        ...lastGameState,
        cells: lastGameState.cells.map((cell, i) =>
          i === index ? lastGameState.currentMove : cell,
        ),
        currentMove: getNextMove(lastGameState.currentMove, playersCount),
      };
    });
  }

  return { cells, currentMove, nextMove, handleCellClick, winnerSequence };
}
