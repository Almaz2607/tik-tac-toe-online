import { Profile } from '../profile/profile';
import { UiButton } from '../uikit/ui-button';
import { ArrowDownIcon } from './icons/arrow-down-icon';
import avatar1 from '../game/images/avatar-1.png';

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
      <UiButton className="w-44" variant="primary" size="lg">
        Играть
      </UiButton>
      <button className="flex items-center text-teal-600 ml-auto gap-2">
        <Profile avatar={avatar1} name="Jonaskakar" raiting="1230" />
        <ArrowDownIcon />
      </button>
    </header>
  );
}
