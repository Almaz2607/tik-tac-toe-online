export function Header() {
  return (
    <header className="flex items-center h-24 px-8 bg-white shadow-lg">
      <div className="flex items-center bg-transparent">
        <span className="text-4xl text-red-700">X</span>
        <div className="inline w-[3px] h-10 mx-1 bg-black"></div>
        <span className="first-letter:text-4xl first-letter:text-teal-600 text-[24px] leading-5 font-normal">
          Online
        </span>
      </div>
      <div className="w-px h-8 bg-slate-200 mx-6"></div>
      <button className="w-44 bg-teal-600 text-2xl hover:bg-teal-500 transition-colors text-white leading-tight rounded-lg px-5 py-2">
        Играть
      </button>
      <div className="flex items-center text-teal-600 hover:text-teal-500 transition-colors ml-auto gap-2">
        <div className="w-12 h-12 rounded-full bg-gray-500"></div>
        <div>
          <p className="text-lg leading-tight">Kubakaevalm</p>
          <p className="text-xs text-slate-400 leading-tight">Рейтинг: 1230</p>
        </div>
        <svg
          width="12"
          height="6"
          viewBox="0 0 12 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.8772 0.115942C11.7118 -0.0386473 11.4431 -0.0386473 11.2777 0.115942L6.0058 5.05314L0.72359 0.115942C0.558198 -0.0386473 0.289436 -0.0386473 0.124044 0.115942C-0.041348 0.270531 -0.041348 0.521739 0.124044 0.676329L5.69569 5.88406C5.77839 5.96135 5.88176 6 5.99546 6C6.09883 6 6.21254 5.96135 6.29524 5.88406L11.8669 0.676329C12.0426 0.521739 12.0426 0.270531 11.8772 0.115942Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </header>
  );
}
