import Image from 'next/image';
import { GameSymbol } from './game-symbol';
import clsx from 'clsx';

export function PlayerInfo({
  isRight,
  avatar,
  name,
  rating,
  symbol,
  isTimerRunning,
  seconds,
}) {
  const minutesString = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secondsString = String(seconds % 60).padStart(2, '0');

  const isDanger = seconds < 10;

  const getTimerColor = () => {
    if (isTimerRunning) {
      return isDanger ? 'text-orange-600' : 'text-slate-900';
    }
    return 'text-slate-200';
  };

  return (
    <div className=" flex items-center gap-3">
      <div className={clsx('relative', isRight && 'order-3')}>
        <div className="w-44 flex items-center text-teal-600 gap-2">
          <Image src={avatar} alt="avatar" width={48} height={48} unoptimized />
          <div className="overflow-hidden">
            <p className="text-lg leading-tight truncate">{name}</p>
            <p className="text-xs text-slate-400 leading-tight">
              Рейтинг: {rating}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1">
          <GameSymbol symbol={symbol} />
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
