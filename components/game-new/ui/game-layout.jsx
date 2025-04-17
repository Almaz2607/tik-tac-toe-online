export function GameLayout({
  backLink,
  title,
  gameInfo,
  playerList,
  gameMoveInfo,
  actions,
  gameCells,
}) {
  return (
    <div className="pb-10">
      <div className="pl-2">
        {backLink}
        {title}
        {gameInfo}
      </div>
      <div className="mt-4 grid grid-cols-2 justify-between bg-white rounded-2xl shadow-md px-8 py-4">
        {playerList}
      </div>
      <div className="bg-white shadow-md rounded-2xl px-8 pt-5 pb-7 mt-6">
        <div className="flex items-center gap-3">
          <div className="mr-auto">{gameMoveInfo}</div>
          {actions}
        </div>
        <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3">
          {gameCells}
        </div>
      </div>
    </div>
  );
}
