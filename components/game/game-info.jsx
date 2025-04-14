import clsx from 'clsx';
import { Profile } from '../profile/profile';
import { GameSymbol } from './game-symbol';
import { GAME_SYMBOLS } from './constants';
import avatarSrc1 from './images/avatar-1.png';
import avatarSrc2 from './images/avatar-2.png';
import avatarSrc3 from './images/avatar-3.png';
import avatarSrc4 from './images/avatar-4.png';

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

export function GameInfo({ className, playersCount }) {
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
        />
      ))}
    </div>
  );
}

function PlayerInfo({ playerInfo, isRight }) {
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
          'text-lg font-semibold text-slate-900',
          isRight && 'order-1',
        )}
      >
        01:08
      </p>
    </div>
  );
}
