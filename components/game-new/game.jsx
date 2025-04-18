import { useCallback, useMemo, useReducer } from 'react';
import { PLAYERS } from './constants';
import { BackLink } from './ui/back-link';
import { GameInfo } from './ui/game-info';
import { GameLayout } from './ui/game-layout';
import { GameTitle } from './ui/game-title';
import { PlayerInfo } from './ui/player-info';
import { GameMoveInfo } from './ui/game-move-info';
import { GameCell } from './ui/game-cell';
import { GAME_STATE_ACTIONS } from './model/game-state-reducer';
import { GameOverModal } from './ui/game-over-modal';
import { gameStateReducer, initGameState } from './model/game-state-reducer';
import { computeWinner } from './model/compute-winner';
import { getNextMove } from './model/get-next-move';
import { computeWinnerSymbol } from './model/compute-winner-symbol';
import { computePlayerTimer } from './model/compute-player-timer';
import { useInterval } from '../lib/timers';

const PLAYERS_COUNT = 2;

export function Game() {
  const [gameState, dispatch] = useReducer(
    gameStateReducer,
    {
      playersCount: PLAYERS_COUNT,
      defaultTimer: 5000,
      currentMoveStart: Date.now(),
    },
    initGameState,
  );

  console.log(gameState);

  const { cells, currentMove } = gameState;

  useInterval(
    1000,
    !!gameState.currentMoveStart,
    useCallback(() => {
      dispatch({ type: GAME_STATE_ACTIONS.TICK, now: Date.now() });
    }, []),
  );

  const winnerSequence = useMemo(() => computeWinner(gameState), [gameState]);
  const nextMove = getNextMove(gameState);
  const winnerSymbol = computeWinnerSymbol(gameState, {
    winnerSequence,
    nextMove,
  });

  const winnerPlayer = PLAYERS.find((player) => player.symbol === winnerSymbol);
  console.log(winnerPlayer);

  const handleCellClick = useCallback((index) => {
    dispatch({
      type: GAME_STATE_ACTIONS.CELL_CLICK,
      index,
      now: Date.now(),
    });
  }, []);

  return (
    <>
      <GameLayout
        backLink={<BackLink />}
        title={<GameTitle />}
        gameInfo={
          <GameInfo isRatingGame playersCount={2} timeMode={'1 мин. на ход'} />
        }
        playerList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => {
          const { timer, timerStartAt } = computePlayerTimer(
            gameState,
            player.symbol,
          );
          return (
            <PlayerInfo
              key={player.id}
              isRight={index % 2 === 1}
              avatar={player.avatar}
              name={player.name}
              timer={timer}
              timerStartAt={timerStartAt}
              rating={player.rating}
              symbol={player.symbol}
            />
          );
        })}
        gameMoveInfo={
          <GameMoveInfo currentMove={currentMove} nextMove={nextMove} />
        }
        gameCells={cells.map((cell, index) => (
          <GameCell
            key={index}
            index={index}
            isWinner={winnerSequence?.includes(index)}
            disabled={!!winnerSymbol}
            onClick={handleCellClick}
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
            timer={gameState.timers[player.symbol]}
            symbol={player.symbol}
          />
        ))}
      />
    </>
  );
}
