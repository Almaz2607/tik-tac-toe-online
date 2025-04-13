import { GameField, GameInfo, GameTitle } from '../components/game';
import { Header } from '../components/header';

export default function HomePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="w-max mx-auto pt-6">
        <GameTitle />
        <GameInfo className="mt-4" />
        <GameField className="mt-6" />
      </main>
    </div>
  );
}
