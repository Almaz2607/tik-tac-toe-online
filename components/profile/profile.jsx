import clsx from 'clsx';

export function Profile({ className }) {
  return (
    <div className={clsx('flex items-center text-teal-600 gap-2', className)}>
      <div className="w-12 h-12 rounded-full bg-gray-500"></div>
      <div>
        <p className="text-lg leading-tight">Kubakaevalm</p>
        <p className="text-xs text-slate-400 leading-tight">Рейтинг: 1230</p>
      </div>
    </div>
  );
}
