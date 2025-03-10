import { useState } from "react";
import { GameInfo } from "../components/game";
import { GameField } from "../components/game";
import { GameTitle } from "../components/game";
import Header from "../components/header/header";
import { useGameState } from "../components/game/use-game-state";

export default function HomePage() {
  const [playersCount] = useState(4);
   const { cells, currentMove, handleCellClick, nextMove } = useGameState(playersCount);
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount}/>
        <GameInfo playersCount={playersCount} className="mt-4" currentMove={currentMove}/>
        <GameField className="mt-6" cells={cells} currentMove={currentMove} nextMove={nextMove} handleCellClick={handleCellClick}/>
      </main>
    </div>
  );
}
