import clsx from 'clsx';
import { Profile } from '../profile/profile';
import { GameSymbol } from './game-symbol';
import { GAME_SYMBOLS } from './constants';
import avatarSrc1 from './images/avatar-1.png';
import avatarSrc2 from './images/avatar-2.png';
import avatarSrc3 from './images/avatar-3.png';
import avatarSrc4 from './images/avatar-4.png';
import { useEffect, useState } from 'react';

const players = [
  {
    id: 1,
    name: 'Jonaskakar',
    raiting: '1230',
    avatar: avatarSrc1,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    id: 2,
    name: 'Kellysikkenblomberg',
    raiting: '759',
    avatar: avatarSrc2,
    symbol: GAME_SYMBOLS.ZERO,
  },
  {
    id: 3,
    name: 'Christianbye',
    raiting: '950',
    avatar: avatarSrc3,
    symbol: GAME_SYMBOLS.TRIANGLE,
  },
  {
    id: 4,
    name: 'Lianabogan',
    raiting: '1031',
    avatar: avatarSrc4,
    symbol: GAME_SYMBOLS.SQUARE,
  },
];

export function GameInfo({
  className,
  playersCount,
  currentMove,
  isWinner,
  onPlayerTimeOver,
}) {
  return (
    <div
      className={clsx(
        className,
        'grid grid-cols-2 justify-between bg-white rounded-2xl shadow-md px-8 py-4',
      )}
    >
      {players.slice(0, playersCount).map((player, index) => (
        <PlayerInfo
          key={player.id}
          playerInfo={player}
          isRight={index % 2 === 1}
          isTimerRunning={currentMove === player.symbol && !isWinner}
          onTimeOver={() => onPlayerTimeOver(player.symbol)}
        />
      ))}
    </div>
  );
}

function PlayerInfo({ playerInfo, isRight, isTimerRunning, onTimeOver }) {
  const [seconds, setSeconds] = useState(6);

  const minutesString = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secondsString = String(seconds % 60).padStart(2, '0');

  const isDanger = seconds < 10;

  useEffect(() => {
    if (isTimerRunning) {
      const interval = setInterval(() => {
        setSeconds((s) => Math.max(s - 1, 0));
      }, 1000);

      return () => {
        clearInterval(interval);
        setSeconds(6);
      };
    }
  }, [isTimerRunning]);

  useEffect(() => {
    if (seconds === 0) {
      onTimeOver();
    }
  }, [seconds]);

  const getTimerColor = () => {
    if (isTimerRunning) {
      return isDanger ? 'text-orange-600' : 'text-slate-900';
    }
    return 'text-slate-200';
  };

  return (
    <div className="flex items-center gap-3">
      <div className={clsx('relative', isRight && 'order-3')}>
        <Profile
          className="w-44"
          name={playerInfo.name}
          raiting={playerInfo.raiting}
          avatar={playerInfo.avatar}
        />
        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1">
          <GameSymbol symbol={playerInfo.symbol} />
        </div>
      </div>
      <div className={clsx('h-6 w-px bg-slate-200', isRight && 'order-2')} />
      <p
        className={clsx(
          'w-[60px] text-lg font-semibold ',
          isRight && 'order-1',
          getTimerColor(),
        )}
      >
        {minutesString}:{secondsString}
      </p>
    </div>
  );
}
