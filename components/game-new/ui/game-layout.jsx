export function GameLayout({ backLink, title, gameInfo, playerList }) {
  return (
    <div>
      <div className="pl-2">
        {backLink}
        {title}
        {gameInfo}
      </div>
      <div className="mt-4 grid grid-cols-2 justify-between bg-white rounded-2xl shadow-md px-8 py-4">
        {playerList}
      </div>
    </div>
  );
}
