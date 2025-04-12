import { GameInfo, GameTitle } from '../components/game';
import { Header } from '../components/header';

export default function HomePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="max-w-[616px] mx-auto pt-6">
        <GameTitle />
        <GameInfo className="mt-4" />
      </main>
    </div>
  );
}
