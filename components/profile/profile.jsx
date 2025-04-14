import Image from 'next/image';
import clsx from 'clsx';

export function Profile({ className, name, raiting, avatar }) {
  return (
    <div className={clsx('flex items-center text-teal-600 gap-2', className)}>
      <Image src={avatar} alt="avatar1" className="w-12 h-auto rounded-full" />
      <div className="overflow-hidden">
        <p className="text-lg leading-tight truncate">{name}</p>
        <p className="text-xs text-slate-400 leading-tight">
          Рейтинг: {raiting}
        </p>
      </div>
    </div>
  );
}
