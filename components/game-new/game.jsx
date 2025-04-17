import { PLAYERS } from './constants';
import { BackLink } from './ui/back-link';
import { GameInfo } from './ui/game-info';
import { GameLayout } from './ui/game-layout';
import { GameTitle } from './ui/game-title';
import { PlayerInfo } from './ui/player-info';
import { GameMoveInfo } from './ui/game-move-info';
import { GameCell } from './ui/game-cell';
import { UseGameState } from './model/use-game-state';
import { GameOverModal } from './ui/game-over-modal';

const PLAYERS_COUNT = 4;

export function Game() {
  const {
    cells,
    currentMove,
    nextMove,
    winnerSequence,
    winnerSymbol,
    handleCellClick,
  } = UseGameState(PLAYERS_COUNT);

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
            onClick={() => handleCellClick(index)}
            isWinner={winnerSequence?.includes(index)}
            disabled={!!winnerSymbol}
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
