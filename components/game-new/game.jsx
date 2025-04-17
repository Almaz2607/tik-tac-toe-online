import { PLAYERS } from './constants';
import { BackLink } from './ui/back-link';
import { GameInfo } from './ui/game-info';
import { GameLayout } from './ui/game-layout';
import { GameTitle } from './ui/game-title';
import { PlayerInfo } from './ui/player-info';
import { GameMoveInfo } from './ui/game-move-info';
import { GameCell } from './ui/game-cell';
import { GAME_STATE_ACTIONS } from './model/use-game-state';
import { GameOverModal } from './ui/game-over-modal';
import { useReducer } from 'react';
import { gameStateReducer, initGameState } from './model/game-state-reducer';
import { computeWinner } from './model/compute-winner';
import { getNextMove } from './model/get-next-move';

const PLAYERS_COUNT = 2;

export function Game() {
  const [gameState, dispatch] = useReducer(
    gameStateReducer,
    { playersCount: PLAYERS_COUNT },
    initGameState,
  );
  const { cells, currentMove } = gameState;

  const winnerSequence = computeWinner(gameState);
  const nextMove = getNextMove(gameState);
  const winnerSymbol = computeWinner(gameState, { winnerSequence, nextMove });

  const winnerPlayer = PLAYERS.find((player) => player.symbol === winnerSymbol);

  return (
    <>
      <GameLayout
        backLink={<BackLink />}
        title={<GameTitle />}
        gameInfo={
          <GameInfo isRatingGame playersCount={4} timeMode={'1 мин. на ход'} />
        }
        playerList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
          <PlayerInfo
            key={player.id}
            isRight={index % 2 === 1}
            avatar={player.avatar}
            name={player.name}
            rating={player.rating}
            seconds={60}
            symbol={player.symbol}
          />
        ))}
        gameMoveInfo={
          <GameMoveInfo currentMove={currentMove} nextMove={nextMove} />
        }
        gameCells={cells.map((cell, index) => (
          <GameCell
            key={index}
            isWinner={winnerSequence?.includes(index)}
            disabled={!!winnerSymbol}
            onClick={() =>
              dispatch({ type: GAME_STATE_ACTIONS.CELL_CLICK, index })
            }
            symbol={cell}
          />
        ))}
      />
      <GameOverModal
        winnerName={winnerPlayer?.name}
        players={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
          <PlayerInfo
            key={player.id}
            isRight={index % 2 === 1}
            avatar={player.avatar}
            name={player.name}
            rating={player.rating}
            seconds={60}
            symbol={player.symbol}
          />
        ))}
      />
    </>
  );
}
