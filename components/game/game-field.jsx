import clsx from 'clsx';
import { CircleOutlineIcon } from './icons/circle-outline-icon';
import { CrossIcon } from './icons/cross-icon';
import { UiButton } from '../uikit/ui-button';

const cells = new Array(19 * 19).fill(null);

export function GameField({ className }) {
  return (
    <div
      className={clsx(
        className,
        'bg-white shadow-md rounded-2xl px-8 pt-5 pb-7',
      )}
    >
      <div className="flex items-center gap-3">
        <div className="mr-auto">
          <div className="flex items-center gap-1 text-xl leading-tight font-semibold">
            Ход: <CircleOutlineIcon className="w-5 h-5" />
          </div>
          <div className="flex items-center gap-1 text-xs leading-tight text-slate-400">
            Следующий: <CrossIcon />
          </div>
        </div>

        <UiButton variant="primary" size="md">
          Ничья
        </UiButton>
        <UiButton variant="outline" size="md">
          Сдаться
        </UiButton>
      </div>

      <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3">
        {cells.map((_, i) => (
          <button
            key={i}
            className="flex items-center justify-center border border-slate-200 -ml-px -mt-px "
          >
            <CircleOutlineIcon className="w-5 h-5" />
          </button>
        ))}
      </div>
    </div>
  );
}
