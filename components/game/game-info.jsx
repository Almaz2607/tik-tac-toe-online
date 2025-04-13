import clsx from 'clsx';
import { Profile } from '../profile/profile';
import { TriangleIcon } from './icons/triangle-icon';
import { SquareIcon } from './icons/square-icon';
import { CrossIcon } from './icons/cross-icon';
import { CircleOutlineIcon } from './icons/zero-icon';

export function GameInfo({ className }) {
  return (
    <div
      className={clsx(
        className,
        'flex justify-between bg-white rounded-2xl shadow-md px-8 py-4',
      )}
    >
      <div className="flex items-center gap-3">
        <div className="relative">
          <Profile className="w-44" />
          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1">
            <CrossIcon />
          </div>
        </div>
        <div className="h-6 w-px bg-slate-200" />
        <p className="text-lg font-semibold text-slate-900">01:08</p>
      </div>

      <div className="flex items-center gap-3">
        <p className="text-lg font-semibold text-orange-600">00:08</p>
        <div className="h-6 w-px bg-slate-200" />
        <div className="relative">
          <Profile className="w-44" />
          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1">
            <CrossIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
